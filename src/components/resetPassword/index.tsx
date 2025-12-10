import { useRouter } from "expo-router";
import { Text, TouchableOpacity, View, Dimensions } from "react-native";
import AuthContainer from "../ui/AuthContainer";
import TextField from "../ui/TextField";
import { global } from "../ui/styles";
import React, { useState, useMemo } from "react";

function isValidEmail(email: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

const RenderResetPassword = () => {
  const router = useRouter();

  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);

  const [touched, setTouched] = useState<{ email?: boolean }>({});

  const errors = useMemo(() => {
    const error: Record<string, string> = {};

    if (touched.email && !email)
      error.email = "Email obrigatório";

    if (touched.email && email && !isValidEmail(email))
      error.email = "Digite um email válido";

    return error;
  }, [email, touched]);

  const canSubmit =
    email &&
    Object.keys(errors).length === 0 &&
    !loading;

  const handleSubmit = () => {
    router.replace("/(auth)");
  };

  const { width, height } = Dimensions.get("window");

  return (
    <AuthContainer
      title="Esqueceu sua senha?"
      subtitle="Digite seu email para redefinir sua senha"
       >
        
      <View style={[global.content]}>
        <TextField
          label="Digite o seu E-mail cadastrado"
          placeholder="user@email.com"
          keyboardType="email-address"
          value={email}
          onChangeText={setEmail}
          errorText={errors.email}
        />

        <View>
          <TouchableOpacity
            disabled={!canSubmit}
            onPress={handleSubmit}
            style={{ opacity: canSubmit ? 1 : 0.5 }}
          >
            <Text style={global.title}>Recuperar senha</Text>
          </TouchableOpacity>
        </View>
      </View>
    </AuthContainer>
  );
};

export default RenderResetPassword;