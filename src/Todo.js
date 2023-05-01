import React, { useState } from 'react';
import { View, Text, FlatList, TextInput, Button, TouchableOpacity } from 'react-native';

const TodoList = () => {
  const [todos, setTodos] = useState([]);
  const [text, setText] = useState('');
  const [editingId, setEditingId] = useState(null);

  const addTodo = () => {
    if (text.trim() === '') {
      return;
    }
    setTodos([...todos, { id: Date.now(), text, completed: false }]);
    setText('');
  };

  const deleteTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const editTodo = (id, newText) => {
    setTodos(
      todos.map((todo) => {
        if (todo.id === id) {
          return { ...todo, text: newText };
        } else {
          return todo;
        }
      })
    );
    setEditingId(null);
  };

  const toggleCompleteTodo = (id) => {
    setTodos(
      todos.map((todo) => {
        if (todo.id === id) {
          return { ...todo, completed: !todo.completed };
        } else {
          return todo;
        }
      })
    );
  };

  const renderItem = ({ item }) => (
    <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
      {editingId === item.id ? (
        <TextInput
          style={{ flex: 1, height: 40, borderColor: 'gray', borderWidth: 1 }}
          value={item.text}
          onChangeText={(text) => editTodo(item.id, text)}
          onBlur={() => setEditingId(null)}
          autoFocus={true}
          selectTextOnFocus={true}
        />
      ) : (
        <TouchableOpacity onPress={() => toggleCompleteTodo(item.id)}>
          <Text style={{ textDecorationLine: item.completed ? 'line-through' : 'none' }}>{item.text}</Text>
        </TouchableOpacity>
      )}
      <View style={{ flexDirection: 'row' }}>
        {editingId !== item.id && (
          <>
            <Button title="Edit" onPress={() => setEditingId(item.id)} />
            <View style={{ width: 5 }} />
          </>
        )}
        <Button title="Delete" onPress={() => deleteTodo(item.id)} />
      </View>
    </View>
  );

  return (
    <View>
      <View style={{ flexDirection: 'row', marginBottom: 10 }}>
        <TextInput
          style={{ flex: 1, height: 40, borderColor: 'gray', borderWidth: 1 }}
          placeholder="Add a new to-do item"
          value={text}
          onChangeText={(text) => setText(text)}
        />
        <Button title="Add" onPress={addTodo} />
      </View>
      <FlatList
        data={todos}
        renderItem={renderItem}
        keyExtractor={(item) => item.id.toString()}
        extraData={editingId}
      />
      {/* git status */}
    </View>
  );
};

export default TodoList;
