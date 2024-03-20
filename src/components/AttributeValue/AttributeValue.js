import React from "react";
import "./AttributeValue.css";

const AttributeValue = ({ attributeValues }) => {
  return (
    <div className="text-size">
      <p className="">
        <span className="fw-bold red-color">
          {attributeValues.attribute.name}
        </span>{" "}
        : {attributeValues.value}
      </p>
    </div>
  );
};

export default AttributeValue;
