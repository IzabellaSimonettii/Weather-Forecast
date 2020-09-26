import React, { useState } from 'react';
import { StyleSheet, TextInput, View, FlatList, Button, Keyboard } from 'react-native';
import ForecastItem from './components/ForecastItem';

export default function App() {

 
  const [city, setCity] = useState ('');
  const [forecast, setForecast] = useState ([]);

  const endPoint = "https://api.openweathermap.org/data/2.5";
  const apiKey = '949c1b829358ce0d2ae2eb9fc8941859';
  const forecastSettings = "/forecast?lang=pt_br&units=metric";
  // const oneCall = "/onecall?lang=pt_br&units=metric";

  const getCity = (city) => {
    setCity(city);
  }

  const getForecast = () => {

    setForecast([]);

    const request = `${endPoint}${forecastSettings}&q=${city}&appid=${apiKey}`;

    fetch(request).then((data) => data.json()).then((data) => {
      setForecast (data["list"]);
      setCity (data["city"]);
      // getCityInfo(data["city"]['coord']);
      Keyboard.dismiss();
    });
  };

  return (
    <View style={styles.container}>

      <View style={styles.search}>
        <TextInput style={styles.cityName} placeholder="City name" value={city} onChangeText={getCity}></TextInput>
        <Button title="Search" onPress={getForecast}></Button>
      </View>

      <View style={styles.card}>
        <FlatList data={forecast} renderItem={ forecast =>(
          <ForecastItem forecast={forecast.item}></ForecastItem>)}>
          </FlatList>
      </View>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 40,
    flexDirection: 'column',
    flex: 4,
    backgroundColor: '#FFF'
  },
  search: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginBottom: 45,
  },

  card: {
    flexDirection: 'column',
    justifyContent: 'center',
    margin: 30
  },

  cityName: {
    padding: 12,
    borderBottomColor: 'green',
    textAlign: 'left',
    flexGrow: 0.9,
  },

  forecast: {
    display: 'grid',
    justifyContent: 'center',
    margin: 10
  }
});
