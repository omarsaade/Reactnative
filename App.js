import React, {useState} from 'react';
import {View, StyleSheet, FlatList} from 'react-native';
import GoalInput from './components/GoalInput';
import GoalItem from './components/GoalItem';

const App = () => {
  const [enteredGoalText, setEnteredGoalText] = useState();
  const [courseGoals, setCourseGoals] = useState([]);

  function goalInputHandler(enteredText) {
    setEnteredGoalText(enteredText);
  }

  function addGoalHandler() {
    // console.log(courseGoals); //  [{"text":"Hello", key:3333442 }]
    setCourseGoals(currentCourseGoals => [
      ...currentCourseGoals,
      {text: enteredGoalText, id: Math.random() * 1000},
    ]);
    setEnteredGoalText('');
  }
  return (
    <View style={styles.appContainer}>
      <GoalInput
        onAddGoal={addGoalHandler}
        onGoalInputHandler={goalInputHandler}
        enteredGoal={enteredGoalText}
      />
      <View style={styles.goalsContainer}>
        <FlatList
          data={courseGoals}
          keyExtractor={item => item.id}
          //itemData.item.text
          renderItem={itemData => <GoalItem text={itemData.item.text} />}
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
  },
  goalsContainer: {
    flex: 4,
  },
});

export default App;
