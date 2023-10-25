import React, { useEffect, useState } from 'react';
import { View, StyleSheet } from 'react-native';
//components:
import Header from '../../components/Header';
import TodaysImage from '../../components/TodaysImage';
//utils
import fetchApi from '../../utils/fetch';

const Home = () => {

    const [todaysImage, setTodaysImage] = useState();

    useEffect(() => {
        const loadTodaysImage = async () => {
            try {
                const todaysImageResponse = await fetchApi();
                setTodaysImage(todaysImageResponse);
            } catch (error) {
                console.error(error);
            }
        }

        loadTodaysImage().catch(null)
    }, [])

    console.log(todaysImage)

    return(
        <View style={styles.container}>
            <Header/>
            <TodaysImage/>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: 16
    }
})

export default Home;