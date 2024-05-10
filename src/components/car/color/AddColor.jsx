import React, { useState } from "react";
import { Link } from "react-router-dom";
import Urls from "~/constants/Urls";
import { addColor } from "~/services/ColorService";

const AddColor = () => {
  const [newColor, setNewColor] = useState({
    colorName: "",
  });

  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const handleColorInputChange = (e) => {
    const name = e.target.name; // name değişmiyor
    let value = e.target.value; // value değişebilir o yuzden let
    setNewColor({ ...newColor, [name]: value });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const success = await addColor(newColor.colorName);
      if (success !== undefined) {
        setSuccessMessage("Yeni bir renk başarılı bir şekilde kaydedildi..");
        setNewColor({colorName:""});
        setErrorMessage("");
      } else {
        setErrorMessage("Ekleme işlemi başarısız oldu..");
      }
    } catch (error) {
      setErrorMessage(error.message);
    }
    setTimeout(() => {
      setSuccessMessage("");
      setErrorMessage("");
    }, 3000);
  };
  return (
    <>
      <section className="container mt-5 mb-5">
        <div className="row justify-content-center">
          <div className="col-md-8 col-lg-6">
            <h2 className="mt-5 mb-2">Yeni bir renk ekle</h2>
            {successMessage && (
              <div className="alert alert-success fade show">
                {" "}
                {successMessage}
              </div>
            )}

            {errorMessage && (
              <div className="alert alert-danger fade show">
                {" "}
                {errorMessage}
              </div>
            )}

            <form onSubmit={handleSubmit}>
              <div className="mb-3">
                <label htmlFor="colorName" className="form-label">
                  Renk adı
                </label>
                <input
                  required
                  type="text"
                  className="form-control"
                  id="colorName"
                  name="colorName"
                  value={newColor.colorName}
                  onChange={handleColorInputChange}
                />
                <div className="form-text">Bir renk giriniz...</div>
              </div>
              <Link to={Urls.ADMIN + Urls.COLORS} className="btn btn-outline-info ml-5">
                Geri dön
              </Link>
              <button type="submit" className="btn btn-outline-primary ml-5">
                Renk kaydet
              </button>
            </form>
          </div>
        </div>
      </section>
    </>
  );
};

export default AddColor;
