import React from 'react';
import { StyleSheet } from 'react-native';
import { TextInput, useTheme } from 'react-native-paper';

const FormInput = (props) => {
  const { colors } = useTheme();
  const [text, setText] = React.useState("");

  return (
    <TextInput
      mode='outlined'
      value={text}
      onChangeText={text => setText(text)}
      theme={{
        colors: {
          primary: '#827397',
          text: 'black',
          placeholder: 'gray',
          background: 'white',
          surface: 'white',
        },
        roundness: 10,
      }}
      style={styles.input}
      {...props}
    />
  );
};

const styles = StyleSheet.create({
  input: {
    width: '300',
    marginBottom: 10,
    //fontFamily: 'Poppins-Regular',
  }
});

export default FormInput;
