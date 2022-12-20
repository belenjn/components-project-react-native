/* eslint-disable react-native/no-inline-styles */
/* eslint-disable @typescript-eslint/no-unused-vars */
import React, {useContext} from 'react';
import {RefreshControl, Text, View} from 'react-native';
import {HeaderTitle} from '../components/HeaderTitle';
import {styles} from '../theme/appTheme';
import {ScrollView} from 'react-native-gesture-handler';
import {useState} from 'react';
import {ThemeContext} from '../context/themeContext/ThemeContext';

export const PullToRefreshScreen = () => {
  const {
    theme: {colors},
  } = useContext(ThemeContext);
  const [refreshing, setRefreshing] = useState(false);
  const [data, setData] = useState<string>();

  const onRefresh = () => {
    setRefreshing(true);
    setTimeout(() => {
      console.log('ended');
      setRefreshing(false);
      setData('Hola');
    }, 3500);
  };

  return (
    <ScrollView
      refreshControl={
        <RefreshControl
          refreshing={refreshing}
          onRefresh={onRefresh}
          progressViewOffset={10}
          progressBackgroundColor="#5856D6" // only for android
          colors={['blue', 'purple', 'green']} // only for android
          style={{backgroundColor: colors.primary}} // onfly for ios
          //   tintColor="white" // only for ios
        />
      }>
      <View style={styles.globalMargin}>
        <HeaderTitle title="Pull to refresh" />
        {data && <Text style={{color: colors.text}}>{data}</Text>}
      </View>
    </ScrollView>
  );
};
