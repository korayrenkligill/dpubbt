import React from "react";

type Props = {
  width?: number;
  height?: number;
  backgroundColor?: string;
  image: string;
  top?: string;
  left?: string;
  right?: string;
  bottom?: string;
  opacity?: number;
};

const Shape = ({
  width = 100,
  height = 100,
  backgroundColor = "blue",
  image,
  top,
  left,
  right,
  bottom,
  opacity = 1,
}: Props) => {
  return (
    <div
      className="customShape"
      style={{
        backgroundColor: backgroundColor,
        top: top ?? "auto",
        left: left ?? "auto",
        right: right ?? "auto",
        bottom: bottom ?? "auto",
        maskImage: `url('/images/shapes/${image}')`,
        width: `${width}px`,
        height: `${height}px`,
        opacity: opacity,

        backgroundSize: `cover`,
        maskSize: "cover",
        maskRepeat: "no-repeat",
        position: "absolute",
        zIndex: "-1",
      }}
    />
  );
};

export default Shape;
