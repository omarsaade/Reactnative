import React from 'react';
import Colors from '../../constants/colors';
import {View, StyleSheet} from 'react-native';

const Card = ({children}) => {
  return <View style={styles.inputContainer}>{children}</View>;
};

export default Card;

const styles = StyleSheet.create({
  inputContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
    marginHorizontal: 24,
    borderRadius: 8,
    marginTop: 36,
    backgroundColor: Colors.primary800,
    elevation: 4,
    shadowColor: 'black',
    shadowOffset: {width: 0, height: 2},
    shadowRadius: 6,
    shadowOpacity: 1,
  },
});
