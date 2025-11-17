import { TouchableOpacity, View, Text, Dimensions } from "react-native";
import AuthContainer from "../ui/AuthContainer";
import PasswordField from "../ui/PasswordField";
import TextField from "../ui/TextField";
import { global } from "../ui/styles";
import { useRouter } from "expo-router";

// const router = useRouter = () => {
    
// }

const { width, height} = Dimensions.get('window');
const RenderRegister = () => {
    return (
        <AuthContainer
            title="Bem-vindo"
            subtitle="Faça seu cadastro para continuar!"
            icon="hotel">

            {/* children */}    
            <TextField
                label="Nome:"
                placeholder="Digite Seu Nome:"
            />

            <TextField
                label="CPF:"
                icon="email"
                placeholder="user@email.com"
            />

            <TextField
                label="Telefone:"
                icon="phone"
                placeholder="99 99999-9999"
                autoComplete="tel"
            />

            <TextField
            label="E-mail"
            icon="email"
            placeholder="user@email.com"
            />  

            <PasswordField
                label="Senha"
                placeholder="*********"
            />

            <PasswordField
                label="Senha"
                placeholder="*********"
            />

            <TouchableOpacity style={[global.primaryButton]}>
            <Text style={global.primaryButtonText}>Cadastrar</Text>
        </TouchableOpacity>
        <View style={{alignItems: "center", marginTop: height * 0.03}}>
            <View style={{backgroundColor: "#7c8390ff", width: width * 0.5, height: height * 0.001,
                borderRadius: 10, marginTop: height * 0.03}}></View>
        </View>




        </AuthContainer>
    )
};

export default RenderRegister;