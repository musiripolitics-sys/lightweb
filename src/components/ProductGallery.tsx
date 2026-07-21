"use client";

import Image from "next/image";
import { useState } from "react";

export default function ProductGallery({ images, name }: { images: string[]; name: string }) {
  const [index, setIndex] = useState(0);

  return (
    <div className="flex flex-col gap-4">
      <div className="image-plate relative aspect-square overflow-hidden border border-black/10">
        <Image
          key={images[index]}
          src={images[index]}
          alt={`${name} — photo ${index + 1}`}
          fill
          priority
          sizes="(max-width: 1024px) 100vw, 50vw"
          className="object-contain p-[14%]"
        />
      </div>

      {images.length > 1 && (
        <div className="flex gap-3">
          {images.map((src, i) => (
            <button
              key={src}
              type="button"
              onClick={() => setIndex(i)}
              aria-label={`Show photo ${i + 1}`}
              aria-current={i === index}
              className={`image-plate relative h-20 w-20 cursor-pointer overflow-hidden border transition-colors ${
                i === index ? "border-[#0d0d0e]" : "border-black/10 opacity-70 hover:opacity-100"
              }`}
            >
              <Image src={src} alt="" fill sizes="80px" className="object-contain p-2.5" />
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
