import React from 'react';
import Form from "./Form";
import Tasks from "./Tasks";
import Buttons from "./Buttons";
import Section from "./Section";
import Header from './Header';
import Container from './Container';

const tasks = [
    {id: 1, content: "testowe zadanie 1", done: false},
    {id: 2, content: "testowe zadanie 2", done: true},
  ];

const hideDoneTasks = false;

function App() {
  return (
     <Container> 
        <Header title="Lista zadań" />
        <Section title="Dodaj nowe zadanie" list={<Form />} />

        <Section title="Lista zadań" list={
                <Tasks tasks={tasks} hideDoneTasks={hideDoneTasks} />}
                extraHeaderContent={
                  <Buttons tasks={tasks} hideDoneTasks={hideDoneTasks} />} />
    </Container>
  );
}

export default App;
