import React from 'react';
import { StyleSheet, View } from 'react-native';
import { TextInput, useTheme, Text } from 'react-native-paper';

const FormInput = ({ errorText, value, onChangeText, ...props }) => {
  const { colors } = useTheme();

  return (
    <View style={styles.container}>
      <TextInput
        mode='outlined'
        value={value}
        onChangeText={onChangeText}
        theme={{
          colors: {
            primary: '#827397',
            text: 'black',
            placeholder: 'grey',
            background: 'white',
            surface: 'white',            
          },
          roundness: 10,
        }}
        style={[styles.input, errorText ? styles.inputError : null]}
        {...props}
      />
      {errorText ? <Text style={styles.error}>{errorText}</Text> : null}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginBottom: 10,
  },
  input: {
    marginBottom: 5,
  },
  error: {
    color: 'red',
    fontSize: 12,
    marginTop: 10,
    marginBottom: 10,
  },
});

export default FormInput;
