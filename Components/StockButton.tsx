import React from 'react';
import { View, TouchableOpacity, StyleSheet, Text } from 'react-native';



const StockButton = () => {
    return (
        <View style={styles.stockDiv}>
            <TouchableOpacity style={[styles.button, styles.Pressed]} >
                <Text style={styles.PressedText}>
                    Pressed
                </Text>
            </TouchableOpacity>
            <TouchableOpacity style={[styles.button, styles.Lowstock]}>
                <Text style={styles.LowstockText}>
                    Low stock
                </Text>
            </TouchableOpacity>
            <TouchableOpacity style={[styles.button, styles.Expired]}>
                <Text style={styles.ExpiredText}>
                    Expired
                </Text>
            </TouchableOpacity>
        </View>
    )
}


const styles = StyleSheet.create({
    stockDiv: {
        flexDirection: 'row',
        justifyContent: 'center',
        marginTop: 20,
        gap: 5,
        borderBottomWidth: 2,
        borderBottomColor: '#E4E4E4',
        paddingBottom: 20,
    },

    button: {
        paddingHorizontal: 32,
        paddingVertical: 15,
        borderRadius: 50,
    },

    Pressed: {
        backgroundColor: '#CCEBFF',
    },

    Lowstock: {
        backgroundColor: '#00A6FB',
    },

    Expired: {
        backgroundColor: '#00A6FB',
    },
    PressedText: {
        color: '#00A6FB',
    },
    LowstockText: {
        color: '#FFFFFF',
    },

    ExpiredText: {
        color: '#FFFFFF',
    }
})


export default StockButton