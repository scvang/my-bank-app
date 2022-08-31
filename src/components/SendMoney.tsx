import * as React from 'react';
import { Button, Form } from 'react-bootstrap';
import '../css/SendMoney';
import Globals from './Globals';
import History from './History';
import Home from './Home';
import App from '../App';
import Payment from './Payment';
import Statements from './Statements';
import Support from './Support';

export default class SendMoney extends React.Component{
    state:{
        amount: Number;
        recipient: String;
        message: String;
        historyScreen: boolean;
        homeScreen: boolean;
        paymentScreen: boolean;
        sendMoneyScreen: boolean;
        statementScreen: boolean;
        supportScreen: boolean;
        appScreen: boolean;
    }

    constructor(props){
        super(props);
        this.state = {
            amount: 0,
            recipient:'',
            message:'',
            historyScreen:false,
            homeScreen:false,
            paymentScreen:false,
            sendMoneyScreen:false,
            statementScreen:false,
            supportScreen:false,
            appScreen:false,
        }
    }

    setAmount = (event) =>{
        this.setState({amount:event.target.value});
    }

    setRecipient = (event) =>{
        this.setState({recipient:event.target.value});
    }

    setMessage = (event) =>{
        this.setState({message:event.target.value});
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
        if(theScreen == 'statements'){
            this.setState({statementScreen:true});
        }
        if(theScreen == 'support'){
            this.setState({supportScreen:true});
        }
        if(theScreen == 'logout'){
            this.setState({appScreen:true});
        }
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
        if(this.state.statementScreen){
            return(<Statements/>)
        }
        if(this.state.supportScreen){
            return(<Support/>)
        }
        else
        return(
            <div className='home-div'>
                <div className='home-center'>
                    <div className='form-amount'>
                        <h2 className='send-heading'>Send Money</h2>
                        <span title='Enter amount'>
                            <Form.Group controlId='amount'>
                                <Form.Control onChange={this.setAmount} placeholder='$0.00'></Form.Control>
                            </Form.Group>
                        </span>
                        <span title='Enter recipient'>
                            <Form.Group controlId='recipient'>
                                <Form.Control onChange={this.setAmount} placeholder='To Recipient'></Form.Control>
                            </Form.Group>
                        </span>
                            <Form.Group controlId='message'>
                                <textarea className='form-message' placeholder='Message' onChange={this.setAmount}></textarea>
                            </Form.Group>
                        <div className='home-center'>
                            <Button className='button' type="submit" onClick={this.setAmount}>Confirm</Button>
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
                        <Button className ='button' size='lg' onClick={event => this.changePage(event,'statements')}>Statements</Button>
                        <br></br>
                        <Button className ='button' size='lg' onClick={event => this.changePage(event,'payment')}>Payment</Button>
                        <br></br>
                        <Button className ='button' size='lg' onClick={event => this.changePage(event,'support')}>Support</Button>
                        <br></br>
                        <Button className ='button' size='lg' onClick={event => this.changePage(event,'logout')}>Logout</Button>
                    </tr>
                </table>
            </div>
        )
    }
}