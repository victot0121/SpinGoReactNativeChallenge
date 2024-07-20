import React from 'react';
import * as Font from 'expo-font'
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { useNavigation } from '@react-navigation/native';
import AppLoading from '../Pages/AppLoading';

type RootStackParamList = {
    Home: undefined;
    SignIn: undefined;
};

type FirstScreenNavigationProp = NativeStackNavigationProp<RootStackParamList, 'Home'>;

const HomeButtom:React.FC = () => {
    const navigation = useNavigation<FirstScreenNavigationProp>();


    return (
        <View style={styles.container}>
            <TouchableOpacity
                style={[styles.button, styles.homeButton]}
                onPress={() => navigation.navigate('Home')}
            >
                <Text style={[styles.buttonText, styles.homeButtonText]}>Home</Text>
            </TouchableOpacity>
            <TouchableOpacity
                style={[styles.button, styles.signInButton]}
                onPress={() => navigation.navigate('SignIn')}
            >
                <Text style={[styles.buttonText, styles.signInButtonText]}>Sign In</Text>
            </TouchableOpacity>
        </View>
    );
};



const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        paddingHorizontal: 20,
        top: -120,
    },
    button: {
        width: '100%',
        paddingVertical: 35,
        borderRadius: 30,
        marginVertical: 10,
        alignItems: 'center',
    },
    homeButton: {
        backgroundColor: '#00A6FB',
    },
    signInButton: {
        backgroundColor: '#FFFFFF',
        borderWidth: 1,
        borderColor: '#00A6FB',
    },
    buttonText: {
        fontSize: 16,
        fontWeight: 'bold',
        marginTop: -10,
    },
    homeButtonText: {
        color: '#FFFFFF',
        height: 200,
    },
    signInButtonText: {
        color: '#00A6FB',
        height: 200,
    },
});

export default HomeButtom;
