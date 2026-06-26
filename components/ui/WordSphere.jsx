"use client";

import { useRef, useEffect, useState } from "react";
import Link from "next/link";

/**
 * WORD SPHERE
 * ─────────────────────────────────────────────────────────────────
 * Renders psychology keywords arranged on a slowly rotating 3D sphere.
 * No sphere border — the keywords themselves form the shape.
 *
 * Props:
 *   keywords  — array of { id, name, weight }
 *               name: string (already in the correct display language)
 *               weight: number 1–100 (controls font size)
 *   radius    — sphere radius in px (default 180)
 *   baseRoute — URL prefix for keyword links (default "/psychology")
 * ─────────────────────────────────────────────────────────────────
 */

// Evenly distribute N points on a sphere using Fibonacci lattice
function fibonacciSphere(n) {
  const golden = (1 + Math.sqrt(5)) / 2;
  return Array.from({ length: n }, (_, i) => {
    const theta = (2 * Math.PI * i) / golden;
    const phi = Math.acos(1 - (2 * (i + 0.5)) / n);
    return {
      x: Math.sin(phi) * Math.cos(theta),
      y: Math.sin(phi) * Math.sin(theta),
      z: Math.cos(phi),
    };
  });
}

// Rotate a point around the Y axis
function rotateY(p, angle) {
  const c = Math.cos(angle), s = Math.sin(angle);
  return { x: p.x * c + p.z * s, y: p.y, z: -p.x * s + p.z * c };
}

// Rotate a point around the X axis (slight tilt)
function rotateX(p, angle) {
  const c = Math.cos(angle), s = Math.sin(angle);
  return { x: p.x, y: p.y * c - p.z * s, z: p.y * s + p.z * c };
}

export default function WordSphere({
  keywords = [],
  radius = 180,
  baseRoute = "/psychology",
}) {
  const [angle, setAngle] = useState(0);
  const rafRef   = useRef(null);
  const lastRef  = useRef(null);
  const SPEED    = 0.00025; // radians per ms — slow, calm rotation
  const TILT     = 0.18;   // slight X-axis tilt for depth feel

  // Animation loop
  useEffect(() => {
    const tick = (now) => {
      if (lastRef.current !== null) {
        setAngle((a) => a + SPEED * (now - lastRef.current));
      }
      lastRef.current = now;
      rafRef.current = requestAnimationFrame(tick);
    };
    rafRef.current = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(rafRef.current);
  }, []);

  if (!keywords.length) return null;

  const positions = fibonacciSphere(keywords.length);
  const maxWeight = Math.max(...keywords.map((k) => k.weight), 1);

  // Project 3D → 2D and sort back-to-front for correct layering
  const projected = keywords
    .map((kw, i) => {
      let p = positions[i];
      p = rotateY(p, angle);
      p = rotateX(p, TILT);
      // depth factor: 0 (back) → 1 (front)
      const depth = (p.z + 1) / 2;
      const weightRatio = kw.weight / maxWeight;
      // Font size: scaled by weight AND depth (perspective effect)
      const fontSize = 10 + weightRatio * 10 + depth * 6;
      const opacity  = 0.2 + depth * 0.8;
      const x = radius + p.x * radius * 0.95;
      const y = radius + p.y * radius * 0.85; // slight vertical squeeze
      return { kw, x, y, fontSize, opacity, depth };
    })
    .sort((a, b) => a.depth - b.depth); // paint back-to-front

  const size = radius * 2;

  return (
    <div
      style={{ width: size, height: size, position: "relative", margin: "0 auto" }}
      aria-label="Interactive word sphere"
    >
      {projected.map(({ kw, x, y, fontSize, opacity, depth }) => (
        <Link
          key={kw.id}
          href={`${baseRoute}/${kw.id}`}
          className="sphere-word"
          style={{
            left:     x,
            top:      y,
            fontSize: `${fontSize.toFixed(1)}px`,
            opacity,
            zIndex:   Math.round(depth * 100),
            fontWeight: kw.weight > 75 ? 500 : 400,
          }}
          title={String(kw.name || "")}
        >
          {String(kw.name || "")}
        </Link>
      ))}
    </div>
  );
}
