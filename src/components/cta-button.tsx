import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";
import Link from "next/link";

interface CTAButtonProps {
  text?: string;
  onClick?: () => void;
  href?: string;
  target?: string;
  isExternal?: boolean;
  className?: string;
}

export const CTAButton = ({
  text = "Entre em Contato",
  onClick,
  href,
  isExternal,
  target,
  className,
}: CTAButtonProps) => {
  const content = (
    <>
      <div className="relative z-10 flex items-center justify-between">
        <span className="group-hover:text-background text-foreground mr-4 ml-4 text-lg font-semibold duration-200">
          {text}
        </span>
        <span className="bg-foreground text-background relative z-10 flex items-center justify-center rounded-full p-3 transition-all duration-300">
          <ArrowRight className="size-5 -rotate-45 duration-300 group-hover:rotate-0" />
        </span>
      </div>

      <div className="bg-foreground absolute top-1/2 right-3 h-8 w-8 origin-center -translate-y-1/2 transform rounded-full transition-all duration-500 ease-in-out group-hover:scale-[15]"></div>
    </>
  );

  const commonClasses = cn(
    "group bg-secondary relative w-fit cursor-pointer overflow-hidden rounded-full p-3 font-medium text-white",
    className,
  );
  if (href) {
    if (isExternal) {
      return (
        <a
          href={href}
          target={target || "_blank"}
          rel="noopener noreferrer"
          onClick={onClick}
          className={commonClasses}
        >
          {content}
        </a>
      );
    }

    return (
      <Link
        href={href}
        className={commonClasses}
        onClick={onClick}
        target={target}
      >
        {content}
      </Link>
    );
  }

  return (
    <button onClick={onClick} className={commonClasses} type="button">
      {content}
    </button>
  );
};
