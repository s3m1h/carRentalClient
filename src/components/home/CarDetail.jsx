import React from "react";
import { FaTachometerAlt } from "react-icons/fa";

const CarDetail = () => {
  return (
    <div className="container p-5">
      <div className="card my-5" style={{ maxWidth: "100%", height: "577px" }}>
        <div className="row g-0">
          <div className="col-md-8">
            <img
              src="images/bg_3.jpg"
              className="img-fluid object-fit-cover rounded-start"
              alt="..."
              style={{ maxWidth: "100%", height: "577px" }}
            />
          </div>
          <div className="col-md-4">
            <div className="card-body">
              <h5 className="card-title text-center">CHEVEROLET</h5>
              <h2 className="card-title text-center">Mercedes Grand Sedan</h2>
              <ul className="list-group list-group-flush">
                <li className="list-group-item">
                  <FaTachometerAlt />
                  Mileage
                  <span> 40,000</span>
                </li>
                <li className="list-group-item">second item</li>
                <li className="list-group-item">A third item</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CarDetail;
