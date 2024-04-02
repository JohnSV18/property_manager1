import React from 'react'
import {Row, Col} from 'react-bootstrap'
import { ListGroup } from 'react-bootstrap'
import './home.css'

export default function Home() {
    return(
        <div className='leaseVacancy'style={{ display: 'block', width: '100%' , padding: 55 }}> 
        <h4>Wethersfield & Emerson Village Management</h4> 
            <Row className='d-flex justify-content-center' style={{gap: '25%'}}> 
                <Col className='leaseExpirations'> 
                Lease Expirations
                <ListGroup >
                    <ListGroup.Item>Lorem Ipsum</ListGroup.Item>
                    <ListGroup.Item>Lorem Ipsum</ListGroup.Item>
                    <ListGroup.Item>Lorem Ipsum</ListGroup.Item>
                    <ListGroup.Item>Lorem Ipsum</ListGroup.Item>
                    <ListGroup.Item>Lorem Ipsum</ListGroup.Item>
                </ListGroup>
            </Col> 
                <Col className='inspectionDates'> 
                Inspection & Service Order Due Dates
                <ListGroup>
                    <ListGroup.Item>Lorem Ipsum</ListGroup.Item>
                    <ListGroup.Item>Lorem Ipsum</ListGroup.Item>
                    <ListGroup.Item>Lorem Ipsum</ListGroup.Item>
                    <ListGroup.Item>Lorem Ipsum</ListGroup.Item>
                    <ListGroup.Item>Lorem Ipsum</ListGroup.Item>
                </ListGroup>
            </Col> 
            </Row> 
        </div> 
    )
}