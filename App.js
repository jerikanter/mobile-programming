import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Dimensions,
  Text,
  TextInput,
  Button
} from 'react-native';
 
var { height } = Dimensions.get('window');
 
var box_count = 3;
var box_height = height / box_count;
// export default class ... extends Component adalah class component
// Untuk mencreate component kita cukup mengetik rn kemudian akan tampil secara otomatis
// component yang akan kita perlukan.
export default class VerticalStackLayout extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: ''
    };
  }
  render() {
    return (
      // Ini merupakan bagian Style
        <View style={styles.container}>
        <Show name={this.state.name}/>
            <View style={[styles.box, styles.box1]}>
            <Text> Input text:</Text>
        <TextInput
        placeHolde="Ketikan Nama"
        style={{width:200, borderWidth:1}}
        onChangeText={(text) => this.setState({name:text})}
        />
        </View>
            <View style={[styles.box, styles.box2]}></View>
            <View style={[styles.box, styles.box3]}></View>
        </View>
    );
  }
}

class Show extends Component {
  render() {
    return (
      <View>
        <Text style={{fontWeight: 'bold'}}>Output :{this.props.name} </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column'
  },
  box: {
    height: box_height
  },
  box1: {
    backgroundColor: '#f44336'
  },
  box2: {
    backgroundColor: '#8BC34A'
  },
  box3: {
    backgroundColor: '#538edf'
  }
});