import {Pressable, StyleSheet, View, Text} from "react-native";
import {useDispatch} from "react-redux";
import {removeExpense, updateExpense} from "../../store/expenses";
import {PrimaryButton} from "../../Components/ui/PrimaryButton";
import {Colors} from "../../constants/colors";
import {Ionicons} from "@expo/vector-icons";

export function ManageExpenseScreen({navigation, route}) {
    const expenseId = route.params.id
    const dispatch = useDispatch()

    function handleClose() {
        navigation.goBack()
    }

    function handleUpdateExpense() {
        dispatch(updateExpense({
            id: expenseId,
            date: new Date().toISOString(),
            amount: 10.99,
            description: "New description"
        },))
        handleClose()
    }

    function handleDeleteExpense() {
        dispatch(removeExpense({id: expenseId}))
        handleClose()
    }

    return <View style={styles.rootContainer}>
        <Text>{expenseId}</Text>
        <View style={styles.buttonsContainer}>
            <PrimaryButton type="secondary" onPress={handleClose}>Cancel</PrimaryButton>
            <PrimaryButton onPress={handleUpdateExpense}>Update</PrimaryButton>
        </View>
        <Pressable
            style={({pressed}) => [styles.deleteButton, pressed ? styles.pressed : {}]}
            onPress={handleDeleteExpense}
        >
            <Ionicons name="trash" size={48} color="red"/>
        </Pressable>
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
        paddingBottom: 20,
        borderBottomWidth: 1,
        borderBottomColor: Colors.tertiaryDark
    },
    deleteButton: {
        alignSelf: "center",
        marginTop: 20
    },
    pressed: {
        opacity: 0.7
    }
})