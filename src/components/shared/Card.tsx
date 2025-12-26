import type { ReactNode } from "react";
type Spacing = "none" | "sm" | "md" | "lg" | "vlg";

const paddingMap: Record<Spacing, string> = {
  none: "p-0",
  sm: "p-2",
  md: "p-4",
  lg: "p-8",
  vlg: "p-12",
};

const marginMap: Record<Spacing, string> = {
  none: "m-0",
  sm: "m-2",
  md: "m-4",
  lg: "m-8",
  vlg: "m-12",
};

interface CardProps {
  children: ReactNode;
  padding?: Spacing;
  margin?: Spacing;
  height?: string | "auto";
  width?: string | "auto";
}

const Card = ({
  children,
  padding: outerPadding = "none",
  margin: outerMargin = "none",
  height = "auto",
  width = "auto",
}: CardProps) => {
  return (
    <div
      className={`${paddingMap[outerPadding]} ${marginMap[outerMargin]} ${height} ${width} shadow-xl/20 w-${width}`}
    >
      {children}
    </div>
  );
};

export default Card;
