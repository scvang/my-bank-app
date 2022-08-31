import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Button, Col, Container, Form, Row } from 'react-bootstrap';
import Home from '../src/components/Home';
import './css/App.css';
import bankLogo from './assets/images/bank-logo.png';
import bankIcon from './assets/images/bank-icon.png';

export default class App extends React.Component{

    state: {
        currentPage: String;
        changePage: boolean;
        isLoggedin: boolean; 
        username: String; 
        password: String;
        render: boolean;
    }

    constructor(props){
        super(props);
        this.state = {
            currentPage: '',
            changePage: false,
            isLoggedin: false,
            username: '',
            password: '',
            render: false
        }
    }

    setUsername = (event: { target: { value: any; }; }) => {
        this.setState({username: event.target.value});
    }

    setLoggedin = (event) =>{
        this.setState({isLoggedin: true});
    }

    render(){
        if(!this.state.isLoggedin){
            return(
                <div className = 'app-div'>
                    <div className = 'app-center'>
                        <img src={bankIcon} className='app-bank-icon'/>
                        <img src={bankLogo} className='app-bank-logo'/>
                        {/* The user enters their email address */}
                        <div style={{width:'100%'}}>
                            <span title='Enter your username'>
                                <Form.Group controlId='login'>
                                    <Form.Control className='' required onChange={this.setUsername} placeholder='Username'/>
                                </Form.Group>
                            </span>
                        </div>

                        {/* The user enters a password field */}
                        <div style={{width:'100%'}}>
                            <span title='Enter your password'>
                                <Form.Group controlId='password'>
                                    <Form.Control type='password' className='' required onChange={this.setUsername} placeholder='Password'/>
                                </Form.Group>
                            </span>
                        </div>

                        {/* Login button */}
                        <br></br>
                        <div className='app-center' style={{width: '40%'}}>
                            <Button className='button' type="submit" onClick={this.setLoggedin}>
                                Sign-in
                            </Button>
                        </div>
                    </div>
                </div>
            );
        }
        else{
            return(<Home/>)
        }
    }
}