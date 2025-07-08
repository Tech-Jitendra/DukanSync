import LoginScreen from './Authentication/LoginScreen';
import JsStack from './layouts/js-stack';

export default function Layout() {
    return (
        <JsStack
            initialRouteName='LoginScreen'
            id={undefined}
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
            {/* <JsStack.Screen name="index" /> */}
            <JsStack.Screen getComponent={LoginScreen} name="LoginScreen" options={{ headerShown: false }} />
            <JsStack.Screen options={{ headerShown: false }} name="(tabs)" />
        </JsStack>
    );
}

