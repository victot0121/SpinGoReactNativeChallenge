import React from 'react';
import { View, Text, StyleSheet, Dimensions, ScrollView } from 'react-native';
import StockButton from '../Components/StockButton';
import ListTerm from '../Components/ListTerm';
import Noodles from '../assets/imageItems/Noodles.jpeg';
import Rice from '../assets/imageItems/rice.jpeg';
import paghettSi from '../assets/imageItems/Spaghetti.png';
import Toothpaste from '../assets/imageItems/Toothpaste.png';
import RiceIcon from '../assets/iconTwo/Frame16.jpg';
import threeBot from '../assets/icon/Frame16.jpg';

// icons image import 
import editPen from '../assets/iconsThree/edit-2.jpg';
import frame from '../assets/iconsThree/frame.jpg'
import frameExport from '../assets/iconsThree/export.jpg'
import contextFrame from '../assets/iconsThree/content.jpg'
import shareFrame from '../assets/iconsThree/share.jpg'
import historyFrame from '../assets/iconsThree/history.jpg'
import deleteFrame from '../assets/iconsThree/delete.jpg'

const HomeScreen: React.FC = () => {

    interface ItemsList {
        id: number;
        text: string;
        price: number;
        image: any;
        iconsWithDetail: any;
        product: string;
        active: string;
        threeBot: any;
    }

    interface SelectedItem {
        id: number;
        selectedItem: string;
        iconselectedItem: any;
    }

    const items: string[] = [
        "Canned Goods",
        "Grains and Pasta",
        "Frozen food",
        "Baby products",
        "Snacks",
        "Beverages",
        "Household Items",
        "Shop Items"
    ];

    const itemsList: ItemsList[] = [
        {
            id: 1,
            text: 'Noodles',
            price: 200,
            image: Noodles,
            iconsWithDetail: RiceIcon,
            product: 'Indomie',
            active: 'active',
            threeBot: threeBot,
        },
        {
            id: 2,
            text: 'Rice',
            price: 200,
            image: Rice,
            iconsWithDetail: RiceIcon,
            product: 'Multiple brance',
            active: 'active',
            threeBot: threeBot,
        },
        {
            id: 3,
            text: 'Spaghetti',
            price: 200,
            image: paghettSi,
            iconsWithDetail: RiceIcon,
            product: 'Golden Penny',
            active: 'active',
            threeBot: threeBot,
        },
        {
            id: 4,
            text: 'Toothpaste',
            price: 200,
            image: Toothpaste,
            iconsWithDetail: RiceIcon,
            product: 'Multiple brands',
            active: 'active',
            threeBot: threeBot,
        },
    ];

    const selectedItem: SelectedItem[] = [
        {
            id: 1,
            selectedItem: 'Edit stock',
            iconselectedItem: editPen,
        },
        {
            id: 2,
            selectedItem: 'Supplier',
            iconselectedItem: frame,
        },
        {
            id: 3,
            selectedItem: 'Edit stock',
            iconselectedItem: frameExport,
        },
        {
            id: 4,
            selectedItem: 'Duplicate',
            iconselectedItem: contextFrame,
        },
        {
            id: 5,
            selectedItem: 'Share',
            iconselectedItem: shareFrame,
        },
        {
            id: 6,
            selectedItem: 'View history',
            iconselectedItem: historyFrame,
        },
        {
            id: 7,
            selectedItem: 'Delete',
            iconselectedItem: deleteFrame,
        }
    ];

    return (
        <View style={styles.container}>
            <View style={styles.title}>
                <Text style={styles.titleText}>Home</Text>
            </View>
            <View style={{ flexDirection: 'row' }}>
                <ScrollView
                    style={styles.scrollDiv}
                    horizontal={true}
                    showsHorizontalScrollIndicator={false}>
                    {items.map((item, index) => (
                        <View key={index} >
                            <View>
                                <Text style={styles.text}>{item}</Text>
                            </View>
                        </View>
                    ))}
                </ScrollView>
            </View>
            <StockButton />
            <ListTerm itemsList={itemsList} selectedItem={selectedItem} />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
    },
    title: {
        width: '100%',
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 40,
    },
    titleText: {
        fontWeight: '900',
        fontSize: 25,
    },
    scrollDiv: {
        borderTopWidth: 2,
        borderTopColor: '#E4E4E4',
        borderBottomWidth: 2,
        borderBottomColor: '#E4E4E4',
        paddingVertical: 25,
    },
    text: {
        fontSize: 12,
        fontWeight: 'bold',
        paddingLeft: 35,
    },
    colorDiv: {
        backgroundColor: '#DFDFDF',
        width: 50,
        height: 50,
    },
    scrollDivViews: {
        width: 700,
        overflow: 'hidden',
    }
});

export default HomeScreen;
