import { router } from 'expo-router';
import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import { Button, HelperText, TextInput, TouchableRipple, useTheme } from 'react-native-paper';

const LoginScreen = () => {
    const [loginType, setLoginType] = useState<'userid' | 'phone'>('userid');
    const [userId, setUserId] = useState('');
    const [password, setPassword] = useState('');
    const [phone, setPhone] = useState('');
    const [otp, setOtp] = useState('');
    const [otpSent, setOtpSent] = useState(false);
    const theme = useTheme();
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
            {/* <ToggleButton.Row
                onValueChange={value => setLoginType(value as 'userid' | 'phone')}
                value={loginType}
                style={styles.toggleRow}
            >
                <ToggleButton icon="account" value="userid" />
                <ToggleButton icon="cellphone" value="phone" />
            </ToggleButton.Row> */}

            {loginType === 'userid' ? (
                <>
                    <TextInput
                        label="User ID"
                        value={userId}
                        onChangeText={setUserId}
                        style={styles.input}
                        autoCapitalize="none"
                        outlineColor={theme.colors.primary}
                    />
                    <TextInput
                        label="Password"
                        value={password}
                        onChangeText={setPassword}
                        secureTextEntry
                        style={styles.input}
                        outlineColor={theme.colors.primary}
                    />
                </>
            ) : (
                // Mobile number and OTP login will be released in the next version
                // <>
                //     <TextInput
                //         label="Phone Number"
                //         value={phone}
                //         onChangeText={setPhone}
                //         keyboardType="phone-pad"
                //         style={styles.input}
                //     />
                //     <Button
                //         mode="outlined"
                //         onPress={handleSendOtp}
                //         disabled={!phone || otpSent}
                //         style={styles.otpButton}
                //     >
                //         {otpSent ? 'OTP Sent' : 'Send OTP'}
                //     </Button>
                //     <TextInput
                //         label="OTP"
                //         value={otp}
                //         onChangeText={setOtp}
                //         keyboardType="number-pad"
                //         style={styles.input}
                //         disabled={!otpSent}
                //     />
                //     <HelperText type="info" visible={otpSent}>
                //         Enter the OTP sent to your phone.
                //     </HelperText>
                // </>
                null
            )}

            <Button
                mode="contained"
                onPress={handleLogin}
                style={[styles.loginButton, { backgroundColor: theme.colors.primary }]}
                disabled={
                    loginType === 'userid'
                        ? !(userId && password)
                        : !(phone && otpSent && otp)
                }
            >
                <HelperText type='info' visible style={styles.buttonText}>
                    Submit
                </HelperText>
            </Button>

            <View style={styles.footer}>
                <TouchableRipple
                    onPress={() => console.log('Forgot Password')}
                    style={styles.forgotText}
                >
                    <HelperText type="info" visible>
                        Forgot Password?
                    </HelperText>
                </TouchableRipple>
                <TouchableRipple
                    onPress={() => router.push('/(auth)/SignUpScreen')}
                    style={styles.forgotText}
                >
                    <HelperText type="info" visible>
                        Don't Have an Account? Sign Up
                    </HelperText>
                </TouchableRipple>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 24,
        backgroundColor: '#fff',
        justifyContent: 'center',
    },
    toggleRow: {
        marginBottom: 24,
        alignSelf: 'center',
    },
    input: {
        marginBottom: 16,
        backgroundColor: '#f0f0f0',
    },
    otpButton: {
        marginBottom: 16,
        alignSelf: 'flex-end',
    },
    loginButton: {
        paddingBottom: 0,
        marginTop: 16,
        height: 48,
    },
    buttonText: {
        fontSize: 20,
        fontWeight: 'bold',
        textAlign: 'center',
        color: '#fff',
    },
    footer: {
        marginTop: 100,
        alignItems: 'center',
        justifyContent: 'center',
    },
    forgotText: {
        marginBottom: 16,
    }
});

export default LoginScreen;