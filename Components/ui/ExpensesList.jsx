import {FlatList, StyleSheet, View, Text} from "react-native";
import ExpenseRowItem from "./ExpenseRowItem";

export default function ExpensesList({items, fallbackText}) {

    if (items.length === 0) {
        return <Text style={styles.infoText}>{fallbackText}</Text>
    }

    return <View>
        <FlatList contentContainerStyle={styles.list} data={items} renderItem={({item}) => {
            return <ExpenseRowItem item={item}/>
        }}/>
    </View>
}

const styles = StyleSheet.create({
    list: {
        gap: 15
    },
    infoText: {
        color: "white",
        fontSize: 16,
        textAlign: "center",
        marginTop: 32
    }
})