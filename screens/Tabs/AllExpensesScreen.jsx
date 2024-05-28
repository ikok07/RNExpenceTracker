import {FlatList, StyleSheet, Text, View} from "react-native";
import Expense from "../../model/Expense";
import ExpenseRowItem from "../../Components/ui/ExpenseRowItem";
import SummaryRow from "../../Components/ui/SummaryRow";
import {useSelector} from "react-redux";

export default function AllExpensesScreen() {
    const expenses = useSelector(state => state.expenses.added)

    return <View style={styles.rootContainer}>
        <SummaryRow
            label="Total"
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