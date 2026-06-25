import React from 'react';
import { SvgXml } from 'react-native-svg';

const getTintedIcon = (icon, color) => {
  if (!color) {
    return icon;
  }

  return icon.replace(/#2E2E2E|#212121/gi, color);
};

const SVGXml = ({ icon, width = 24, height = 33, style, color }) => {
  return (
    <SvgXml
      xml={getTintedIcon(icon, color)}
      height={height}
      width={width}
      style={style}
    />
  );
};

export default SVGXml;
