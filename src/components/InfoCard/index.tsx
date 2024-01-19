import React from 'react';

import { Feather as Icon } from '@expo/vector-icons';
import { styles } from './styles';
import { Text, View } from 'react-native';

interface Category {
  icon: string;
}

export interface TransactionCardProps {
  title: string;
  description: string;
  category: Category;
  date: string;
}

interface Props {
  data: TransactionCardProps;
}

export function InfoCard({ data }: Props) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{data.title}</Text>

      <Text style={styles.description}>{data.description}</Text>

      <View style={styles.footer}>
        <View style={styles.category}>
          <Icon style={styles.icon} name="alert-circle" />
        </View>
        <Text style={styles.date}>{data.date}</Text>
      </View>
    </View>
  );
}
