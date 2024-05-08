import * as React from "react";
import { StyleSheet, View, Text } from "react-native";
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import ArrowLeft from "../components/ArrowLeft";

export default function Termos() {
  return (
    <KeyboardAwareScrollView style={{ flex: 1 }}>
      <View style={styles.container}>
        <View style={styles.arrow}>
          <ArrowLeft />
        </View>

        <Text style={[styles.title, { marginTop: 40 }]}>Termos e condições</Text>

        <Text style={styles.text}>
          Bem-vindo ao nosso aplicativo de cruzamento de cães. Ao acessar e usar este aplicativo, você concorda em cumprir estes termos e condições de uso. Por favor, leia-os atentamente antes de continuar a utilizar.
        </Text>

        <Text style={styles.text1}>1. Uso do Aplicativo</Text>
        <Text style={styles.text}>
          Você concorda em utilizar este aplicativo apenas para fins legais e de acordo com estes termos e condições. Você não deve utilizá-lo de qualquer forma que possa causar danos ao site ou interferir no seu funcionamento.
        </Text>

        <Text style={styles.text1}>2. Cadastro</Text>
        <Text style={styles.text}>
          Para acessar determinadas áreas ou utilizar determinados recursos, você pode ser solicitado a se registrar e fornecer informações pessoais. Você é responsável por manter a confidencialidade de suas informações de conta e por todas as atividades que ocorrerem sob sua conta.
        </Text>

        <Text style={styles.text1}>3. Conteúdo do Usuário</Text>
        <Text style={styles.text}>
          Você pode enviar conteúdo, como fotos e informações sobre seus cães. Ao fazer isso, você declara e garante que possui todos os direitos necessários sobre esse conteúdo e concede à empresa o direito não exclusivo, mundial, livre de royalties, sublicenciável e transferível de usar, reproduzir, modificar, adaptar, publicar, traduzir e distribuir seu conteúdo.
        </Text>

        <Text style={styles.text1}>4. Link para Terceiros</Text>
        <Text style={styles.text}>
          Nosso aplicativo pode conter links para sites de terceiros que não são controlados ou operados por nós. Não nos responsabilizamos pelo conteúdo, políticas de privacidade ou práticas de sites de terceiros.
        </Text>

        <Text style={styles.text1}>5. Isenção de Responsabilidade</Text>
        <Text style={styles.text}>
          O conteúdo desse aplicativo é fornecido apenas para fins informativos e não constitui aconselhamento profissional ou médico. Não nos responsabilizamos por quaisquer danos ou prejuízos decorrentes do uso deste aplicativo ou do conteúdo nele contido.
        </Text>

        <Text style={styles.text1}>6. Proibição de Uso Comercial e Exploração de Animais</Text>
        <Text style={styles.text}>
          Este aplicativo não deve ser utilizado para fins comerciais, revenda ou exploração de animais. Qualquer violação desta política resultará em medidas legais adequadas.
        </Text>

        <Text style={styles.text1}>7. Alterações nos Termos</Text>
        <Text style={styles.text}>
          Reservamos o direito de modificar estes termos e condições a qualquer momento, sem aviso prévio. É sua responsabilidade revisar periodicamente estes termos para estar ciente de quaisquer alterações.
        </Text>

        <Text style={styles.text1}>8. Lei Aplicável</Text>
        <Text style={styles.text}>
          Estes termos e condições são regidos e interpretados de acordo com as leis do [inserir país/estado], e você concorda irrevogavelmente com a jurisdição exclusiva dos tribunais desse país/estado.
        </Text>
        <Text style={styles.text}>
          Ao usar este aplicativo, você concorda com estes termos e condições de uso. Se você não concordar com estes termos, por favor, não continue a utilizar o aplicativo.
        </Text>
      </View>
    </KeyboardAwareScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  arrow: {
    position: "absolute",
    top: 10, // Ajuste aqui para posicionar a seta
    left: 20,
    zIndex: 1,
  },
  title: {
    color: "#5F5B5B",
    fontSize: 25,
    fontWeight: "bold",
    textAlign: "center",
  },
  text1: {
    color: "#5F5B5B",
    fontSize: 15,
    marginTop: 20,
    fontWeight: "bold",
  },
  text: {
    color: "#5F5B5B",
    fontSize: 13,
    marginTop: 20,
    fontWeight: "normal",
  },
});
