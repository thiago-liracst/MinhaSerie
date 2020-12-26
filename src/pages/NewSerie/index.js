import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, Alert } from 'react-native';

import { useNavigation, useRoute } from '@react-navigation/native';

import styles from './styles';
import { TextInput } from 'react-native-gesture-handler';

import AsyncStorage from '@react-native-community/async-storage';

export default function NewSerie() {
    
    useEffect(() => {
        getData();
    }, []);

    const [series, setSeries] = useState(
        { 
            series: [], 
        }
    );

    const [name, setName] = useState('');
    const [temp, setTemp] = useState(1);
    const [ep, setEp] = useState(1);

    const navigation = useNavigation();

    const navigateToBack = function () {
        navigation.navigate('Home');
    }  

    function gerarId() {
        let response = 0;
        if (series.series.length==0) {
            return response;
        }else{
            series.series.map((serie) => {
                if (serie.id==response) {
                    response++;
                }
            })
            return response;
        }
    }

    const newSerie = function() {

        const newItem = { 
            id: gerarId(),
            title: name,
            temp: temp,
            ep: ep,
        }

        const serie = series.series;
        serie.push(newItem);

        setSeries({series: serie});
        storeData();
    }

    const storeData = async() => {
        try {
          const jsonValue = JSON.stringify(series);
          await AsyncStorage.setItem('@storage_Key', jsonValue);
          Alert.alert("Sucesso!", "Os dados foram guardados!");
        } catch (e) {
          alert(e);
        }
    }

    async function getData () {
        try {
            const jsonValue = await AsyncStorage.getItem('@storage_Key');
            if (jsonValue != null) {
                setSeries(JSON.parse(jsonValue));
            }
        } catch(e) {
            alert(e); 
        }
    }

    return(
        <View style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.headerText}>Minhas Séries</Text>
                <TouchableOpacity 
                            style={styles.backButton} 
                            onPress={navigateToBack}
                        >
                            <Text style={styles.backButtonText}>Voltar</Text>
                </TouchableOpacity>
            </View>

            <View style={styles.newSerieBox}>
                <Text style={styles.labelName}>Nome da Série:</Text>
                <TextInput 
                    style={styles.input}
                    onChangeText={(text)=>{setName(text)}} 
                    value={name}
                />

                <Text style={styles.labelName}>Temporada atual:</Text>
                <TextInput 
                    style={styles.input}
                    onChangeText={(text)=>{setTemp(text)}} 
                    value={temp}
                />

                <Text style={styles.labelName}>Temporada atual:</Text>
                <TextInput 
                    style={styles.input}
                    onChangeText={(text)=>{setEp(text)}} 
                    value={ep}
                />

                <TouchableOpacity 
                            style={styles.newSerieButton} 
                            onPress={newSerie}
                        >
                            <Text style={styles.newSerieButtonText}>Adicionar</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}