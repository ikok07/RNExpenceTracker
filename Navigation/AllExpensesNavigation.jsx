import AllExpensesScreen from "../screens/Tabs/AllExpensesScreen";
import {createNativeStackNavigator} from "@react-navigation/native-stack";
import {Colors} from "../constants/colors";
import {AddExpenseScreen} from "../screens/Stack/AddExpenseScreen";
import {Ionicons} from "@expo/vector-icons";
import {HeaderButton} from "../Components/ui/HeaderButton";
import {ManageExpenseScreen} from "../screens/Stack/ManageExpenseScreen";

const Stack = createNativeStackNavigator()

export default function AllExpensesNavigation({navigation}) {

    function handleOpenManageExpense() {
        navigation.navigate("addExpense")
    }

    return <Stack.Navigator
        screenOptions={({navigation}) => ({
            headerStyle: {backgroundColor: Colors.primary500},
            headerTintColor: "white",
            contentStyle: {backgroundColor: Colors.primary700}
        })}
    >
        <Stack.Screen
            name="allExpenses"
            component={AllExpensesScreen}
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