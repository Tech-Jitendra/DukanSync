// src/hooks/useThemeColor.ts
import { useColorScheme } from 'react-native';

export function useThemeColor(light: string, dark: string) {
    const scheme = useColorScheme();
    return scheme === 'dark' ? dark : light;
}
