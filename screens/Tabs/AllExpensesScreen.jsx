import {StyleSheet, View} from "react-native";
import SummaryRow from "../../Components/ui/SummaryRow";
import {useSelector} from "react-redux";
import ExpensesList from "../../Components/ui/ExpensesList";
import {addDays} from "date-fns";
import LoadingOverlay from "../../Components/ui/LoadingOverlay";
import ErrorOverlay from "../../Components/ui/ErrorOverlay";

export default function AllExpensesScreen() {
    const {added, status, error} = useSelector(state => state.expenses)

    let expenses = [...added].sort((a, b) => new Date(b.date).getDate() - new Date(a.date).getDate())
    if (status === "loading") return <LoadingOverlay />
    if (status === "failed") return <ErrorOverlay message={error} />

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