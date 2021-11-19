import { Card, Col, Table } from "react-bootstrap";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBitcoin, faEthereum, faGg } from '@fortawesome/free-brands-svg-icons';
import { faDollarSign } from '@fortawesome/free-solid-svg-icons';
import { faFlag } from '@fortawesome/free-regular-svg-icons';
import { Doughnut } from 'react-chartjs-2';

import "./Wallet.css";
import svg from "./anim.svg";
const Wallet = (props) => {
    return (
        <Card
            bg="dark"
            text="white"
            className="mb-2 w-100 wallet"
        >
            <Card.Header>
                <Card.Title className="pt-3 ps-3 d-flex justify-content-between align-items-center">Wallet   <code className="pe-5 d-flex align-items-center"><small className="text-light d-inline-block me-1">Primary Currency:</small> $USD</code> </Card.Title>
            </Card.Header>
            <Card.Body className="row  ">
                <Col lg="6" className="ps-lg-5">
                    <h3 className="text-center text-lg-start" >Total Balance in USD: {Object.values(props.userWallet).reduce((acc, curr) => acc + curr, 0)}</h3>
                    <div>
                        <div className="my-5 ">
                            <Table bordered hover variant="dark" className="text-white">
                                <thead>
                                    <tr>
                                        <th></th>
                                        <th>Currency</th>
                                        <th>Amount</th>
                                        <th>Value in USD</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td className="text-center"><FontAwesomeIcon icon={faDollarSign} style={{ fontSize: "1.2em" }} /></td>
                                        <td>USD</td>
                                        <td>-</td>
                                        <td>{props.userWallet["usdc"]}</td>
                                    </tr>
                                    <tr>
                                        <td className="text-center"><FontAwesomeIcon icon={faBitcoin} style={{ fontSize: "1.2em" }} /></td>
                                        <td>Bitcoin</td>
                                        <td>-</td>
                                        <td>{props.userWallet["btc"]}</td>
                                    </tr>
                                    <tr>
                                        <td className="text-center"><FontAwesomeIcon icon={faEthereum} style={{ fontSize: "1.2em" }} /></td>
                                        <td>Ethereum</td>
                                        <td>-</td>
                                        <td>{props.userWallet["eth"]}</td>
                                    </tr>
                                    <tr>
                                        <td className="text-center"><FontAwesomeIcon icon={faFlag} style={{ fontSize: "1.2em" }} /></td>
                                        <td>Lite Coin</td>
                                        <td>-</td>
                                        <td>{props.userWallet["ltc"]}</td>
                                    </tr>
                                    <tr>
                                        <td className="text-center"><FontAwesomeIcon icon={faGg} style={{ fontSize: "1.2em" }} /></td>
                                        <td>Others</td>
                                        <td>-</td>
                                        <td>{props.userWallet["others"]}</td>
                                    </tr>
                                </tbody>
                            </Table>
                            {/* <Card.Text className="mt-3">
                                <FontAwesomeIcon icon={faDollarSign} style={{ fontSize: "1.2em", marginRight: "10px" }} />USD: 10
                            </Card.Text>
                            <Card.Text className="mt-3">
                                <FontAwesomeIcon icon={faBitcoin} style={{ fontSize: "1.2em", marginRight: "10px" }} />Bitcoin: 10
                            </Card.Text>
                            <Card.Text className="mt-3">
                                <FontAwesomeIcon icon={faBitcoin} style={{ fontSize: "1.2em", marginRight: "10px" }} />Etherium: 10
                            </Card.Text>
                            <Card.Text className="mt-3">
                                <FontAwesomeIcon icon={faBitcoin} style={{ fontSize: "1.2em", marginRight: "10px" }} />Binance Coin: 10
                            </Card.Text>
                            <Card.Text className="mt-3">
                                <FontAwesomeIcon icon={faBitcoin} style={{ fontSize: "1.2em", marginRight: "10px" }} />Litecoin: 10
                            </Card.Text>
                            <Card.Text className="mt-3">
                                <FontAwesomeIcon icon={faClock} style={{ fontSize: "18px", marginRight: "10px" }} /> Others
                            </Card.Text> */}
                        </div>



                    </div>
                </Col>
                <Col lg="6" style={{ position: "relative" }} className="d-flex justify-content-center align-items-center p-1">
                    <img src={svg} alt="" className="fluid" style={{ visibility: "hidden", position: "absolute" }} />
                    <div className="chart p-5" >
                        <Doughnut
                            data={
                                {
                                    labels: ["USD", "BITCOIN", "Etherium", "Lightcoin", "Others"],
                                    datasets: [{
                                        data: [...Object.values(props.userWallet)],
                                        backgroundColor: [
                                            '#4dc9f6',
                                            '#f67019',
                                            '#f53794',
                                            '#537bc4',
                                            '#acc236',
                                            '#166a8f',
                                            '#00a950',
                                            '#58595b',
                                            '#8549ba'
                                        ],
                                    }],

                                }
                            }
                            options={
                                {
                                    plugins: {
                                        legend: {
                                            title: {
                                                display: true,
                                                text: 'Legend Title',

                                            },
                                            aligh: "start",
                                            position: 'left',
                                            onHover: function (evt, item, legend) {
                                                legend.chart.data.datasets[0].backgroundColor.forEach((color, index, colors) => {
                                                    colors[index] = index === item.index || color.length === 9 ? color : color + '4D';
                                                });
                                                legend.chart.update();
                                            },
                                            onLeave: function (evt, item, legend) {
                                                legend.chart.data.datasets[0].backgroundColor.forEach((color, index, colors) => {
                                                    colors[index] = color.length === 9 ? color.slice(0, -2) : color;
                                                });
                                                legend.chart.update();
                                            },
                                            display: true,
                                            labels: {
                                                usePointStyle: true,
                                                scaleFontColor: "#fff"
                                            },

                                        }
                                    },


                                }
                            }
                            height={300}
                            width={300}
                        />
                    </div>
                </Col>
            </Card.Body>
        </Card>
    );
};

export default Wallet;