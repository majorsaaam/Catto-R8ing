import React from 'react';
import { StyleSheet, View, Image, Text, StatusBar, ScrollView } from 'react-native';
const ListCat = ({ cats, deleteCat }) => {
  return (
    <View style={styles.container} forceInset={{bottom: 'always'}}>
        <ScrollView style={styles.scrollView}>
            {
                cats && cats.length > 0 ? (
                    cats.map(cat => {
                        return (
                            <ScrollView key={cat._id}>
                                <View>
                                    <Image key={cat._id} source={{uri: cat.action}} style={{height: 300, resizeMode: 'cover'}} />
                                </View>
                            </ScrollView>
                        )
                    })
                ) : (
                    <Text>No cattos left 😿</Text>
                )
            }
        </ScrollView>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        paddingTop: StatusBar.curentHeight,
        flex: 1
    },
    scrollView: {
        paddingBottom: 20
    }
})
export default ListCat