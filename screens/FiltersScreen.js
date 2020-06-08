import React from 'react';
import {View, StyleSheet, Text} from 'react-native';

const FiltersScren = props => {
    return (
        <View style={styles.screen}>
            <Text>This is FiltersScren</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
});

export default FiltersScren;