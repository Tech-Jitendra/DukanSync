import { JsStack } from './layouts/js-stack';

export default function Layout() {
    return (
        <JsStack
            screenOptions={
                {
                    headerStyle: {
                        backgroundColor: '#f4511e',
                    },
                    headerTintColor: '#fff',
                    headerTitleStyle: {
                        fontWeight: 'bold',
                    },
                }}
        >
            <JsStack.Screen name="index" />
            <JsStack.Screen options={{ headerShown: false }} name="(tabs)" />
        </JsStack>
    );
}

