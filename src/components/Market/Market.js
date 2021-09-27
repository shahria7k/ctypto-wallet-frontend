import React, { useState, useEffect } from 'react';
import { Container, Row } from 'react-bootstrap';
import Crypto from '../Crypto/Crypto';



const Market = (props) => {
    const [data, setData] = useState([]);
    useEffect(() => {
        fetch('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=25&page=1&sparkline=false')
            .then(res => res.json())
            .then(data => setData(data));
    }, []);
    // 

    return (
        <Container className="mt-3">
            <h2 className="text-center my-3 text-white">Market Place</h2>
            <Row className="gy-5">
                {
                    data.map(item => <Crypto data={item} key={item.id} userWallet={props.userWallet} updateUserWallet={props.updateUserWallet}></Crypto>)
                }
            </Row>
        </Container>
    );
};

export default Market;