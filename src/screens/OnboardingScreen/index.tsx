import React from 'react';
import {Image, SafeAreaView, Text, TouchableOpacity, View} from 'react-native';

import {RootStackScreenProps} from '../../navigation/types';
import {styles} from './styles';

const startPageImg = require('../../assets/images/start_page_img.png');

const OnboardingScreen: React.FC<RootStackScreenProps<'Onboarding'>> = ({
  navigation,
}) => {
  const navigateToSignup = () => navigation.navigate('Signup');
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        <Image source={startPageImg} style={styles.image} />
        <Text style={styles.title}>
          Simplify, Organize, and Conquer{' '}
          <Text style={styles.highlight}>Your Day</Text>
        </Text>
        <Text style={styles.subtitle}>
          Take control of your tasks and achieve your goals.
        </Text>
        <TouchableOpacity style={styles.startButton} onPress={navigateToSignup}>
          <Text style={styles.startText}>Lets Start</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default OnboardingScreen;
