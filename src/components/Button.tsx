import { ButtonHTMLAttributes, ReactNode } from "react";

type Props = {
  children: ReactNode;
  className?: string;
} & ButtonHTMLAttributes<HTMLButtonElement>;

export default function Button({ children, className, ...props }: Props) {
  return (
    <button className={`btn ${className}`} {...props}>
      {children}
    </button>
  );
}
