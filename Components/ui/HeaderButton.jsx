import {Ionicons} from "@expo/vector-icons";
import {Pressable, StyleSheet} from "react-native";

export function HeaderButton({icon, size = 24, color = "white", onPress}) {
    return <Pressable style={({pressed}) => pressed ? styles.pressed : {}} onPress={onPress}>
        <Ionicons name={icon} size={size} color={color} />
    </Pressable>
}

const styles = StyleSheet.create({
    pressed: {
        opacity: 0.85
    }
})