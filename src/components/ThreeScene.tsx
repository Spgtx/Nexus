import React, { useRef, useEffect } from 'react';
import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';

interface ThreeSceneProps {
  className?: string;
  enableMouseInteraction?: boolean;
  enableScrollRotation?: boolean;
  autoRotate?: boolean;
  modelColor?: string;
  lightIntensity?: number;
  modelPath?: string;
  scale?: number;
}

const ThreeScene: React.FC<ThreeSceneProps> = ({
  className = '',
  enableMouseInteraction = true,
  enableScrollRotation = false,
  autoRotate = false,
  modelColor = '#ffffff',
  lightIntensity = 1,
  modelPath,
  scale,
}) => {
  const mountRef = useRef<HTMLDivElement>(null);
  const sceneRef = useRef<{
    scene: THREE.Scene;
    camera: THREE.PerspectiveCamera;
    renderer: THREE.WebGLRenderer;
    shoe: THREE.Object3D;
    animationId: number | null;
  } | null>(null);

  useEffect(() => {
    if (!mountRef.current) return;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, 1, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({
      antialias: true,
      alpha: true,
      powerPreference: 'high-performance',
    });

    renderer.setSize(600, 600);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.shadowMap.enabled = true;
    renderer.shadowMap.type = THREE.PCFSoftShadowMap;
    renderer.outputColorSpace = THREE.SRGBColorSpace;

    mountRef.current.appendChild(renderer.domElement);

    const shoeGroup = new THREE.Group();

    if (modelPath) {
      const loader = new GLTFLoader();
      loader.load(
        modelPath,
        (gltf) => {
          gltf.scene.traverse((child) => {
            if ((child as THREE.Mesh).isMesh) {
              child.castShadow = true;
              child.receiveShadow = true;
            }
          });
          const s = scale ?? 2
          gltf.scene.scale.set(s, s, s);
          shoeGroup.add(gltf.scene);
        },
        undefined,
        (error) => {
          console.error('Error loading shoe model:', error);
        }
      );
    } else {
      const bodyGeometry = new THREE.CapsuleGeometry(0.8, 1.2, 4, 8);
      const bodyMaterial = new THREE.MeshPhysicalMaterial({
        color: modelColor,
        metalness: 0.1,
        roughness: 0.2,
        clearcoat: 0.8,
        clearcoatRoughness: 0.1,
      });
      const body = new THREE.Mesh(bodyGeometry, bodyMaterial);
      body.rotation.z = Math.PI / 6;
      body.position.y = 0.2;
      shoeGroup.add(body);

      const soleGeometry = new THREE.BoxGeometry(2, 0.3, 1);
      const soleMaterial = new THREE.MeshPhysicalMaterial({
        color: '#333333',
        metalness: 0.3,
        roughness: 0.4,
      });
      const sole = new THREE.Mesh(soleGeometry, soleMaterial);
      sole.position.y = -0.5;
      shoeGroup.add(sole);
    }

    scene.add(shoeGroup);

    const ambientLight = new THREE.AmbientLight(0xffffff, 0.6 * lightIntensity);
    scene.add(ambientLight);

    const directionalLight = new THREE.DirectionalLight(0xffffff, 0.8 * lightIntensity);
    directionalLight.position.set(5, 5, 5);
    directionalLight.castShadow = true;
    directionalLight.shadow.mapSize.width = 2048;
    directionalLight.shadow.mapSize.height = 2048;
    scene.add(directionalLight);

    const rimLight = new THREE.DirectionalLight(0x00ffd5, 0.3 * lightIntensity);
    rimLight.position.set(-5, 2, -5);
    scene.add(rimLight);

    const fillLight = new THREE.DirectionalLight(0xff6ec7, 0.2 * lightIntensity);
    fillLight.position.set(2, -2, 5);
    scene.add(fillLight);

    camera.position.set(3, 2, 3);
    camera.lookAt(0, 0, 0);

    sceneRef.current = {
      scene,
      camera,
      renderer,
      shoe: shoeGroup,
      animationId: null,
    };

    let mouseX = 0;
    let mouseY = 0;
    let targetRotationX = 0;
    let targetRotationY = 0;

    const handleMouseMove = (event: MouseEvent) => {
      if (!enableMouseInteraction || !mountRef.current) return;
      const rect = mountRef.current.getBoundingClientRect();
      mouseX = ((event.clientX - rect.left) / rect.width) * 2 - 1;
      mouseY = -((event.clientY - rect.top) / rect.height) * 2 + 1;
      targetRotationY = mouseX * 0.5;
      targetRotationX = mouseY * 0.3;
    };

    const handleMouseLeave = () => {
      targetRotationX = 0;
      targetRotationY = 0;
    };

    if (enableMouseInteraction && mountRef.current) {
      mountRef.current.addEventListener('mousemove', handleMouseMove);
      mountRef.current.addEventListener('mouseleave', handleMouseLeave);
    }

    const handleScroll = () => {
      if (!enableScrollRotation || !sceneRef.current) return;
      const scrollPercent =
        window.scrollY /
        (document.documentElement.scrollHeight - window.innerHeight);
      sceneRef.current.shoe.rotation.y = scrollPercent * Math.PI * 2;
    };

    if (enableScrollRotation) {
      window.addEventListener('scroll', handleScroll);
    }

    const animate = () => {
      if (!sceneRef.current) return;
      const { shoe, renderer, scene, camera } = sceneRef.current;

      if (enableMouseInteraction) {
        shoe.rotation.x += (targetRotationX - shoe.rotation.x) * 0.05;
        shoe.rotation.y += (targetRotationY - shoe.rotation.y) * 0.05;
      }

      if (autoRotate) {
        shoe.rotation.y += 0.005;
      }

      shoe.position.y = Math.sin(Date.now() * 0.001) * 0.1;

      renderer.render(scene, camera);
      sceneRef.current.animationId = requestAnimationFrame(animate);
    };

    animate();
    return () => {
      if (sceneRef.current) {
        if (sceneRef.current.animationId) {
          cancelAnimationFrame(sceneRef.current.animationId);
        }
        if (mountRef.current && renderer.domElement) {
          mountRef.current.removeChild(renderer.domElement);
        }
        renderer.dispose();
      }
      if (enableMouseInteraction && mountRef.current) {
        mountRef.current.removeEventListener('mousemove', handleMouseMove);
        mountRef.current.removeEventListener('mouseleave', handleMouseLeave);
      }
      if (enableScrollRotation) {
        window.removeEventListener('scroll', handleScroll);
      }
    };
  }, [enableMouseInteraction, enableScrollRotation, autoRotate, modelColor, lightIntensity, modelPath]);

  return (
    <div
      ref={mountRef}
      className={`relative ${className}`}
      style={{ width: '400px', height: '400px', pointerEvents: "none"  }}
    />
  );
};

export default ThreeScene;
