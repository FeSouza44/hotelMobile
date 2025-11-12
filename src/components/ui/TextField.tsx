import { MaterialIcons } from "@expo/vector-icons";
import React from "react";
import { Text, TextInput, TextInputProps, View } from "react-native";
import { global } from "./styles";


type Props = TextInputProps & {
    label: string;
    errorText?: string;
    icon?: keyof typeof MaterialIcons.glyphMap;
}

const TextField = ({label,errorText, icon , ...restInputProps} : Props) => {

    return (
        <View>
            <Text style={global.label}>{label}</Text>
            <View>
                {!! icon && (
                    <View>
                        <MaterialIcons name={icon} size={18} color="purple"/>
                    </View>
                )}  
                <TextInput
                    keyboardAppearance="dark"
                    placeholderTextColor="#9ca3af"
                    {...restInputProps}
                />
            </View>      
        </View>
    )
}

export default TextField;
''