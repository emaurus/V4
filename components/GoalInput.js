import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet } from 'react-native';

const GoalInput = props => {
  const [enteredGoal, setEnteredGoal] = useState('');

  const goalInputHandler = enteredText => {
    setEnteredGoal(enteredText);
  };

  return (
    <View style={styles.inputContainer}>
      <TextInput
        placeholder="Unesi ime i prezime"
        style={styles.input}
        onChangeText={goalInputHandler}
        value={enteredGoal}
      />
      <Button title="OK" 
      style={styles.btn}
      onPress={props.onAddGoal.bind(this, enteredGoal)} 
      color="#7E7EDC"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  inputContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  input: {
    width: '80%',
    borderColor: '#7E7EDC',
    borderWidth: 2,
    borderRadius: 10,
    padding: 10,
    margin: 10,
    fontFamily: 'Helvetica',
    fontSize: 14,
    color: '#7E7EDC'
  },
  btn: {
  backgroundColor: "#7E7EDC"
  }
});

export default GoalInput;