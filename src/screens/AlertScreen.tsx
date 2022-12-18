import React from 'react';
import {Alert, Button, View} from 'react-native';
import {HeaderTitle} from '../components/HeaderTitle';
import {styles} from '../theme/appTheme';

export const AlertScreen = () => {
  const showAlert = () => {
    Alert.alert(
      'This is an alert',
      'My alert message',
      [
        {
          text: 'Cancel',
          onPress: () => console.log('Cancel Pressed'),
          style: 'destructive',
        },
        {text: 'OK', onPress: () => console.log('OK Pressed')},
      ],
      {
        cancelable: true,
        onDismiss: () => console.log('onDismiss'),
      },
    );
  };

  const showPrompt = () => {
    Alert.prompt(
      'My prompt title',
      'This is the text',
      (value: string) => console.log('info: ', value),
      'plain-text',
    );
  };

  return (
    <View style={styles.globalMargin}>
      <HeaderTitle title="Alerts" />
      <Button title="Show alert" onPress={showAlert} />
      <Button title="Show Prompt" onPress={showPrompt} />
    </View>
  );
};
