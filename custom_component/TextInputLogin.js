import React, { Component } from 'react';

import {
    Text,
    TextInput,
    View,
    StyleSheet,
    ToastAndroid, Image
} from 'react-native'

import PropTypes from 'prop-types';

class TextInputLogin extends Component {
    static propTypes = {
        txtHide: PropTypes.string,
        isPassword: PropTypes.boolean
    }

    static defaultProps = {
        txtHide: '内容',
        isPassword: false,
    }
    constructor (props) {
        super (props)
        this.state = {
            txtValue: "",
        }
    }
    render () {
        var { txtHide, isPassword } = this.props;
        var img = isPassword? require('../res/img/ic_password.png'):require('../res/img/ic_username.png');
        return(
            <View style={styles.container}>
                <View style={styles.txtBorder}>
                    <Image
                        style={styles.icon}
                        source={img}
                    />
                    <TextInput
                        underlineColorAndroid = {'transparent'}
                        style={styles.textInput}
                        multiline={false}
                        placeholder={txtHide}
                        password={isPassword}
                        onChangeText={(text) => {
                            this.setState({
                                txtValue: text
                            })
                        }}
                        value={this.state.txtValue}
                    />
                </View>
            </View>
        )
    }
    getValue () {
        return this.state.txtValue
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        flexDirection: 'row'
    },
    txtBorder: {
        height: 36,
        flex: 1,
        backgroundColor:'#ffffff',
        borderRadius: 18,
        flexDirection: 'row',
        alignItems:'center'
    },
    icon: {
        height: 20,
        width: 20,
        marginLeft: 20,
        marginRight: 10,
    },
    textInput: {
        height: 36,
        fontSize:12,
        width: 200
    }
})

module.exports = TextInputLogin;