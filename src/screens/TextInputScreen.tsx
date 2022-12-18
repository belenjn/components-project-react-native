import React, {useState} from 'react';
import {StyleSheet, View} from 'react-native';
import {TextInput} from 'react-native-gesture-handler';
import {HeaderTitle} from '../components/HeaderTitle';
import {styles} from '../theme/appTheme';

export const TextInputScreen = () => {
  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
  });

  return (
    <View style={styles.globalMargin}>
      <HeaderTitle title="TextInputs" />
      <TextInput style={stylesScreen.inputStyle} />
      <TextInput style={stylesScreen.inputStyle} />
      <TextInput style={stylesScreen.inputStyle} />
      <HeaderTitle title={JSON.stringify(form, null, 3)} />
    </View>
  );
};

const stylesScreen = StyleSheet.create({
  inputStyle: {
    borderWidth: 1,
    borderRadius: 5,
    borderColor: 'rgba(0, 0, 0, 0.3)',
    height: 50,
    paddingHorizontal: 10,
    marginVertical: 10,
  },
});
