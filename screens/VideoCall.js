import React from 'react'
import { Text, SafeAreaView, StyleSheet } from 'react-native';
import { WebView } from 'react-native-webview';

function VideoCall({ navigation }) {

    const iframeString = 'https://www.youtube.com/watch?v=5qap5aO4i9A';

    return (
        <SafeAreaView style={styles.container}>
            <Text style={styles.heading}>Calling</Text>
            <WebView
                scalesPageToFit={true}
                bounces={false}
                javaScriptEnabled
                style={{marginTop: 60, width: 420}}
                source={{
                    html: `
                        <!DOCTYPE html>
                        <html>
                            <head></head>
                            <body>
                            <iframe width="960" height="600" src="https://www.youtube.com/embed/5V1TFLIYUsk" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                            </body>
                        </html>
                    `,
                }}
                automaticallyAdjustContentInsets={false}
                />
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    heading: {
        fontSize: 60,
    },
    container:{
        flex: 1,
        backgroundColor: '#ffffff',
    },
});

export default VideoCall
