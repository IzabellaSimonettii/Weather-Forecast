import React from 'react';
import { View, Text, StyleSheet, Image }from 'react-native';
import Card from './Card';

const ForecastItem = (props) => {

  const time = data => (new Date(data * 1000).toLocaleTimeString());

  return (
    <Card styles={styles.card}>
      <View style={styles.screen}>
          <Image
            style={styles.image}
            source={{uri: "https://openweathermap.org/img/wn/" + props.forecast.weather[0].icon + ".png"}}
          />
          <View>

            <View style={styles.firstLine}>
              <Text>{time(props.forecast.dt)} - {props.forecast.weather[0].description}</Text>
            </View>

            <View style={styles.secondLine} >
                <Text style={styles.box}>Sunrise: {time(props.forecast.main.sunrise)} </Text>
                <Text style={styles.box}>Sunset: {time(props.forecast.main.sunset)}</Text>
            </View>

            <View style={styles.thirdLine}>
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
    marginTop: 10
  },
  secondLine: {
    justifyContent: 'column',
    flexDirection: 'row',
    marginTop: 5
  },
  thirdLine: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    marginTop: 5,
    borderTopWidth: 1,
    borderTopColor: '#DDD'
  },
  card: {
    margin: 40,
    borderWidth: 1,
    borderColor: 'DDD'
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
  },
  box: {
    margin: 2,
    borderBottonWidth: 2,
    borderTopColor: '#DDD'
  }
});
export default ForecastItem;
