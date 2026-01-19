import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Random Check In</Text>
      <Text style={styles.subtitle}>AI-generated React Native App</Text>
      <View style={styles.features}>
        <Text style={styles.featureTitle}>Features:</Text>
        <Text key={i} style={styles.feature}>• {feature}</Text>
<Text key={i} style={styles.feature}>• {feature}</Text>
<Text key={i} style={styles.feature}>• {feature}</Text>
<Text key={i} style={styles.feature}>• {feature}</Text>
<Text key={i} style={styles.feature}>• {feature}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#4F97D1',
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 18,
    color: '#666',
    marginBottom: 30,
  },
  features: {
    alignItems: 'flex-start',
  },
  featureTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  feature: {
    fontSize: 16,
    color: '#333',
    marginBottom: 5,
  },
});
