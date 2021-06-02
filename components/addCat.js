import React, { Component } from 'react';
import { SafeAreaView, Text, TextInput, Button, StyleSheet } from 'react-native';
import axios from 'axios';

const styles = StyleSheet.create({
    button: {
        // color: '#777777'
    }
})

class Input extends Component {
  state = {
    action: ""
  }
  addCat = () => {
    const task = {action: this.state.action}
    if(task.action && task.action.length > 0) {
      axios.post('http://192.168.0.23:5000/api/cats', task)
        .then(res => {
          if(res.data){
            this.props.getCats();
            this.setState({action: ""})
          }
        })
        .catch(err => console.log(err))
    } else {
      console.log('input field required')
    }
  }

  handleChange = (e) => {
    this.setState({
      action: e
    })
  }

  render() {
    let { action } = this.state;
    return (
      <SafeAreaView>
            <Text>Insert the img url below</Text>
            <TextInput placeholder="https://..." onChangeText={this.handleChange} value={action} />
            <Button color='#efb5c3' style={styles.button} title="add catto pic" onPress={this.addCat} />
      </SafeAreaView>
    )
  }
}

export default Input