import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import React from "react";
import data from '../../data'

function Artworks() {
    return (
        <div className="d-flex flex-wrap">
          {data.map((e) => {
            return (
              <Card className="card-wrapper">
                <Card.Img variant="top" src={e.picture} />
                <Card.Body>
                  <Card.Title>{e.name}</Card.Title>
                  <Card.Text>{e.description}</Card.Text>

                </Card.Body>
                <Card.Footer>
                  <button type="button" class="btn btn-info">Acheter</button>
                </Card.Footer>
              </Card>
            );
          })}
        </div>
      );
      
}

export default Artworks;