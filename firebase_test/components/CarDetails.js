// Eksempel: CarDetails.js
import React from 'react';
import { View, Text, button } from 'react-native';

const CarDetails = ({navigation}) => {
  return (
    <View>
      <Text>Car Details Screen</Text>
        <button
            title="Go to Car Details"
            onPress={() => navigation.navigate('Add_edit_Car')}
        /> 
    </View>
  );
};


export default CarDetails;
