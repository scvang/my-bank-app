import * as React from 'react';
import { Button, Form } from 'react-bootstrap';
import '../css/SendMoney';

export default class SendMoney extends React.Component{
    state:{
        amount: Number
    }

    constructor(props){
        super(props);
        this.state = {
            amount: 0,
        }
    }

    setAmount = (event) =>{
        this.setState({amount:event.target.value});
    }

    render(){
        return(
            <div className='center'>
                <div className='center-b'>
                        <Form.Group controlId='amount'>
                            <p className='center'>Send Money:</p>
                            <Form.Control className='form-amount' onChange={this.setAmount} placeholder='$0.00'></Form.Control>
                        </Form.Group>

                    <Form.Group controlId='recipient'>
                        <Form.Control className='form-to' onChange={this.setAmount} placeholder='To Recipient'></Form.Control>
                    </Form.Group>
                    <textarea className='form-message' placeholder='Message' onChange={this.setAmount}></textarea>
                    <br></br>
                    <Button className="send-money-button" type="submit" onClick={this.setAmount}>
                        Send
                    </Button>
                </div>
            </div>
        )
    }
}