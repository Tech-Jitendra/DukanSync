import JsStack from "app/layouts/js-stack";
import { useTheme } from "react-native-paper";

export default function Layout() {
    const theme = useTheme()
    return (
        <JsStack
            id={undefined}
            screenOptions={
                {
                    headerStyle: {
                        backgroundColor: theme.colors.primary,
                    },
                    headerTintColor: '#fff',
                    headerTitleStyle: {
                        fontSize: 30,
                        fontWeight: 'bold',
                    },
                }}
        >
            <JsStack.Screen options={{ headerShown: true }} name="LoginScreen" />
            <JsStack.Screen options={{ headerShown: true }} name="SignUpScreen" />
        </JsStack>
    );
}

