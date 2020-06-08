import React from 'react';
import {View, StyleSheet, Text, Button} from 'react-native';

const MealDetailScreen = props => {
    return (
        <View style={styles.screen}>
            <Text>This is MealDetailScreen</Text>
            <Button title="Go back to categories" onPress={()=>{
                props.navigation.popToTop();
            }}/>
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

export default MealDetailScreen;