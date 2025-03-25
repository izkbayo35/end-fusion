"use client"

import { motion } from "framer-motion"
import Image from "next/image"

interface TestimonialProps {
  quote: string
  author: string
  role: string
  image?: string
}

export function Testimonial({ quote, author, role, image }: TestimonialProps) {
  return (
    <div className="flex flex-col items-center space-y-4 rounded-lg border bg-background p-6 shadow-sm h-full">
      <div className="relative h-16 w-16 overflow-hidden rounded-full">
        {image ? (
          <Image src={image || "/placeholder.svg"} alt={author} fill className="object-cover" />
        ) : (
          <motion.div
            whileHover={{ scale: 1.1, rotate: 5 }}
            className="flex h-full w-full items-center justify-center bg-primary/10 text-2xl font-bold text-primary"
          >
            {author.charAt(0)}
          </motion.div>
        )}
      </div>
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
      >
        <blockquote className="text-center text-muted-foreground relative">
          <svg
            className="absolute top-0 left-0 transform -translate-x-6 -translate-y-6 h-10 w-10 text-primary/20"
            fill="currentColor"
            viewBox="0 0 32 32"
            aria-hidden="true"
          >
            <path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z" />
          </svg>
          "{quote}"
        </blockquote>
      </motion.div>
      <div className="text-center">
        <div className="font-semibold">{author}</div>
        <div className="text-sm text-muted-foreground">{role}</div>
      </div>
    </div>
  )
}

