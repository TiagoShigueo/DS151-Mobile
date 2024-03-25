import { StyleSheet, Text, TextInput, View, Button } from 'react-native';
import React, { useState } from 'react';

export default function App() {
  const [task, setTask] = useState('');
  const [tasksList, setTasksList] = useState([]);

  const addTask = () => {
    if (task.trim() !== '') {
      setTasksList([...tasksList, task]);
      setTask('');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Lista de Tarefas</Text>
      <TextInput
        style={styles.input}
        placeholder='Digite uma nova tarefa'
        value={task}
        onChangeText={text => setTask(text)}
      />
      <Button title="Adicionar tarefa" onPress={addTask}/>
      {tasksList.map((item, index) => (
        <Text key={index} styles={styles.task}>{item}</Text>
      ))}
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
  },
  input: {
    // width: '80%',
    height: 40,
    borderColor: '#b0b0b0',
    borderRadius: 5,
    marginBottom: 10,
    paddingHorizontal: 10,
  },
  task: {
    fontSize: 15,
    marginTop: 5,
  },
});