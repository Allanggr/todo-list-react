import { Image, StyleSheet, View } from 'react-native';
import NewTask from './components/NewTask';
import TaskList from './components/TaskList';
import { useState } from 'react';
import { Task } from './dtos/Task';

export default function App() {
  const [tasks, setTasks] = useState<Task[]>([{ name: 'Estudar React Native', done: false, id: 1 }, { name: 'Estudar React', done: true, id: 2 }, { name: 'Estudar TypeScript', done: false, id: 3 }, { name: 'Estudar JavaScript', done: true, id: 4 }, { name: 'Estudar HTML', done: false, id: 5 }, { name: 'Estudar CSS', done: true, id: 6 }, { name: 'Estudar Java', done: false, id: 7 }, { name: 'Estudar Python', done: true, id: 8 }, { name: 'Estudar C#', done: false, id: 9 }, { name: 'Estudar C++', done: true, id: 10 }, { name: 'Estudar C', done: false, id: 11 }, { name: 'Estudar Ruby', done: true, id: 12 }, { name: 'Estudar Kotlin', done: false, id: 13 }, { name: 'Estudar Swift', done: true, id: 14 }, { name: 'Estudar Go', done: false, id: 15 }, { name: 'Estudar Rust', done: true, id: 16 }, { name: 'Estudar PHP', done: false, id: 17 }, { name: 'Estudar Dart', done: true, id: 18 }, { name: 'Estudar Lua', done: false, id: 19 }, { name: 'Estudar Scala', done: true, id: 20 }]);

  const addNewTask = (taskName: string) => {
    if (taskName === '') return;
    setTasks([...tasks, { name: taskName, done: false, id: tasks.length + 1 }]);
  }

  const deleteTask = (id: number) => {
    setTasks(tasks.filter(task => task.id !== id));
  }

  const taskDoneChange = (id: number) => {
    setTasks(tasks.map(task => {
      if (task.id === id) {
        return { ...task, done: !task.done };
      }
      return task;
    }));
  }

  return (
    <View style={styles.background}>
      <Image style={styles.logo} source={require('./assets/Logo.png')} />
      <NewTask onAddNewTask={(task) => addNewTask(task)} />
      <View style={styles.container}>
        <TaskList tasks={tasks} onDelete={(id) => deleteTask(id)} onTaskDoneChange={(id) => taskDoneChange(id)}/>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    backgroundColor: '#0D0D0D',
    alignItems: 'center',
  },
  logo: {
    position: 'relative',
    top: 90,
  },
  container: {
    backgroundColor: '#1A1A1A',
    top: 105,
    width: '100%',
    height: '100%',
    padding: 30
  }
});

