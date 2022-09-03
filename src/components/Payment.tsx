import * as React from 'react';
import * as ReactDOM from 'react-dom';
import Globals from './Globals';
import History from './History';
import Home from './Home';
import App from '../App';
import SendMoney from './SendMoney';
import Spending from './Spending';
import Support from './Support';
import { Button, Form } from 'react-bootstrap';
import '../css/Payment.css';

export default class Payment extends React.Component{

    state: {
        amount: number;
        isAmountDisabled: boolean;
        historyScreen: boolean;
        homeScreen: boolean;
        paymentScreen: boolean;
        sendMoneyScreen: boolean;
        spendingScreen: boolean;
        supportScreen: boolean;
        appScreen: boolean;
    }

    constructor(props){
        super(props);
        this.state = {
            amount: 0,
            isAmountDisabled: true,
            historyScreen:false,
            homeScreen:false,
            paymentScreen:false,
            sendMoneyScreen:false,
            spendingScreen:false,
            supportScreen:false,
            appScreen:false,
        }
    }

    changePage = (event,theScreen) =>{
        if(theScreen == 'history'){
            this.setState({historyScreen:true});
        }
        if(theScreen == 'payment'){
            this.setState({paymentScreen:true});
        }
        if(theScreen == 'home'){
            this.setState({homeScreen:true});
        }
        if(theScreen == 'send'){
            this.setState({sendMoneyScreen:true});
        }
        if(theScreen == 'spending'){
            this.setState({spendingScreen:true});
        }
        if(theScreen == 'support'){
            this.setState({supportScreen:true});
        }
        if(theScreen == 'logout'){
            this.setState({appScreen:true});
        }
    }

    setAmount = (event) =>{
        this.setState({amount:event.target.value});
    }
    
    enableOtherAmount = () =>{
        this.setState({isAmountDisabled:false});
    }

    disableOtherAmount = () =>{
        this.setState({isAmountDisabled:true});
    }

    submit = () => {

    }

    render(){
        if(this.state.historyScreen){
            return(<History/>)
        }
        if(this.state.homeScreen){
            return(<Home/>)
        }
        if(this.state.appScreen){
            return(<App/>)
        }
        if(this.state.paymentScreen){
            return(<Payment/>)
        }
        if(this.state.sendMoneyScreen){
            return(<SendMoney/>)
        }
        if(this.state.spendingScreen){
            return(<Spending/>)
        }
        if(this.state.supportScreen){
            return(<Support/>)
        }
        else
        return(
            <div className = 'home-div'>
                <div className = 'payment-center'>
                    <h2>Make Payment</h2>
                    <p>Card ending in (...9999)</p>
                    <div className='payment-options'>
                        <br></br><br></br><br></br><br></br>
                        <input type='radio' name='paymentType' onChange={this.disableOtherAmount}/>Minimum Amount ($20.00)<br></br><br></br>
                        <input type='radio' name='paymentType' onChange={this.disableOtherAmount}/>Current Balance (${Globals.balance.toFixed(2)})<br></br><br></br>
                        <input type='radio' name='paymentType' onChange={this.enableOtherAmount}/>Other Amount<br></br><br></br><br></br>
                        <span title='Enter payment amount'>
                            <Form.Group controlId='paymentAmount'>
                                <Form.Control className='payment-option-amount' onChange={this.setAmount} disabled={this.state.isAmountDisabled} placeholder='$0.00'></Form.Control>
                            </Form.Group>
                        </span>
                        <br></br><br></br>
                        <div className='home-center'>
                            <Button className='button' type="submit" onClick={this.submit}>Confirm</Button>
                        </div>
                    </div>
                </div>
                <table className='buttons' align='right'>
                    <tr>
                        <Button className ='button' size='lg' onClick={event => this.changePage(event,'home')}>Overview</Button>
                        <br></br>
                        <Button className ='button' size='lg' onClick={event => this.changePage(event,'history')}>Transaction History</Button>
                        <br></br>
                        <Button className ='button' size='lg' onClick={event => this.changePage(event,'send')}>Send Money</Button>
                        <br></br>
                        <Button className ='button' size='lg' onClick={event => this.changePage(event,'spending')}>Spending</Button>
                        <br></br>
                        <Button className ='button' size='lg' onClick={event => this.changePage(event,'payment')}>Payment</Button>
                        <br></br>
                        <Button className ='button' size='lg' onClick={event => this.changePage(event,'support')}>Support</Button>
                        <br></br>
                        <Button className ='button' size='lg' onClick={event => this.changePage(event,'logout')}>Logout</Button>
                    </tr>
                </table>
            </div>
        );
    }
}