import React, {Component} from 'react';
import {
  View,
  Text,
  StyleSheet,
  StatusBar,
} from "react-native";

import moment from "moment";
import SetAlarm from './components/SetAlarm';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#900',
    justifyContent: 'center',
    alignItems: 'center',
  },
  timeText: {
    color: '#999999',
    fontSize: 80,
  },
  dateText: {
    color: '#999999',
    fontSize: 40,
  },
})

export default class App extends Component {
  getSetAlarmHandler = () => {

  }
  constructor(props) {
    super(props);
    this.state = {
      time: moment().format("LTS"),
      date: moment().format("LL")
    };
  }

  render() {
    setTimeout(() => {
      this.setState({
        time: moment().format("LTS"),
        date: moment().format("LL")
      });
    }, 1000);



    return (
      <View style={styles.container}>
        <StatusBar style={{backgroundColor: 'transparent'}} />
        <Text style={styles.timeText}>
          {this.state.time}
        </Text>
        <Text style={styles.dateText}>
          {this.state.date}
        </Text>
        <SetAlarm onSetAlarm={this.getSetAlarmHandler}/>
      </View>
    )
  }
}
