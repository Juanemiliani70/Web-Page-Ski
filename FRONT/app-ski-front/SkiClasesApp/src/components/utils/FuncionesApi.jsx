import axios from "axios";


export const api = axios.create({
  baseURL: "http://localhost:9192"
});

/* --- Funciones para Clases de Ski --- */

/* Obtener todas las clases de ski */
export async function getAllClases() {
  try {
    const response = await api.get("/clases");
    return response.data;
  } catch (error) {
    throw new Error("Error al obtener las clases de ski: " + error.message);
  }
}

/* Obtener clase de ski por ID */
export async function getClaseById(claseId) {
  try {
    const response = await api.get(`/clases/${claseId}`);
    return response.data;
  } catch (error) {
    throw new Error("Error al obtener la clase de ski: " + error.message);
  }
}

/* Reservar una clase de ski */
export async function reservarClase(claseId, reserva) {
  try {
    const response = await api.post(`/reservas/clases/${claseId}/reserva`, reserva);
    return response.data;
  } catch (error) {
    if (error.response && error.response.data) {
      throw new Error(error.response.data);
    } else {
      throw new Error(`Error al reservar la clase de ski: ${error.message}`);
    }
  }
}

/* Obtener todas las reservas de clases de ski */
export async function getAllReservasClases() {
  try {
    const response = await api.get("/reservas/all-reservas");  // CORREGIDO
    return response.data;
  } catch (error) {
    throw new Error("Error al obtener las reservas de clases de ski: " + error.message);
  }
}

/* Cancelar reserva de clase de ski */
export async function cancelarReservaClase(reservaId) {
  try {
    const response = await api.delete(`/reservas/${reservaId}`);  // CORREGIDO
    return response.data;
  } catch (error) {
    throw new Error("Error al cancelar la reserva de clase de ski: " + error.message);
  }

 
  
}

export async function agregarClase(imagen, nivelClase, tipoClase, rangoDias, lugar, precioClase) {
  try {
    const formData = new FormData();
    formData.append("imagen", imagen);
    formData.append("nivelClase", nivelClase);
    formData.append("tipoClase", tipoClase);
    formData.append("rangoDias", rangoDias);
    formData.append("lugar", lugar);
    formData.append("precioClase", precioClase);

    const response = await api.post("/clases", formData, {
      headers: {
        "Content-Type": "multipart/form-data"
      }
    });

    return response.status === 201 || response.status === 200;
  } catch (error) {
    if (error.response && error.response.data) {
      throw new Error(error.response.data);
    } else {
      throw new Error("Error al agregar la clase de ski: " + error.message);
    }
  }
}





