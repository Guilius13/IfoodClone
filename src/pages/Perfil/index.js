import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { SafeAreaView, Image, View, ButtonContainer } from './style';
import {Text} from 'react-native';

import banner from '../../assets/img/banner.png'
import Button from '../../components/Button/index'

export default function Perfil() {
  return (
    <>
      <StatusBar style="theme-dark" />
      <SafeAreaView>
        <Text>Perfil</Text>
      </SafeAreaView>
    </>
  );
}