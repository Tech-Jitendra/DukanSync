import React, { useState } from 'react';
import { ScrollView, StyleSheet } from 'react-native';
import { Button, HelperText, TextInput, Title } from 'react-native-paper';

const SignUpScreen = () => {
    const [name, setName] = useState('');
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [password, setPassword] = useState('');
    const [secureText, setSecureText] = useState(true);

    const [submitted, setSubmitted] = useState(false);

    const isEmailValid = (email: string) =>
        /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

    const isPhoneValid = (phone: string) =>
        /^\d{10,15}$/.test(phone);

    const handleSignUp = () => {
        setSubmitted(true);
        if (
            name &&
            username &&
            isEmailValid(email) &&
            isPhoneValid(phone) &&
            password.length >= 6
        ) {
            // Handle sign up logic here
            // e.g., API call
        }
    };

    return (
        <ScrollView contentContainerStyle={styles.container}>
            <Title style={styles.title}>Sign Up</Title>
            <TextInput
                label="Name"
                value={name}
                onChangeText={setName}
                style={styles.input}
                mode="outlined"
                autoCapitalize="words"
            />
            <HelperText type="error" visible={submitted && !name}>
                Name is required
            </HelperText>

            <TextInput
                label="Username"
                value={username}
                onChangeText={setUsername}
                style={styles.input}
                mode="outlined"
                autoCapitalize="none"
            />
            <HelperText type="error" visible={submitted && !username}>
                Username is required
            </HelperText>

            <TextInput
                label="Email"
                value={email}
                onChangeText={setEmail}
                style={styles.input}
                mode="outlined"
                keyboardType="email-address"
                autoCapitalize="none"
            />
            <HelperText type="error" visible={submitted && !isEmailValid(email)}>
                Enter a valid email address
            </HelperText>

            <TextInput
                label="Phone"
                value={phone}
                onChangeText={setPhone}
                style={styles.input}
                mode="outlined"
                keyboardType="phone-pad"
            />
            <HelperText type="error" visible={submitted && !isPhoneValid(phone)}>
                Enter a valid phone number
            </HelperText>

            <TextInput
                label="Password"
                value={password}
                onChangeText={setPassword}
                style={styles.input}
                mode="outlined"
                secureTextEntry={secureText}
                right={
                    <TextInput.Icon
                        icon={secureText ? 'eye-off' : 'eye'}
                        onPress={() => setSecureText(!secureText)}
                    />
                }
            />
            <HelperText type="error" visible={submitted && password.length < 6}>
                Password must be at least 6 characters
            </HelperText>

            <Button
                mode="contained"
                onPress={handleSignUp}
                style={styles.button}
            >
                Sign Up
            </Button>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    container: {
        padding: 24,
        flexGrow: 1,
        justifyContent: 'center',
        backgroundColor: '#fff',
    },
    title: {
        marginBottom: 24,
        alignSelf: 'center',
    },
    input: {
        marginBottom: 8,
    },
    button: {
        marginTop: 16,
    },
});

export default SignUpScreen;