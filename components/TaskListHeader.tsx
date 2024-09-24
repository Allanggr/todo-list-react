import { View, StyleSheet, Text } from "react-native";

export default function TaskListHeader({ data }: {data: {tasksCount: number, tasksDoneCount: number}}) {
    return (
        <View style={styles.header}>
            <View style={styles.taskInfoContainer}>
                <Text style={styles.createdText}>Tarefas</Text>
                <Text style={styles.taskCounter}>{data.tasksCount}</Text>
            </View>
            <View style={styles.taskInfoContainer}>
                <Text style={styles.doneText}>Concluídas</Text>
                <Text style={styles.taskCounter}>{data.tasksDoneCount}</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    header: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 16,
    },
    taskInfoContainer: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
    },
    taskCounter: {
        color: '#D9D9D9',
        fontWeight: 'bold',
        marginLeft: 8,
        paddingHorizontal: 8,
        borderRadius: 10,
        backgroundColor: '#333333',
    },
    createdText: {
        color: '#4EA8DE',
        fontWeight: 'bold',
        fontSize: 14,
    },
    doneText: {
        color: '#8284FA',
        fontWeight: 'bold',
        fontSize: 14,
    }
})