import projects from "./projects.json"
import React, { useState } from "react"
import Card from 'react-bootstrap/Card';

function Portfolio() {
    return (<main className="container d-flex justify-content-evenly">
        {projects.map((element, key) => {
            return (

                <Card style={{ width: '18rem' }}>
                    <Card.Body>
                        <Card.Title>{element.tile}</Card.Title>
                        <Card.Img variant="top" src={process.env.PUBLIC_URL + element.screenshot} />
                        <Card.Subtitle className="mb-2 text-muted">Card Subtitle</Card.Subtitle>
                        <Card.Text>
                            project description
                        </Card.Text>
                        <Card.Link href={element.live}>github
                        </Card.Link>
                    </Card.Body>
                </Card>
            );
        })}
    </main>)
        }

export default Portfolio
