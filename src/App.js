import React, { useState } from 'react';
import Form from "./Form";
import Tasks from "./Tasks";
import Buttons from "./Buttons";
import Section from "./Section";
import Header from './Header';
import Container from './Container';


function App() {
  const [hideDone, sethideDone] = useState(false);
  const [tasks, setTasks] = useState([
    {id: 1, content: "testowe zadanie 1", done: false},
    {id: 2, content: "testowe zadanie 2", done: true},
  ]);
  
  const togglehideDone = () => {
    sethideDone(hideDone => !hideDone);
  };

  const removeTask = (id) => {
    setTasks(tasks => tasks.filter(task => task.id !== id));
  };

  const toggleTaskDone = (id) => {
    setTasks(tasks => tasks.map(task => {
      if(task.id === id) {
        return {...task, done : !task.done};
      }
      return task;
    }));
  };

  const setAllDone = () => {
    setTasks(tasks => tasks.map(task => ({
      ...task, 
      done: true,
    })));
  };

  const addNewTask = (content) => {
    setTasks(tasks => [
      ...tasks,
      {
        content,
        done: false,
        id: tasks.length === 0 ? 1 : tasks[tasks.length - 1].id + 1, 
      },
    ]);
  };

  return (
     <Container> 
        <Header title="Lista zadań" />
        <Section title="Dodaj nowe zadanie" list={<Form addNewTask={addNewTask}/>} />

        <Section title="Lista zadań" list={
                <Tasks
                tasks={tasks}
                hideDone={hideDone}
                removeTask={removeTask}
                toggleTaskDone={toggleTaskDone}
                />}
                extraHeaderContent={
                  <Buttons
                  tasks={tasks}
                  hideDone={hideDone} 
                  togglehideDone={togglehideDone}
                  setAllDone={setAllDone}
                  />} />
    </Container>
  );
}

export default App;
