import React from 'react';
import { StyleSheet, Text, View, Image, Button, Alert, TouchableHighlight } from 'react-native';
import { StackNavigator, DrawerNavigator, TabNavigator } from 'react-navigation';

class ChatScreen extends React.Component {
    static navigationOptions = {
        title: 'Chat with Lucy',
    };
    render() {
        return (
            <View>
                <Text>Chat with Lucy</Text>
            </View>
        );
    }
}

class HomeScreen extends React.Component {
    static navigationOptions = {
        title: 'Welcome',
        headerStyle: {
            backgroundColor: 'red'
        },
        headerTitleStyle: {
            color: 'white'
        }
    };

    constructor(props) {
        super(props);
        this.state = {
            movies: 'hudson'
        }
        this.onPressLearnMore = this.onPressLearnMore.bind(this);
    }

    onPressLearnMore() {
        Alert.alert(
            'Alert Title',
            'My Alert Msg',
            [
                {text: 'Ask me later', onPress: () => console.log('Ask me later pressed')},
                {text: 'Cancel', onPress: () => console.log('Cancel Pressed'), style: 'cancel'},
                {text: 'OK', onPress: () => console.log('OK Pressed')},
            ],
            { cancelable: false }
        )
        fetch('https://facebook.github.io/react-native/movies.json')
            .then((response) => response.json())
            .then((responseJson) => {
                this.setState({
                    movies: JSON.stringify(responseJson.movies)
                })
                return responseJson.movies;
            })
            .catch((error) => {
                console.error(error);
            });

    }

    render() {
        const { navigate } = this.props.navigation;

        return (
            <BackgroundImage>
                <View style={styles.container}>
                    <Image source={require('./images/landingIc.png')} style={{ width: 132, height: 66 }}/>
                    <View>
                        <Text style={styles.text}>
                            Lorem ipsum dolor sit
                        </Text>
                        <Text style={styles.text}>
                            amet,consectetur adipiscing elit.
                        </Text>
                        <Text style={styles.text}>
                            Aliquam in rutrumest.
                        </Text>
                    </View>
                    <View style={{width: '100%',alignItems: 'center',
                        justifyContent: 'space-around', }}>
                        <TouchableHighlight
                            activeOpacity={1}
                            style={styles.button1}
                            onPress={() => navigate('Chat')}
                        >
                            <Text style={{
                                textAlign: 'center',
                                color: 'white'
                            }}>Play Without Signing In</Text>
                        </TouchableHighlight>
                        <TouchableHighlight
                            activeOpacity={1}
                            style={styles.button1}
                            onPress={() => navigate('Chat')}
                        >
                            <Text style={{
                                textAlign: 'center',
                                color: 'white'
                            }}>Sign in with Playform</Text>
                        </TouchableHighlight>
                        <TouchableHighlight
                            activeOpacity={1}
                            style={styles.button2}
                            onPress={this.onPressLearnMore}
                        >
                            <Text style={{
                                textAlign: 'center',
                                color: 'rgb(226,23,131)'
                            }}>Create an Account</Text>
                        </TouchableHighlight>
                    </View>
                </View>
            </BackgroundImage>

        );
    }
}

class BackgroundImage extends React.Component {

    render() {
        return (
            <Image source={require('./images/landingBg.png')}
                   style={{
                       flex: 1,
                       width: null,
                       height: null,
                       resizeMode: 'cover'
                   }}>
                {this.props.children}
            </Image>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'space-around',
    },
    text: {
        textAlign: 'center',
        color: 'white',
        backgroundColor: 'rgba(0,0,0,0)',
        fontSize: 14
    },
    button1: {
        marginBottom: 10,
        width: '80%',
        borderColor: '#fff',
        borderWidth: 1,
        borderRadius: 10,
        padding: 10
    },
    button2: {
        width: '80%',
        backgroundColor: '#fff',
        borderRadius: 10,
        padding: 10
    }
});

export default StackNavigator({
    Home: { screen: HomeScreen },
    Chat: { screen: ChatScreen },
});



