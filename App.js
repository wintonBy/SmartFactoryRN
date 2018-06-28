/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
    StackNavigator,
} from 'react-navigation';

import Splash from './page/Splash'
import Login from './page/Login'
import Index from './page/Index'


const SimpleNavigator = StackNavigator({
   Splash:{screen:Splash},
    Login:{screen:Login},
    Index:{screen:Index}
});

const AppNavigation = ()=>(<SimpleNavigator/>);

class App extends Component<Props> {
    render(){
        return(<AppNavigation/>);
    }

};

export default App;

