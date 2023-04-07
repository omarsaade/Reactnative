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
    /*
 ios and get rid

of the platform API usage here and just set border,

border width, to two here, because we know that this file

with these style settings will only be executed for Android.

And on the other hand on title iOS JS, we can also get rid

of that code and always set border width to zero,

or simply get rid of all the border settings altogether

since we want no border.


    */
    borderWidth: 0,
    // deyman he el max width refer lal prarent container yalli bte7wiya
    maxWidth: '80%',
    // the 300 pixels is taken , unless taht would be more than 80% of the
    // parent container , in which case the 80% become active.
    width: 300,
  },
});

/*
extension automatically

here, I removed it, and you wanna make sure you remove that

on all the screens where the title is used

because you still import as if the file

would just be named title.JS, and under the hood,

React Native will pick the proper file based on the platform

on which you're running.

And so now we could go to title. Android and get rid

of the platform API usage here and just set border,

border width, to two here, because we know that this file

with these style settings will only be executed for Android.

And on the other hand on title iOS JS, we can also get rid

of that code and always set border width to zero,

or simply get rid of all the border settings altogether

since we want no border.

Now it might be overkill here for the title,

where this simple switch was actually enough to achieve

the desired result, but it is a feature you must know.

And therefore, here, I'm showing this to you by building

the same Component twice in different files

with different file endings, with slightly different styles.


*/
