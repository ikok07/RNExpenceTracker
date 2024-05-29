import {ActivityIndicator, Button, StyleSheet, Text, View} from "react-native";
import {Colors} from "../../constants/colors";
import {PrimaryButton} from "./PrimaryButton";
import {clearError} from "../../store/expenses";
import {useDispatch} from "react-redux";

export default function ErrorOverlay({message}) {
    const dispatch = useDispatch()

    return <View style={styles.container}>
        <Text style={[styles.text, styles.title]}>An error occurred!</Text>
        <Text style={styles.text}>{message}</Text>
        <PrimaryButton style={styles.button} onPress={() => dispatch(clearError())}>Okay</PrimaryButton>
    </View>
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        padding: 24,
        backgroundColor: Colors.primary700,
        height: 200
    },
    text: {
        textAlign: "center",
        marginBottom: 8,
        color: "white"
    },
    title: {
        fontSize: 20,
        fontWeight: "bold",
    },
    button: {
        width: 70,
        maxHeight: 40,
        marginTop: 20
    }
})