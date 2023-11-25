import {
  Keyboard,
  KeyboardAvoidingView,
  Platform,
  TouchableWithoutFeedback,
  Text,
  View,
  TextInput,
} from 'react-native';
import Header from '../../components/Header';
import { styles } from './styles';
import React from 'react';
import { HighlightCard } from '../../components/HighlightCard';
import { Button } from '../../components/Button';
import { StatusBar } from 'expo-status-bar';

export default function DashBoardScreen() {
  return (
    <>
      <KeyboardAvoidingView
        style={{ flex: 1 }}
        behavior={Platform.OS === 'ios' ? 'padding' : undefined}
      >
        <View style={styles.container}>
          <Header />

          <View style={styles.body}>
            <View style={styles.HighlightCards}>
              <HighlightCard
                local="Pousada Agua Cristalina"
                address="Av. Castelo Branco, 5200,"
                cep="CEP 28680-000"
                city="Cachoeiras de Macacu"
                region="Rio de Janeiro - Brasil"
                latitude="-22.419026,"
                longitude=" -42.626327"
              >
                <Button title="Ir para o retiro" />
              </HighlightCard>
            </View>
          </View>
        </View>
      </KeyboardAvoidingView>
    </>
  );
}
