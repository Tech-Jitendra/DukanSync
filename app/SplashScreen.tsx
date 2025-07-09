import { FontAwesome5, MaterialCommunityIcons } from '@expo/vector-icons';
import React, { useEffect, useRef } from 'react';
import { Animated, Easing, StyleSheet, Text, View } from 'react-native';

const AnimatedIcon = Animated.createAnimatedComponent(MaterialCommunityIcons);
const AnimatedFontAwesome = Animated.createAnimatedComponent(FontAwesome5);

export default function SplashScreen({ onFinish }: { onFinish?: () => void }) {
  const shopAnim = useRef(new Animated.Value(0)).current;
  const customerAnim = useRef(new Animated.Value(0)).current;
  const shop2Anim = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.stagger(400, [
      Animated.timing(shopAnim, {
        toValue: 1,
        duration: 800,
        useNativeDriver: true,
        easing: Easing.out(Easing.exp),
      }),
      Animated.timing(customerAnim, {
        toValue: 1,
        duration: 800,
        useNativeDriver: true,
        easing: Easing.out(Easing.exp),
      }),
      Animated.timing(shop2Anim, {
        toValue: 1,
        duration: 800,
        useNativeDriver: true,
        easing: Easing.out(Easing.exp),
      }),
    ]).start(() => {
      setTimeout(() => {
        if (onFinish) onFinish();
      }, 1200);
    });
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>DukanSync</Text>
      <View style={styles.row}>
        <AnimatedIcon
          name="store"
          size={60}
          color="#4F8EF7"
          style={{ opacity: shopAnim, transform: [{ scale: shopAnim }] }}
        />
        <AnimatedFontAwesome
          name="user-alt"
          size={50}
          color="#F7B801"
          style={{ marginHorizontal: 30, opacity: customerAnim, transform: [{ scale: customerAnim }] }}
        />
        <AnimatedIcon
          name="storefront"
          size={60}
          color="#4F8EF7"
          style={{ opacity: shop2Anim, transform: [{ scale: shop2Anim }] }}
        />
      </View>
      <Text style={styles.subtitle}>Connecting Shops & Customers</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 36,
    fontWeight: 'bold',
    marginBottom: 40,
    color: '#4F8EF7',
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 30,
  },
  subtitle: {
    fontSize: 18,
    color: '#888',
    marginTop: 20,
  },
});
