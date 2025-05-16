"use client";
import Navbar from "@/components/Navbar";
import { useState } from "react";

export default function Portfolio() {
  const [activeCard, setActiveCard] = useState<number | null>(null);

  const handleCardClick = (id: number) => {
    setActiveCard(activeCard === id ? null : id); // Toggle overlay visibility
  };

  const containers = [
    {
      id: 1,
      image: "/images/coffee.jpg",
      logo: "/images/coflogo.jpg",
      description: "Digital Coffee Menu",
    },
    {
      id: 2,
      image: "/images/sign-2.jpg",
      logo: "/images/SA.jpg",
      description: "Grocery Budget Tracker",
    },
    {
      id: 3,
      image: "/images/acne.jpeg",
      logo: "/images/pore.jpg",
      description: "Pore Clogging Identifier",
    },
    {
      id: 4,
      image: "/images/don.jpg",
      logo: "/images/donmac.jpg",
      description: "Don Macchiatos Sales Monitoring System",
    },
    {
      id: 5,
      image: "/images/dog-5.jpg",
      logo: "/images/Furever.png",
      description: "Furever Home: Dog Rescue, Adoption, and Care System",
    },
    {
      id: 6,
      image: "/images/journal.jpg",
      logo: "/images/journlogo.jpg",
      description: "Daily Journal",
    },
  ];

  return (
    <div>
      <Navbar />
      <div className="min-h-screen bg-gray-800 flex flex-col items-center justify-center">
        {/* Title */}
        <div className="flex mt-12">
          <h1 className="text-6xl font-bold text-white mb-8 mr-2.5">My</h1>
          <h1 className="text-6xl font-bold text-yellow-400 mb-8">Projects</h1>
        </div>

        {/* Grid Container */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-5 m-8">
          {containers.map((container) => (
            <div
              key={container.id}
              className="relative overflow-hidden rounded-lg shadow-lg group"
              onClick={() => handleCardClick(container.id)} // Handle click for mobile
            >
              {/* Image */}
              <img
                src={container.image}
                alt={`Image ${container.id}`}
                className={`h-full w-full object-cover transition-transform duration-300 ${
                  activeCard === container.id ? "scale-110" : "group-hover:scale-110"
                }`}
              />

              {/* Overlay */}
              <div
                className={`absolute inset-0 bg-black bg-opacity-30 flex flex-col items-center justify-center transition-opacity duration-300 ${
                  activeCard === container.id ? "opacity-100" : "opacity-0 group-hover:opacity-100"
                }`}
              >
                <img
                  src={container.logo}
                  alt={`Logo ${container.id}`}
                  className="w-16 h-16 mb-4 rounded-full"
                />
                <p className="text-white text-center text-bold px-4">{container.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-4">
        <div className="container mx-auto text-center">
          <p className="mb-4">&copy; {new Date().getFullYear()} Charlene Barrientos. All rights reserved.</p>
          <div className="flex justify-center space-x-6">
            {/* GitHub Icon */}
            <a
              href="https://github.com/charleneprogramming"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-gray-400"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.438 9.8 8.207 11.387.6.113.793-.263.793-.587v-2.17c-3.338.725-4.033-1.613-4.033-1.613-.547-1.387-1.338-1.757-1.338-1.757-1.093-.75.088-.738.088-.738 1.207.088 1.838 1.238 1.838 1.238 1.073 1.837 2.813 1.306 3.5.994.113-.775.42-1.306.763-1.606-2.665-.3-5.467-1.337-5.467-5.93 0-1.313.468-2.388 1.238-3.238-.113-.3-.538-1.513.113-3.15 0 0 1.007-.325 3.3 1.238.956-.263 1.988-.4 3.013-.4 1.025 0 2.057.138 3.013.4 2.293-1.563 3.3-1.238 3.3-1.238.65 1.637.225 2.85.113 3.15.775.85 1.238 1.925 1.238 3.238 0 4.6-2.813 5.625-5.487 5.925.431.375.813 1.125.813 2.263v3.35c0 .325.188.7.8.587C20.563 21.8 24 17.3 24 12c0-6.63-5.37-12-12-12z" />
              </svg>
            </a>
            {/* Facebook Icon */}
            <a
              href="https://www.facebook.com/charlene.barrientos.96/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-gray-400"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M22.675 0H1.325C.593 0 0 .593 0 1.325v21.351C0 23.407.593 24 1.325 24H12.82v-9.294H9.692v-3.622h3.128V8.413c0-3.1 1.894-4.788 4.659-4.788 1.325 0 2.463.099 2.795.143v3.24h-1.918c-1.504 0-1.796.715-1.796 1.763v2.31h3.591l-.467 3.622h-3.124V24h6.116c.73 0 1.324-.593 1.324-1.324V1.325C24 .593 23.407 0 22.675 0z" />
              </svg>
            </a>
            {/* LinkedIn Icon */}
            <a
              href="https://www.linkedin.com/in/charlene-barrientos-029881234/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-gray-400"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M22.23 0H1.77C.792 0 0 .774 0 1.727v20.546C0 23.226.792 24 1.77 24h20.46c.978 0 1.77-.774 1.77-1.727V1.727C24 .774 23.208 0 22.23 0zM7.12 20.452H3.56V9h3.56v11.452zM5.34 7.452c-1.14 0-2.06-.92-2.06-2.06 0-1.14.92-2.06 2.06-2.06 1.14 0 2.06.92 2.06 2.06 0 1.14-.92 2.06-2.06 2.06zM20.452 20.452h-3.56v-5.6c0-1.34-.027-3.06-1.86-3.06-1.86 0-2.145 1.45-2.145 2.952v5.708h-3.56V9h3.42v1.56h.05c.477-.9 1.64-1.85 3.38-1.85 3.62 0 4.29 2.38 4.29 5.47v6.272z" />
              </svg>
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}