import {StyleSheet, Text, View} from "react-native";
import {PrimaryButton} from "../../Components/ui/PrimaryButton";
import {useDispatch} from "react-redux";
import {addExpense} from "../../store/expenses";
import Expense from "../../model/Expense";

export function AddExpenseScreen({navigation, route}) {

    const dispatch = useDispatch()

    function handleClose() {
        navigation.goBack()
    }

    function handleAddExpense() {
        dispatch(addExpense({
            id: Math.round(Math.random() * 100),
            title: "Template expense",
            date: new Date().toISOString(),
            amount: 9.99,
            description: "Description"
        }))
        handleClose()
    }

    return <View style={styles.rootContainer}>
        <View style={styles.buttonsContainer}>
            <PrimaryButton type="secondary" onPress={handleClose}>Cancel</PrimaryButton>
            <PrimaryButton onPress={handleAddExpense}>Add</PrimaryButton>
        </View>
    </View>
}

const styles = StyleSheet.create({
    rootContainer: {
        flex: 1,
        marginVertical: 20,
        width: "80%",
        alignSelf: "center"
    },
    buttonsContainer: {
        flexDirection: "row",
    }
})