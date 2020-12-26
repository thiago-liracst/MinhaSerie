import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, Alert } from 'react-native';

import styles from './styles';
import { FlatList } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';

import AsyncStorage from '@react-native-community/async-storage';

export default function Home() {
    
    useEffect(() => {
        getData();
    }, []);

    const navigation = useNavigation();

    const navigateToNewSerie = function () {x
        navigation.navigate('NewSerie', { series });
    }

    const [series, setSeries] = useState({});

    const deleteSerie = async(id) => {     
        try {
            const aux = {
                series: []
            }
            setSeries(aux);
            console.log("Delete: ", series);
            const jsonValue = JSON.stringify(series);
            await AsyncStorage.setItem('@storage_Key', jsonValue);
        } catch (error) {
            Alert.alert(error);
        }
    }

    const getData = async() => {
        try {
            const jsonValue = await AsyncStorage.getItem('@storage_Key');
            if (jsonValue != null) {
                setSeries(JSON.parse(jsonValue));
            }
            console.log(series);
        } catch(e) {
            alert(e); 
        }
    }

    const [refreshing, setRefreshing] = useState(false);

    async function refreshingList(){
        setRefreshing(true);

        await getData(true);

        setRefreshing(false);
    }
    
    const refreshPage = async function () {
        getData();
    }

    return(
        <View style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.headerText}>Minhas Séries</Text>
                <TouchableOpacity 
                            style={styles.newSerieButton} 
                            onPress={refreshPage}
                        >
                            <Text style={styles.newSerieButtonText}>Atualizar</Text>
                </TouchableOpacity>
                <TouchableOpacity 
                            style={styles.newSerieButton} 
                            onPress={navigateToNewSerie}
                        >
                            <Text style={styles.newSerieButtonText}>Adicionar Série</Text>
                </TouchableOpacity>
            </View>

            <FlatList 
                data={series.series}
                style={styles.series}
                keyExtractor={serie => serie.id} 
                onRefresh={refreshingList}
                refreshing={refreshing}
                renderItem={({ item: serie }) => (
                    <View style={styles.serie}>

                        <Text style={styles.serieTitle}>ID: {serie.id}</Text>

                        <Text style={styles.serieTitle}>{serie.title}</Text>

                        <Text style={styles.serieTitle}>Temporada: {serie.temp}</Text>

                        <Text style={styles.serieTitle}>Episódio: {serie.ep}</Text>

                        <TouchableOpacity 
                            style={styles.deleteSerieButton} 
                            onPress={() => {
                                deleteSerie(serie.id)
                            }}
                        >
                            <Text style={styles.deleteSerieButtonText}>Remover</Text>
                        </TouchableOpacity>
                    </View>
                )}
            />

        </View>
    )
}