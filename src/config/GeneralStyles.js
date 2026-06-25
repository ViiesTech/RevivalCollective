import { StyleSheet } from 'react-native';
import { arabic } from '../utils/Utility';

const GeneralStyles = StyleSheet.create({
  maxWidth: maxWidth => ({ maxWidth: maxWidth }),
  width: width => ({ width: width }),
  height: height => ({ height: height }),
  flexGrow: flexGrow => ({ flexGrow: flexGrow }),
  flex: flex => ({ flex: flex }),
  flexDirection: direction => ({ flexDirection: direction }),
  alignItems: alignItems => ({ alignItems: alignItems }),
  marginTop: marginTop => ({ marginTop: marginTop }),
  marginVertical: marginVertical => ({ marginVertical: marginVertical }),
  justifyContent: justifyContent => ({ justifyContent: justifyContent }),
  marginBottom: marginBottom => ({ marginBottom: marginBottom }),
  textAlign: textAlign => ({ textAlign: textAlign }),
  backgroundColor: backgroundColor => ({ backgroundColor: backgroundColor }),
  color: color => ({ color: color }),
  padding: padding => ({ padding: padding }),
  marginLeft: marginLeft => ({ marginLeft: marginLeft }),
  marginRight: marginRight => ({ marginRight: marginRight }),
  marginHorizontal: marginHorizontal => ({
    marginHorizontal: marginHorizontal,
  }),
  paddingRight: paddingRight => ({ paddingRight: paddingRight }),
  paddingLeft: paddingLeft => ({ paddingLeft: paddingLeft }),
  paddingBottom: paddingBottom => ({ paddingBottom: paddingBottom }),
  paddingTop: paddingTop => ({ paddingTop: paddingTop }),
  borderColor: borderColor => ({ borderColor: borderColor }),
  paddingHorizontal: pH => ({ paddingHorizontal: pH }),
  paddingVertical: pV => ({ paddingVertical: pV }),
  borderBottomWidth: borderBottomWidth => ({
    borderBottomWidth: borderBottomWidth,
  }),
  textTransform: textTransform => ({ textTransform: textTransform }),
  centerCenter: { alignItems: 'center', justifyContent: 'center' },
  iconTransform: { transform: [{ rotate: arabic ? '180deg' : '0deg' }] },
  top: top => ({ top: top }),
  bottom: bottom => ({ bottom: bottom }),
  left: left => ({ left: left }),
  right: right => ({ right: right }),
  lineHeight: lineHeight => ({ lineHeight: lineHeight }),
  position: position => ({ position: position }),
});

export default GeneralStyles;
