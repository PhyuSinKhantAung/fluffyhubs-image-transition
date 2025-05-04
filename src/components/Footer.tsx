import { FaDiscord, FaTwitter, FaTelegramPlane } from "react-icons/fa";
import { WavyButton } from "./WavyButton";

export const Footer = () => {
  return (
    <footer
      style={{
        position: "fixed",
        bottom: 0,
        left: 0,
        right: 0,
        zIndex: 100,
        padding: "20px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        background: "transparent",
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          width: "100%",
        }}
      >
        <div style={{ display: "flex", gap: "1rem" }}>
          {[FaDiscord, FaTelegramPlane, FaTwitter].map((Icon, idx) => (
            <div
              key={idx}
              style={{ position: "relative", width: "2rem", height: "2rem" }}
            >
              <div
                style={{
                  position: "absolute",
                  top: 0,
                  left: 0,
                  width: "2.4rem",
                  height: "2.4rem",
                  borderRadius: "50%",
                  backgroundColor: "#ffffff",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  cursor: "pointer",
                  transition: "transform 0.2s ease-in-out",
                }}
                onMouseEnter={(e) =>
                  (e.currentTarget.style.transform = "scale(0.9)")
                }
                onMouseLeave={(e) =>
                  (e.currentTarget.style.transform = "scale(1)")
                }
              >
                <Icon size={24} color="#1e1e1e" />
              </div>
            </div>
          ))}
        </div>

        <WavyButton />
      </div>
    </footer>
  );
};
