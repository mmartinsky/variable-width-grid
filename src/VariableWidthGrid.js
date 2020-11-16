import React from "react";
import ReactDOM from "react-dom";
import PropTypes from "prop-types";
import useDimensions from "react-use-dimensions";

function VariableWidthGrid(props) {
  const { children } = props;
  const [ref, { width }] = useDimensions();
  const [sizes, setSizes] = React.useState([]);

  function measureChildren(children) {
    return children.map((child) => child.offsetWidth);
  }
  React.useEffect(() => {
    if (ref.current) {
      const sizes = measureChildren(Array.from(ref.current.children));
      setSizes(sizes);
    }
  }, [children]);

  React.useEffect(() => {
    console.log(width);
  }, [sizes]);

  return (
    <div ref={ref} style={{ display: "grid", gridTemplateColumns: `repeat(${props.children.length}, max-content)` }}>
      {props.children}
    </div>
  );
}

VariableWidthGrid.propTypes = {};

export default VariableWidthGrid;
