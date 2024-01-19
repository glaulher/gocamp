import React, { useEffect } from 'react';
import {
  KeyboardAvoidingView,
  Platform,
  View,
  Text,
  FlatList,
} from 'react-native';

import { useNavigation } from '@react-navigation/native';

import Header from '../../components/Header';
import useDashBoardStyles from './styles';

import { HighlightCard } from '../../components/HighlightCard';
import { Button } from '../../components/Button';
import { InfoCard } from '../../components/InfoCard';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

export const Dashboard = () => {
  const data = [
    {
      id: '1',
      title: 'O que levar?',
      description:
        'Roupa de cama, repelente, produtos para higiene, prato, copo e talheres.',
      category: {
        icon: 'dollar-sign',
      },
      date: '13/04/2021',
    },
    {
      id: '2',
      title: 'Não perca a hora de ir',
      description:
        'Saída as 06:30 de 10/02/2024, volta as 09:00 de 14/02/2024.',
      category: {
        icon: 'dollar-sign',
      },
      date: '13/04/2021',
    },
    {
      id: '3',
      title: 'Desenvolvimento de site3',
      description: 'R$ 12.000,00',
      category: {
        icon: 'dollar-sign',
      },
      date: '13/04/2021',
    },
  ];

  const insets = useSafeAreaInsets();

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

          <View style={styles.highlightCards}>
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
        <View style={styles.transactions}>
          <Text style={styles.title}>Avisos</Text>
          <FlatList
            data={data}
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => <InfoCard data={item} />}
            showsVerticalScrollIndicator={false}
            contentContainerStyle={{
              paddingBottom: insets.bottom,
            }}
          />
        </View>
      </KeyboardAvoidingView>
    </>
  );
};
