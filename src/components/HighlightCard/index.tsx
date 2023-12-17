import React, { ReactNode } from 'react';
import { View, Text, Image } from 'react-native';

import Map from '../../assets/map.png';

import Icon from 'react-native-vector-icons/Feather';
import { iconMap, styles } from './styles';

interface Props {
  children: ReactNode;
  local: string;
  address: string;
  cep: string;
  latitude: string;
  longitude: string;
  region: string;
  city: string;
}

export function HighlightCard({
  children,
  local,
  address,
  cep,
  city,
  region,
  latitude,
  longitude,
}: Props) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{local}</Text>
      <View style={styles.cardWrapper}>
        <View>
          <Text style={styles.address}>{address}</Text>
          <Text style={styles.address}>{cep}</Text>
          <View style={styles.city}>
            <Text style={styles.text}>{city}</Text>
            <View style={styles.cardWrapper}>
              <Text style={styles.text}>{region}</Text>
            </View>
          </View>
        </View>

        <Image source={Map} alt="Map" />
      </View>
      <View style={styles.footer}>
        <View style={styles.coordinates}>
          <Icon color={iconMap} name="map-pin" />
          <Text style={styles.latitude}>latitude:{latitude}</Text>
        </View>
        <View style={styles.coordinates}>
          <Icon color={iconMap} name="map-pin" />
          <Text style={styles.longitude}>longitude:{longitude}</Text>
        </View>
      </View>
      {children}
    </View>
  );
}
