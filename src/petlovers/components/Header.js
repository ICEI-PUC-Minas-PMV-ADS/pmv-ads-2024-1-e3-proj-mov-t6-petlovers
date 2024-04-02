import React from 'react';
import { Appbar } from 'react-native-paper';

const Header = () => {
  return (
  <Appbar.Header style={styles.header}>
      <Appbar.Content
        title="PetLovers"
        titleStyle={styles.title}
        style={styles.content}
      />
    </Appbar.Header>
  );
};

const styles = {
  header: {
    backgroundColor: 'white',
  },
  title: {
    fontWeight: 'bold',
    color: '#5F5B5B',
    marginLeft: -20, 
  },
  content: {
    alignItems: 'flex-start', // Ajusta o alinhamento do conteúdo para a esquerda
    justifyContent: 'center', // Centraliza o conteúdo verticalmente
    flex: 1, // Garante que o conteúdo ocupe todo o espaço disponível
  },
};

export default Header;


