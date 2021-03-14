import axios from 'axios'
import React, { Component } from 'react'

export default class ExchangeUSD extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             kur: "",
             miktar:"",
             sonuc:"",
             base : "USD"
        }
    }
    componentDidMount(){
        axios.get(`https://api.exchangeratesapi.io/latest?base=${this.state.base}`)
        .then(res=>{
            console.log(res.data.rates.TRY);
            this.setState({kur:res.data.rates.TRY})
        })
    }
    miktarHandler=(event)=>{
        this.setState({miktar:event.target.value})
    }
    cevirHandler = (event)=>{
        this.setState({
            sonuc:this.state.kur * this.state.miktar
        })
        event.preventDefault()
    }
    
    render() {
        return (
            <form onSubmit={this.cevirHandler}>
                <label>Dolar: </label>
                <input onChange={this.miktarHandler}
                 value={this.state.miktar} type="number" />
                <button type="submit" >Çevir</button>
                <p>TRY: {this.state.sonuc} </p>

            </form>
        )
    }
}
