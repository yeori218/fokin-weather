import React from 'react';
import { View, Text, StyleSheet, StatusBar } from 'react-native';
import PropTypes from 'prop-types';
import { Ionicons  } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';

const weatherOptions = {
    Thunderstorm: {
        iconName: "thunderstorm-outline",
        gradient: ["#0F2027","#203A43", "#2C5364"],
        title: "Thunderstorm",
        subtitle: "Because of the thunderstorm, the line went dead while I was talking to my friend."
    },
    Drizzle: {
        iconName: "rainy-outline",
        gradient: ["#4e54c8","#8f94fb"],
        title: "Drizzle",
        subtitle: "A fine drizzle began to veil the hills."
    },
    Rain: {
        iconName: "rainy-outline",
        gradient: ["#0f0c29","#302b63", "#24243e"],
        title: "Rain",
        subtitle: "The continuous rain had saturated the soil."
    },
    Snow: {
        iconName: "snow-outline",
        gradient: ["#D3CCE3","#E9E4F0"],
        title: "Snow",
        subtitle: "Snow was piled up against the door."
    },
    Atmosphere: {
        iconName: "cloud-outline",
        gradient: ["#396afc","#2948ff"],
        title: "Atmosphere",
        subtitle: "an atmosphere redolent of the sea and ships"
    },
    Clear: {
        iconName: "cloud-outline",
        gradient: ["#f2fcfe","#1c92d2"],
        title: "Clear",
        subtitle: "The sky is clear without a speck of cloud."
    },
    Clouds: {
        iconName: "cloud-outline",
        gradient: ["#F0F2F0","#000C40"],
        title: "Clouds",
        subtitle: "The sun went behind a cloud."
    }
};

export default function Weather({ temp, condition }) {
    return (
        <LinearGradient
        colors={weatherOptions[condition].gradient}
        style={styles.container}
        >
            <StatusBar barStyle="light-content" />
            <View style={styles.container}>
            <View style={styles.halfContainer}>
            <Ionicons  name={weatherOptions[condition].iconName} size={72} color="white" />
            <Text style={styles.temp}>{temp}°</Text>
            </View>
            <View style={{...styles.halfContainer, ...styles.textContainer}}>
                <Text style={styles.title}>{weatherOptions[condition].title}</Text>
                <Text style={styles.subtitle}>{weatherOptions[condition].subtitle}</Text>
            </View>
            </View>
        </LinearGradient>
    );
}

Weather.PropTypes = {
    temp : PropTypes.number.isRequired,
    condition: PropTypes.oneOf([
        "Thunderstorm",
        "Drizzle",
        "Rain",
        "Snow",
        "Atmosphere",
        "Clear",
        "Clouds"
    ]).isRequired
};

const styles = StyleSheet.create({
    container : {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    halfContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    temp: {
        fontSize: 26,
        color: "white"
    },
    title: {
        color: "white",
        fontSize: 30,
        fontWeight: "300",
        marginBottom: 10
    },
    subtitle: {
        color: "white",
        fontSize: 20,
        fontWeight: "600"
    },
    textContainer: {
        paddingHorizontal: 20,
        alignItems: "flex-start"
    }
});