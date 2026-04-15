const Pipe = ({ className = "", label }: { className?: string; label?: string }) => (
  <div className={`flex flex-col items-center ${className}`}>
    {label && (
      <span className="text-foreground font-pixel text-[8px] md:text-[10px] mb-2 text-center leading-relaxed">{label}</span>
    )}
    <div className="w-20 md:w-24">
      {/* Pipe top */}
      <div className="w-full h-6 bg-mario-pipe-light border-4 border-mario-pipe rounded-t-sm" />
      {/* Pipe body */}
      <div className="w-[70%] mx-auto h-20 bg-mario-pipe-light border-x-4 border-mario-pipe" />
    </div>
  </div>
);

export default Pipe;
