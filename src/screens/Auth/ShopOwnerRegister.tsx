import { saveShopInfo } from '@/store/shop';
import { useRouter } from 'expo-router';
import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import { Button, TextInput, Title } from 'react-native-paper';

export default function ShopOwnerRegisterScreen() {
    const [shopName, setShopName] = useState('');
    const [ownerName, setOwnerName] = useState('');
    const router = useRouter();

    const handleRegister = () => {
        saveShopInfo(shopName, ownerName);
        router.replace('/');
    };

    return (
        <View style={styles.container}>
            <Title>Register Your Shop</Title>
            <TextInput
                label="Shop Name"
                value={shopName}
                onChangeText={setShopName}
                mode="outlined"
                style={styles.input}
            />
            <TextInput
                label="Owner Name"
                value={ownerName}
                onChangeText={setOwnerName}
                mode="outlined"
                style={styles.input}
            />
            <Button mode="contained" onPress={handleRegister}>
                Register
            </Button>
        </View>
    );
}

const styles = StyleSheet.create({
    container: { flex: 1, justifyContent: 'center', padding: 20 },
    input: { marginBottom: 16 },
});