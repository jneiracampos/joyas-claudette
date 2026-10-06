'use client';

import Image from 'next/image';
import { useState } from 'react';

/**
 * Product image carousel for the detail page.
 * Arrows and dots only appear when there is more than one image.
 */
interface ProductGalleryProps {
  images: string[];
  alt: string;
}

export default function ProductGallery({ images, alt }: ProductGalleryProps) {
  const [index, setIndex] = useState(0);
  const count = images.length;

  if (count === 0) {
    return (
      <div className="aspect-square bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center">
        <span className="text-gray-400">Product Image</span>
      </div>
    );
  }

  const go = (step: number) => setIndex((current) => (current + step + count) % count);

  return (
    <div className="relative aspect-square bg-gray-100 overflow-hidden">
      {images.map((src, i) => (
        <Image
          key={src}
          src={src}
          alt={alt}
          fill
          priority={i === 0}
          sizes="(min-width: 768px) 50vw, 100vw"
          className={`object-cover transition-opacity duration-300 ${i === index ? 'opacity-100' : 'opacity-0'}`}
          aria-hidden={i !== index}
        />
      ))}

      {count > 1 && (
        <>
          <button
            type="button"
            onClick={() => go(-1)}
            aria-label="Previous image"
            className="absolute left-3 top-1/2 -translate-y-1/2 w-10 h-10 flex items-center justify-center rounded-full bg-white/80 text-gray-900 hover:bg-white transition-colors"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <button
            type="button"
            onClick={() => go(1)}
            aria-label="Next image"
            className="absolute right-3 top-1/2 -translate-y-1/2 w-10 h-10 flex items-center justify-center rounded-full bg-white/80 text-gray-900 hover:bg-white transition-colors"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>

          <div className="absolute bottom-4 left-0 right-0 flex justify-center space-x-2">
            {images.map((src, i) => (
              <button
                key={src}
                type="button"
                onClick={() => setIndex(i)}
                aria-label={`Show image ${i + 1}`}
                aria-current={i === index}
                className={`w-2.5 h-2.5 rounded-full transition-colors ${i === index ? 'bg-gray-900' : 'bg-white/70 hover:bg-white'}`}
              />
            ))}
          </div>
        </>
      )}
    </div>
  );
}
