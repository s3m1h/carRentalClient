import { api, getHeaderAuth, getHeaders } from "./AxiosServiceBase";

export async function addColor(colorName) {
  const formData = new FormData();
  formData.append("colorName", colorName);

  const response = await api.post("/api/colors/add", formData, {
    headers: getHeaderAuth(),
  });
  if (response.status === 201) {
    return true;
  } else {
    return false;
  }
}
export async function getAllColors() {
  try {
    const response = await api.get("/api/colors", {headers:getHeaderAuth()});
    return response.data.data;
  } catch (error) {
    throw new Error("Renkleri getirme işlemi başarısız...");
  }
}
export async function getColorById(colorID) {
  try {
    const result = await api.get(`api/colors/color/${colorID}`,{headers:getHeaderAuth()});
    return result.data.data;
  } catch (error) {
    throw new Error(`Color getirme işlemi başarısız: ${colorID}`);
  }
}

export async function updateColor(colorID, colorData) {
  const formData = new FormData();
  formData.append("colorName", colorData.colorName);
  const response = await api.put(`/api/colors/update/${colorID}`, formData, {headers:getHeaderAuth()});
  return response;
}
export async function deleteColor(colorID) {
	try {
		const response = await api.delete(`api/colors/delete/${colorID}`,{headers:getHeaderAuth()});
		return response.data.data;
	} catch (error) {
		return error.message
	}
}