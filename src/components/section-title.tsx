import { cn } from "@/lib/utils";
import { TextAnimate } from "./ui/text-animate";

interface SectionTitleProps {
  eyebrow: string;
  title: string;
  description?: string;
  className?: string;
}

export const SectionTitle = ({
  eyebrow,
  title,
  description,
  className,
}: SectionTitleProps) => {
  return (
    <div
      className={cn(
        "mx-auto flex flex-col items-center text-center",
        className,
      )}
    >
      <div className="bg-foreground mb-4 rounded-full px-2.5 py-0.5">
        <h2 className="font-base text-background">{eyebrow}</h2>
      </div>
      <TextAnimate
        as="h3"
        animation="blurInUp"
        by="word"
        className="heading-2 max-w-3xl"
        duration={0.4}
      >
        {title}
      </TextAnimate>

      {description && (
        <p className="paragraph-1 text-foreground/80 mt-4 max-w-2xl">
          {description}
        </p>
      )}
    </div>
  );
};
