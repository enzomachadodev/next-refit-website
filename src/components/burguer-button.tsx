import { cn } from "@/lib/utils";

interface BurguerButtonProps {
  isOpen: boolean;
  onClick?: () => void;
  className?: string;
}

export const BurguerButton = ({
  isOpen,
  onClick,
  className,
}: BurguerButtonProps) => {
  return (
    <button
      onClick={onClick}
      aria-label={isOpen ? "Close menu" : "Open menu"}
      className={cn(
        "group relative flex size-10 cursor-pointer flex-col items-center justify-center",
        className,
      )}
    >
      <span
        className={`relative block h-0.5 w-6 transform bg-current transition-all duration-300 ease-in-out ${
          isOpen ? "translate-y-0.5 rotate-45" : "-translate-y-1"
        }`}
      />
      <span
        className={`block h-0.5 w-6 transform bg-current transition-all duration-300 ease-in-out ${
          isOpen ? "scale-0 opacity-0" : "scale-100 opacity-100"
        }`}
      />
      <span
        className={`relative block h-0.5 w-6 transform bg-current transition-all duration-300 ease-in-out ${
          isOpen ? "-translate-y-0.5 -rotate-45" : "translate-y-1"
        }`}
      />
    </button>
  );
};
