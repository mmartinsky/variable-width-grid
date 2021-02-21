import React, { useRef } from "react";
import useComponentSize from "@rehooks/component-size";
import { determineNumColumns } from "./utils";

export interface VariableWidthGridProps {
  children: any;
  columnGap: number;
}

export function VariableWidthGrid(props: VariableWidthGridProps) {
  const { children, columnGap = 10 } = props;
  const ref = useRef(null);
  const { width } = useComponentSize(ref);
  const [sizes, setSizes] = React.useState([]);

  React.useEffect(() => {
    if (ref.current) {
      const childrenArray = Array.from(ref.current.children) as HTMLElement[];
      const childSizes = childrenArray.map((c: HTMLElement) => c.offsetWidth);
      setSizes(childSizes);
    }
  }, [children]);

  const numColumns = React.useMemo(() => determineNumColumns(width, sizes, columnGap), [width, sizes]);

  return (
    <div
      ref={ref}
      style={{
        display: "grid",
        gridTemplateColumns: `repeat(${numColumns || React.Children.count(children)}, max-content)`,
        gridColumnGap: `${columnGap}px`,
      }}
    >
      {children}
    </div>
  );
}
