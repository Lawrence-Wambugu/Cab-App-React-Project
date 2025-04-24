import React from 'react';
import cabImage1 from './assets/cab1.jpg'; // Change this to your actual image path
import cabImage2 from './assets/cab2.jpg'; // Change this to your actual image path

export default function Home() {
  return (
    <div className="px-6 py-12 max-w-5xl mx-auto text-gray-800">
      {/* Headline Section */}
      <section className="text-center mb-12">
        <h1 className="text-4xl font-bold text-blue-900 mb-4">🚕Pick-And-Go</h1>
        <h2 className="text-2xl font-semibold text-gray-700">Go Wherever. Whenever.</h2>
        <p className="mt-4 text-lg">
          Movement is what we power. It’s our lifeblood. It runs through our veins. It’s what gets us out of bed each morning.
          It pushes us to constantly reimagine how we can move better — for you. For all the places you want to go.
        </p>
      </section>

      {/* Cab Images Section */}
      <section className="mb-12">
        <h3 className="text-xl font-semibold text-blue-800 mb-4 text-center">Our Fleet</h3>
        <div className="flex justify-center gap-8">
          <img
            src={cabImage1}
            alt="Cab 1"
            className="w-1/2 h-auto rounded-lg shadow-lg"
          />
          <img
            src={cabImage2}
            alt="Cab 2"
            className="w-1/2 h-auto rounded-lg shadow-lg"
          />
        </div>
      </section>

      {/* Mission Statement */}
      <section className="mb-12">
        <h3 className="text-xl font-semibold text-blue-800 mb-2">Our Mission</h3>
        <p className="text-lg">
          To revolutionize urban mobility by making transportation accessible, reliable, and efficient for everyone. 
          We aim to empower drivers, connect clients, and promote safety and sustainability in every ride we enable.
        </p>
      </section>

      {/* Safety Section */}
      <section className="mb-12">
        <h3 className="text-xl font-semibold text-blue-800 mb-2">Your Safety Drives Us</h3>
        <p className="text-lg">
          Whether you’re in the back seat or behind the wheel, your safety is essential. 
          We are committed to doing our part, and technology is at the heart of our approach. 
          We partner with safety advocates and develop new technologies and systems to help improve safety 
          and make it easier for everyone to get around.
        </p>
      </section>

      {/* Services Section */}
      <section className="mb-12">
        <h3 className="text-xl font-semibold text-blue-800 mb-2">Our Services</h3>
        <ul className="list-disc pl-6 text-lg">
          <li>🚘 Drivers can list and manage their cabs online</li>
          <li>📱 Clients can view and book available cabs with just a click</li>
          <li>🌐 Seamless experience on both mobile and desktop</li>
        </ul>
      </section>

      {/* Call to Action */}
      <section className="text-center">
        <h4 className="text-2xl font-bold text-blue-900 mb-4">Ready to ride?</h4>
        <p className="text-lg mb-6">
          Join Pick-And-Go and experience the power of smart, fast, and safe travel.
        </p>
        <a
          href="/ride"
          className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-full transition"
        >
          Book a Ride
        </a>
      </section>
    </div>
  );
}
