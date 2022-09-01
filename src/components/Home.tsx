import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Button, Col, Form, Row } from 'react-bootstrap';
import '../css/Home.css';
import bankCard from '../assets/images/bank_card.png';
import Globals from './Globals';
import History from './History';
import App from '../App';
import Payment from './Payment';
import SendMoney from './SendMoney';
import Spending from './Spending';
import Support from './Support';

export default class Home extends React.Component{

    state: {
        balance: String;
        credit: String;
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
            balance: Globals.balance.toFixed(2),
            credit: Globals.credit.toFixed(2),
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
                <div className = 'home-center'>
                    <p style = {{color:'white'}}>
                        <h2>Account Summary</h2>
                        <br></br> <br></br> <br></br> <br></br>
                        <img src={bankCard} className='img-center'/>
                        <p>Credit Card: {'(ending in ..9999)'}</p>
                        <br></br> <br></br> <br></br> <br></br>
                        <p>Current Balance: $<>{this.state.balance}</></p>
                        <p>Credit Available: $<>{this.state.credit}</></p>
                    </p>
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