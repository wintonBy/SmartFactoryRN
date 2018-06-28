import React, {Component} from 'react';
import {Button, Image, StatusBar, StyleSheet, Text, View} from "react-native";
import {NavigationActions} from 'react-navigation';

const styles = StyleSheet.create({
    container:{
        flex:1,
        flexDirection:'column',
        backgroundColor:'#ffffff',
        justifyContent:'flex-end',
        alignItems:'center',
        paddingBottom:15,
    },

    logo:{
        width:50,
        height:50,
        marginBottom:20
    },
    slogan:{
        marginBottom:15,
        fontSize:12,
    }
});


class Splash extends Component{

    constructor(props){
        super(props);
    }

    static navigationOptions = {
        header:null
    };

    componentDidMount(){
        const { navigate } = this.props.navigation;
        setTimeout(()=>{
            navigate('Login');
        },2000);
    }


    render(){
        const { navigate } = this.props.navigation;
        return (
            <View style={styles.container}>
                <StatusBar
                    hidden={true}  //是否隐藏状态栏。
                >
                </StatusBar>
                <Image source={require('../res/img/ic_launcher.png')} style={styles.logo}></Image>
                <Text>专注，成就品质</Text>
            </View>

        );
    }


}

export default Splash;