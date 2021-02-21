import React from "react";
import { ResizableBox } from "react-resizable";
import { VariableWidthGrid } from "../VariableWidthGrid";
import "react-resizable/css/styles.css";

export default {
  title: "Example",
  component: VariableWidthGrid,
};

const c = [...Array(20).keys()].map((_, idx) => {
  if (idx % 5 === 0) {
    return <span key={idx}>Long Item {idx}</span>;
  }
  return <span key={idx}>Item {idx}</span>;
});

export const Sandbox = (args) => (
  <ResizableBox width={400} style={{ border: "1px solid black" }}>
    <VariableWidthGrid>{c}</VariableWidthGrid>
  </ResizableBox>
);
