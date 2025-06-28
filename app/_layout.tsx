// App.tsx
import { Stack } from 'expo-router';
import React from 'react';
import { PaperProvider } from 'react-native-paper';
import { SafeAreaProvider } from 'react-native-safe-area-context';

export default function App() {
    return (
        <PaperProvider>
            <SafeAreaProvider>
                <Stack />
            </SafeAreaProvider>
        </PaperProvider>
    );
}
