import React from 'react';
import { StyleSheet, View } from 'react-native';
import { TextInput, useTheme, Text } from 'react-native-paper';

const FormInput = ({ label, errorText, value, onChangeText, ...props }) => {
  const { colors } = useTheme();

  // Função para formatar a data de nascimento (DD/MM/AAAA)
  const formatBirthDate = (text) => {
    if (text.length === 2 && text.length > value.length) {
      return text + '/';
    } else if (text.length === 5 && text.length > value.length) {
      return text + '/';
    }
    return text;
  };

  // Função para formatar o número de telefone (DD) XXXX-XXXXX
  const formatPhoneNumber = (text) => {
    // Remove todos os caracteres não numéricos
    text = text.replace(/\D/g, '');
  
    // Verifica se o texto possui o DDD (código local)
    if (text.length > 2) {
      // Separa o DDD do restante do número
      const ddd = text.substring(0, 2);
      const rest = text.substring(2);
  
      // Verifica se o DDD possui dois dígitos (padrão brasileiro)
      if (ddd.length === 2) {
        // Limita o número de dígitos após o DDD a no máximo 9
        const formattedRest = rest.substring(0, 9);
  
        // Formata o número de telefone
        let formattedNumber = `(${ddd}) `;
  
        // Verifica se o número possui o nono dígito (9º dígito)
        if (formattedRest.length > 4) {
          formattedNumber += formattedRest.substring(0, 5) + '-' + formattedRest.substring(5);
        } else {
          formattedNumber += formattedRest;
        }
  
        return formattedNumber;
      }
    }
  
    // Retorna o texto original se não atender aos critérios de formatação
    return text;
  };

  return (
    <View style={styles.container}>
      <TextInput
        mode='outlined'
        value={value}
        label={label}
        //onChangeText={onChangeText}
        onChangeText={(text) => {
          // Verifica se o label é "Data de nascimento" para aplicar a formatação específica
          if (label === 'Data de nascimento') {
            onChangeText(formatBirthDate(text));
          } else if (label === 'Contato (WhatsApp)') {
            onChangeText(formatPhoneNumber(text));
          } else {
            onChangeText(text);
          }
        }}
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
