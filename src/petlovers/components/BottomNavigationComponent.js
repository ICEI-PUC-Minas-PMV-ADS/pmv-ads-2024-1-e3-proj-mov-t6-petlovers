import * as React from 'react';
import { BottomNavigation, Text } from 'react-native-paper';

const HomeRoute = () => <Text>Home</Text>;
const InformationRoute = () => <Text>Information</Text>;
const NotificationsRoute = () => <Text>Notifications</Text>;
const AccountRoute = () => <Text>Account</Text>;

const BottomNavigationComponent = () => {
  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    { key: 'home', title: '', focusedIcon: 'home', unfocusedIcon: 'home-outline'},
    { key: 'information', title: '', focusedIcon: 'information', unfocusedIcon: 'information-outline'},
    { key: 'notifications', title: '', focusedIcon: 'bell', unfocusedIcon: 'bell-outline' },
    { key: 'account', title: '', focusedIcon: 'account', unfocusedIcon: 'account-outline' },
    
  ]);

  const renderScene = BottomNavigation.SceneMap({
    home: HomeRoute,
    information: InformationRoute,
    notifications: NotificationsRoute,
    account: AccountRoute,
  });

  return (
    <BottomNavigation
      navigationState={{ index, routes }}
      onIndexChange={setIndex}
      renderScene={renderScene}
    />
  );
};

export default BottomNavigationComponent;
