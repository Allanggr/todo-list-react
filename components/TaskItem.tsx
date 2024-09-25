import { Text, StyleSheet, View, Pressable, Image, TouchableOpacity } from 'react-native';
import { Task } from '../dtos/Task';
import { Ionicons } from '@expo/vector-icons';

interface TaskItemProps {
    task: Task;
    onDelete: (id: number) => void;
    taskDoneChange: (id: number) => void;
}

export default function TaskItem({ task, onDelete, taskDoneChange }: TaskItemProps) {

    const handleDeletePress = (id: number) => {
        onDelete(id);
    }

    const handleDoneChangePress = (id: number) => {
        taskDoneChange(id);
    }

    return (
        <View style={styles.task}>
            <Pressable style={task.done ? null: styles.checkboxBase} onPress={()=> handleDoneChangePress(task.id)}>
                {task.done && <Ionicons name="checkmark-circle" size={21} color="#5E60CE" />}
            </Pressable>
            <Text style={task.done? styles.doneText : styles.text }>{task.name}</Text>
            <TouchableOpacity style={styles.deleteButton} onPress={()=> handleDeletePress(task.id)}>
                <Ionicons name="trash" size={16} color="#808080" />
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    task: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: 12,
        backgroundColor: '#262626',
        borderRadius: 10,
        marginBottom: 8,
        gap: 10,
    },
    text: {
        textAlign: 'left',
        maxWidth: 230,
        minWidth: 230,
        color: '#F2F2F2',
    },
    doneText: {
        textDecorationLine: 'line-through',
        color: '#808080',
        textAlign: 'left',
        maxWidth: 230,
        minWidth: 230,
    },
    checkboxBase: {
        width: 17.5,
        height: 17.5,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 50,
        borderWidth: 2,
        borderColor: '#4EA8DE',
        backgroundColor: 'transparent',
    },
    deleteButton: {
        padding: 8,
    },
})