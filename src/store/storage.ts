import { MMKV } from 'react-native-mmkv';

export const storage = new MMKV();

// Keys
export const STORAGE_KEYS = {
    SHOP: 'SHOP_INFO',
    USERS: 'USERS',
    PAYMENTS: 'PAYMENTS',
    IS_REGISTERED: 'IS_REGISTERED',
};
