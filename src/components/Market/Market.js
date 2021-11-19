import React, { useState, useEffect } from "react";
import { Container, Row } from "react-bootstrap";
import Crypto from "../Crypto/Crypto";

const Market = (props) => {
	const { tradeHistory } = props;
	const [data, setData] = useState([]);
	useEffect(() => {
		fetch(
			"https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=25&page=1&sparkline=false"
		)
			.then((res) => res.json())
			.then((data) => setData(data));
	}, []);
	//

	return (
		<div className="contianer-fluid mx-5">
			<h2 className="text-center text-white">Market Place</h2>
			<Row>
				<Row className="col-lg-9 gy-4">
					{data.map((item) => (
						<Crypto
							data={item}
							key={item.id}
							userWallet={props.userWallet}
							updateUserWallet={props.updateUserWallet}
						></Crypto>
					))}
				</Row>
				<div className="container-fluid col-lg-3 bg-dark text-white mt-5">
					<h4 className="text-center mt-3">Trading history</h4>
					<p>Number of trade today: {tradeHistory.length}</p>
					<p>
						Total: {tradeHistory.reduce((acc, curr) => acc + curr.amount, 0)}$
					</p>
					<ol>
						{tradeHistory.map((item) => (
							<li>
								{item.name} : {item.amount}$
							</li>
						))}
					</ol>
				</div>
			</Row>
		</div>
	);
};

export default Market;
