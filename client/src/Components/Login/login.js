import React from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';



export default function Login() {
    return (
        <div className='mt-5'>  
            <Form>
                <Form.Group className='mb-3' controlId='formEmail'>
                    <Form.Label> Email Address </Form.Label>
                    <Form.Control type='email' placeholder='Enter Email' />
                    <Form.Text className='text-muted'>
                        We'll never share your email with anyone else
                    </Form.Text>
                </Form.Group>

                <Form.Group className='mb-3' controlId='formPassword'>
                    <Form.Label>Password </Form.Label>
                    <Form.Control type='password' placeholder='Enter Password' />
                </Form.Group>
                <Button variant='primary' type='submit'>
                    Log In
                </Button>
            </Form>
        </div>
    )
}
