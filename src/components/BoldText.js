import { Text } from 'react-native';
import React from 'react';
import colors from '../assets/colors';
import fonts from '../assets/fonts';
import {
  responsiveFontSize,
  responsiveHeight,
  responsiveWidth,
} from '../utils/helperFunctions';

const BoldText = ({
  color,
  size,
  font,
  align,
  title,
  mrgnTop,
  numberOfLines,
  width,
  fontWeight,
}) => {
  return (
    <Text
      numberOfLines={numberOfLines}
      style={{
        color: color || colors.white,
        width: responsiveWidth(width),
        fontWeight: fontWeight || 'bold',
        marginTop: responsiveHeight(mrgnTop),
        fontFamily: font || fonts.Bold,
        fontSize: responsiveFontSize(size || 4),
        textAlign: align,
      }}
    >
      {title}
    </Text>
  );
};

export default BoldText;
