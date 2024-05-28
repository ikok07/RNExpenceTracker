import {Pressable, StyleSheet, Text, View} from "react-native";
import {format} from "date-fns"
import {Colors} from "../../constants/colors";
import {useNavigation} from "@react-navigation/native";

export default function ExpenseRowItem({item}) {
    const navigation = useNavigation()

    function handlePress() {
        navigation.navigate("manageExpense", {id: item.id})
    }

    return <Pressable style={({pressed}) => pressed ? {opacity: 0.85} : {}} onPress={handlePress}>
        <View style={styles.rowContainer}>
            <View style={styles.textContainer}>
                <Text style={styles.title}>{item.title}</Text>
                <Text style={styles.date}>{format(new Date(item.date), "yyyy-M-dd")}</Text>
            </View>
            <View style={styles.priceContainer}>
                <Text style={styles.priceText}>{item.amount}$</Text>
            </View>
        </View>
    </Pressable>
}

const styles = StyleSheet.create({
    rowContainer: {
        flex: 1,
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        paddingHorizontal: 16,
        paddingVertical: 12,
        backgroundColor: Colors.primary500,
        borderRadius: 7
    },
    textContainer: {
        gap: 4
    },
    title: {
        fontWeight: "bold",
        fontSize: 18,
        color: Colors.quaternaryDark
    },
    date: {
        color: Colors.quaternaryDark,
        fontSize: 16
    },
    priceContainer: {
        backgroundColor: "white",
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 7,
        paddingVertical: 12,
        width: 75
    },
    priceText: {
        fontWeight: "bold",
        fontSize: 15,
        color: Colors.primary500
    }
})