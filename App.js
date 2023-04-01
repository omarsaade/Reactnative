import React, {useState} from 'react';
import {View, StyleSheet, FlatList, Button} from 'react-native';
import GoalInput from './components/GoalInput';
import GoalItem from './components/GoalItem';

const App = () => {
  const [enteredGoalText, setEnteredGoalText] = useState();
  const [courseGoals, setCourseGoals] = useState([]);
  const [modalIsVisible, setModalIsVisible] = useState(false);

  function startAddGoalHandler() {
    setModalIsVisible(true);
  }

  function endAddGoalHandler() {
    setModalIsVisible(false);
  }

  function goalInputHandler(enteredText) {
    setEnteredGoalText(enteredText);
  }

  function addGoalHandler() {
    console.log('hello');
    // console.log(courseGoals); //  [{"text":"Hello", key:3333442 }]
    setCourseGoals(currentCourseGoals => [
      ...currentCourseGoals,
      {text: enteredGoalText, id: Math.random() * 1000},
    ]);
    setEnteredGoalText('');
    endAddGoalHandler();
  }

  function deleteGoalHandler(id) {
    setCourseGoals(currentCourseGoals => {
      return currentCourseGoals.filter(goal => goal.id !== id);
    });
  }

  return (
    <View style={styles.appContainer}>
      <Button
        title="Add New Goal"
        color="#5e0acc"
        onPress={startAddGoalHandler}
      />

      <GoalInput
        visible={modalIsVisible}
        onAddGoal={addGoalHandler}
        onCancel={endAddGoalHandler}
        onGoalInputHandler={goalInputHandler}
        enteredGoal={enteredGoalText}
      />

      <View style={styles.goalsContainer}>
        <FlatList
          data={courseGoals}
          keyExtractor={item => item.id}
          //itemData.item.text
          renderItem={itemData => (
            <GoalItem
              text={itemData.item.text}
              onDeleteItem={() => deleteGoalHandler(itemData.item.id)}
            />
          )}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  appContainer: {
    paddingTop: 50,
    paddingHorizontal: 16,
    flex: 1, //wrap content by default
    backgroundColor: '#1e085a',
  },
  goalsContainer: {
    flex: 4,
  },
});

export default App;
// adb reverse tcp:8097 tcp:8097
