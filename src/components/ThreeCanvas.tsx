import React, { useEffect, useRef, useState } from "react";
import * as THREE from "three";

export default function ThreeCanvas() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [webglError, setWebglError] = useState(false);

  useEffect(() => {
    if (!containerRef.current) return;

    let width = containerRef.current.clientWidth;
    let height = containerRef.current.clientHeight;

    // Create scene, camera, renderer with anti-aliasing and alpha support
    const scene = new THREE.Scene();
    scene.fog = new THREE.FogExp2(0x050816, 0.015);

    const camera = new THREE.PerspectiveCamera(60, width / height, 0.1, 100);
    camera.position.z = 28;

    let renderer: THREE.WebGLRenderer;
    try {
      renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
      renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
      renderer.setSize(width, height);
      renderer.setClearColor(0x050816, 0); // Transparent background to blend with our page CSS
      containerRef.current.appendChild(renderer.domElement);
    } catch {
      setWebglError(true);
      return;
    }

    // Geometry parameters for 3D AI Neural Nodes
    const particleCount = 100;
    const positions = new Float32Array(particleCount * 3);
    const velocities: { x: number; y: number; z: number }[] = [];
    const colors = new Float32Array(particleCount * 3);

    // Color definitions based on our palette (Indigo to Cyan)
    const colorIndigo = new THREE.Color("#4F46E5");
    const colorCyan = new THREE.Color("#06B6D4");
    const colorPurple = new THREE.Color("#8B5CF6");

    for (let i = 0; i < particleCount; i++) {
      // Distribute in a beautiful sphere/ellipse mesh network
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(Math.random() * 2 - 1);
      const radius = 10 + Math.random() * 8;

      const x = radius * Math.sin(phi) * Math.cos(theta);
      const y = radius * Math.sin(phi) * Math.sin(theta);
      const z = (Math.random() * 2 - 1) * 12;

      positions[i * 3] = x;
      positions[i * 3 + 1] = y;
      positions[i * 3 + 2] = z;

      // Gentle movement speed
      velocities.push({
        x: (Math.random() - 0.5) * 0.03,
        y: (Math.random() - 0.5) * 0.03,
        z: (Math.random() - 0.5) * 0.015,
      });

      // Gradient color mapping
      const mixRatio = Math.random();
      let selectedColor = colorIndigo.clone().lerp(colorCyan, mixRatio);
      if (Math.random() > 0.8) {
        selectedColor = colorPurple;
      }

      colors[i * 3] = selectedColor.r;
      colors[i * 3 + 1] = selectedColor.g;
      colors[i * 3 + 2] = selectedColor.b;
    }

    const particleGeometry = new THREE.BufferGeometry();
    particleGeometry.setAttribute("position", new THREE.BufferAttribute(positions, 3));
    particleGeometry.setAttribute("color", new THREE.BufferAttribute(colors, 3));

    // Custom Canvas Texture for Rounded Glowing Particles
    const canvas = document.createElement("canvas");
    canvas.width = 16;
    canvas.height = 16;
    const ctx = canvas.getContext("2d");
    if (ctx) {
      const gradient = ctx.createRadialGradient(8, 8, 0, 8, 8, 8);
      gradient.addColorStop(0, "rgba(255, 255, 255, 1)");
      gradient.addColorStop(0.3, "rgba(106, 90, 244, 0.8)");
      gradient.addColorStop(1, "rgba(0, 0, 0, 0)");
      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, 16, 16);
    }
    const particleTexture = new THREE.CanvasTexture(canvas);

    // Particle Point Material
    const pointsMaterial = new THREE.PointsMaterial({
      size: 1.2,
      map: particleTexture,
      transparent: true,
      blending: THREE.AdditiveBlending,
      depthWrite: false,
      vertexColors: true,
    });

    const pointCloud = new THREE.Points(particleGeometry, pointsMaterial);
    scene.add(pointCloud);

    // Dynamic Connections (Conduits between Nodes)
    const maxLinkDistance = 8;
    const lineMaterial = new THREE.LineBasicMaterial({
      color: 0x4f46e5,
      transparent: true,
      opacity: 0.15,
      depthWrite: false,
      blending: THREE.AdditiveBlending,
    });

    // We'll create dynamic connection geometry and lines
    let lineGeometry = new THREE.BufferGeometry();
    const linePositions = new Float32Array(particleCount * particleCount * 6);
    const lineColors = new Float32Array(particleCount * particleCount * 6);

    lineGeometry.setAttribute("position", new THREE.BufferAttribute(linePositions, 3));
    lineGeometry.setAttribute("color", new THREE.BufferAttribute(lineColors, 3));

    const lineMesh = new THREE.LineSegments(lineGeometry, new THREE.LineBasicMaterial({
      vertexColors: true,
      transparent: true,
      opacity: 0.25,
      blending: THREE.AdditiveBlending,
    }));
    scene.add(lineMesh);

    // Mouse Tracking for dynamic interactions
    const mouse = { x: 0, y: 0, targetX: 0, targetY: 0 };

    const handleMouseMove = (event: MouseEvent) => {
      // Normalize mouse coordinates (-1 to 1)
      const rect = containerRef.current?.getBoundingClientRect();
      if (rect) {
        mouse.targetX = ((event.clientX - rect.left) / rect.width) * 2 - 1;
        mouse.targetY = -((event.clientY - rect.top) / rect.height) * 2 + 1;
      }
    };

    window.addEventListener("mousemove", handleMouseMove);

    // Animating Orbit/Vortex Speed
    let frameId: number;
    let rotationTime = 0;

    const animate = () => {
      frameId = requestAnimationFrame(animate);

      rotationTime += 0.001;

      // Interpolate mouse coordinates for fluid, lagging responsive movement
      mouse.x += (mouse.targetX - mouse.x) * 0.05;
      mouse.y += (mouse.targetY - mouse.y) * 0.05;

      // Camera gently pivots based on mouse tracking
      camera.position.x += (mouse.x * 8 - camera.position.x) * 0.05;
      camera.position.y += (mouse.y * 8 - camera.position.y) * 0.05;
      camera.lookAt(0, 0, 0);

      // Rotate neural cloud gently
      pointCloud.rotation.y = rotationTime * 0.5;
      pointCloud.rotation.x = rotationTime * 0.2;
      lineMesh.rotation.y = rotationTime * 0.5;
      lineMesh.rotation.x = rotationTime * 0.2;

      // Update particle position coords and apply boundary bouncing
      const posAttr = particleGeometry.attributes.position as THREE.BufferAttribute;
      const count = posAttr.count;

      for (let i = 0; i < count; i++) {
        let x = posAttr.getX(i);
        let y = posAttr.getY(i);
        let z = posAttr.getZ(i);

        // Apply velocities
        x += velocities[i].x;
        y += velocities[i].y;
        z += velocities[i].z;

        // Interactive mouse gravity effect in 3D
        // Raycast-like approximation: if near mouse pointer projection coordinates, pull slightly
        const targetPoint = new THREE.Vector3(mouse.x * 12, mouse.y * 12, 0);
        const currentPoint = new THREE.Vector3(x, y, z);
        const distToMouse = currentPoint.distanceTo(targetPoint);

        if (distToMouse < 8) {
          // Attract nodes to the mouse vector slightly
          const pull = (8 - distToMouse) * 0.0004;
          x += (targetPoint.x - x) * pull;
          y += (targetPoint.y - y) * pull;
        }

        // Keep them within spherical bounds of 20 units
        const currentRadius = Math.sqrt(x * x + y * y + z * z);
        if (currentRadius > 22) {
          velocities[i].x *= -1;
          velocities[i].y *= -1;
          velocities[i].z *= -1;
        }

        posAttr.setXYZ(i, x, y, z);
      }
      posAttr.needsUpdate = true;

      // Re-calculate interconnected neural Lines on every frame (proximity lines)
      let lineCount = 0;
      const linePositionsArr = lineMesh.geometry.attributes.position.array as Float32Array;
      const lineColorsArr = lineMesh.geometry.attributes.color.array as Float32Array;

      for (let i = 0; i < count; i++) {
        const xA = posAttr.getX(i);
        const yA = posAttr.getY(i);
        const zA = posAttr.getZ(i);

        for (let j = i + 1; j < count; j++) {
          const xB = posAttr.getX(j);
          const yB = posAttr.getY(j);
          const zB = posAttr.getZ(j);

          const dx = xA - xB;
          const dy = yA - yB;
          const dz = zA - zB;
          const distSq = dx * dx + dy * dy + dz * dz;

          if (distSq < maxLinkDistance * maxLinkDistance) {
            const distance = Math.sqrt(distSq);
            // Opacity fade based on proximity
            const linkAlpha = 1.0 - distance / maxLinkDistance;

            const idx = lineCount * 6;

            // Connect Point A
            linePositionsArr[idx] = xA;
            linePositionsArr[idx + 1] = yA;
            linePositionsArr[idx + 2] = zA;

            // Connect Point B
            linePositionsArr[idx + 3] = xB;
            linePositionsArr[idx + 4] = yB;
            linePositionsArr[idx + 5] = zB;

            // Assign subtle gradient values to lines
            const colIdx = lineCount * 6;
            const rA = colors[i * 3];
            const gA = colors[i * 3 + 1];
            const bA = colors[i * 3 + 2];
            const rB = colors[j * 3];
            const gB = colors[j * 3 + 1];
            const bB = colors[j * 3 + 2];

            // Lerp with opacity values
            lineColorsArr[colIdx] = rA * linkAlpha * 0.4;
            lineColorsArr[colIdx + 1] = gA * linkAlpha * 0.4;
            lineColorsArr[colIdx + 2] = bA * linkAlpha * 0.4;

            lineColorsArr[colIdx + 3] = rB * linkAlpha * 0.4;
            lineColorsArr[colIdx + 4] = gB * linkAlpha * 0.4;
            lineColorsArr[colIdx + 5] = bB * linkAlpha * 0.4;

            lineCount++;
          }
        }
      }

      lineMesh.geometry.setDrawRange(0, lineCount * 2);
      lineMesh.geometry.attributes.position.needsUpdate = true;
      lineMesh.geometry.attributes.color.needsUpdate = true;

      renderer.render(scene, camera);
    };

    animate();

    // Use ResizeObserver for responsive window adjustment
    const resizeObserver = new ResizeObserver((entries) => {
      if (!entries || entries.length === 0) return;
      const entry = entries[0];
      const { width: newW, height: newH } = entry.contentRect;

      if (newW > 0 && newH > 0) {
        camera.aspect = newW / newH;
        camera.updateProjectionMatrix();
        renderer.setSize(newW, newH);
      }
    });

    resizeObserver.observe(containerRef.current);

    // Clean up connections on unmount to prevent GPU webgl context locks
    return () => {
      cancelAnimationFrame(frameId);
      window.removeEventListener("mousemove", handleMouseMove);
      resizeObserver.disconnect();

      // Dispose buffer geometries and materials to avoid memory leaks
      particleGeometry.dispose();
      pointsMaterial.dispose();
      lineGeometry.dispose();
      lineMaterial.dispose();
      particleTexture.dispose();

      if (containerRef.current && renderer.domElement) {
        containerRef.current.removeChild(renderer.domElement);
      }
      renderer.dispose();
    };
  }, []);

  if (webglError) {
    // Beautiful pure CSS animated mesh fallback if hardware Acceleration/WebGL is disabled in iframe
    return (
      <div className="absolute inset-0 bg-[#050816] flex items-center justify-center overflow-hidden z-0">
        <div className="absolute top-[20%] left-[15%] w-96 h-96 rounded-full bg-indigo-700/10 blur-3xl animate-pulse duration-1000" />
        <div className="absolute bottom-[30%] right-[10%] w-[32rem] h-[32rem] rounded-full bg-cyan-700/10 blur-3xl animate-ping duration-1000" />
        <div className="absolute top-[40%] right-[30%] w-72 h-72 rounded-full bg-purple-700/5 blur-2xl" />
        {/* Animated grid lines pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:32px_32px]"></div>
      </div>
    );
  }

  return (
    <div
      ref={containerRef}
      id="three-canvas-container"
      className="absolute inset-0 w-full h-full bg-[#050816] -z-10 pointer-events-none"
    />
  );
}
