import { isShopRegistered } from '@/store/shop'; // MMKV helper
import { Redirect } from 'expo-router';

export default function Index() {
    const registered = isShopRegistered();
    return <Redirect href={registered ? '/users' : '/register'} />;
}
