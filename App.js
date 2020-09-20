import React, { useState } from 'react';
import { StyleSheet, TextInput, View, FlatList, Button, Keyboard } from 'react-native';
import ForecastItem from './components/ForecastItem';

export default function App() {

  const [city, setCity] = useState ('');
  const [forecast, setForecast] = useState ([]);

  const endPoint = "https://api.openweathermap.org/data/2.5/forecast?lang=pt_br&units=metric&q=";
  const apiKey = '949c1b829358ce0d2ae2eb9fc8941859';

  const getCity = (city) => {
    setCity(city);
  }

  const getForecast = () => {
    setForecast([]);
    const target = endPoint + city + "&appid=" + apiKey;
    fetch(target)
    .then((data) => {
      return data.json()
    })
    .then((data) => {
      setForecast (data["list"])
      Keyboard.dismiss()
    });

  };
  return (
    <View style={styles.container}>

      <View style={styles.card}>
        <TextInput style={styles.cityName} placeholder="City name" value={city} onChangeText={getCity}></TextInput>
        <Button
          title="ok"
          onPress={getForecast}
        />
      </View>

      <FlatList
        data={forecast}
        renderItem={
          forecast =>(
            <ForecastItem forecast={forecast.item} />
          )
        }
      />

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 40,
    flexDirection: 'column',
    flex: 1,
    backgroundColor: '#FFF'
  },
  card: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 8
  },
  cityName: {
    padding: 12,
    borderBottomColor: '#BB96F3',
    borderBottomWidth: 2,
    textAlign: 'left',
    flexGrow: 0.9
  }
});
