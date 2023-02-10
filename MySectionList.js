import React from "react";
import {SectionList, StyleSheet, Text, View} from "react-native";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 22,
    },
    sectionHeader: {
        paddingTop: 3,
        paddingLeft: 10,
        paddingRight: 10,
        paddingBottom: 2,
        fontSize: 18,
        fontWeight: 'bold',
        backgroundColor: 'rgba(220,220,220, 1.0)',
    },
    item: {
        padding: 10,
        fontSize: 14,
        height: 40,
    },
});

const MySectionList = () => {
    return (
        <View style={styles.container}>
            <SectionList
                sections={[
                {
                title: 'First test',
                data: [
                    'F1.1',
                    'F1.2',
                    'F1.3',
                    'F1.4',
                    'F1.5',
                    'F1.6',
                ]},
                {
                title: 'Second test',
                data: [
                    'F2.1',
                    'F2.2',
                    'F2.3',
                    'F2.4',
                    'F2.5',
                    'F2.6',
                ]},
            ]}
            renderItem={({item}) =>
                <Text style={styles.item}>
                    {item}
                </Text>
            }
            renderSectionHeader={({section}) =>
                <Text style={styles.sectionHeader}>
                    {section.title}
                </Text>}
                keyExtractor={item => `basicListEntry-${item}`}
            />
        </View>
    );
};

export {MySectionList as MySectionList};