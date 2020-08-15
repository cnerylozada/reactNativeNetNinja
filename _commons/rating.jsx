import React, { Fragment } from "react";
import { AntDesign } from "@expo/vector-icons";

const Rating = ({ rating }) => {
  const numberOfIcons = new Array(+rating).fill("");
  return numberOfIcons.map((_, index) => (
    <Fragment key={index}>
      <AntDesign name="staro" size={20} color="blue" />
    </Fragment>
  ));
};

export default Rating;
