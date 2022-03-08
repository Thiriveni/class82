import React, { Component } from 'react';
import { Text, View } from 'react-native';
import AppLoading from "expo-app-loading";
import * as Font from "expo-font";

let costumFonts={
    "Bubblegum-Sans":require("../assets/class81_assets-main/assets/fonts/BubblegumSans-Regular.ttf")

}


export default class Feed extends Component {
    constructor(){
        super();
        this.state={
            fontsLoaded:false
        }
    }

    async _loadFontsAsync(){
        await Font.loadAsync(costumFonts)
        this.setState({
            fontsLoaded:true
        })
    }

    componentDidMount(){
        this._loadFontsAsync()
    }
    render() {
        if(!this.state.fontsLoaded){
          return <AppLoading/>
        }
        else{
        return (
            <View
                style={{
                    flex: 1,
                    justifyContent: "center",
                    alignItems: "center"
                }}>
                
            </View>
        )
            }
    }
}