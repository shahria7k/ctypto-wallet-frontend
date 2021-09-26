// import { useEffect } from 'react';
import { Card } from "react-bootstrap";
import { Bar, Line } from 'react-chartjs-2';

const User = (props) => {

    const { image, name } = props.data;
    // CHart
    // const skipped = (ctx, value) => ctx.p0.skip || ctx.p1.skip ? value : undefined;
    // const down = (ctx, value) => ctx.p0.parsed.y > ctx.p1.parsed.y ? value : undefined;
    // const genericOptions = {
    //     fill: false,
    //     interaction: {
    //         intersect: false
    //     },
    //     radius: 0,
    // };
    // const config = {
    //     type: 'line',
    //     data: {
    //         labels: Utils.months({ count: 7 }),
    //         datasets: [{
    //             label: 'My First Dataset',
    //             data: [65, 59, NaN, 48, 56, 57, 40],
    //             borderColor: 'rgb(75, 192, 192)',
    //             segment: {
    //                 borderColor: ctx => skipped(ctx, 'rgb(0,0,0,0.2)') || down(ctx, 'rgb(192,75,75)'),
    //                 borderDash: ctx => skipped(ctx, [6, 6]),
    //             }
    //         }]
    //     },
    //     options: genericOptions
    // };

    return (
        <Card
            text="white"
            className="mb-2 w-100 bg-transparent"
            style={{ position: 'relative' }}
        >
            <img src={image} alt="" style={{ position: "absolute", top: "-25px", left: "50px", width: "50px" }} />
            <Card.Header className="d-flex flex-column justify-content-center align-items-center p-5 bg-dark">
                <Line
                    data={
                        {
                            labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
                            datasets: [{
                                label: '# of Votes',
                                data: [12, 19, 3, 5, 2, 3],
                                backgroundColor: [
                                    'rgba(255, 99, 132, 0.2)',
                                    'rgba(54, 162, 235, 0.2)',
                                    'rgba(255, 206, 86, 0.2)',
                                    'rgba(75, 192, 192, 0.2)',
                                    'rgba(153, 102, 255, 0.2)',
                                    'rgba(255, 159, 64, 0.2)'
                                ],
                                borderColor: [
                                    'rgba(255, 99, 132, 1)',
                                    'rgba(54, 162, 235, 1)',
                                    'rgba(255, 206, 86, 1)',
                                    'rgba(75, 192, 192, 1)',
                                    'rgba(153, 102, 255, 1)',
                                    'rgba(255, 159, 64, 1)'
                                ],
                                borderWidth: 1
                            }]
                        }
                    }
                    height={150}
                    width={300}
                ></Line>
            </Card.Header >
            <Card.Body className="bg-dark">
                <Card.Title className="mt-3">{name}</Card.Title>

            </Card.Body>
            <Card.Footer className="bg-dark mt-0 p-4">
            </Card.Footer>
        </Card >
    );
};

export default User;