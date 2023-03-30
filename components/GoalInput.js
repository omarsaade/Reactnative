import React from 'react';
import {View, Button, TextInput, StyleSheet} from 'react-native';

const GoalInput = props => {
  return (
    <View style={styles.inputContainer}>
      <TextInput
        onChangeText={props.onGoalInputHandler}
        style={styles.textInput}
        placeholder="Your course goal!"
        value={props.enteredGoal}
      />
      <Button title="Add Goal" onPress={props.onAddGoal} />
    </View>
  );
};

const styles = StyleSheet.create({
  inputContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 24,
    borderBottomColor: '#cccccc',
    borderBottomWidth: 1,
  },
  textInput: {
    borderWidth: 1,
    borderColor: '#cccccc',
    width: '70%',
    padding: 8,
  },
});

export default GoalInput;
