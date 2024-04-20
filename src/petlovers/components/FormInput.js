import React from "react";
import { StyleSheet, View } from "react-native";
import { TextInput, useTheme, Text } from "react-native-paper";

const FormInput = ({ label, value, onChangeText, error, ...props }) => {
  const { colors } = useTheme();

  //Função para formatar a data de nascimento
  const formatBirthDate = (text) => {
    // Remove todos os caracteres não numéricos
    text = text.replace(/\D/g, "");

    // Limita a entrada de caracteres
    text = text.substring(0, 8);

    // Adiciona as barras (/) conforme o usuário digita
    if (text.length > 2) {
      // Adiciona a primeira barra
      text = `${text.substring(0, 2)}/${text.substring(2)}`;
    }
    if (text.length > 5) {
      // Adiciona a segunda barra
      text = `${text.substring(0, 5)}/${text.substring(5)}`;
    }

    return text;
  };

  // Função para formatar o número de telefone (DD) XXXX-XXXXX
  const formatPhoneNumber = (text) => {
    // Remove todos os caracteres não numéricos
    text = text.replace(/\D/g, "");

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
          formattedNumber +=
            formattedRest.substring(0, 5) + "-" + formattedRest.substring(5);
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
        mode="outlined"
        value={value}
        label={label}
        error={error ? true : false}
        onChangeText={(text) => {
          if (label === "Data de nascimento") {
            onChangeText(formatBirthDate(text));
          } else if (label === "Contato (WhatsApp)") {
            onChangeText(formatPhoneNumber(text));
          } else {
            onChangeText(text);
          }
        }}
        theme={{
          colors: {
            primary: "#827397",
            text: "black",
            placeholder: "grey",
            background: "white",
            surface: "white",
            error: "red",
          },
          roundness: 10,
        }}
        style={styles.input}
        {...props}
      />
      {error && <Text style={styles.errorText}>{error}</Text>}
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
  errorText: {
    color: "red",
    fontSize: 12,
    marginTop: 5,
  },
});

export default FormInput;
