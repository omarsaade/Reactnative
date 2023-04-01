import {View, Text, StyleSheet, Pressable} from 'react-native';

const GoalItem = props => {
  return (
    <View style={styles.goalItem}>
      <Pressable
        android_ripple={{color: '#210644'}}
        onPress={props.onDeleteItem}
        // style={({pressed}) => pressed && styles.pressedItem} //styling pressable for ios
      >
        <Text style={styles.goalText}>{props.text}</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  goalItem: {
    margin: 8,
    borderRadius: 6,
    backgroundColor: '#5e0acc',
  },
  goalText: {
    color: 'white',
    padding: 8,
  },
  // pressedItem: {
  //   opacity: 0.5,
  // },
});

export default GoalItem;
