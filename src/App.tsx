import { Parallax, ParallaxLayer } from "@react-spring/parallax";

import sunImage from "./assets/sun-with-birds.jpg";
import lanternImage from "./assets/lantern-balloons.jpg";
import landImage from "./assets/road.jpg";
import catImage from "./assets/cat.gif";

import { Header } from "./components/Header";
import { Footer } from "./components/Footer";

function App() {
  return (
    <div style={{ overflowX: "hidden", height: "100vh" }}>
      <Header />
      <Footer />

      <Parallax pages={3}>
        <ParallaxLayer
          offset={0}
          speed={0.7}
          style={{
            backgroundImage: `url(${sunImage})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div
            style={{
              position: "absolute",
              top: "20%",
              left: "10%",
              maxWidth: "500px",
              color: "white",
            }}
          >
            <h2
              style={{
                fontSize: "clamp(2rem, 5vw, 3.5rem)",
                textShadow: "0 2px 8px rgba(0,0,0,0.7)",
              }}
            >
              Welcome to the Journey
            </h2>
            <p style={{ fontSize: "1.1rem" }}>
              Scroll down to begin the adventure
            </p>
          </div>
        </ParallaxLayer>

        <ParallaxLayer
          offset={1}
          speed={0.5}
          style={{
            backgroundImage: `url(${lanternImage})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div
            style={{
              position: "absolute",
              bottom: "20%",
              right: "10%",
              textAlign: "right",
              maxWidth: "500px",
              color: "white",
            }}
          >
            <h2
              style={{
                fontSize: "clamp(2rem, 5vw, 3.5rem)",
              }}
            >
              Don't Be Scared
            </h2>
            <p>Just keep moving forward</p>
          </div>
        </ParallaxLayer>

        <ParallaxLayer
          offset={2}
          speed={0.3}
          style={{
            backgroundImage: `url(${landImage})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div
            style={{
              position: "absolute",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              textAlign: "center",
              color: "white",
            }}
          >
            <h2
              style={{
                fontSize: "clamp(2rem, 5vw, 3.5rem)",
              }}
            >
              Hi There!
            </h2>
            <p>You made it to the end!</p>
          </div>
        </ParallaxLayer>

        <ParallaxLayer
          sticky={{ start: 0.5, end: 2.5 }}
          style={{ textAlign: "center" }}
        >
          <img
            src={catImage}
            style={{
              width: "16rem",
              height: "auto",

              mixBlendMode: "multiply",
            }}
            alt="floating cat"
          />
        </ParallaxLayer>
      </Parallax>
    </div>
  );
}

export default App;
