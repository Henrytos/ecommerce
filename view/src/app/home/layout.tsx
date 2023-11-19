import { ReactNode } from "react";
import { Container } from "react-bootstrap";

export default function layout({ children }: { children: ReactNode }) {
  return <Container>{children}</Container>;
}
