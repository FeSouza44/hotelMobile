const { width, height } = Dimensions.get("window");
import { Dimensions, StyleSheet } from "react-native";
export const global = StyleSheet.create({
    safeArea: {
        flex: 1,
        backgroundColor: "#ffffffff"
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
        color: "black",
        marginTop: height * 0.01
    },
    content: {
        backgroundColor: "#b9b9b9ff",
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
        color: "#000000ff",
        marginBottom: height * 0.01
    },

     input: {
        flex: 1,
        fontSize: 17,
        color: "#000000ff",
        paddingHorizontal: width * 0.02
    },

    inputGroup:{
        marginBottom: height *0.01
    },

    inputIcon: {
        backgroundColor: "#fff",
        borderBottomWidth: 1,
        borderColor: "#541205",
        borderRadius: 10,
        borderWidth: 2,
        flexDirection: "row",
        alignItems:"center"
    },

    inputError: {
        backgroundColor: "#cc1313ff",
        borderColor: "rgb(139, 0. 0, 1 )"

    },
    
    eyeIcon: {
        position: "absolute",
        right: 12,
        top: 42
    },
    primaryButton: {
        backgroundColor: "#420350ff",
        borderRadius: 10,
        padding: width * 0.025,
        marginTop: width * 0.02,
        alignItems: "center"
    },
    primaryButtonDisabled: {
        backgroundColor: "#9ca3af",
        borderRadius: 10,
    },
    primaryButtonText: {
        color: "#fff"
    }
})  