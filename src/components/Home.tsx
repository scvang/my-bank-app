import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Button, Col, Form, Row } from 'react-bootstrap';
import '../css/Home';
import bankCard from '../assets/images/bank_card.png';
import Globals from './Globals';
import History from './History';
import App from '../App';
import Payment from './Payment';
import SendMoney from './SendMoney';
import Statements from './Statements';
import Support from './Support';

export default class Home extends React.Component{

    state: {
        balance: String;
        credit: String;
        historyScreen: boolean;
        homeScreen:boolean;
        paymentScreen:boolean;
        sendMoneyScreen:boolean;
        statementScreen:boolean;
        supportScreen:boolean;
        appScreen:boolean;
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
            statementScreen:false,
            supportScreen:false,
            appScreen:false,
        }
    }

    changePage = (event,theScreen) =>{
        switch(theScreen){
            case 'history':
                this.setState({historyScreen:true});
            case 'home':
                this.setState({homeScreen:true});
            case 'payment':
                this.setState({paymentScreen:true});
            case 'send':
                this.setState({sendScreen:true});
            case 'statements':
                this.setState({statementScreen:true});
            case 'support':
                this.setState({supportScreen:true});
            case 'logout':
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
                        <Button className ='button' size='lg' onClick={event => this.changePage(event,'home')}>Overview</Button>
                        <br></br>
                        <button type="button" onClick={event => this.changePage(event,'history')}>Transaction History</button>
                        <br></br>
                        <button type="button" onClick={event => this.changePage(event,'send')}>Send Money</button>
                        <br></br>
                        <button type="button" onClick={event => this.changePage(event,'statements')}>Statements</button>
                        <br></br>
                        <button type="button" onClick={event => this.changePage(event,'payment')}>Payment</button>
                        <br></br>
                        <button type="button" onClick={event => this.changePage(event,'support')}>Support</button>
                        <br></br>
                        <button type="button" onClick={event => this.changePage(event,'logout')}>Logout</button>
                    </tr>
                </table>
            </div>
        );
    }
}