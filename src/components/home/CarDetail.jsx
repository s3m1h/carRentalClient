import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Container, Row, Col, Form, Button, ListGroup } from 'react-bootstrap';
import { getCarDetails, rentCar } from '~/services/CarService';
import { LazyLoadImage } from 'react-lazy-load-image-component';

const CarDetail = () => {
  const { brand, model } = useParams();
  const [car, setCar] = useState(null);
  const [rentalInfo, setRentalInfo] = useState({
    startDate: '',
    finishDate: '',
    customerFullName: '',
    customerEmail: '',
    rentedCity: '',
    deliveredCity: ''
  });

  useEffect(() => {
    const fetchCarDetails = async () => {
      const carData = await getCarDetails(brand, model);
      setCar(carData);
      console.log(carData);
    };
    fetchCarDetails();
  }, [brand, model]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setRentalInfo({
      ...rentalInfo,
      [name]: value
    });
  };

  const handleRentCar = async () => {
    const result = await rentCar({
      ...rentalInfo,
      carId: car.id
    });
    if (result.success) {
      alert('Car rented successfully!');
    } else {
      alert('Failed to rent the car.');
    }
  };

  return (
    <Container className="py-5">
      {car ? (
        <>
          <Row className="mb-5">
            <Col md={6}>
              <LazyLoadImage
                className="img-fluid"
                src={`data:image/png;base64, ${car.photo}`}
                effect="blur"
                style={{ objectFit: "cover", width: "100%" }}
                alt={car.carName}
              />
            </Col>
            <Col md={6}>
              <h1 className="fs-2 mb-2">{car.brandName} {car.carName}</h1>
              <ListGroup variant="flush">
                <ListGroup.Item><strong>Model Year:</strong> {car.modelYear}</ListGroup.Item>
                <ListGroup.Item><strong>Body Type:</strong> {car.carBodyType}</ListGroup.Item>
                <ListGroup.Item><strong>Fuel Type:</strong> {car.fuelType}</ListGroup.Item>
                <ListGroup.Item><strong>Daily Price:</strong> ${car.dailyPrice}</ListGroup.Item>
                <ListGroup.Item><strong>Description:</strong> {car.description}</ListGroup.Item>
                <ListGroup.Item><strong>Kilometer:</strong> {car.kilometer}</ListGroup.Item>
                <ListGroup.Item><strong>Color:</strong> {car.colorName}</ListGroup.Item>
              </ListGroup>
            </Col>
          </Row>
          <Row>
            <Col>
              <h2 className="fs-3 mb-3">Rent this car</h2>
              <Form>
                <Row>
                  <Col xs={12} md={6} className="mb-3">
                    <Form.Control
                      type="date"
                      name="startDate"
                      value={rentalInfo.startDate}
                      onChange={handleInputChange}
                      placeholder="Start Date"
                    />
                  </Col>
                  <Col xs={12} md={6} className="mb-3">
                    <Form.Control
                      type="date"
                      name="finishDate"
                      value={rentalInfo.finishDate}
                      onChange={handleInputChange}
                      placeholder="Finish Date"
                    />
                  </Col>
                 
                  <Col xs={12} md={6} className="mb-3">
                    <Form.Control
                      type="text"
                      name="rentedCity"
                      value={rentalInfo.rentedCity}
                      onChange={handleInputChange}
                      placeholder="Rented City"
                    />
                  </Col>
                  <Col xs={12} md={6} className="mb-3">
                    <Form.Control
                      type="text"
                      name="deliveredCity"
                      value={rentalInfo.deliveredCity}
                      onChange={handleInputChange}
                      placeholder="Delivered City"
                    />
                  </Col>
                  <Col xs={12} className="mb-3">
                    <div className="d-grid">
                      <Button
                        variant="primary"
                        size="lg"
                        className="w-100"
                        onClick={handleRentCar}
                        disabled={car.carCount <= 0}
                      >
                        Rent Now
                      </Button>
                    </div>
                  </Col>
                </Row>
              </Form>
            </Col>
          </Row>
        </>
      ) : (
        <p>Loading...</p>
      )}
    </Container>
  );
};

export default CarDetail;
