/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {View} from 'react-native';
import {CustomSwitch} from '../components/CustomSwitch';
import {HeaderTitle} from '../components/HeaderTitle';

export const SwitchScreen = () => {
  return (
    <View style={{marginTop: 100, marginHorizontal: 20}}>
      <HeaderTitle title="Switches" />
      <CustomSwitch isOn={true} />
    </View>
  );
};
