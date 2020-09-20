import React from 'react';
import { View, Text, StyleSheet, Image }from 'react-native';
import Card from './Card';

const ForecastItem = (props) => {

  return (
    <Card styles={styles.card}>
      <View style={styles.screen}>
          <Image
            style={styles.image}
            source={{uri: "https://openweathermap.org/img/wn/" + props.forecast.weather[0].icon + ".png"}}
          />
          <View>

            <View style={styles.firstLine}>
              <Text>{new Date(props.forecast.dt * 1000).toLocaleTimeString()} - {props.forecast.weather[0].description}</Text>
            </View>

            <View style={styles.secondLine}>
              <Text style={styles.value}>Sunrise: {new Date(props.forecast.sunrise * 1000).toLocaleTimeString()} - {props.forecast.weather[0].description}</Text>
              {/* <Text style={styles.value}>Sunset: {new Date(0).setUTCSeconds(props.forecast.main.sunset).toLocaleTimeString()}</Text> */}
              <Text style={styles.value}>Min: {parseFloat(props.forecast.main.temp_min).toFixed(1) + "\u00B0"}</Text>
              <Text style={styles.value}>Max: {parseFloat(props.forecast.main.temp_max).toFixed(1) + "\u00B0"}</Text>
              <Text style={styles.value}>Hum: {props.forecast.main.humidity}%</Text>
              <Text style={styles.value}>Termic Sensation: {parseFloat(props.forecast.main.feels_like).toFixed(1)  + "\u00B0"}</Text>
            </View>

          </View>
      </View>
    </Card>
  )
}

const styles = StyleSheet.create ({

  margin: 10,

  firstLine: {
    justifyContent: 'center',
    flexDirection: 'row',
    marginTop:10
  },
  secondLine: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    marginTop: 5,
    borderTopWidth: 1,
    borderTopColor: '#DDD'
  },
  card: {
    margin: 10,
  },
  screen: {
    flexDirection: 'row'
  },
  image: {
    width: 80,
    height: 80
  },
  value: {
    marginHorizontal: 2
  }
});
export default ForecastItem;
