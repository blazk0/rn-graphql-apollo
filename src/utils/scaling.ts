import { Dimensions } from 'react-native';

export const { width, height } = Dimensions.get('window');

export const guidelineBaseWidth = 375;
export const guidelineBaseHeight = 812;

export const scale = (size: number) => {
  return (width / guidelineBaseWidth) * size;
};

export const verticalScale = (size: number) => {
  return (height / guidelineBaseHeight) * size;
};

export const moderateScale = (size: number, factor = 0.5) => {
  return size + (scale(size) - size) * factor;
};
