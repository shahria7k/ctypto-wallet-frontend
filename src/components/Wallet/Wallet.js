import { Card, Col, Button } from "react-bootstrap";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBitcoin } from '@fortawesome/free-brands-svg-icons';
import { faHeart, faChevronRight } from '@fortawesome/free-solid-svg-icons';
import { faClock } from '@fortawesome/free-regular-svg-icons';
import "./Wallet.css";
import svg from "./anim.svg";
const Wallet = () => {
    return (
        <Card
            bg="dark"
            text="white"
            className="mb-2 w-100"
        >
            <Card.Header>
                <Card.Title className="pt-3 ps-3 d-flex justify-content-between align-items-center">Wallet   <code className="pe-5 d-flex align-items-center"><small className="text-light d-inline-block me-1">Primary Currency:</small> $USD</code> </Card.Title>
            </Card.Header>
            <Card.Body className="row">
                <Col lg="6" className="ps-lg-5">
                    <h3 className="text-center text-lg-start"><code>Current USD Balance: $2.3M</code></h3>
                    <div>
                        <div className="my-5 ">
                            <h5 className="d-flex align-items-center">Get started with Bitcoin <FontAwesomeIcon icon={faBitcoin} style={{ fontSize: "28px", marginLeft: "10px" }} /></h5>
                            <Card.Text className="mt-3">
                                <FontAwesomeIcon icon={faHeart} style={{ fontSize: "18px", marginRight: "10px" }} />The world’s #1 cryptocurrency
                            </Card.Text>
                            <Card.Text className="mt-3">
                                <FontAwesomeIcon icon={faClock} style={{ fontSize: "18px", marginRight: "10px" }} /> Trade 24 hours a day
                            </Card.Text>
                            <Card.Text className="mt-3">
                                <FontAwesomeIcon icon={faChevronRight} style={{ fontSize: "18px" }} /><FontAwesomeIcon icon={faChevronRight} style={{ fontSize: "18px", marginRight: "10px" }} />Get started with as little as $5
                            </Card.Text>
                        </div>

                        <Button variant="primary">Withdraw</Button>{' '}
                        <Button variant="secondary">Convert</Button>{' '}
                        <Button variant="success">Add Amount</Button>{' '}

                    </div>
                </Col>
                <Col lg="6">
                    <img src={svg} alt="" className="fluid" />
                </Col>
            </Card.Body>
        </Card>
    );
};

export default Wallet;