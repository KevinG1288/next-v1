import type { ReactNode } from "react";

type HijoProps = {
  children?: ReactNode;
};

export default function Hijo({ children }: HijoProps) {
  return <div>{children}</div>;
}