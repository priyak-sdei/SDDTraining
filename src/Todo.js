import React, { useState } from 'react';
import { View, TextInput, Button, Text, StyleSheet } from 'react-native';

const TodoList = () => {
  const [taskName, setTaskName] = useState('');
  const [taskDescription, setTaskDescription] = useState('');
  const [tasks, setTasks] = useState([]);

  const handleAddTask = () => {
    if (taskName.trim() !== '') {
      setTasks([...tasks, { name: taskName, description: taskDescription }]);
      setTaskName('');
      setTaskDescription('');
    }
  };
   const handleToggleTask = (index) => {
    const newTasks = [...tasks];
    newTasks[index].completed = !newTasks[index].completed;
    setTasks(newTasks);
  };
  const handleEditTask = (index) => {
    const newTasks = [...tasks];
    newTasks[index].editing = true;
    setTasks(newTasks);
  };
  const handleSaveTask = (index) => {
    const newTasks = [...tasks];
    newTasks[index].name = taskName;
    newTasks[index].description = taskDescription;
    newTasks[index].editing = false;
    setTasks(newTasks);
    setTaskName('');
    setTaskDescription('');
  };
  const handleDeleteTask = (index) => {
    const newTasks = [...tasks];
    newTasks.splice(index, 1);
    setTasks(newTasks);
  };

  return (
    <View style={styles.container}>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Task name"
          value={taskName}
          onChangeText={setTaskName}
        />
        <TextInput
          style={styles.input}
          placeholder="Task description"
          value={taskDescription}
          onChangeText={setTaskDescription}
        />
        <Button
          title="Add task"
          onPress={handleAddTask}
        />
      </View>
       <View style={styles.taskList}>
        {tasks.map((task, index) => (
          <View style={[styles.taskItem, task.completed && styles.completedTask]} key={index}>
            {task.editing ? (
              <View style={styles.editingContainer}>
                <TextInput
                  style={styles.editingInput}
                  placeholder="Task name"
                  value={taskName}
                  onChangeText={setTaskName}
                />
                <TextInput
                  style={styles.editingInput}
                  placeholder="Task description"
                  value={taskDescription}
                  onChangeText={setTaskDescription}
                />
                <Button
                  title="Save"
                  onPress={() => handleSaveTask(index)}
                />
              </View>
            ) : (
              <>
                <Text style={styles.taskName}>{task.name}</Text>
                <Text style={styles.taskDescription}>{task.description}</Text>
                <View style={styles.actionsContainer}>
                  <Button
                    title={task.completed ? 'Incomplete' : 'Complete'}
                    onPress={() => handleToggleTask(index)}
                  />
                  <Button
                    title="Edit"
                    onPress={() => handleEditTask(index)}
                  />
                  <Button
                    title="Delete"
                    onPress={() => handleDeleteTask(index)}
                  />
                </View>
              </>
            )}
          </View>
        ))}
      </View>
    </View>
  );
};


const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: 'white',
  },
  inputContainer: {
    marginBottom: 20,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 10,
    marginBottom: 10,
  },
  taskList: {
    flex: 1,
  },
  taskItem: {
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
    paddingVertical: 10,
  },
  taskName: {
    fontWeight: 'bold',
  },
  taskDescription: {
    color: '#666',
  },
});

export default TodoList;