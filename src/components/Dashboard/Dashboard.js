import { useState, useEffect } from 'react';
import { Container, Col, Row } from "react-bootstrap";
import User from "../User/User";
import Wallet from '../Wallet/Wallet';

const Dashboard = () => {
    const [user, setUser] = useState();
    useEffect(() => {
        fetch("https://randomuser.me/api?gender=male")
            .then(res => res.json())
            .then(data => {
                console.log(data.results[0]);
                setUser(data.results[0]);
            }
            );
    }, []);
    return (
        <Container className="mt-5">
            <Row>
                <Col lg="4">
                    <User user={user}></User>
                </Col>
                <Col lg="8">
                    <Wallet></Wallet>
                </Col>
            </Row>
        </Container>
    );
};

export default Dashboard;