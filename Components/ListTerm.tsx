import React, { useState } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import ButtonIcons from '../Components/ButtonIcons';

interface Item {
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

interface ListTermProps {
    itemsList: Item[];
    selectedItem: SelectedItem[];
}

const ListTerm: React.FC<ListTermProps> = ({ itemsList, selectedItem }) => {
    const [selectedItemId, setSelectedItemId] = useState<number | null>(null);

    const handleImageClick = (id: number) => {
        setSelectedItemId(selectedItemId === id ? null : id);
    };

    return (
        <View style={styles.container}>
            <View style={styles.itemsListContains}>
                {itemsList.map((item, index) => (
                    <View key={item.id} style={styles.containDiv}>
                        <Image
                            source={item.image}
                            style={item.id === 3 ? styles.specialImage : styles.image}
                        />
                        <View style={styles.containimageAndTitle}>
                            <View style={styles.imageAndTitle}>
                                <Image
                                    source={item.iconsWithDetail}
                                    style={styles.iconsWithDetail}
                                />
                                <Text style={styles.iconsText}>{item.text}</Text>
                            </View>
                            <Text>per piece : ₦{item.price}</Text>
                        </View>
                        <View style={[styles.productDiv, index === 0 && styles.firstproductDiv]}>
                            <Text>{item.product}</Text>
                        </View>
                        <TouchableOpacity onPress={() => handleImageClick(item.id)}>
                            <Image
                                style={[styles.threeBot, index === 0 && styles.firstThreeBot]}
                                source={item.threeBot}
                            />
                        </TouchableOpacity>
                        {selectedItemId === item.id && (
                            <View style={styles.additionalViewContainer}>
                                <View style={styles.additionalView}>
                                    {selectedItem.map((selItem, selIndex) => (
                                        <View key={selIndex} style={styles.additionalItem}>
                                            <Image
                                                source={selItem.iconselectedItem}
                                                style={styles.additionalItemImage}
                                            />
                                            <Text style={styles.additionalItemText}>{selItem.selectedItem}</Text>
                                        </View>
                                    ))}
                                </View>
                            </View>
                        )}
                    </View>
                ))}

                <View style={styles.New}>
                    <Text style={styles.NewText}>+ New</Text>
                </View>
            </View>

            <ButtonIcons />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        position: 'relative',
    },
    itemsListContains: {
        flexDirection: 'column',
        width: '100%',
        position: 'relative',
    },
    containDiv: {
        width: '100%',
        flexDirection: 'row',
        marginTop: 16,
        gap: 5,
        padding: 10,
        backgroundColor: '#fff',
        shadowColor: '#E6E6E6',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.8,
        shadowRadius: 4,
        elevation: 5,
        overflow: 'visible',
        position: 'relative',
    },
    image: {
        width: 70,
        height: 70,
        borderRadius: 50,
    },
    specialImage: {
        width: 70,
        height: 70,
    },
    containimageAndTitle: {
        marginLeft: 20,
        marginTop: 15,
    },
    iconsWithDetail: {
        width: 10,
        height: 10,
        marginTop: 7,
    },
    imageAndTitle: {
        flexDirection: 'row',
        gap: 8,
    },
    iconsText: {
        color: '#00A6FB',
        borderBottomWidth: 2,
        borderBottomColor: '#00A6FB',
        fontWeight: '700',
        marginBottom: 5,
    },
    productDiv: {
        borderRadius: 20,
        backgroundColor: '#E3E3E3',
        height: 39,
        paddingHorizontal: 12,
        paddingVertical: 10,
        flexDirection: 'row',
    },
    firstproductDiv: {
        backgroundColor: '#CCEBFF',
    },
    threeBot: {
        marginLeft: 9,
        marginTop: 25,
    },
    firstThreeBot: {
        marginLeft: 55,
        marginTop: 20,
    },
    additionalItemImage: {
        width: 20,
        height: 20,
    },
    additionalItemText: {
        color: '#000',
    },
    additionalViewContainer: {
        position: 'absolute',
        top: 0,
        left: 100,
        right: 0,
        bottom: 0,
        justifyContent: 'center',
        alignItems: 'center',
        zIndex: 9999,
    },
    additionalView: {
        backgroundColor: 'white',
        padding: 20,
        borderRadius: 10,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.8,
        shadowRadius: 4,
        elevation: 5,
    },
    additionalItem: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 5,
    },
    New: {
        position: 'absolute',
        left: 240,
        top: 395,
        backgroundColor: '#00A6FB',
        paddingVertical: 20,
        paddingHorizontal: 40,
        borderRadius: 40,
        zIndex: 999,
    },
    NewText: {
        color: '#fff',
    },
});

export default ListTerm;
