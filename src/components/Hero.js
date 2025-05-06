'use client'

import { useState } from 'react'

export default function Hero() {
  const [open, setOpen] = useState(false)

  return (
    <>
      <section className="bg-[#f4ecec] text-[#231f20] px-6 pt-10 pb-20">
        <div className="max-w-5xl ml-18">
          <h1 className="text-3xl md:text-5xl font-bold leading-tight">
            ravie creates <em className="italic">cult followings</em> for brands.
          </h1>
          <p className="mt-6 text-lg font-medium ">
            <strong>New Business:</strong>{' '}
            <a href="mailto:work@ravie.co" className="underline underline-offset-2 hover:text-gray-700">
              work@ravie.co
            </a>
          </p>
        </div>
      </section>
      <section className="relative bg-black text-white h-[300px] flex items-center justify-left pl-24">
        <button
          onClick={() => setOpen(true)}
          className="text-white text-xl underline underline-offset-4 hover:opacity-80"
        >
          Watch Reel
        </button>
      </section>
      {open && (
        <div className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center">
          <div className="relative w-full max-w-5xl aspect-video">
            <iframe
              src="https://player.vimeo.com/video/912254402?byline=0&portrait=0&title=0&autoplay=1"
              className="w-full h-full rounded"
              allow="autoplay; fullscreen"
              allowFullScreen
            ></iframe>
            <button
              onClick={() => setOpen(false)}
              className="absolute top-2 right-2 text-white text-3xl hover:text-gray-300"
              aria-label="Close"
            >
              ×
            </button>
          </div>
        </div>
      )}
    </>
  )
}
