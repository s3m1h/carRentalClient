import { api, getHeaderWithMultiFormData } from "./AxiosServiceBase";


export async function addCar(carData,photo){
    const formData = new FormData();
    formData.append("carRequest", new Blob([JSON.stringify(carData)],{type:"application/json"}));
    formData.append("files", photo);
    const response = await api.post("/api/cars", formData,{headers:getHeaderWithMultiFormData()} );
      if (response.status === 201) {
        return true;
      } else {
        return false;
      }
}
export async function getAllCars(){
  try{
    const result = await api.get("/api/cars");
    return result.data.data;
  }catch(error){
    throw new Error("Veri getirme işlemi başarısız oldu.. ");
  }
}
export async function updateCar(carId,carData,photo){
  const formData = new FormData();
  formData.append("carRequest", new Blob([JSON.stringify(carData)],{type:"application/json"}));
  formData.append("files", photo);
  const response = await api.put(`/api/cars/${carId}`, formData, {
    headers: getHeaderWithMultiFormData(),
  });
  return response;
}
export async function getCarById(carID) {
  try {
    const result = await api.get(`api/cars/${carID}`);
    return result.data.data;
  } catch (error) {
    throw new Error(`Araçları getirme işlemi başarısız: ${carID}`);
  }
}