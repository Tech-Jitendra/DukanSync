import { deleteUser, getUsers } from '@/store/users';
import React, { useEffect, useState } from 'react';
import { FlatList, StyleSheet, View } from 'react-native';
import { Button, FAB, List } from 'react-native-paper';

export default function UsersScreen() {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        setUsers(getUsers());
    }, []);

    return (
        <View style={styles.container}>
            <FlatList
                data={users}
                keyExtractor={(item) => item.id}
                renderItem={({ item }) => (
                    <List.Item
                        title={item.name}
                        right={() => (
                            <Button onPress={() => {
                                deleteUser(item.id);
                                setUsers(getUsers());
                            }}>
                                Delete
                            </Button>
                        )}
                    />
                )}
            />
            <FAB icon="plus" label="Add User" style={styles.fab} onPress={() => { }} />
        </View>
    );
}

const styles = StyleSheet.create({
    container: { flex: 1 },
    fab: { position: 'absolute', bottom: 20, right: 20 },
});