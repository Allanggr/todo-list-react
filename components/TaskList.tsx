import { View, StyleSheet, FlatList } from "react-native";
import TaskListHeader from "./TaskListHeader";
import EmptyList from "./EmptyList";
import { Task } from "../dtos/Task";
import TaskItem from "./TaskItem";

interface TaskListProps {
    tasks: Task[];
    onDelete: (id: number) => void;
    onTaskDoneChange: (id: number) => void;
}

export default function TaskList({ tasks, onDelete, onTaskDoneChange }: TaskListProps) {

    const tasksDoneCount = () => {
        return tasks.filter(task => task.done).length;
    }

    return (
        <View style={styles.container}>
            <TaskListHeader data={{
                tasksCount: tasks.length,
                tasksDoneCount: tasksDoneCount(),
            }}/>
            <FlatList
                data={tasks}
                keyExtractor={item => item.id.toString()}
                renderItem={({ item }) => <TaskItem task={item} onDelete={(id) => onDelete(id)} taskDoneChange={(id) => onTaskDoneChange(id)}/>} 
                ListEmptyComponent={() => <EmptyList/>}  
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        marginTop: 20,
    },
})