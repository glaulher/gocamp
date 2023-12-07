import React, { useEffect } from 'react';
import {
  Keyboard,
  KeyboardAvoidingView,
  Platform,
  TouchableWithoutFeedback,
  Text,
  View,
  TextInput,
} from 'react-native';
import Entypo from '@expo/vector-icons/Entypo';
import { StatusBar } from 'expo-status-bar';
import { useNavigation } from '@react-navigation/native';

import Header from '../../components/Header';
import useDashBoardStyles from './styles';

import { HighlightCard } from '../../components/HighlightCard';
import { Button } from '../../components/Button';

export const Dashboard = () => {
  const styles = useDashBoardStyles();

  const { setOptions, addListener } = useNavigation();

  useEffect(() => {
    if (Platform.OS === 'ios') {
      setOptions({ gestureEnabled: false });
    } else if (Platform.OS === 'android') {
      // android does not respect gestureEnabled flag
      addListener('beforeRemove', (nav) => {
        // Prevent going back on swipe
        if (nav.data.action.type === 'GO_BACK' && !nav.data.action.source) {
          nav.preventDefault();
        }
      });
    }
  }, [addListener, setOptions]);

  return (
    <>
      <KeyboardAvoidingView
        style={{ flex: 1 }}
        behavior={Platform.OS === 'ios' ? 'padding' : undefined}
      >
        <View style={styles.container}>
          <Header />

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
      </KeyboardAvoidingView>
    </>
  );
};
