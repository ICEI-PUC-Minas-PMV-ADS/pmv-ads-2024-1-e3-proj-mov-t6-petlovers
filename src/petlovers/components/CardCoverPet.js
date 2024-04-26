import * as React from 'react';
import { Card } from 'react-native-paper';

const CardCoverPet = () => (
  <Card>
    <Card.Cover
      source={{ uri: 'https://picsum.photos/700' }}
      resizeMode="cover" 
      style={{ height: 300, borderRadius: 0  }}
    />
  </Card>
);

export default CardCoverPet;
