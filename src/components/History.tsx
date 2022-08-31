import * as React from 'react';
import { Button } from 'react-bootstrap';
import App from '../App';
import '../css/History';
import Home from './Home';
import Payment from './Payment';
import SendMoney from './SendMoney';
import Statements from './Statements';
import Support from './Support';

export default class History extends React.Component{

    state: {
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
            <div className = 'history-body'>
                <div className = 'home-d-flex'>
                    <div className = 'home-center'>
                            <p className='table-d'>
                                <h2 style={{marginLeft:40,marginTop:-200}}>Transaction History:</h2>
                                <table>
                                    <br></br>
                                    <tr>
                                        <td className='table-header'>Date</td>
                                        <td className='table-header'>Amount</td>
                                        <td className='table-header'>Description</td>
                                    </tr>
                                    <br></br>
                                    <tr>
                                        <td className='table-spacing'>10-11-23</td>
                                        <td className='table-spacing'>$20.00</td>
                                        <td className='table-spacing'>Amazon Inc.</td>
                                    </tr>
                                    <tr>
                                    <td className='table-spacing'>8-08-23</td>
                                        <td className='table-spacing'>$20.00</td>
                                        <td className='table-spacing'>Amazon Inc.</td>
                                    </tr>
                                    <tr>
                                    <td className='table-spacing'>7-28-23</td>
                                        <td className='table-spacing'>$20.00</td>
                                        <td className='table-spacing'>Amazon Inc.</td>
                                    </tr>
                                    <tr>
                                    <td className='table-spacing'>7-09-23</td>
                                        <td className='table-spacing'>$20.00</td>
                                        <td className='table-spacing'>Amazon Inc.</td>
                                    </tr>
                                    <tr>
                                    <td className='table-spacing'>7-11-23</td>
                                        <td className='table-spacing'>$20.00</td>
                                        <td className='table-spacing'>Amazon Inc.</td>
                                    </tr>
                                    <tr>
                                    <td className='table-spacing'>6-16-23</td>
                                        <td className='table-spacing'>$20.00</td>
                                        <td className='table-spacing'>Amazon Inc.</td>
                                    </tr>
                                    <tr>
                                    <td className='table-spacing'>6-11-23</td>
                                        <td className='table-spacing'>$20.00</td>
                                        <td className='table-spacing'>Amazon Inc.</td>
                                    </tr>
                                    <tr>
                                    <td className='table-spacing'>5-04-23</td>
                                        <td className='table-spacing'>$20.00</td>
                                        <td className='table-spacing'>Amazon Inc.</td>
                                    </tr>
                                    <tr>
                                    <td className='table-spacing'>3-19-23</td>
                                        <td className='table-spacing'>$20.00</td>
                                        <td className='table-spacing'>Amazon Inc.</td>
                                    </tr>
                                    <tr>
                                    <td className='table-spacing'>2-17-23</td>
                                        <td className='table-spacing'>$20.00</td>
                                        <td className='table-spacing'>Amazon Inc.</td>
                                    </tr>
                                </table>
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
            </div>
        );
    }
}