import {createNativeStackNavigator} from "@react-navigation/native-stack";
import {Colors} from "../constants/colors";
import RecentExpensesScreen from "../screens/Tabs/RecentExpensesScreen";
import {HeaderButton} from "../Components/ui/HeaderButton";
import {AddExpenseScreen} from "../screens/Stack/AddExpenseScreen";
import {ManageExpenseScreen} from "../screens/Stack/ManageExpenseScreen";

const Stack = createNativeStackNavigator()

export default function RecentExpensesNavigation({navigation}) {
    function handleOpenManageExpense() {
        navigation.navigate("addExpense")
    }

    return <Stack.Navigator
        screenOptions={{
            headerStyle: {backgroundColor: Colors.primary500},
            headerTintColor: "white",
            contentStyle: {backgroundColor: Colors.primary700}
        }}
    >
        <Stack.Screen
            name="recentExpenses"
            component={RecentExpensesScreen}
            options={{
                title: "All Expenses",
                headerRight: () => <HeaderButton icon="add" onPress={handleOpenManageExpense}/>
            }}
        />
        <Stack.Screen
            name="addExpense"
            component={AddExpenseScreen}
            options={{
                title: "Add expense",
                presentation: "modal"
            }}
        />
        <Stack.Screen
            name="manageExpense"
            component={ManageExpenseScreen}
            options={{
                title: "Manage expense",
                presentation: "modal"
            }}
        />
    </Stack.Navigator>
}