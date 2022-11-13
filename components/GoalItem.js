import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const GoalItem = props => {
  return (
    <View style={styles.listItem}>
       <Text style={styles.text}> {props.title} </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  listItem: {
    backgroundColor: '#7E7EDC',
    borderRadius: 10,
    padding: 10,
    margin: 10,
    fontFamily: 'Helvetica',
    fontSize: 14,
    color: 'white'
  },
  text: {
    color: 'white'
  },
});

export default GoalItem;