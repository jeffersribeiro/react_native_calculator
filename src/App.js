import React from 'react';
import { View, StyleSheet,ScrollView } from 'react-native';
import Button from './Button'
import Display from './Display'

export default class App extends React.Component{

      state={
            displayValue:'0'
      }
      addDigit = n =>{
            this.setState({displayValue: n})
      }

      clearMemory = () =>{
            this.setState({displayValue:'0'})
      }
      setOPeration = operation =>{
      this.setState({})
      } 

      render(){
      return ( 
            <ScrollView>
     <View style={styles.container}>
           <Display value={this.state.displayValue}/>
           <View style={styles.buttons}>
           <Button label='AC'triple onClick={this.clearMemory}/>
           <Button label='/' operation onClick={this.setOPeration}/>
           <Button label='7' onClick={this.addDigit}/>
           <Button label='8' onClick={this.addDigit}/>
           <Button label='9' onClick={this.addDigit}/>
           <Button label='*' operation onClick={this.setOPeration}/>
           <Button label='4' onClick={this.addDigit}/>
           <Button label='5' onClick={this.addDigit}/>
           <Button label='6' onClick={this.addDigit}/>
           <Button label='-' operation onClick={this.setOPeration}/>
           <Button label='1' onClick={this.addDigit}/>
           <Button label='0' onClick={this.addDigit}/>
           <Button label='2' onClick={this.addDigit}/>
           <Button label='+' operation onClick={this.setOPeration}/>
           <Button label='3' onClick={this.addDigit}/>
           <Button label='.' onClick={this.setOPeration}/>
           <Button label='=' onClick={this.setOPeration}/>
           <Button label='%'operation onClick={this.setOPeration}/>
     </View>
     </View>
     </ScrollView>
      )
}}
      const styles = StyleSheet.create({
            container:{
            },
            buttons:{
                  flex:4,
                  flexDirection: 'row',
                  flexWrap: 'wrap',
            }
      })