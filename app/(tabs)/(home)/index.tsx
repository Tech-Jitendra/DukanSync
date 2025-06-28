import { Stack } from 'expo-router';
import { useState } from 'react';
import { Button, Image, StyleSheet, Text } from 'react-native';

function LogoTitle() {
    return (
        <Image style={styles.image} source={{ uri: 'https://reactnative.dev/img/tiny_logo.png' }} />
    );
}

export default function Home() {
    const [count, setCount] = useState(0);

    return (
        <>
            <Stack.Screen
                options={{
                    headerTitle: props => <LogoTitle {...props} />,
                    headerRight: () => <Button onPress={() => setCount(c => c + 1)} title="Update count" />,
                }}
            />
            <Text>Count: {count}</Text>
        </>
    );
}

const styles = StyleSheet.create({
    image: {
        width: 50,
        height: 50,
    },
});
