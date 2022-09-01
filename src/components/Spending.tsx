import * as React from 'react';
import { Button } from 'react-bootstrap';
import * as ReactDOM from 'react-dom';
import { Chart } from "react-google-charts";
import '../css/Spending.css';
import Globals from './Globals';
import History from './History';
import App from '../App';
import Payment from './Payment';
import SendMoney from './SendMoney';
import Support from './Support';
import Home from './Home';

const tableData = [
    ["Category", "Amount"],
    ["Food", 76],
    ["Gas", 42],
    ["Games", 20],
    ["Shopping", 55],
    ["Others", 13],
];

const options = {
    backgroundColor:'transparent',
    is3D:true,
    legend: {
        textStyle: {
        color: '#ffffff'
        }
    }
}

export default class Spending extends React.Component{

    state: {
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
                <div className = 'piechart'>
                    <h2>October Spending</h2>
                    <p>Total: ${'206.00'}</p>
                    <Chart
                    chartType="PieChart"
                    data={tableData}
                    width="100%"
                    height="400px"
                    options={options}
                    legendToggle
                    />
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