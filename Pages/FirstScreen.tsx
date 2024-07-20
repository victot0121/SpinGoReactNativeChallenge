import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import HomeButtom from '../Components/HomeButtom';
import firstNumber from '../assets/icon/01.jpg'



const FirstScreen = () => {
    return (
        <View style={styles.container}>
            <Image
                source={{ uri: 'https://s3-alpha-sig.figma.com/img/9360/9126/4478099d69eb2b9b0aa821d2c9c43b0b?Expires=1722211200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=eiZCyk6zl3ltESEUunMKK-NaZhJ8zo5jV1R1Bi29LoNnqNfHECVNNdT45tDD~iVz6eXNSe1rYDaXfDmBORdRHZ0VlPwD2H1j1ywfsPa~YZyz904jk5KsiAM8q3uQKyvfaUhj~JhkMMI2LxeP9VNZpzakl45mfzsv0w5N1kUqb3TgDZHXLqK9tV9uG88PYF0nLMi8Ed~9ldcFvYYAEtGTWPJYRGZ4Ryl4dbzxmTBvdAhSPWQ27Tx3JJGBBHlpmh2IE9L2PZrMUMKG86rMrkC~sgisWPHeKD5eXOcSIbTlnZxsM98FcYYHTBRommTDPsy1sAjX4jtjysEvd3AlakwlfA__' }}
                style={styles.image}
                resizeMode="cover"
            />
            <View style={styles.parentContain}>
                <View style={styles.blueContain}></View>
            </View>

            <View style={styles.sectionTwo}>
                <View>
                    <Image source={firstNumber}/>
                </View>
                <View style={styles.heroText}>
                    <Text style={styles.heroTextItem}>Welcome to  <Text style={styles.blueColor}>SPINGO!</Text> Your  </Text>
                    <Text style={styles.heroTextItem}>ultimate Business </Text>
                    <Text style={styles.heroTextItem}>Companion.</Text>
                </View>
            </View>
            <View style={styles.Streamline}>
                <Text style={styles.StreamlineText}>Streamline your business operations and maximize efficiency with our all-in-one platform.</Text>
            </View>
            <View style={styles.buttonContain}>
                <HomeButtom />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FCFCFC',
    },
    image: {
        width: 400,
        height: 400,
    },
    parentContain: {
        top: -40,
        left: 50,
        width: 300,
        height: 10,
        backgroundColor: '#FCFCFC',
        borderRadius: 20,
    },
    blueContain: {
        width: 150,
        height: 10,
        backgroundColor: '#00A6FB',
        borderRadius: 20,
    },
    sectionTwo: {
        flex: 1,
        flexDirection: 'row',
        width: '100%',
        padding: 20,
        gap: 45,
    },
    welcomeText: {
        fontSize: 80,
        paddingLeft: 10,
    },
    heroText: {
        top: 25,
    },
    heroTextItem: {
        fontWeight: '900',
        color: '#3B3B3B',
    },
    Streamline: {
        top: -90,
        flex: 1,
        width: '100%',
    },
    StreamlineText: {
        fontSize: 12,
        padding: 12,
        color: '#3B3B3B',
    },
    blueColor: {
        color: '#00A6FB',
        fontSize: 18,
    },
    buttonContain: {
        width: '100%',
    }
});

export default FirstScreen
