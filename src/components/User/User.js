// import { useEffect } from 'react';
import { Card, Image } from "react-bootstrap";
const User = (props) => {
    const { name, picture, email, location } = props.user || { name: " ", picture: { large: " " }, email: "", location: { country: "" } };
    return (
        <Card
            text="white"
            className="mb-2 w-100 bg-transparent"
        >
            <Card.Header className="d-flex flex-column justify-content-center align-items-center p-4 bg-dark">
                <Image src={picture.large} roundedCircle className="w-50" />
                <Card.Title className="mt-3"> {
                    name.title + " " + name.first + " " + name.last
                } </Card.Title>
            </Card.Header >
            <Card.Body className="bg-dark mt-4">
                <Card.Text className="pt-3">
                    Email: {email}
                    <br />
                    <br />
                    Location: {location.country}

                </Card.Text>

            </Card.Body>
            <Card.Footer className="bg-dark mt-0 p-4">
                Social
            </Card.Footer>
        </Card >
    );
};

export default User;