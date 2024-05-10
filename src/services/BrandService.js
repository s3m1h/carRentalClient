import { api, getHeaderAuth, getHeaders } from "./AxiosServiceBase";


export async function addBrand(brandName) {
  const formData = new FormData();
  formData.append("brandName", brandName);

  const response = await api.post("/api/brands/add", formData, {headers:getHeaderAuth()});
  if (response.status === 201) {
    return true;
  } else {
    return false;
  }
}
export async function getAllBrands() {
  try {
    const result = await api.get("/api/brands",{headers:getHeaderAuth()});
    return result.data.data;
  } catch (error) {
    throw new "Markaları getirme işlemi başarısız oldu.."();
  }
}
export async function getBrandById(brandID) {
  try {
    const result = await api.get(`api/brands/brand/${brandID}`,{headers:getHeaderAuth()});
    return result.data;
  } catch (error) {
    throw new Error(`Brand getirme işlemi başarısız: ${brandID}`);
  }
}

export async function updateBrand(brandID, brandData) {
  const formData = new FormData();
  formData.append("brandName", brandData.brandName);
  const response = await api.put(`/api/brands/update/${brandID}`, formData, {headers:getHeaderAuth()});
  return response;
}
export async function deleteBrand(brandId) {
	try {
		const response = await api.delete(`api/brands/delete/${brandId}`,{headers:getHeaderAuth()});
		return response.data.data;
	} catch (error) {
    console.log(error.message)
		return error.message
	}
}