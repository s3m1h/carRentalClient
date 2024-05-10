import React from "react";
import { Badge, Button, Card, Col, Container, Row } from "react-bootstrap";
import { FaGasPump, FaPeopleArrows } from "react-icons/fa";

const CarCarousel = () => {
  return (
    <div className="container">
      <div className="row mb-5">
        <div className="col-md-3">
          <div className="card" style={{ width: "18rem" }}>
            <img src="images/car-2.jpg" className="card-img-top" alt="..." />
            <div className="card-body">
              <div className="row">
                <div className="col-8">
                  <h5 className="card-title">Card title</h5>
                </div>
                <div className="col-4">
                  <span className="badge bg-secondary">2020</span>
                </div>
              </div>
              <div className="row mt-3">
                <div className="card">
                  <ul className="list-group list-group-flush">
                    <li className="list-group-item">
                      <ion-icon name="people-outline"></ion-icon>
                      <span class="card-item-text"> 4 People</span>
                    </li>
                    <li className="list-group-item">
                      <ion-icon name="flash-outline"></ion-icon>
                      <span class="card-item-text"> Hybrid</span>
                    </li>
                    <li className="list-group-item">
                      <ion-icon name="speedometer-outline"></ion-icon>
                      <span class="card-item-text"> 6.1km / 1-litre</span>
                    </li>
                    <li class="list-group-item">
                      <ion-icon name="hardware-chip-outline"></ion-icon>
                      <span class="card-item-text"> Automatic</span>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="row mt-3">
                <div className="col-6">
                  <p class="card-price">
                    <strong>$440</strong> / month
                  </p>
                </div>
                <div className="col-6">
                  <a href={"car-detail"} className="btn btn-primary">
                    Rent now
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-3">
          <div className="card" style={{ width: "18rem" }}>
            <img src="images/car-1.jpg" className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title">Card title</h5>
              <p className="card-text">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
              <a href="#" className="btn btn-primary">
                Go somewhere
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CarCarousel;
