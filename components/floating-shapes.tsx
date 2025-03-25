"use client"

import { motion } from "framer-motion"

export function FloatingShapes() {
  const shapes = [
    {
      shape: "circle",
      size: 40,
      x: "10%",
      y: "20%",
      duration: 20,
      delay: 0,
      opacity: 0.1,
    },
    {
      shape: "circle",
      size: 60,
      x: "70%",
      y: "60%",
      duration: 25,
      delay: 1,
      opacity: 0.15,
    },
    {
      shape: "square",
      size: 50,
      x: "80%",
      y: "10%",
      duration: 30,
      delay: 2,
      opacity: 0.1,
    },
    {
      shape: "triangle",
      size: 70,
      x: "30%",
      y: "70%",
      duration: 22,
      delay: 3,
      opacity: 0.12,
    },
    {
      shape: "square",
      size: 30,
      x: "60%",
      y: "30%",
      duration: 18,
      delay: 4,
      opacity: 0.08,
    },
  ]

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {shapes.map((shape, index) => (
        <motion.div
          key={index}
          className="absolute"
          style={{
            left: shape.x,
            top: shape.y,
            width: shape.size,
            height: shape.size,
            opacity: shape.opacity,
            backgroundColor: shape.shape === "circle" ? "transparent" : "currentColor",
            borderRadius: shape.shape === "circle" ? "50%" : shape.shape === "square" ? "4px" : "0",
            border: shape.shape === "circle" ? "2px solid currentColor" : "none",
            clipPath: shape.shape === "triangle" ? "polygon(50% 0%, 0% 100%, 100% 100%)" : "none",
            color: "#3b82f6",
          }}
          animate={{
            x: [0, 30, 0, -30, 0],
            y: [0, 30, 0, -30, 0],
            rotate: [0, 90, 180, 270, 360],
          }}
          transition={{
            duration: shape.duration,
            ease: "linear",
            repeat: Number.POSITIVE_INFINITY,
            delay: shape.delay,
          }}
        />
      ))}
    </div>
  )
}

