import { useState, useEffect, useRef } from "react";
import useScrollSnap from "react-use-scroll-snap";

import sunImage from "./assets/sun-with-birds.jpg";
import lanternImage from "./assets/lantern-balloons.jpg";
import landImage from "./assets/road.jpg";
import catImage from "./assets/cat.gif";
import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import RunningCatLoader from "./components/Loader";

type Slide = {
  bgImage: string;
  title: string;
  text: string;
  textPosition: "left" | "right" | "center";
};

const App = () => {
  const [currentSlide, setCurrentSlide] = useState<number>(0);
  const scrollRef = useRef<HTMLDivElement>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useScrollSnap({
    ref: scrollRef as any,
    duration: 100,
  });

  useEffect(() => {
    const handleScroll = () => {
      if (!scrollRef.current) return;
      const slideHeight = window.innerHeight;
      const scrollPosition = window.scrollY;
      const newSlide = Math.round(scrollPosition / slideHeight);
      setCurrentSlide(newSlide);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const slides: Slide[] = [
    {
      bgImage: sunImage,
      title: "Welcome to the Journey",
      text: "Scroll down to begin the adventure",
      textPosition: "left",
    },
    {
      bgImage: lanternImage,
      title: "Don't Be Scared",
      text: "Just keep moving forward",
      textPosition: "right",
    },
    {
      bgImage: landImage,
      title: "Hi There!",
      text: "You made it to the end!",
      textPosition: "center",
    },
  ];

  const getTextPositionStyle = (position: Slide["textPosition"]) => {
    switch (position) {
      case "left":
        return { left: "10%", right: "auto", textAlign: "left" as const };
      case "right":
        return { left: "auto", right: "10%", textAlign: "right" as const };
      case "center":
        return {
          left: "50%",
          right: "auto",
          transform: "translateX(-50%)",
          textAlign: "center" as const,
        };
    }
  };

  // 6-second loading timer
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 6000);

    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return (
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "100vh",
          width: "100vw",
          backgroundColor: "#f5f5f5",
          flexDirection: "column",
        }}
      >
        <div
          style={{
            width: "100%",
            maxWidth: "300px",
            margin: "0 auto",
          }}
        >
          <RunningCatLoader />
        </div>
        <p
          style={{
            fontSize: "1.2rem",
            color: "#333",
            textAlign: "center",
          }}
        >
          Loading...
        </p>
      </div>
    );
  }

  return (
    <div
      ref={scrollRef}
      style={{
        overflowX: "hidden",
        height: "100vh",
        scrollSnapType: "y mandatory",
        scrollBehavior: "smooth",
      }}
    >
      <Header />

      <Footer />

      {slides.map((slide, index) => (
        <section
          key={index}
          style={{
            height: "100vh",
            width: "100vw",
            scrollSnapAlign: "start",
            position: "relative",
            backgroundImage: `url(${slide.bgImage})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            filter:
              currentSlide === index ? "brightness(1)" : "brightness(0.7)",
            transition: "filter 0.5s ease",
          }}
        >
          <div
            style={{
              position: "absolute",
              top: "50%",
              ...getTextPositionStyle(slide.textPosition),
              transform:
                slide.textPosition === "center"
                  ? "translate(-50%, -50%)"
                  : "translateY(-50%)",
              maxWidth: "500px",
              color: "white",
              textShadow: "0 2px 4px rgba(0,0,0,0.5)",
              padding: "0 20px",
            }}
          >
            <h2
              style={{
                fontSize: "clamp(2rem, 5vw, 3.5rem)",
                marginBottom: "1rem",
                lineHeight: 1.2,
              }}
            >
              {slide.title}
            </h2>
            <p
              style={{
                fontSize: "clamp(1rem, 2.5vw, 1.5rem)",
                opacity: 0.9,
              }}
            >
              {slide.text}
            </p>
          </div>
        </section>
      ))}

      {/* Floating Cat */}
      <div
        style={{
          position: "fixed",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          zIndex: 50,
          animation: "float 3s ease-in-out infinite",
          pointerEvents: "none",
        }}
      >
        <img
          src={catImage}
          style={{
            width: "min(30vw, 200px)",
            height: "auto",
            filter: "drop-shadow(0 4px 8px rgba(0,0,0,0.3))",
          }}
          alt="Floating cat"
        />
      </div>

      <style>{`
        @keyframes float {
          0%, 100% { transform: translate(-50%, -50%) translateY(0); }
          50% { transform: translate(-50%, -50%) translateY(-20px); }
        }
      `}</style>
    </div>
  );
};

export default App;
