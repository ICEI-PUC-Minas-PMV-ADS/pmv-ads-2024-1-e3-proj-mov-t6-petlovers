import React, { useEffect } from 'react';
import { Appbar, Text } from 'react-native-paper';
import { getAuth } from "firebase/auth";
import { useDispatch, useSelector } from 'react-redux';
import { login, logout } from '../redux/authSlice';

const Header = ({ showHeader }) => {
  if (!showHeader) {
    return null;
  }
  const auth = getAuth();
  const user = auth.currentUser;
  const dispatch = useDispatch();
  const displayName = useSelector((state) => state.auth.displayName);

  useEffect(() => {    
    if (user) {
      dispatch(login({ displayName: user.displayName }));
    } else {
      dispatch(logout());
    }
  }, [dispatch, user]);

  return (
    <Appbar.Header style={styles.header}>
      <Appbar.Content
        title="PetLovers"
        titleStyle={styles.title}
        style={styles.content}
      />
      {user ? (<Text style={styles.nameLogon} >Olá, {displayName}! </Text>) : ('')}   
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
    alignItems: 'flex-start',
    justifyContent: 'center',
    flex: 1,
  },
  nameLogon: {
    color: '#5F5B5B',
    fontSize: 12,
    marginRight: 15,
  }
};

export default Header;


