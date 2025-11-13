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

     input: {
        flex: 1,
        fontSize: 17,
        color: "#000",
        paddingHorizontal: width * 0.02
    },

    inputGroup:{
        marginBottom: height *0.01
    },

    inputIcon: {
        backgroundColor: "#fff",
        borderBottomWidth: 1,
        borderColor: "Green",
        borderRadius: 10,
        borderWidth: 2,
        flexDirection: "row",
        alignItems:"center"
    },

    inputError: {
        backgroundColor: "#fed5d5ff",
        borderColor: "rgb(139, 0. 0, 1 )"

    },
    
    eyeIcon: {
        position: "absolute",
        right: 12,
        top: 42
    }
})  