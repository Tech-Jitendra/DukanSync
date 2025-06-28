// src/screens/HomeScreen.tsx
import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Button, Card, Text } from 'react-native-paper';

export default function HomeScreen() {
    return (
        <View style={styles.container}>
            <Card>
                <Card.Title title="DukanSync Dashboard" />
                <Card.Content>
                    <Text variant="bodyMedium">Welcome! Start managing your shop.</Text>
                </Card.Content>
                <Card.Actions>
                    <Button mode="contained" onPress={() => console.log('Clicked')}>
                        Its a Button
                    </Button>
                    <Button mode="contained" onPress={() => console.log('Clicked')}>
                        Go to Shop
                    </Button>
                </Card.Actions>
            </Card>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        padding: 16,
    },
});
