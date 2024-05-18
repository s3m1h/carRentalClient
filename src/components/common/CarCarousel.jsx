import React, { useEffect, useState } from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { getAllCars } from "~/services/CarService";
import KelimeIslemleri from "~/utils/KelimeIslemleri";

const CarCarousel = () => {
  const [cars, setCars] = useState([
    {
      carId: "",
      carName: "",
      modelYear: "",
      carBodyType: "",
      fuelType: "",
      dailyPrice: "",
      description: "",
      kilometer: "",
      colorName: "",
      brandName: "",
      isRented: "",
      photo: null,
    },
  ]);

  const [errorMessage, setErrorMessage] = useState("");
  const [successMessage, setSuccessMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  useEffect(() => {
    fetchCars();
  }, []);

  const fetchCars = async () => {
    setIsLoading(true);
    try {
      const result = await getAllCars();
      setCars(result);
      setIsLoading(false);
    } catch (error) {
      setErrorMessage(error.message);
      setIsLoading(false);
    }
  };
  return (
    <div className="container">
      <div className="row mb-5">
        {

        cars.map((car) => (
          <div className="col-md-3">
            <div className="card" style={{ width: "18rem" }}>
              <LazyLoadImage
              className="card-img-top"
              src={`data:image/png;base64, ${car.photo}`}
              effect="blur"
              style={{ height: "200px" }}
              />
              <div className="card-body">
                <div className="row">
                  <div className="col-8">
                    <h5 className="card-title">{car.carName}</h5>
                  </div>
                  <div className="col-4">
                    <span className="badge bg-secondary">{car.modelYear}</span>
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
                        <span class="card-item-text"> {KelimeIslemleri.duzeltilmisKelime(car.carBodyType)}</span>
                      </li>
                      <li className="list-group-item">
                        <ion-icon name="speedometer-outline"></ion-icon>
                        <span class="card-item-text"> {car.kilometer}Km / {KelimeIslemleri.duzeltilmisKelime(car.fuelType)}</span>
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
                      <strong>{car.dailyPrice}tl</strong> / Aylık
                    </p>
                  </div>
                  <div className="col-6">
                    <a href={"car-detail"} className="btn btn-primary">
                      Şimdi Kirala
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CarCarousel;
