import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Button, Col, Form, Row } from 'react-bootstrap';
import '../src/css/Home';
import bankCard from '../src/resources/images/bank_card.png';

export default class Home extends React.Component{

    state: {
        balance: Number;
    }

    constructor(props){
        super(props);
        this.state = {
            balance: 9999.99
        }
    }

    render(){
        return(
            <div className = 'home-d-flex'>
                <div className = 'home-center'>
                    <div style={{width:'100%'}}>
                        <>
                            <h2>Your account summary:</h2>
                            <img src={bankCard}></img>
                            Credit Card: {'(ending in ..XXXX)'}
                            <br></br>
                            Balance: ${this.state.balance}
                            <br></br>
                            Available Credit: ${'100.50'}
                            <br></br>
                        </>
                    </div>
                </div>
            </div>
        );
    }
}