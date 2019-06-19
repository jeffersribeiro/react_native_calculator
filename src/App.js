import React from 'react';
import { View, StyleSheet,ScrollView } from 'react-native';
import Button from './Button'
import Display from './Display'

const initalState = {
      displayValue: '0', 
      clearMemory: false,
      oparation: null, // redebe a operação a ser feita
      values:[0,0], //Array que recebe dois valores da calculadora
      current:0,
//estado inicial de alguns valores
}
export default class App extends React.Component{

      state={...initalState} //Oparador Spread

      addDigit = n => {
          if (n==='.' && this.state.displayValue.include('.')){
                return
          }
          const clearDisplay  = this.state.displayValue === '0'
            || this.state.clearDisplay
          const currentValue  = clearDisplay ? '' : this.state.displayValue
          const displayValue = currentValue + n
          this.setState({currentValue, clearDisplay: false})

          if (n !== '.'){
                const newValue =  parseFloat(displayValue) // fex a converção de valores e armazenou dentro de uma constante
                const values = [...this.state.values] // criou um array clonado e tambem setou o valor dentro de outra constante
                values[this.state.current]  = newValue // constante values recebe um arrya de acordo com o estado de current  e recebe oque esta dentro de New value
                this.setState({ values }) // e por ultimo altera  o valor de de Values 
                {/*e tudo isso tem como função refletir e a fazer a mudança no tipo de numero que sera recebido*/} 
          }
      }

      clearMemory = () =>{
           this.setState({...initalState})
      }
      setOPeration = operation =>{
            if(this.state.current === 0){
                  this.setState({operation, current: 1, clearDisplay: true})
            } else {
               const equals = operation === '='   
               const values = [...this.state.values]
               try{
                     values[0] = eval(`${values[0]} ${this.state.operartion} ${values[1]}`) //importante para caralho 
               }catch (e) {
                  values[0] = this.state.values[0]
               }
               values[1] = 0
               this.setState({
                     displayValue: values[0], 
                     operation: equals ? null : operation,
                     current: equals ? 0 : 1,
                     clearDisplay: !equals,
                     values,
               })
            }
      }
      render(){
      return ( 
      <ScrollView>
            <View style={styles.container}>
                              <Display value={this.state.displayValue}/>
                  <View style={styles.buttons}>
                            {/*Os botões abaixo recebem duas props e um atributo de evento 
                              *o primeiro é um label que tem como props dixar a qual caracterer aquele butão pertence
                              * o segundo serve para mudar o tamanho ocupado por determinado butão 
                              * e o evento no caso o evento onClick(Ao clicar) chamar uma função que sera executada.
                              **/}
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
                              <Button label='2' onClick={this.addDigit}/>
                              <Button label='3' onClick={this.addDigit}/>
                              <Button label='+' operation onClick={this.setOPeration}/>
                              <Button label='0' onClick={this.addDigit}/>
                              <Button label='=' double onClick={this.setOPeration}/>
                              <Button label='.' operation onClick={this.setOPeration}/>
                              {/* <Button label='%'operation onClick={this.setOPeration}/> */}
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