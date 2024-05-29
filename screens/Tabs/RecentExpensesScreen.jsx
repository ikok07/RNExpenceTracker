import {StyleSheet, View} from "react-native";
import SummaryRow from "../../Components/ui/SummaryRow";
import {useSelector} from "react-redux";
import {addDays} from "date-fns";
import ExpensesList from "../../Components/ui/ExpensesList";
import LoadingOverlay from "../../Components/ui/LoadingOverlay";
import ErrorOverlay from "../../Components/ui/ErrorOverlay";

export default function RecentExpensesScreen() {
    const {added, status, error} = useSelector(state => state.expenses)

    let expenses = added.filter(exp => new Date(exp.date).getDate() > addDays(new Date(), -7).getDate())
    expenses = expenses.sort((a, b) => new Date(b.date).getDate() - new Date(a.date).getDate())

    if (status === "loading") return <LoadingOverlay />
    if (status === "failed") return <ErrorOverlay message={error} />

    return <View style={styles.rootContainer}>
        <SummaryRow
            label="Last 7 Days"
            amount={expenses.length > 0 ? expenses.reduce((sum, expense) => sum + expense.amount, 0) : 0}
        />
        {expenses.length > 0 && <ExpensesList
            items={expenses}
            fallbackText="No expenses registered for the last 7 days."
        />}
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
