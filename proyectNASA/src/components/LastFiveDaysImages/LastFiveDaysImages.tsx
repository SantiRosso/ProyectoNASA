import React, {FC} from "react"
import { Text, View, StyleSheet } from "react-native"
import { PostImage } from "../../types";

const LastFiveDayImages: FC<PostImage[]> = (props) => {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Last 5 Days</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginVertical: 8,
    },
    title: {
        color: '#fff',
        fontSize: 16,
        marginBottom: 18
    }
})

export default LastFiveDayImages;