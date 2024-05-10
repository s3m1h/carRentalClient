import React from "react";
import { Button, Col, Container, Form, Row } from "react-bootstrap";

const CarSearch = () => {
  return (
    <div>
      <Container className="shadow mt-n5 my-5 py-5">
        <Form>
          <Row className="justify-content-center">
            <Col>
              <Form.Group>
                <Form.Label>Teslim alınan şehir</Form.Label>
                <Form.Select aria-label="Default select example">
                  <option>Open this select menu</option>
                  <option value="1">One</option>
                  <option value="2">Two</option>
                  <option value="3">Three</option>
                </Form.Select>
              </Form.Group>
            </Col>
            <Col>
              <Form.Group>
                <Form.Label>Teslim edilen şehir</Form.Label>
                <Form.Select aria-label="Default select example">
                  <option>Open this select menu</option>
                  <option value="1">One</option>
                  <option value="2">Two</option>
                  <option value="3">Three</option>
                </Form.Select>
              </Form.Group>
            </Col>

            <Col>
              <Form.Group>
                <Form.Label>Check in Date</Form.Label>
                <Form.Control type="date"></Form.Control>
              </Form.Group>
            </Col>
            <Col>
              <Form.Group>
                <Form.Label>Check out Date</Form.Label>
                <Form.Control type="date"></Form.Control>
              </Form.Group>
            </Col>
            <Col>
              <Button
                variant="primary"
                size="lg"
                className="search-btn w-100 mt-4"
              >
                Search Now
              </Button>
            </Col>
          </Row>
        </Form>
      </Container>
    </div>
  );
};

export default CarSearch;
