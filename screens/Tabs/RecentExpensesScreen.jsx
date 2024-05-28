import {FlatList, StyleSheet, View} from "react-native";
import SummaryRow from "../../Components/ui/SummaryRow";
import {useSelector} from "react-redux";
import {addDays} from "date-fns";
import ExpenseRowItem from "../../Components/ui/ExpenseRowItem";

export default function RecentExpensesScreen() {

    const expenses = useSelector(state => state.expenses.added).filter(exp => new Date(exp.date) > addDays(new Date(), -7))

    return <View style={styles.rootContainer}>
        <SummaryRow
            label="Last 7 Days"
            amount={expenses.reduce((sum, expense) => sum + expense.price, 0)}
        />
        <View>
            <FlatList contentContainerStyle={styles.list} data={expenses} renderItem={({item}) => {
                return <ExpenseRowItem item={item}/>
            }}/>
        </View>
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