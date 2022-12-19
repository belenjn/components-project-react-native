import React from 'react';
import {View} from 'react-native';
import {HeaderTitle} from '../components/HeaderTitle';
import {styles} from '../theme/appTheme';

export const InfiniteScrollScreen = () => {
  return (
    <View style={styles.globalMargin}>
      <HeaderTitle title="Infinite Scroll" />
    </View>
  );
};
