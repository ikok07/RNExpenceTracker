import {Pressable, StyleSheet, View} from "react-native";
import ExpenseForm from "../../Components/ManageExpense/ExpenseForm";
import {useDispatch, useSelector} from "react-redux";
import expenses, {addExpense, removeExpense, updateExpense} from "../../store/expenses";
import {Ionicons} from "@expo/vector-icons";
import {Colors} from "../../constants/colors";

export function ManageExpenseScreen({navigation, route}) {
    const expenseId = route.params?.id
    const isEditing = !!expenseId
    const dispatch = useDispatch()

    const selectedExpense = useSelector(state => state.expenses.added).find(exp => exp.id === expenseId)

    function handleClose() {
        navigation.goBack()
    }

    function confirmHandler(data) {
        if (isEditing) {
            dispatch(updateExpense({
                id: expenseId,
                ...data
            }))
        } else {
            dispatch(addExpense({
                id: Math.round(Math.random() * 100),
                ...data
            }))
        }
        handleClose()
    }

    function handleDeleteExpense() {
        dispatch(removeExpense({id: expenseId}))
        handleClose()
    }

    return <View style={styles.rootContainer}>
        <ExpenseForm
            onSubmit={confirmHandler}
            submitButtonLabel={isEditing ? "Update" : "Add"}
            onCancel={navigation.goBack}
            expenseId={expenseId}
            initialState={selectedExpense}
        />
        <View style={styles.deleteSection}>
            {isEditing && <Pressable
                style={({pressed}) => [styles.deleteButton, pressed ? styles.pressed : {}]}
                onPress={handleDeleteExpense}
            >
                <Ionicons name="trash" size={48} color="red"/>
            </Pressable>}
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
    deleteButton: {
        alignSelf: "center",
        marginTop: 20
    },
    pressed: {
        opacity: 0.7
    },
    deleteSection: {
        borderTopWidth: 1,
        borderTopColor: Colors.primary100
    }
})