import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import { Button, HelperText, TextInput, ToggleButton } from 'react-native-paper';

const LoginScreen = () => {
    const [loginType, setLoginType] = useState<'userid' | 'phone'>('userid');
    const [userId, setUserId] = useState('');
    const [password, setPassword] = useState('');
    const [phone, setPhone] = useState('');
    const [otp, setOtp] = useState('');
    const [otpSent, setOtpSent] = useState(false);

    const handleLogin = () => {
        if (loginType === 'userid') {
            // Handle userId/password login
            // TODO: Implement login logic
            console.log('Login with userId:', userId, password);
        } else {
            // Handle phone/otp login
            // TODO: Implement login logic
            console.log('Login with phone:', phone, otp);
        }
    };

    const handleSendOtp = () => {
        // TODO: Implement send OTP logic
        setOtpSent(true);
        console.log('OTP sent to:', phone);
    };

    return (
        <View style={styles.container}>
            <ToggleButton.Row
                onValueChange={value => setLoginType(value as 'userid' | 'phone')}
                value={loginType}
                style={styles.toggleRow}
            >
                <ToggleButton icon="account" value="userid" />
                <ToggleButton icon="cellphone" value="phone" />
            </ToggleButton.Row>

            {loginType === 'userid' ? (
                <>
                    <TextInput
                        label="User ID"
                        value={userId}
                        onChangeText={setUserId}
                        style={styles.input}
                        autoCapitalize="none"
                    />
                    <TextInput
                        label="Password"
                        value={password}
                        onChangeText={setPassword}
                        secureTextEntry
                        style={styles.input}
                    />
                </>
            ) : (
                <>
                    <TextInput
                        label="Phone Number"
                        value={phone}
                        onChangeText={setPhone}
                        keyboardType="phone-pad"
                        style={styles.input}
                    />
                    <Button
                        mode="outlined"
                        onPress={handleSendOtp}
                        disabled={!phone || otpSent}
                        style={styles.otpButton}
                    >
                        {otpSent ? 'OTP Sent' : 'Send OTP'}
                    </Button>
                    <TextInput
                        label="OTP"
                        value={otp}
                        onChangeText={setOtp}
                        keyboardType="number-pad"
                        style={styles.input}
                        disabled={!otpSent}
                    />
                    <HelperText type="info" visible={otpSent}>
                        Enter the OTP sent to your phone.
                    </HelperText>
                </>
            )}

            <Button
                mode="contained"
                onPress={handleLogin}
                style={styles.loginButton}
                disabled={
                    loginType === 'userid'
                        ? !(userId && password)
                        : !(phone && otpSent && otp)
                }
            >
                Login
            </Button>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        padding: 24,
        backgroundColor: '#fff',
    },
    toggleRow: {
        marginBottom: 24,
        alignSelf: 'center',
    },
    input: {
        marginBottom: 16,
    },
    otpButton: {
        marginBottom: 16,
        alignSelf: 'flex-end',
    },
    loginButton: {
        marginTop: 16,
    },
});

export default LoginScreen;