import React, {useCallback} from 'react';
import {
  StyleSheet,
  Text,
  View,
  Linking,
  Alert,
  TouchableOpacity,
} from 'react-native';
import {Bank} from '../../../models/bank';

interface BankCardProps {
  bank: Bank;
}

export const BANK_CARD_HEIGHT = 150;

export const BankCard = ({bank}: BankCardProps) => {
  const {bankName, description, url, age} = bank ?? {};

  const handlePress = useCallback(async () => {
    const supported = await Linking.canOpenURL(url);

    if (supported) {
      await Linking.openURL(url);
    } else {
      Alert.alert(`No sé puede abrir esta URL: ${url}`);
    }
  }, [url]);

  return (
    <View style={styles.card}>
      <Text style={[styles.title, styles.textAlign]}>{bankName}</Text>
      <Text style={[styles.description, styles.textAlign]}>{description}</Text>
      <Text style={[styles.textAlign]}>{`Años operando: ${age}`}</Text>
      <TouchableOpacity onPress={handlePress}>
        <Text style={[styles.textAlign, styles.url]}>Ir a la página</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    height: BANK_CARD_HEIGHT,
    borderRadius: 8,
    borderColor: '#332F2E',
    borderWidth: 0.5,
    padding: 8,
    justifyContent: 'center',
    alignItems: 'center',
  },
  textAlign: {
    textAlign: 'center',
    marginBottom: 4,
    color: '#33332E',
  },
  title: {
    fontWeight: '600',
    fontSize: 22,
  },
  description: {
    fontWeight: '400',
    fontSize: 16,
  },
  url: {
    color: 'blue',
    textDecorationLine: 'underline',
  },
});
