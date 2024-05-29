import {StyleSheet, TextInput, View, Text} from "react-native";
import {Colors} from "../../constants/colors";

export default function Input({label, style, textInputConfig, invalid}) {
    const inputStyles = [styles.input, textInputConfig.multiline ? styles.inputMultiline : {}]
    if (invalid) inputStyles.push(styles.invalidInput)

    return <View style={[styles.inputContainer, style]}>
        <Text style={[styles.label, invalid && styles.invalidLabel]}>{label}</Text>
        <TextInput {...textInputConfig} style={inputStyles}/>
    </View>
}

const styles = StyleSheet.create({
    inputContainer: {
        marginHorizontal: 4,
        marginVertical: 8,
        gap: 4,
    },
    label: {
        fontSize: 12,
        color: Colors.primary100
    },
    input: {
        backgroundColor: Colors.primary100,
        color: Colors.primary700,
        padding: 6,
        borderRadius: 6,
        fontSize: 18
    },
    inputMultiline: {
        minHeight: 100,
        textAlignVertical: "top"
    },
    invalidLabel: {
        color: "red",
    },
    invalidInput: {
      backgroundColor: "#e18181"
    }
})