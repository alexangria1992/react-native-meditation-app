import {View, TextInput, StyleSheet, Image} from 'react-native';
import React from 'react';
import {colors} from '../../../config/colors';

export const SecondaryInput = props => {
  const {placeHolder, value} = props;
  return (
    <View style={styles.container}>
      <TextInput
        secureTextEntry={true}
        style={styles.input}
        placeholder={placeHolder}
        value={value}
      />
      <View style={styles.eyeWrapper}>
        <Image source={require('../../../../assets/images/eye.png')} />
      </View>
    </View>
  );
};

export const styles = StyleSheet.create({
  container: {
    display: 'flex',
    backgroundColor: colors.bg,
    borderRadius: 15,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  input: {
    padding: 20,
  },
  eyeWrapper: {
    marginRight: 15,
  },
});
