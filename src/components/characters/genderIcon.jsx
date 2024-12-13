import React, {Component} from 'react';
import {Man, Woman, Command} from 'iconsax-react-native';
import {Colors} from 'react-native/Libraries/NewAppScreen';
import {genderTypes} from '../../utils/constant';

const GenderIcons = ({gender, size}) => {
  if (gender == genderTypes.MALE) {
    return <Man size={size} color={Colors.BLACK} />;
  }
  if (gender == genderTypes.FEMALE) {
    return <Woman size={size} color={Colors.BLACK} />;
  }
  if (gender == genderTypes.UNNKNOWN) {
    return <Command size={size} color={Colors.BLACK} />;
  }
};
export default GenderIcons;
