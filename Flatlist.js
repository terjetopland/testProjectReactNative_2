import React from "react";
import {FlatList, StyleSheet, Text, View} from "react-native";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 40,
    },
    item: {
        padding: 10,
        fontSize: 25,
        color: 'lightblue',
        height: 55,
        width: 500,
    },
});
const MyFlatList = () => {
    return (
        <View style={styles.container}>
            <FlatList
            data={[
                    {key: 'Hello first'},
                    {key: 'Hello second'},
                    {key: 'Hello third'},
                    {key: 'Hello fourth'},
                    {key: 'Hello fifth'},
                    {key: 'Hello sixth'},
                    {key: 'Hello seventh'},
                    {key: 'Hello eighth'},
                    {key: 'Hello ninth'},
                    {key: 'Hello tenth'},
                    {key: 'Hello eleventh'},
                    ]}
            renderItem={({item}) =>
                <Text style={styles.item}>
                    {item.key}
                </Text>}
            />
        </View>
    );
};

export {MyFlatList as MyFlatList};

