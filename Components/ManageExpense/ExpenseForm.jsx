import {useState, useEffect} from "react"
import {StyleSheet, View, Text, Alert} from "react-native";
import Input from "./Input";
import {PrimaryButton} from "../ui/PrimaryButton";
import {isValid} from "date-fns";
import {Colors} from "../../constants/colors";

export default function ExpenseForm({onCancel, onSubmit, submitButtonLabel, initialState}) {
    const [inputs, setInputs] = useState({
        amount: {value: initialState ? initialState.amount.toString() : "", isValid: true},
        date: {value: initialState ? initialState.date.toString() : "", isValid: true},
        description: {value: initialState ? initialState.description : "", isValid: true}
    })

    useEffect(() => {
        inputs.amount.value = inputs.amount.value.replaceAll(",", ".")
    }, [inputs.amount]);

    function submitHandler() {
        const expenseData = {
            amount: +inputs.amount.value,
            date: inputs.date.value,
            description: inputs.description.value
        }

        const amountValid = !isNaN(expenseData.amount) && expenseData.amount > 0
        const dateValid = isValid(new Date(expenseData.date))
        const descriptionValid = expenseData.description.trim().length > 0

        if (!amountValid || !dateValid || !descriptionValid) {
            setInputs(curInputs => ({
                amount: {value: curInputs.amount.value, isValid: amountValid},
                date: {value: curInputs.date.value, isValid: dateValid},
                description: {value: curInputs.description.value, isValid: descriptionValid}
            }))
            return
        }
        onSubmit(expenseData)
    }

    function inputChangeHandler(identifier, enteredText) {
        setInputs(curVal => {
            return {
                ...curVal,
                [identifier]: {value: enteredText, isValid: true}
            }
        })
    }

    const invalidForm = !inputs.amount.isValid || !inputs.date.isValid || !inputs.description.isValid

    return <View style={styles.form}>
        <Text style={styles.title}>Your expense</Text>
        <View style={styles.formRow1}>
            <Input label="Amount" invalid={!inputs.amount.isValid} style={styles.rowInput} textInputConfig={{
                onChangeText: inputChangeHandler.bind(this, "amount"),
                keyboardType: "decimal-pad",
                autoCorrect: false,
                value: inputs.amount.value
            }} />
            <Input label="Date" invalid={!inputs.date.isValid} style={styles.rowInput} textInputConfig={{
                onChangeText: inputChangeHandler.bind(this, "date"),
                placeholder: "YYYY-MM-DD",
                maxLength: 10,
                autoCorrect: false,
                value: inputs.date.value
            }} />
        </View>
        <Input label="Description" invalid={!inputs.description.isValid} textInputConfig={{
            onChangeText: inputChangeHandler.bind(this, "description"),
            multiline: true,
            value: inputs.description.value
        }} />
        {invalidForm && <Text style={styles.errorText}>Invalid input values. Please check your data</Text>}
        <View style={styles.buttonsContainer}>
            <PrimaryButton type="secondary" onPress={onCancel}>Cancel</PrimaryButton>
            <PrimaryButton onPress={submitHandler}>{submitButtonLabel}</PrimaryButton>
        </View>
    </View>
}

const styles = StyleSheet.create({
    form: {
        marginTop: 30,
        marginBottom: 20
    },
    title: {
        fontSize: 24,
        fontWeight: "bold",
        color: "white",
        marginVertical: 24,
        textAlign: "center"
    },
    formRow1: {
        flexDirection: "row",
        justifyContent: "space-between"
    },
    rowInput: {
        flex: 1
    },
    buttonsContainer: {
        flexDirection: "row",
        gap: 20,
        paddingTop: 20
    },
    errorText: {
        color: "red",
        textAlign: "center",
        margin: 8
    }
})