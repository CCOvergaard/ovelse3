// Eksempel: Carlist.js
import React from 'react';
import { View, Text, button } from 'react-native';

const Carlist = ({navigation}) => {
  return (
    <View>
      <Text>Car List Screen</Text>
        <button
            title="Go to Car Details"
            onPress={() => navigation.navigate('CarDetails')}
        /> 
    </View>
  );
};


export default Carlist;
