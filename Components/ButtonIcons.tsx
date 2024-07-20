import React from 'react';
import { View, Image, StyleSheet } from 'react-native';
import LogoOne from '../assets/buttonIcon/home-2.jpg';
import FrameOne from '../assets/buttonIcon/Frame1618.jpg';
import FrameTwo from '../assets/buttonIcon/Frame634.jpg';
import Calc from '../assets/buttonIcon/calculator.jpg';
import up from '../assets/buttonIcon/status-up.jpg';

const ButtonIcons = () => {
    interface ButtonIcon {
        id: number;
        image: any;
    }

    const buttonIconsData: ButtonIcon[] = [
        { id: 1, image: LogoOne },
        { id: 2, image: FrameOne },
        { id: 3, image: FrameTwo },
        { id: 4, image: Calc },
        { id: 5, image: up },
    ];

    return (
        <View style={styles.container}>
            {buttonIconsData.map((icon) => (
                <View key={icon.id} style={styles.buttonContainer}>
                    <Image source={icon.image} style={[styles.iconImage, icon.id === 2 && styles.iconSecond]} />
                </View>
            ))}
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        padding: 20,
        backgroundColor: '#fff',
        top: 50,
    },
    buttonContainer: {
        alignItems: 'center',
        backgroundColor: '#fff',
        shadowColor: '#D4D4D440',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.8,
        shadowRadius: 4,
        elevation: 8,
        padding: 10,
        borderRadius: 70,
    },
    iconImage: {
        width: 20,
        height: 20,
    },
    iconSecond: {
        width: 30,
        height: 45,
        position: 'absolute',
    }
});

export default ButtonIcons;
