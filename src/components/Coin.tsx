const Coin = ({ className = "" }: { className?: string }) => (
  <div className={`w-8 h-8 rounded-full bg-mario-coin animate-coin-spin border-2 border-accent-foreground ${className}`} />
);

export default Coin;
