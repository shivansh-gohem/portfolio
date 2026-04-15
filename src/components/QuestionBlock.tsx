const QuestionBlock = ({ className = "" }: { className?: string }) => (
  <div className={`w-16 h-16 bg-mario-question pixel-border flex items-center justify-center text-foreground text-xl font-pixel animate-question-bump ${className}`}>
    ?
  </div>
);

export default QuestionBlock;
