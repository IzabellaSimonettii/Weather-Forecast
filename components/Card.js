import React from 'react';
import { View, StyleSheet } from 'react-native';

const Card = (props) => {
  return (
    <View style={{...styles.card, ...props.styles}}>
      {props.children}
    </View>
  );
}


const styles = StyleSheet.create({
  card: {

    alignItems: 'center',
    shadowColor: 'black',
    borderColor: 'black',
    shadowRadius: 6,
    shadowOpacity: 0.32,
    elevation: 4,
    padding: 12,
    borderRadius: 12,
  
    textShadowOffset: {
      width: 0,
      height: 2,
      margin:10
    },
  }
})

export default Card;
