export const Header = () => {
  return (
    <header
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 100,
        padding: "20px",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        color: "white",
        pointerEvents: "none",
      }}
    >
      <h1
        style={{
          fontSize: "2rem",
          fontWeight: "bold",
          margin: 0,
          textShadow: "0 2px 4px rgba(0,0,0,0.3)",
        }}
      >
        Fluffy HUGS
      </h1>
    </header>
  );
};
