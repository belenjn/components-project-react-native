/* eslint-disable react-native/no-inline-styles */
import React, {useContext} from 'react';
import {Text, View} from 'react-native';
import {HeaderTitle} from '../components/HeaderTitle';
import {styles} from '../theme/appTheme';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {ThemeContext} from '../context/themeContext/ThemeContext';

export const ChangeThemeScreen = () => {
  const {setDarkTheme} = useContext(ThemeContext);
  return (
    <View style={styles.globalMargin}>
      <HeaderTitle title="Themes" />
      <TouchableOpacity
        onPress={setDarkTheme}
        activeOpacity={0.8}
        style={{
          backgroundColor: '#5856d6',
          justifyContent: 'center',
          alignItems: 'center',
          width: 150,
          height: 50,
          borderRadius: 20,
        }}>
        <Text style={{color: 'white', textAlign: 'center', fontSize: 18}}>
          Change theme
        </Text>
      </TouchableOpacity>
    </View>
  );
};
