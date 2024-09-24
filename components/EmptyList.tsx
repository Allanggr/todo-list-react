import { View, Text, StyleSheet, Image } from "react-native";

export default function EmptyList() {
    return (
        <View style={styles.container}>
            <Image style={styles.image} source={require('../assets/Clipboard.png')} />
            <Text style={styles.title}>Você ainda não tem tarefas cadastradas</Text>
            <Text style={styles.subtitle}>Crie tarefas e organize seus itens a fazer</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        borderTopWidth: 1,
        borderTopColor: '#333333',
        marginTop: 10,     
    },
    image: {
        marginTop: 50,
        alignSelf: 'center',
    },
    title: {
        color: '#808080',
        textAlign: 'center',
        marginTop: 15,
        fontSize: 14,
        fontWeight: 'bold',
    },
    subtitle: {
        color: '#808080',
        textAlign: 'center',
        fontSize: 13,
    }
})