import React, { useState } from 'react';
import { StyleSheet, TextInput, View, FlatList, Button, Keyboard } from 'react-native';
import ForecastItem from './components/ForecastItem';

export default function App() {

  // variables 

  const [city, setCity] = useState ('');
  const [forecast, setForecast] = useState ([]);
  const [cityData, setCityData] = useState ({});
  const [cityInfo, setCityInfo] = useState({ current: {}, city: {} });


  // keys v1
  // const endPoint = "https://api.openweathermap.org/data/2.5/forecast?lang=pt_br&units=metric&q=";
  // const apiKey = '949c1b829358ce0d2ae2eb9fc8941859';

  // keys v2
  const endPoint = "https://api.openweathermap.org/data/2.5";
  const apiKey = '949c1b829358ce0d2ae2eb9fc8941859';
  const forecastSettings = "/forecast?lang=pt_br&units=metric";
  const oneCall = "/onecall?lang=pt_br&units=metric";

  const getCity = (city) => {
    setCity(city);
  }

  const getCityInfo = (coord) => {

    const request = `${endPoint}${oneCall}&lat=${coord.lat}&lon=${coord.lon}&appid=${apiKey}`;

    fetch(request).then((data) => {
        return data.json();

      }).then((data) => {
        setCityInfo(data);
      })
  }

  const getForecast = () => {

    setForecast([]);

    const request = `${endPoint}${forecastSettings}&q=${city}&appid=${apiKey}`;

    fetch(request).then((data) => data.json()).then((data) => {
      setForecast (data["list"]);
      setCityData (data["city"]);
      getCityInfo(data["city"]['coord']);
      Keyboard.dismiss();
    });
  };

  return (
    <View style={styles.container}>

      <View style={styles.card}>
        <TextInput style={styles.cityName} placeholder="City name" value={city} onChangeText={getCity}></TextInput>
        <Button style={styles.button} title="ok" onPress={getForecast}></Button>
      </View>

      <FlatList data={forecast} renderItem={ forecast =>(
        <ForecastItem forecast={forecast.item}></ForecastItem>)}>
      </FlatList>

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
  card: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginBottom: 45
  },

  cityName: {
    padding: 12,
    borderBottomColor: 'green',
    borderBottomWidth: 2,
    textAlign: 'left',
    flexGrow: 0.9,
  },
  button: {
    backgroundColor: 'green'
  },
  forecast: {
    display: 'grid',
    justifyContent: 'center',
    margin: 10
  }
});
