import { Dimensions, StyleSheet } from "react-native";
const { width, height } = Dimensions.get("window");
export const global = StyleSheet.create({
    safeArea: {
        flex: 1,
        backgroundColor: "#fff"
    },
    keyboardAvoiding: {
        flex: 1
    },
    container: {
        paddingHorizontal: width * 0.07,
        paddingVertical: height * 0.07
    },
    header: {
        alignItems: "center",
        marginBottom: height * 0.03
    },
    title: {
        fontSize: 25,
        fontWeight: "800",
        /*Para atribuir cor: color:*/
    },
    subtitle: {
        fontSize: 17,
        color: "purple",
        marginTop: height * 0.01
    },
    content: {
        backgroundColor: "#ebe0faff",
        borderRadius: 10,
        padding: width * 0.02,
        shadowColor: "#000",
        shadowOpacity: 0.05,
        shadowRadius: 10,
        elevation: 2
    },
    
    label: {
        fontSize: 14,
        fontWeight: "600",
        color: "#420350ff",
        marginBottom: height * 0.01
    },

    inputGroup:{
        marginBottom: height *0.01
    },

    inputIcon: {
        backgroundColor: "yellow",
        borderBottomWidth: 1,
        borderColor: "#420350ff",
        borderRadius: 10,

    },

    inputError: {
        backgroundColor: "#fed5d5ff",
        borderColor: "rgb(139, 0. 0, 1 )"

    }
})  