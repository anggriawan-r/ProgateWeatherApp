import React, { useState } from 'react';
import { View, StyleSheet, ActivityIndicator } from 'react-native';
import WeatherSearch from './src/components/weatherSearch';
import WeatherInfo from './src/components/weatherInfo';
import axios from 'axios';
import { API_KEY, BASE_URL } from './src/constants';

const App = () => {
  const [weatherData, setWeatherData] = useState();
  const [status, setStatus] = useState('');

  const renderComponent = () => {
    switch (status) {
      case 'loading':
        return <ActivityIndicator style={{ marginTop: 32 }} size="large" />;
      case 'success':
        return <WeatherInfo weatherData={weatherData} />;
      case 'error':
        return (
          <Text>
            Something went wrong. Please try again with correct city name.
          </Text>
        );
      default:
        return;
    }
  };

  const searchWeather = (location) => {
    setStatus('loading');
    axios
      .get(`${BASE_URL}?q=${location}&appid=${API_KEY}`)
      .then((response) => {
        const data = response.data;
        data.visibility /= 1000;
        data.visibility = data.visibility.toFixed(2);
        data.main.temp -= 273.15;
        data.main.temp = data.main.temp.toFixed(2);
        setWeatherData(data);
        setStatus('success');
      })
      .catch((error) => {
        setStatus('error');
      });
  };

  return (
    <View style={styles.container}>
      <WeatherSearch searchWeather={searchWeather} />
      <View style={styles.marginTop20}>{renderComponent()}</View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
});

export default App;
