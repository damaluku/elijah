import React from "react";
import ImageGallery from "./components/ImageGallery";

export default function App() {
  const natutalLight = [
    {
      title: "Christabel",
      images: [
        {
          name: "Christabel",
          src: "/images/natural-light/Christabel/1.jpg",
        },
        {
          name: "Christabel",
          src: "/images/natural-light/Christabel/2.jpg",
        },
        {
          name: "Christabel",
          src: "/images/natural-light/Christabel/3.jpg",
        },
      ],
    },
    {
      title: "Edet",
      images: [
        {
          name: "Edet",
          src: "/images/natural-light/Edet/1.jpg",
        },
        {
          name: "Edet",
          src: "/images/natural-light/Edet/2.jpg",
        },
        {
          name: "Edet",
          src: "/images/natural-light/Edet/3.jpg",
        },
      ],
    },
    {
      title: "Sharon",
      images: [
        {
          name: "Edet",
          src: "/images/natural-light/Sharon/1.jpg",
        },
        {
          name: "Edet",
          src: "/images/natural-light/Sharon/2.jpg",
        },
        {
          name: "Edet",
          src: "/images/natural-light/Sharon/3.jpg",
        },
      ],
    },
  ];
  const artificialLight = [
    {
      title: "darby",
      images: [
        {
          name: "butterfly",
          src: "/images/Artificial/Darby/1.webp",
        },
        {
          name: "darby broad",
          src: "/images/Artificial/Darby/2.webp",
        },
        {
          name: "rambrandt",
          src: "/images/Artificial/Darby/3.webp",
        },
        {
          name: "short",
          src: "/images/Artificial/Darby/4.webp",
        },
        {
          name: "split",
          src: "/images/Artificial/Darby/5.webp",
        },
      ],
    },
    {
      title: "farren",
      images: [
        {
          name: "image",
          src: "/images/Artificial/Farren/1.webp",
        },
        {
          name: "rambrandt",
          src: "/images/Artificial/Farren/2.webp",
        },
        {
          name: "short lightning",
          src: "/images/Artificial/Farren/3.webp",
        },
      ],
    },
    {
      title: "sharon",
      images: [
        {
          name: "broad",
          src: "/images/Artificial/Sharon/1.JPG",
        },
        {
          name: "sharon rambrandt",
          src: "/images/Artificial/Sharon/2.JPG",
        },
        {
          name: "sharon butterfly",
          src: "/images/Artificial/Sharon/3.JPG",
        },
        {
          name: "sharon split",
          src: "/images/Artificial/Sharon/4.JPG",
        },
      ],
    },
    {
      title: "Action-Photography",
      images: [
        {
          name: "broad",
          src: "/images/Artificial/Action-Photography/IMG_6785.JPG",
        },
        {
          name: "broad",
          src: "/images/Artificial/Action-Photography/IMG_7016.JPG",
        },
        {
          name: "broad",
          src: "/images/Artificial/Action-Photography/IMG_7047.JPG",
        },
      ],
    },
    {
      title: "Arificial-Cent-Candle-Light",
      images: [
        {
          name: "broad",
          src: "/images/Artificial/Arificial-Cent-Candle-Light/IMG_5492.JPG",
        },
        {
          name: "broad",
          src: "/images/Artificial/Action-Photography/IMG_7016.JPG",
        },
      ],
    },
    {
      title: "Confederation-Inn",
      images: [
        {
          name: "broad",
          src: "/images/Artificial/Confederation-Inn/IMG_7440.JPG",
        },
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-black text-white font-sans">
      <header className="text-center p-16 bg-gradient-to-b from-black to-gray-900">
        <h1 className="text-5xl font-extrabold tracking-tight uppercase">
          OLUMIDE AYINDE
        </h1>
        <p className="text-gray-400 mt-2 text-lg capitalize">
          Media producer | Cinematic Videographer
        </p>
      </header>

      <section className="p-12 text-center">
        <h2 className="text-3xl font-bold mb-6">About Me</h2>
        <p className="max-w-3xl mx-auto text-gray-300 leading-relaxed">
          I am a mdeia production student with proven skills in video editing,
          audio production and post production. am experienced in creating high
          quality visuals and audio content usuing industy standard software and
          equipment.
        </p>
      </section>

      {/*      <section className="p-12 bg-gray-900 text-center">
        <h2 className="text-3xl font-bold mb-6">Featured Portfolio</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {[1, 2, 3].map((vid) => (
            <div
              key={vid}
              className="aspect-video bg-gray-800 rounded-xl overflow-hidden shadow-lg"
            >
              <iframe
                src={`https://player.vimeo.com/video/76979871?autoplay=0&loop=1&title=0&byline=0&portrait=0`}
                className="w-full h-full"
                frameBorder="0"
                allow="autoplay; fullscreen"
                allowFullScreen
                title={`Video ${vid}`}
              ></iframe>
            </div>
          ))}
        </div>
      </section> */}

      <section className="p-12 bg-black text-center">
        <h2 className="text-3xl font-bold mb-6">Projects</h2>

        {/* Natural Light Category */}
        <div className="mb-12">
          <h3 className="text-2xl font-semibold mb-4">
            Natural Light Portraits
          </h3>

          <ImageGallery lightCategory={natutalLight} />
        </div>

        {/* Artificial Category */}
        <div>
          <h3 className="text-2xl font-semibold mb-4">Artificial Lighting</h3>

          <ImageGallery lightCategory={artificialLight} />
        </div>
      </section>

      <section className="p-12 text-center bg-gray-900">
        <h2 className="text-3xl font-bold mb-6">Contact</h2>
        <p className="text-gray-300 mb-4">
          Let’s bring your vision to life. Get in touch:
        </p>
        <p className="text-lg font-medium">
          Email:{" "}
          <a
            className="text-blue-400 underline"
            href="mailto:ayinde1657@saskpolytech.ca"
          >
            ayinde1657@saskpolytech.ca
          </a>
        </p>
        <p className="text-lg font-medium">
          Instagram:{" "}
          <a
            className="text-blue-400 underline"
            href="https://instagram.com/explore__designs"
            target="_blank"
            rel="noreferrer"
          >
            @explore__designs
          </a>
        </p>
      </section>

      <footer className="text-center py-6 text-gray-500 text-sm border-t border-gray-800">
        &copy; 2025 Olumide Ayinde. All rights reserved.
      </footer>
    </div>
  );
}
