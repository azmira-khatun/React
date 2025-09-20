import React from "react";

const InternalCss = () => {
  const parent = {
    color: "red",
    backgroundColor: "gray",
  };
  return (
    <div>
      <h1 style={parent}>This is internal css page</h1>
    </div>
  );
};

export default InternalCss;
