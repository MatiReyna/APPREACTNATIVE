import React from 'react';
import { View, Text, ImageBackground, SafeAreaView } from 'react-native';

export default function WelcomeScreen() {
  return (
    <ImageBackground
      source={ require('../../assets/welcome.png') }
      style={{ flex: 1 }}
      resizeMode="cover"
    >
      <SafeAreaView style={{ flex: 1, justifyContent: 'flex-end' }}>
        <View className="p-5 pb-10 space-y-8">
          <View className="space-y-3">
            <Text className="text-white font-bold text-5xl">
              Traveling made easy!
            </Text>
            <Text className="text-neutral-200 font-medium">
              Experience the world's best adventure around the world with us
            </Text>
          </View>
        </View>
      </SafeAreaView>
    </ImageBackground>
  );
}