import { FaDiscord, FaTwitter, FaTelegramPlane } from "react-icons/fa";
import { WavyButton } from "./WavyButton";

export const Footer = () => {
  const icons = [
    {
      icon: (
        <FaDiscord
          size={24}
          style={{ cursor: "pointer" }}
          onClick={() => window.open("https://discord.com")}
        />
      ),
      name: "Discord",
    },
    {
      icon: (
        <FaTelegramPlane
          size={24}
          style={{ cursor: "pointer" }}
          onClick={() => window.open("https://t.me/")}
        />
      ),
      name: "Telegram",
    },
    {
      icon: (
        <FaTwitter
          size={24}
          style={{ cursor: "pointer" }}
          onClick={() => window.open("https://twitter.com/")}
        />
      ),
      name: "Twitter",
    },
  ];
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
          {icons.map((i) => (
            <div
              key={i.name}
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
                {i.icon}
              </div>
            </div>
          ))}
        </div>

        <WavyButton />
      </div>
    </footer>
  );
};
