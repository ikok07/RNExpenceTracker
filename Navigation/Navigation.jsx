import {createNativeStackNavigator} from "@react-navigation/native-stack";
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";
import AllExpensesScreen from "../screens/Tabs/AllExpensesScreen";
import {NavigationContainer} from "@react-navigation/native";
import AllExpensesNavigation from "./AllExpensesNavigation";
import {Ionicons} from "@expo/vector-icons"
import {Colors} from "../constants/colors";
import RecentExpensesScreen from "../screens/Tabs/RecentExpensesScreen";
import RecentExpensesNavigation from "./RecentExpensesNavigation";
import {ManageExpenseScreen} from "../screens/Stack/ManageExpenseScreen";

const TabStack = createBottomTabNavigator()

export default function Navigation() {
    return <NavigationContainer>
        <TabStack.Navigator
            screenOptions={{
                headerShown: false,
                tabBarActiveTintColor: Colors.accent500,
                tabBarInactiveTintColor: Colors.tertiaryDark,
                tabBarStyle: {
                    backgroundColor: Colors.primary500,
                    borderTopWidth: 0
                }
        }}
        >
            <TabStack.Screen
                name="recentExpensesTab"
                component={RecentExpensesNavigation}
                options={{
                    tabBarIcon: ({size, color}) => <Ionicons name="time" size={size} color={color}/>,
                    title: "Recent"
                }}
            />
            <TabStack.Screen
                name="allExpensesTab"
                component={AllExpensesNavigation}
                options={{
                    tabBarIcon: ({size, color}) => <Ionicons name="calendar" size={size} color={color}/>,
                    title: "All Expenses"
                }}
            />
        </TabStack.Navigator>
    </NavigationContainer>
}