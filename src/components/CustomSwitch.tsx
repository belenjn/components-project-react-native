import React, {useState} from 'react';
import {Platform, Switch} from 'react-native';

interface Props {
  isOn: boolean;
}

export const CustomSwitch = ({isOn}: Props) => {
  const [isEnabled, setIsEnabled] = useState(isOn);
  const toggleSwitch = () => setIsEnabled(previousState => !previousState);

  return (
    <Switch
      trackColor={{false: '#D9D9DB', true: '#5856D6'}}
      thumbColor={Platform.OS === 'android' ? '#5856D6' : ''}
      // ios_backgroundColor="#3e3e3e"
      onValueChange={toggleSwitch}
      value={isEnabled}
    />
  );
};
