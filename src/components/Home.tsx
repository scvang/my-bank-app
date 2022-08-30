import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Button, Col, Form, Row } from 'react-bootstrap';
import '../css/Home';
import bankCard from '../assets/images/bank_card.png';

export default class Home extends React.Component{

    state: {
        balance: String;
        credit: String;
    }

    constructor(props){
        super(props);
        this.state = {
            balance: 2023.00.toFixed(2),
            credit: 100.55.toFixed(2)
        }
    }

    render(){
        return(
            <div className = 'home-d-flex'>
                <div className = 'home-center'>
                        <body style = {{color:'white'}}>
                            <>
                                <h2>Account Summary:</h2>
                                <br></br>
                                <img src={bankCard} className='img-center'/>
                                <p>Credit Card: {'(ending in ..9999)'}</p>
                                <br></br>
                                <br></br>
                                <br></br>
                                <br></br>
                                <p>Current Balance: $<>{this.state.balance}</></p>
                                <p>Credit Available: $<>{this.state.credit}</></p>
                            </>
                         </body>
                </div>
                <table className='buttons' align='right'>
                    <tr>
                        <Button className ='button' size='lg'>Overview</Button>
                        <br></br>
                        <button type="button">Transaction History</button>
                        <br></br>
                        <button type="button">Send Money</button>
                        <br></br>
                        <button type="button">Statements</button>
                        <br></br>
                        <button type="button">Payment</button>
                        <br></br>
                        <button type="button">Support</button>
                    </tr>
                </table>
            </div>
        );
    }
}