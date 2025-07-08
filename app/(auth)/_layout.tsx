import JsStack from "app/layouts/js-stack";

export default function Layout() {
    return (
        <JsStack
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
            <JsStack.Screen options={{ headerShown: false }} name="LoginScreen" />
            <JsStack.Screen options={{ headerShown: false }} name="SignUpScreen" />
        </JsStack>
    );
}

