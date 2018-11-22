import React from 'react';
import {
  StyleSheet,
  Text,
  TextInput,
  View,
  Platform,
  Slider
} from 'react-native';
import { constants } from 'perf_hooks';

class ColorControl extends React.Component {

  constructor(props) {
    super(props);

    this.state = props
  }

  render() {
    return (
      <View style = {{ flex: 1, flexDirection: 'row', alignItems: "center", justifyContent: "center"}}>
        <Text> { this.state.title }</Text>
        <Slider onValueChange= { (val) => {
          // this.setState({ value: val });
          this.props.onValueChange(val);
        }} value={ this.state.value } step = {1} minimumValue = {0} maximumValue = {255} style = {{ width: 200, marginLeft: 5, marginRight: 5 }} />
        <TextInput style = { styles.textInput } value = { `${this.state.value}` } />
    </View>
    )
  }
}

export default class App extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      red: 100,
      green: 150,
      blue: 200
    }
  }

  onSliderValueChange = (color) => {
    this.setState(color);
  }

  renderHeader = () => {
    return (
      <View style = { styles.header }>
        <Text style={ styles.headerText }>Color Picker</Text>
      </View>
    )
  }

  render() {
    return (
      <View style={ styles.container }>
 
        { this.renderHeader() }

        <View style= {{ flex:1, alignItems: 'center', justifyContent: 'center' }}>
          <View style = {{ width: 300, height: 350, flexDirection: 'column' }}>
            <View style = {{ flex: 1 }}>
              <ColorControl title = "R" value={ this.state.red } onValueChange = { (val) => {
                const currentColor = this.state;
                const newColor = { ...currentColor, red: val};
                this.onSliderValueChange(newColor)
              }} />
              <ColorControl title = "G" value={ this.state.green }  onValueChange = { (val) => {
                const currentColor = this.state;
                const newColor = { ...currentColor, green: val};
                this.onSliderValueChange(newColor)
              }} />
              <ColorControl title = "B" value={ this.state.blue }  onValueChange = { (val) => {
                const currentColor = this.state;
                const newColor = { ...currentColor, blue: val};
                this.onSliderValueChange(newColor)
              }}/>

            </View>
            <View style = {{ flex: 1, backgroundColor: `rgb( ${this.props.red}, ${this.props.green}, ${this.props.blue})` }}>

            </View>
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FAFAFA'
  },
  header: {
      height: 65,
      backgroundColor: '#ECEFF1',
      alignItems: "center",
      justifyContent: "center",
      shadowColor: "gray",
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.3,
      elevation: 2
  },
  headerText: {
    fontSize: 17,
    ...Platform.select({
      ios: {
        marginTop: 5,
      },
      android: {
        marginTop: 0
      }
    })
  },
  textInput: {
    width: 40,
    height: 30,
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 5,
    textAlign: 'center',
  }
});
