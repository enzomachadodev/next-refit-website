import { cn } from "@/lib/utils";

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
    <div className={cn("flex flex-col items-center text-center", className)}>
      <div className="bg-foreground mb-4 rounded-full px-2.5 py-0.5">
        <h2 className="font-base text-background">{eyebrow}</h2>
      </div>
      <h3 className="heading-2">{title}</h3>
      {description && <p className="paragraph-1">{description}</p>}
    </div>
  );
};
