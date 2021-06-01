import React from 'react';
import { StyleSheet, SafeAreaView, FlatList, View, Image, Text, StatusBar, ScrollView } from 'react-native';
const ListCat = ({ cats, deleteCat }) => {
  return (
    <SafeAreaView>
        <ScrollView >
            {
                cats && cats.length > 0 ? (
                    cats.map(cat => {
                        return (
                            <View key={cat._id}>
                                <Image key={cat._id} source={{uri: cat.action}} style={{height: 300, resizeMode: 'cover'}} />
                            </View>
                        )
                    })
                ) : (
                    <Text>No cattos left 😿</Text>
                )
            }
        </ScrollView>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: StatusBar.curentHeight
    },
    scrollView: {
        
    }
})
export default ListCat