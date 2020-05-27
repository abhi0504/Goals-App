import React , { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';

export default function App() {

  const [addState , setAddState] = useState('')
  const [list , setList] = useState([])

  const addStateHandler = (event) => {
    setAddState(event)
  }

  const listHandler = () => {
    setList(handler => [...list , addState])
  }
  
  return (
    <View style={styles.screen}>
      <View style={styles.inputContainer}>
        <TextInput 
         placeholder="Course Goal" 
         style={styles.input}
         onChangeText={addStateHandler}
         value={addState}
         />
        <Button 
        title="ADD"
        onPress={listHandler}
        />
      </View>
      <View>
  {list.map(goal => <Text key={goal}>{goal}</Text>)}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    padding: 50
  },
  inputContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  input: {
    width: '80%',
    borderColor: 'black',
    borderWidth: 1,
    padding: 10
  }
});
