import React, {Component} from 'react';
import { SafeAreaView, Text } from 'react-native';
import axios from 'axios';

import Input from './addCat';
import ListCat from './showCats';

class Cat extends Component {
  state = {
    cats: []
  }

  componentDidMount(){
    this.getCats();
  }

  getCats = () => {
    axios.get('http://192.168.0.23:5000/api/cats')
      .then(res => {
        if(res.data){
            this.setState({
                cats: res.data
            })
        }
      })
      .catch(err => console.log("Error!! ", err))
  }

//   deleteCat = (id) => {
//     axios.delete(`/api/cats/${id}`)
//       .then(res => {
//         if(res.data){
//           this.getCats()
//         }
//       })
//       .catch(err => console.log(err))
//   }

  render() {
    let { cats } = this.state;
    return(
      <SafeAreaView>
        <Text>Cattos</Text>
        <Input getCats={this.getCats}/>
        <ListCat cats={cats} deleteCat={this.deleteCat}/>
      </SafeAreaView>
    )
  }
}

export default Cat;