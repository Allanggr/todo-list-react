import { useState } from "react";
import { View, Text, TextInput, StyleSheet, TouchableOpacity} from "react-native";

export default function NewTask({ onAddNewTask }: { onAddNewTask: (taskName: string) => void }) {
    const [taskName, setTaskName] = useState('');
    
    const handlePress = () => {
        onAddNewTask(taskName);
        setTaskName('');
    }

    return (
        <View style={styles.container}>
            <TextInput style={styles.textInput} selectionColor={'#F2F2F2'} 
                placeholder="Adicione uma nova tarefa" placeholderTextColor={'#808080'} 
                value={taskName} onChangeText={setTaskName}/>
            <TouchableOpacity style={styles.button} onPress={handlePress}>
                <Text style={styles.buttonText}>+</Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        top: 130,
        zIndex: 2,
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
    },
    textInput: {
        width: 271,
        height: 50,
        backgroundColor: '#262626',
        color: '#F2F2F2',
        borderRadius: 4,
        padding: 16,
        marginRight: 8,
    },
    button: {
        width: 50,
        height: 50,
        backgroundColor: '#1E6F9F',
        borderRadius: 4,
        justifyContent: 'center',
        alignItems: 'center',
    },
    buttonText: {
        color: '#F2F2F2',
        borderRadius: 90,
        borderWidth: 2,
        height: 20,
        paddingHorizontal: 4,
        borderColor: '#F2F2F2',
        textAlign: 'center',
        fontSize: 14,
    }
})