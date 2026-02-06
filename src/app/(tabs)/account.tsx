import { View, Text, TouchableOpacity, Pressable } from 'react-native';
import { global } from '../../components/ui/styles';
import AuthContainer from '../../components/ui/AuthContainer';
import TextField from '../../components/ui/TextField';
import PasswordField from '../../components/ui/PasswordField';
import React, { useState } from 'react';

const RenderAccount = () => {
    const [modalVisible, setModalVisible] = useState(false);
    const [nome, setNome] = useState("João Victor Souza");
    const [email, setEmail] = useState("email@email.com");
    const [telefone, setTelefone] = useState("");
    const [currentPassword, setCurrentPassword] = useState("");''
    const [newPassword, setNewPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");

    return (
        <View style={{ flex: 1 }}> 
            <View style={global.container}> 
                <AuthContainer
                    title="Felipe Amaral de Souza"
                    subtitle="Atualize seus dados abaixo"
                >
                    <TextField 
                        label="Nome" 
                        icon={{lib: "MaterialCommunityIcons", name: "account"}} 
                        placeholder="Nome completo" 
                        value={nome}
                        onChangeText={setNome}
                    />

                    <TextField 
                        label="E-mail" 
                        icon={{lib: "MaterialCommunityIcons", name: "email"}} 
                        placeholder="email@email.com" 
                        keyboardType="email-address"
                        value={email}
                        onChangeText={setEmail}
                    />

                    <TextField 
                        label="CPF" 
                        icon={{lib: "MaterialCommunityIcons", name: "file-document"}} 
                        placeholder="000.000.000-00" 
                        keyboardType="numeric"
                        isMasked={true}
                        type={'cpf'}
                        value={"000.000.000-00"}
                    />

                    <TextField 
                        label="Telefone" 
                        icon={{lib: "MaterialCommunityIcons", name: "phone"}} 
                        placeholder="(99) 99999-9999" 
                        keyboardType="numeric"
                        isMasked={true}
                        type={'cel-phone'}
                        options={{
                            maskType: 'BRL',
                            withDDD: true,
                            dddMask: '(99) '
                        }}
                        value={telefone}
                        onChangeText={setTelefone}
                    />

                    <TouchableOpacity style={[global.primaryButton]}>
                        <Text style={global.primaryButtonText}>Alterar Dados</Text>
                    </TouchableOpacity>

                    <TouchableOpacity 
                        style={global.passwordResetDeiv} 
                        onPress={() => setModalVisible(true)}
                    >
                        <Text style={global.passwordResetAccount}>Alterar minha senha</Text>
                    </TouchableOpacity>
                </AuthContainer>
            </View>

            {modalVisible && (
                <View>
                    <Pressable  onPress={() => setModalVisible(false)} 
                    />
                    
                    <View style={global.modalCard}>
                        <Text style={[global.title, { marginBottom: 20, textAlign: 'center' }]}>
                            Alterar Senha
                        </Text>

                        <PasswordField 
                            label="Senha Atual" 
                            placeholder="Digite a senha atual" 
                            value={currentPassword}
                            onChangeText={setCurrentPassword}
                        />
                        <PasswordField 
                            label="Nova Senha" 
                            placeholder="Digite a nova senha" 
                            value={newPassword}
                            onChangeText={setNewPassword}
                        />
                        <PasswordField 
                            label="Confirme a Nova Senha" 
                            placeholder="Confirme a nova senha" 
                            value={confirmPassword}
                            onChangeText={setConfirmPassword}
                        />

                        <TouchableOpacity 
                            style={[global.secondaryButton, { marginTop: 25 }]}
                            onPress={() => {
                                setModalVisible(false);
                            }}
                        >
                            <Text style={global.primaryButtonText}>Confirmar Senha</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            )}
        </View>
    );
}

export default RenderAccount;