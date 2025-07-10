// import LoginScreen from './Authentication/LoginScreen';
import { PaperProvider, useTheme } from 'react-native-paper';
import JsStack from './layouts/js-stack';


import React from 'react';

export default function Layout() {
    const theme = useTheme()
    return (
        <PaperProvider>
            <JsStack
                id={undefined}
                screenOptions={{
                    headerStyle: {
                        backgroundColor: theme.colors.primary,
                    },
                    headerTintColor: '#fff',
                    headerTitleStyle: {
                        fontWeight: 'bold',
                    },
                }}
            >
                {/* <JsStack.Screen options={{ headerShown: false }} name="(auth)" />*/}
                <JsStack.Screen options={{ headerShown: false }} name="(tabs)" />
            </JsStack>
        </PaperProvider>
    );
}

