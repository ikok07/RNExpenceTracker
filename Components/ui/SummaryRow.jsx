import {StyleSheet, Text, View} from "react-native";
import {Colors} from "../../constants/colors";

export default function SummaryRow({label, amount}) {
    return <View style={styles.rootContainer}>
        <Text style={styles.label}>{label}</Text>
        <Text style={styles.amount}>{amount.toFixed(2)}$</Text>
    </View>
}

const styles = StyleSheet.create({
    rootContainer: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        backgroundColor: Colors.quaternaryDark,
        paddingVertical: 10,
        paddingHorizontal: 8,
        borderRadius: 7
    },
    label: {
        color: Colors.primary500,
        fontWeight: "semibold",
    },
    amount: {
        fontWeight: "bold",
        color: Colors.primary500,
        fontSize: 17
    }
})