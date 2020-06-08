import React from 'react';
import {TouchableOpacity, View, Text, StyleSheet, TextBase} from 'react-native'

const CategoryGridTile = props => {
    return (
        <TouchableOpacity 
            style={styles.gridItem} 
            onPress={props.onSelect}>
            <View style={{...styles.constiner, ...{backgroundColor: props.color}}}>
                <Text style={styles.title}>{props.title}</Text>
            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    gridItem: {
        flex: 1,
        margin: 15,
        height: 150,
      },
      constiner: {
          flex: 1,
          borderRadius: 10,
          shadowColor: 'black',
          shadowOpacity: 0.26,
          shadowOffset: {widht: 0, height: 2},
          shadowRadius: 10,
          elevation: 3,
          padding: 10,
          justifyContent: 'flex-end',
          alignItems: 'flex-end'
      },
      title: {
          fontSize: 22,
          textAlign: 'right',
          fontWeight: 'bold'
      }
});

export default CategoryGridTile;