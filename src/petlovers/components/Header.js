import * as React from 'react';
import { Appbar } from 'react-native-paper';


const Header = () => (
  <Appbar.Header style={styles.header}>
      <Appbar.Content title="PetLovers" />
  </Appbar.Header>
);

const styles = {
  header: {
    backgroundColor: '#827397',
  },
  title: {
    fontWeight: 'bold',
  },
};

export default Header;