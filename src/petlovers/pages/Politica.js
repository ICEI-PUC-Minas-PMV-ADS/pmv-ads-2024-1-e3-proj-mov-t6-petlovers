import * as React from "react";
import { StyleSheet, View, Text} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import ArrowLeft from "../components/ArrowLeft";

export default function Politica () {

    return (
 <KeyboardAwareScrollView style={{ flex: 1 }}>  
 <View style={styles.arrow}>
          <ArrowLeft />
        </View>
   
    <View style = {styles.container}> 

        <Text style={styles.title}>Política de Privacidade</Text>{'\n'}

        <Text style= {styles.text1}>
        Esta Política de Privacidade descreve como o aplicativo PetLover ("nós", "nosso", ou "o site") coleta, utiliza e compartilha informações pessoais. 
        Ao acessar ou usar nosso aplicativo, você concorda com os termos descritos nesta política
        </Text>
        <Text style= {styles.text1}> 1. Informações Coletadas </Text>
        <Text style= {styles.text}> Coletamos informações pessoais limitadas de nossos usuários para fornecer e melhorar nossos serviços. 
        As informações que coletamos podem incluir: {'\n'}
        Informações fornecidas voluntariamente por você, 
        como nome, endereço de e-mail, número de telefone, informações sobre seu cão, 
        entre outras, durante o processo de registro ou uso do aplicativo.{'\n'}
        Informações automaticamente coletadas, como endereço IP, tipo de navegador, páginas acessadas, 
        tempo de visita, entre outras, através de tecnologias de rastreamento e cookies. 
        </Text>


        <Text style = {styles.text1}>2. Uso das Informações </Text>
        <Text style = {styles.text}>Utilizamos as informações coletadas para:{'\n'}
        Fornecer e personalizar nossos serviços de acordo com suas preferências e necessidades.{'\n'}
        Facilitar o processo de cruzamento de cães e conexão entre criadores e proprietários de cães.{'\n'}
        Comunicar-se com você sobre sua conta, transações, atualizações e novidades sobre o site.{'\n'}
        Melhorar e otimizar a funcionalidade e desempenho do site.{'\n'}
        Cumprir obrigações legais e proteger nossos direitos legais</Text>

        <Text style = {styles.text1}>3. Compartilhamento de Informações</Text>
        <Text style = {styles.text}>Não compartilhamos suas informações pessoais com terceiros, exceto quando necessário para fornecer 
        nossos serviços ou cumprir obrigações legais. Podemos compartilhar informações com:{'\n'}
        Criadores e proprietários de cães para facilitar o processo de cruzamento e conexão.{'\n'}
        Prestadores de serviços terceirizados que nos auxiliam na operação do site.{'\n'}
        Autoridades governamentais quando exigido por lei ou para proteger nossos direitos legais.{'\n'}
        </Text>
      
        <Text style = {styles.text1}>4.Segurança das Informações</Text>
        <Text style = {styles.text}>Implementamos medidas de segurança adequadas para proteger suas informações pessoais contra acesso não autorizado, uso indevido ou alteração. 
        No entanto, é importante lembrar que nenhum método de transmissão ou armazenamento eletrônico 
        é completamente seguro e não podemos garantir a segurança absoluta de suas informações.
        </Text>

        <Text style = {styles.text1}>5. Menores de 18 Anos</Text>
        <Text style = {styles.text}>Nosso aplicativo não é destinado a menores de 18 anos e não coletamos 
        intencionalmente informações pessoais de crianças. Se tomarmos 
        conhecimento de que uma criança nos forneceu informações pessoais sem o consentimento dos 
        pais ou responsável, tomaremos medidas para remover essas informações de nossos registros.
        </Text>

        <Text style = {styles.text1}>6.Alterações nesta Política de Privacidade</Text>
        <Text style = {styles.text}>Reservamos o direito de atualizar ou modificar esta Política de Privacidade a qualquer momento, 
        a critério exclusivo nosso. Recomendamos revisar periodicamente esta política para estar ciente de quaisquer alterações. 
        O uso continuado do aplicativo após a publicação de alterações constituirá sua aceitação dessas alterações.
        </Text>

    </View>
    </ KeyboardAwareScrollView >
    );
}

const styles = StyleSheet.create ({
    container: {
        flex: 1,
        padding: 20,
      },
        title:{
            color: '#5F5B5B',
            fontSize: 25,
            marginTop: 26,
            fontWeight: 'bold',
            textAlign: 'center',
        },
        text1:{
            color: '#5F5B5B',
            fontSize: 15,
            marginTop: 40,
            fontWeight: 'bold',
        },
        text:{
            color: '#5F5B5B',
            fontSize: 13,
            marginTop: 40,
            fontWeight: 'normal',
        },
})