import React from 'react';
import {Text, StyleSheet, Platform} from 'react-native';

const Title = ({children}) => {
  return <Text style={styles.title}>{children}</Text>;
};

export default Title;

const styles = StyleSheet.create({
  title: {
    fontFamily: 'OpenSans-Bold',
    fontSize: 24,
    color: 'white',
    textAlign: 'center',
    borderColor: 'white',
    padding: 12,
    // borderWidth: Platform.OS === 'android' ? 2 : 0,
    borderWidth: Platform.select({ios: 0, android: 2}),
    // deyman he el max width refer lal prarent container yalli bte7wiya
    maxWidth: '80%',
    // the 300 pixels is taken , unless taht would be more than 80% of the
    // parent container , in which case the 80% become active.
    width: 300,
  },
});
