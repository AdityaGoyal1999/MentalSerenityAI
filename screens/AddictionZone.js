// Stores near the user

import React from 'react';
import { View, SafeAreaView, ScrollView, StyleSheet, Image } from 'react-native';
import { Card, ListItem, Button, Icon, Avatar, Text } from 'react-native-elements';

import SellerCard from '../components/SellerCard';

function StressZone({ navigation }) {
    return (
        <SafeAreaView>
            <ScrollView style={styles.container}>
                <Text style={styles.heading}>Addiction Quitter Zone</Text>

                <View style={ styles.dashboardCard }>
                    <Avatar
                        size="xlarge"
                        rounded
                        source={{
                            uri:
                            'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
                        }}
                    />
                    <Text h2>Jane Doe</Text>
                    <Text h4>Addiction: Smoking, Drinking</Text>


                </View>

                <ScrollView style={styles.options}>
                        
                        <Button
                            title="Register Addiction"
                            type="outline"
                            style={styles.button}
                            type="clear"
                            onPress = {() => { navigation.navigate('')}}
                        />

                        <Button
                            title="Addiction Urge"
                            type="outline"
                            style={styles.button}
                            type="clear"
                        />

                        <Button
                            title="Talk with Addiction Peers"
                            type="outline"
                            style={styles.button}
                            type="clear"
                        />

                        <Button
                            title="Instant Help"
                            type="outline"
                            style={styles.button}
                            type="clear"
                        />

                </ScrollView>
                
                <View style={styles.icon}>
                    <Icon
                        name='message'
                        type='evilicon'
                        color='#517fa4'
                        raised
                        size= "40"
                    />
                </View>

            </ScrollView>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    button:{
        margin: 20,
    },
    cardText:{
        fontSize: 20,
        marginTop: 5,
        marginBottom: 5,
    },
    container: {
        padding: 10,
    },
    dashboardCard:{
        backgroundColor: "#fffaf0",
        padding: 20,
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 20,
    },
    heading: {
        fontSize: 40,
    },
    icon:{
        justifyContent: "center",
        alignItems: "center",
        marginTop: 30,
    },
    options:{
        backgroundColor: "#fffaf0",
        marginTop: 20,
    },
});

export default StressZone
