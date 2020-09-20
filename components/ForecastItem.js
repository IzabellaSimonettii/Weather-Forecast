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
              <Text style={styles.value}>Min: {props.forecast.main.temp_min + "\u00B0"}</Text>
              <Text style={styles.value}>Max: {props.forecast.main.temp_max + "\u00B0"}</Text>
              <Text style={styles.value}>Hum: {props.forecast.main.humidity}%</Text>
            </View>

          </View>
      </View>
    </Card>
  )
}

const styles = StyleSheet.create ({
  firstLine: {
    justifyContent: 'center',
    flexDirection: 'row'
  },
  secondLine: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 4,
    borderTopWidth: 1,
    borderTopColor: '#DDD'
  },
  card: {
    marginBottom: 10
  },
  screen: {
    flexDirection: 'row'
  },
  image: {
    width: 50,
    height: 50
  },
  value: {
    marginHorizontal: 2
  }
});
export default ForecastItem;
