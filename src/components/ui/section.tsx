import { ReactNode } from "react";
import "../../styles/style.css";

interface SectionProps {
  children: ReactNode;
  background?: "white" | "gray" | "primary" | "gradient";
  className?: string;
  containerClassName?: string;
  id?: string;
}

const Section = ({
  children,
  background = "white",
  className = "",
  containerClassName = "",
  id,
}: SectionProps) => {
  const backgroundClasses = {
    white: "bg-white",
    gray: "bg-gray-50",
    primary: "bg-primary textcolor1",
    gradient: "bg-gradient-to-br from-primary/5 via-white to-primary/5",
  };

  return (
    <section
      id={id}
      className={`py-12 md:py-20 lg:py-12 ${backgroundClasses[background]} ${className}`}
    >
      <div
        className={`max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 ${containerClassName}`}
      >
        {children}
      </div>
    </section>
  );
};

export default Section;
