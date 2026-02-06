import { Ionicons } from "@expo/vector-icons";
import React, { useState } from "react";
import { TouchableOpacity, View } from "react-native";
import { global } from "./styles";
import TextField from "./TextField";

type Props = React.ComponentProps<typeof TextField>;

const PasswordField = (restInputProps: Props) => {

    /*React.useState*/
    const [show, setShow] = useState(false);
    return (
        <View>
            <TextField
            {...restInputProps}
            icon={restInputProps.icon ?? ("lock" as any)}
            secureTextEntry={!show}
            autoCapitalize="none"
            autoCorrect={false}
            />

            <TouchableOpacity onPress={() => setShow((showTrue) => !showTrue)} style = {global.eyeIcon} >
                <Ionicons name={show ? "eye-outline" : "eye-off-outline"} size={23} color={"black"}/>
            </TouchableOpacity>
        </View>
    );
};

export default PasswordField;