/* eslint-disable @typescript-eslint/no-unused-vars */
import React, {useState} from 'react';
import {
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  StyleSheet,
  View,
} from 'react-native';
import {TextInput} from 'react-native-gesture-handler';
import {HeaderTitle} from '../components/HeaderTitle';
import {styles} from '../theme/appTheme';

export const TextInputScreen = () => {
  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
  });

  const onChange = (value: string, field: string) => {
    setForm({
      ...form,
      [field]: value,
    });
  };

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
      <ScrollView>
        <View style={styles.globalMargin}>
          <HeaderTitle title="TextInputs" />
          <TextInput
            style={stylesScreen.inputStyle}
            placeholder="Put your name"
            autoCorrect={false}
            autoCapitalize="words"
            onChangeText={value => onChange(value, 'name')}
          />
          <TextInput
            style={stylesScreen.inputStyle}
            placeholder="Put your email"
            autoCorrect={false}
            onChangeText={value => onChange(value, 'email')}
            keyboardType="email-address"
            keyboardAppearance="dark"
          />
          <HeaderTitle title={JSON.stringify(form, null, 3)} />

          <HeaderTitle title={JSON.stringify(form, null, 3)} />

          <TextInput
            style={stylesScreen.inputStyle}
            placeholder="Put your phone"
            autoCorrect={false}
            onChangeText={value => onChange(value, 'phone')}
            keyboardType="phone-pad"
          />
          <HeaderTitle title={JSON.stringify(form, null, 3)} />
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
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
