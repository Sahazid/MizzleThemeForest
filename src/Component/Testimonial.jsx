import React, { useState, useEffect } from "react";
import MainPhoto from "../assets/03.jpg";
import personOnes from "../assets/PersonImage.jpg";
import personTwo from "../assets/personPic.jpg";
import personThree from "../assets/03.jpg";

// Review dataset structured for infinite sliding
const reviewsData = [
  {
    id: 1,
    rating: 5,
    text: "I highly recommend Mizzle to anyone looking for a high-quality Template.",
    author: "Carolyn Ortiz",
    avatar: personOnes,
  },
  {
    id: 2,
    rating: 5,
    text: "Mizzle is the perfect theme for businesses that want to create a stylish and functional website.",
    author: "Nix Maxwell",
    avatar: personThree,
  },
  {
    id: 3,
    rating: 5,
    text: "The component architecture and styling speed helped us deploy our client project in record time.",
    author: "Alex Rivera",
    avatar: personTwo,
  },
];

const Testimonial = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Auto-slide effect switching active slide every 4 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % reviewsData.length);
    }, 2000);

    return () => clearInterval(timer);
  }, []);

  return (
    <section className="w-full bg-white py-16 lg:py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-[80rem] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
        <div className="lg:col-span-6 space-y-8">
          <div className="inline-flex items-center gap-2 bg-pink-50 text-gray-800 text-xs sm:text-sm font-medium px-3.5 py-1.5 rounded-full border border-pink-100">
            <span>💖</span> Real results from real clients
          </div>

          {/* Headings */}
          <div className="space-y-4">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-gray-900 leading-tight">
              See how we've helped our clients succeed
            </h2>
            <p className="text-base sm:text-lg font-bold text-gray-900">
              More than 1500+ agencies using Mizzle
            </p>
          </div>

          {/* Infinite Slider */}
          <div className="overflow-hidden w-full">
            <div
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {reviewsData.map((review) => (
                <div key={review.id} className="w-full shrink-0 space-y-3 px-1">
                  <div className="flex gap-1 text-amber-400 text-sm">
                    {[...Array(review.rating)].map((_, i) => (
                      <i key={i} className="fa-solid fa-star"></i>
                    ))}
                  </div>

                  <p className="text-gray-700 text-sm sm:text-base leading-relaxed min-h-[50px]">
                    {review.text}
                  </p>

                  <div className="flex items-center gap-2.5 pt-1">
                    <img
                      src={review.avatar}
                      alt={review.author}
                      className="w-8 h-8 rounded-full object-cover"
                    />
                    <span className="text-xs font-semibold text-gray-600">
                      By {review.author}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Slider Dots */}
          <div className="flex items-center gap-1.5 pt-2">
            {reviewsData.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                aria-label={`Go to slide ${index + 1}`}
                className={`h-2 rounded-full transition-all duration-300 ${
                  currentIndex === index
                    ? "w-6 bg-emerald-500"
                    : "w-2 bg-gray-200 hover:bg-gray-300"
                }`}
              />
            ))}
          </div>
        </div>

        {/*  Hero Photo */}
        <div className="lg:col-span-6 relative">
          {/* Main Group pic */}
          <div className="relative rounded-2xl overflow-hidden shadow-lg">
            <img
              src={MainPhoto}
              alt="Happy team with speech bubbles"
              className="w-full h-[400px] sm:h-[480px] object-cover"
            />
          </div>

          <div className="absolute top-6 -left-4 sm:-left-8 bg-[#1E1E24] text-white px-4 py-2.5 rounded-xl shadow-xl flex items-center gap-3 text-xs sm:text-sm font-medium z-10 border border-gray-800">
            <img
              src={personTwo}
              alt="User Avatar"
              className="w-7 h-7 rounded-full object-cover"
            />
            <span>The best Template we've ever used 🔥</span>
          </div>

          <div className="absolute bottom-8 -left-2 sm:-left-6 bg-white text-gray-800 px-3.5 py-2 rounded-xl shadow-xl flex items-center gap-2.5 text-xs sm:text-sm font-medium z-10 border border-gray-100">
            <img
              src={personOnes}
              alt="User Avatar"
              className="w-7 h-7 rounded-full object-cover"
            />
            <span>Excellent Theme 💖</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
