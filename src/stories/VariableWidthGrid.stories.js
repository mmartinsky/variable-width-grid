import React from "react";

import VariableWidthGrid from "../VariableWidthGrid";

export default {
  title: "Example/VariableWidthGrid",
  component: VariableWidthGrid,
};

const Template = (args) => <VariableWidthGrid {...args} />;

const c = [...Array(20).keys()].map((_, idx) => {
  return <span key={idx}>Item {idx}</span>;
});

export const Default = Template.bind({});
Default.args = {
  children: c,
};

export const SingleItem = Template.bind({});
SingleItem.args = {
  children: <span>Item 1</span>,
};
