import { getPayments } from '@/store/payments';
import React, { useEffect, useState } from 'react';
import { FlatList, StyleSheet, View } from 'react-native';
import { Button, FAB, List } from 'react-native-paper';

export default function PaymentsScreen() {
    const [payments, setPayments] = useState([]);

    useEffect(() => {
        setPayments(getPayments());
    }, []);

    return (
        <View style={styles.container}>
            <FlatList
                data={payments}
                keyExtractor={(item) => item.id}
                renderItem={({ item }) => (
                    <List.Item
                        title={`₹${item.amount}`}
                        description={`From: ${item.user}`}
                        right={() => <Button>Details</Button>}
                    />
                )}
            />
            <FAB icon="cash-plus" style={styles.fab} onPress={() => { }} />
        </View>
    );
}

const styles = StyleSheet.create({
    container: { flex: 1 },
    fab: { position: 'absolute', bottom: 20, right: 20 },
});
