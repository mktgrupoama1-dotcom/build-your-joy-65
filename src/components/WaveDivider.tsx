interface WaveDividerProps {
  from?: string;
  to?: string;
  flip?: boolean;
  className?: string;
}

const WaveDivider = ({ from = "hsl(var(--background))", to = "hsl(var(--warm-cream))", flip = false, className = "" }: WaveDividerProps) => {
  return (
    <div className={`w-full overflow-hidden leading-[0] ${flip ? "rotate-180" : ""} ${className}`}>
      <svg
        viewBox="0 0 1440 120"
        preserveAspectRatio="none"
        className="w-full h-[60px] md:h-[80px]"
      >
        <defs>
          <linearGradient id={`wave-${flip ? "flip" : "normal"}`} x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor={from} />
            <stop offset="100%" stopColor={to} />
          </linearGradient>
        </defs>
        <path
          d="M0,40 C120,100 240,0 360,50 C480,100 600,20 720,60 C840,100 960,10 1080,50 C1200,90 1320,30 1440,60 L1440,120 L0,120 Z"
          fill={to}
          opacity="0.5"
        />
        <path
          d="M0,60 C160,10 320,90 480,40 C640,0 800,80 960,30 C1120,0 1280,70 1440,40 L1440,120 L0,120 Z"
          fill={to}
        />
      </svg>
    </div>
  );
};

export default WaveDivider;
