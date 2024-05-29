import {StyleSheet, View} from "react-native";
import SummaryRow from "../../Components/ui/SummaryRow";
import {useSelector} from "react-redux";
import {addDays} from "date-fns";
import ExpensesList from "../../Components/ui/ExpensesList";

export default function RecentExpensesScreen() {

    const expenses = useSelector(state => state.expenses.added).filter(exp => new Date(exp.date).getDate() > addDays(new Date(), -7).getDate())

    return <View style={styles.rootContainer}>
        <SummaryRow
            label="Last 7 Days"
            amount={expenses.reduce((sum, expense) => sum + expense.amount, 0)}
        />
        <ExpensesList
            items={expenses}
            fallbackText="No expenses registered for the last 7 days."
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
    list: {
        gap: 15
    }
})
