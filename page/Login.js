import React, {Component} from 'react';
import {Text, View, StyleSheet, StatusBar, Image, BackAndroid} from "react-native";
import Button from 'react-native-button';

import TextInputLogin from '../custom_component/TextInputLogin'

const styles = StyleSheet.create({
    container:{
        flex:1,
        flexDirection:'column',
        backgroundColor:'#4E90C2',
        alignItems:'center',
    },
    logo:{
        marginTop:60,
        width:50,
        height:50,
    },
    input:{
        width:250,
        height:36,
        marginTop:70,
    },
    login:{
        marginTop:40,
        width:250,
        height:36,
        backgroundColor:'#3b50ce',
        borderRadius:18,
        justifyContent:'center',
    },


});


class Login extends Component {

    static navigationOptions = {
        header:null
    };

    componentDidMount(){
        BackAndroid.addEventListener('hardwareBackPress',this.onBack);
    }

    onBack = ()=>{
        return false;
    }

    doLogin(){

    }

    render() {
        return (
            <View style={styles.container}>
                <StatusBar
                    backgroundColor={"#4E90C2"}
                    animated={true}
                    hidden={false}  //是否隐藏状态栏。
                />
                <Image
                    source={require('../res/img/ic_launcher.png')}
                    style={styles.logo}
                />
                <View style={styles.input}>
                    <TextInputLogin
                        txtHide={'用户名'}
                        isPassword={false}
                    />
                </View>
                <View style={[styles.input,{marginTop:20}]}>
                    <TextInputLogin
                        txtHide={'密码'}
                        isPassword={true}
                    />
                </View>
                <Button
                    containerStyle={styles.login}
                    style={{color:'#ffffff',fontSize:12,height:36, textAlignVertical: "center"}}
                    onPress={()=>this.doLogin()}
                >登录</Button>

            </View>
        );
    }
}

export default Login;