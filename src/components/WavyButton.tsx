export const WavyButton = () => {
  return (
    <div
      style={{
        position: "absolute",
        width: "185%",
        height: "120%",
        zIndex: 1,
        top: 0,
        left: 0,
        pointerEvents: "none",
      }}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 254.73 221.92"
        preserveAspectRatio="xMidYMid meet"
        width="100%"
        height="100%"
      >
        <path
          fill="#ffff"
          d="m225.68,15.74c-25.47-21.39-54.72-22.72-79.62,6.86-24.91,29.57-40.17,54.92-72.67,49.26-32.5-5.66-62.08,14.2-71.32,44.78-9.24,30.58,13.36,75.03,52.18,90.3,38.81,15.27,72.91,24.12,122.72.19,49.81-23.93,68.79-79.19,75.51-108.95,6.71-29.76-1.32-61.04-26.79-82.44Z"
        />
        <text
          x="50%"
          y="55%"
          textAnchor="middle"
          fill="#00000"
          fontSize="20"
          fontFamily="sans-serif"
          dominantBaseline="middle"
        >
          View Collection
        </text>
      </svg>
    </div>
  );
};
