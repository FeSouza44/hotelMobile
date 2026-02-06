import { FontAwesome5 } from "@expo/vector-icons"
import React from "react";
import { KeyboardAvoidingView, Platform, ScrollView, Text, View, Image } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { global } from "./styles";

type Props = {
    title?: string;
    subtitle?: string;
    icon?: keyof typeof FontAwesome5.glyphMap;
    image?: any;
    children: React.ReactNode;
    hasContentStyle?: boolean;
}

const AuthContainer = ({title, subtitle, icon, image, children, hasContentStyle = true}: Props) => {
    return (
        <SafeAreaView style={[global.safeArea]}>
            <KeyboardAvoidingView behavior={Platform.OS == "ios" ? "padding" : "height"} style={global.keyboardAvoid}>
                <ScrollView 
                    style={global.container}
                    contentContainerStyle={{ paddingBottom: 60 }} 
                    showsVerticalScrollIndicator={false}
                >

                    <View style={global.header}>
                        {!!icon && <FontAwesome5 name={icon} style={global.hotelIcon}/>} 
                        {!!image && (
                            <Image
                                source={image}
                                style={global.image}
                                resizeMode="cover"
                            />
                        )}
                        {!!title && <Text style={global.title}>{title}</Text>}
                        {!!subtitle && <Text style={global.subTitle}>{subtitle}</Text>}
                    </View>

                    <View style={hasContentStyle ? global.content : {}}>

                        {children}
                    </View>

                </ScrollView>
            </KeyboardAvoidingView>
        </SafeAreaView>
    );
}

export default AuthContainer;
