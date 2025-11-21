"use client";

import { useRef, useMemo } from "react";
import { useFrame } from "@react-three/fiber";
import { Image, RoundedBox } from "@react-three/drei";
import * as THREE from "three";

// All 51 portfolio images
const portfolioImages = [
    "/images/portfolio/IMG_1312.JPG",
    "/images/portfolio/IMG_1313.JPG",
    "/images/portfolio/IMG_1314.JPG",
    "/images/portfolio/IMG_1316.JPG",
    "/images/portfolio/IMG_1317.JPG",
    "/images/portfolio/IMG_1318.JPG",
    "/images/portfolio/IMG_1319.JPG",
    "/images/portfolio/IMG_1320.JPG",
    "/images/portfolio/IMG_1321.JPG",
    "/images/portfolio/IMG_1322.JPG",
    "/images/portfolio/IMG_1323.JPG",
    "/images/portfolio/IMG_1324.JPG",
    "/images/portfolio/IMG_1326.JPG",
    "/images/portfolio/IMG_1327.JPG",
    "/images/portfolio/IMG_1328.JPG",
    "/images/portfolio/IMG_1329.JPG",
    "/images/portfolio/IMG_1330.JPG",
    "/images/portfolio/IMG_1331.JPG",
    "/images/portfolio/IMG_1333.JPG",
    "/images/portfolio/IMG_1334.JPG",
    "/images/portfolio/IMG_1336.JPG",
    "/images/portfolio/IMG_1337.JPG",
    "/images/portfolio/IMG_1338.JPG",
    "/images/portfolio/IMG_1341.JPG",
    "/images/portfolio/IMG_1342.JPG",
    "/images/portfolio/IMG_1343.JPG",
    "/images/portfolio/IMG_1387.JPG",
    "/images/portfolio/IMG_1404.JPG",
    "/images/portfolio/IMG_1406.JPG",
    "/images/portfolio/IMG_0725.jpg",
    "/images/portfolio/IMG_0726.jpg",
    "/images/portfolio/IMG_0727.jpg",
    "/images/portfolio/IMG_0728.jpg",
    "/images/portfolio/IMG_0729.jpg",
    "/images/portfolio/IMG_0731.jpg",
    "/images/portfolio/IMG_0532.PNG",
    "/images/portfolio/IMG_0533.PNG",
    "/images/portfolio/IMG_0534.PNG",
    "/images/portfolio/IMG_0535.PNG",
    "/images/portfolio/IMG_5844.jpg",
    "/images/portfolio/IMG_7680.JPG",
    "/images/portfolio/IMG_9423.JPG",
    "/images/portfolio/IMG_0175.JPG",
    "/images/portfolio/IMG_0176.JPG",
    "/images/portfolio/1858DD96-7733-4998-8916-99E652430B9C.JPG",
    "/images/portfolio/BeforeAfter.png",
    "/images/portfolio/Untitled design (82).png",
    "/images/portfolio/enhanced-image (13).png",
    "/images/portfolio/enhanced-image (68).png",
    "/images/portfolio/NYCFoot.png",
    "/images/portfolio/IMG_1334(1).JPG",
];

function ImageCard({ url, position, index }: { url: string; position: [number, number, number]; index: number }) {
    const meshRef = useRef<THREE.Mesh>(null);

    useFrame((state) => {
        if (meshRef.current) {
            // Gentle floating animation
            meshRef.current.position.y = position[1] + Math.sin(state.clock.elapsedTime + index) * 0.1;

            // Subtle rotation
            meshRef.current.rotation.y = Math.sin(state.clock.elapsedTime * 0.2 + index) * 0.1;
        }
    });

    return (
        <group position={position}>
            <RoundedBox
                ref={meshRef}
                args={[1.2, 1.6, 0.1]}
                radius={0.05}
                smoothness={4}
            >
                <meshStandardMaterial
                    color="#1a1a1a"
                    metalness={0.3}
                    roughness={0.4}
                />
            </RoundedBox>
            <Image
                url={url}
                scale={[1.1, 1.5]}
                position={[0, 0, 0.06]}
                transparent
                opacity={0.95}
            />
        </group>
    );
}

export function ImageCarousel3D() {
    // Arrange images in a 3D spiral/sphere formation
    const imagePositions = useMemo(() => {
        const positions: [number, number, number][] = [];
        const radius = 4;
        const count = portfolioImages.length;

        for (let i = 0; i < count; i++) {
            const phi = Math.acos(-1 + (2 * i) / count);
            const theta = Math.sqrt(count * Math.PI) * phi;

            const x = radius * Math.cos(theta) * Math.sin(phi);
            const y = radius * Math.sin(theta) * Math.sin(phi);
            const z = radius * Math.cos(phi);

            positions.push([x, y, z]);
        }

        return positions;
    }, []);

    return (
        <group>
            {portfolioImages.map((url, index) => (
                <ImageCard
                    key={url}
                    url={url}
                    position={imagePositions[index]}
                    index={index}
                />
            ))}
        </group>
    );
}
