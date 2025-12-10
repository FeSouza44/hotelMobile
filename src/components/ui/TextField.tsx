import { FontAwesome5, MaterialCommunityIcons, FontAwesome6, MaterialIcons } from "@expo/vector-icons";
import React, { ReactNode } from "react";
import { Text, TextInput, TextInputProps, View } from "react-native";
import { global } from "./styles";

type NameIcon = 
| {lib: "MaterialIcons"; name: keyof typeof MaterialIcons.glyphMap } 
| {lib: "FontAwesome6"; name: keyof typeof FontAwesome6.glyphMap } 
| {lib: "FontAwesome5"; name: keyof typeof FontAwesome5.glyphMap }
| {lib: "MaterialCommunityIcons"; name: keyof typeof MaterialCommunityIcons.glyphMap }

type Props = TextInputProps & {
    label: string;
    errorText?: string;
    icon?: NameIcon; 
    rightIcon?: ReactNode;
}

const TextField = ({label, errorText, icon, rightIcon, style, ...props} : Props) => {
    return (
        <View style={global.inputGroup}>
            <Text style={global.label}>{label}</Text>
            <View style={[global.inputIcon, errorText ? global.inputError : null]}>
                {!! icon && (
                     <View>
                        {icon.lib === "MaterialIcons" && (
                        <MaterialIcons name={icon.name} size={23} color="purple" />
                        )}
                        {icon.lib === "FontAwesome5" && (
                        <FontAwesome5 name={icon.name} size={23} color="purple" />
                        )}
                        {icon.lib === "FontAwesome6" && (
                        <FontAwesome6 name={icon.name} size={23} color="purple" />
                        )}
                        {icon.lib === "MaterialCommunityIcons" && (
                        <MaterialCommunityIcons name={icon.name} size={23} color="purple" />
                        )}

                    </View>                    
                )}
                <TextInput
                    keyboardAppearance="dark"
                    placeholderTextColor="#a7a7a7ff"
                    style={[global.input, style]}
                    {...props}
                />

                {rightIcon}

            </View>
            {!! errorText && 
                <Text style={global.errorText}>{errorText}</Text>
            }
        </View>
    )
}

export default TextField