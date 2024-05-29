import {StyleSheet, View} from "react-native";
import SummaryRow from "../../Components/ui/SummaryRow";
import {useSelector} from "react-redux";
import ExpensesList from "../../Components/ui/ExpensesList";

export default function AllExpensesScreen() {
    const expenses = useSelector(state => state.expenses.added)

    return <View style={styles.rootContainer}>
        <SummaryRow
            label="Total"
            amount={expenses.reduce((sum, expense) => sum + expense.amount, 0)}
        />
        <ExpensesList
            items={expenses}
            fallbackText="No registered expenses found!"
        />
    </View>
}

const styles = StyleSheet.create({
    rootContainer: {
        flex: 1,
        width: "90%",
        alignSelf: "center",
        marginVertical: 25,
        gap: 15
    },
})