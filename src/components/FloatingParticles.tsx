const FloatingParticles = () => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Hearts and circles floating */}
      <div className="absolute top-[10%] left-[5%] w-4 h-4 rounded-full bg-primary/20 animate-float" style={{ animationDelay: "0s" }} />
      <div className="absolute top-[20%] right-[10%] w-6 h-6 rounded-full bg-secondary/20 animate-float" style={{ animationDelay: "2s" }} />
      <div className="absolute top-[60%] left-[15%] w-3 h-3 rounded-full bg-primary/15 animate-float" style={{ animationDelay: "4s" }} />
      <div className="absolute top-[40%] right-[20%] w-5 h-5 rounded-full bg-secondary/15 animate-float" style={{ animationDelay: "1s" }} />
      <div className="absolute top-[80%] left-[80%] w-4 h-4 rounded-full bg-primary/10 animate-float" style={{ animationDelay: "3s" }} />
      <div className="absolute top-[30%] left-[50%] w-2 h-2 rounded-full bg-secondary/25 animate-pulse-soft" style={{ animationDelay: "1.5s" }} />
      <div className="absolute top-[70%] right-[40%] w-3 h-3 rounded-full bg-primary/20 animate-pulse-soft" style={{ animationDelay: "3.5s" }} />
    </div>
  );
};

export default FloatingParticles;
