import {Pressable, StyleSheet, View, Text} from "react-native";
import {Colors} from "../../constants/colors";

export function PrimaryButton({children, type = "main", disabled = false, style, textStyle, onPress}) {

    function getBgColor() {
        if (disabled) return Colors.secondaryDark
        else {
            switch (type) {
                case "main": return Colors.primary500
                case "secondary": return "transparent"
            }
        }
    }

    const pressableStyles = ({pressed}) => [styles.rootContainer, {backgroundColor: getBgColor()}, pressed ? styles.pressed : {}, style]

    return <Pressable style={pressableStyles} onPress={onPress}>
        <Text style={[styles.buttonText, textStyle]}>{children}</Text>
    </Pressable>
}

const styles = StyleSheet.create({
    rootContainer: {
        flex: 1,
        paddingVertical: 12,
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 7
    },
    buttonText: {
        color: Colors.quaternaryDark
    },
    pressed: {
        opacity: 0.7
    }
})