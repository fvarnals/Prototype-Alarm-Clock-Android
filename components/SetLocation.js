import React from 'react';
import { Button } from 'react-native';

const setLocation = props => {
  return (
    <Button title="Set Location" onPress={props.onGetLocation} />
  );
};

export default setLocation;
