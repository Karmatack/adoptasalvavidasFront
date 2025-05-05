"use server";

import axios from "axios";
import environment from "../../config/enviroment";

const BASE_URL = environment.url_backend;

const api = axios.create({
  baseURL: BASE_URL,
  maxContentLength: 50 * 1024 * 1024, // 10MB
  maxBodyLength: 50 * 1024 * 1024, // 10MB
});

export const makeGetRequest = async (url, params = {}) => {
  try {
    const response = await api.get(url, {
      params,
      headers: {
        Authorization: `Bearer ${environment.accessToken}`,
      },
    });
    return response.data;
  } catch (error) {
    console.error("Error making GET request:", error);
    throw error;
  }
};

export const makePostRequestFormData = async (url, formData) => {
  try {
    const response = await api.post(url, formData, {
      headers: {
        "Content-Type": "multipart/form-data",
        Authorization: `Bearer ${environment.accessToken}`,
      },
    });
    return response.data;
  } catch (error) {
    console.error("Error haciendo la solicitud POST:", error);
    throw error;
  }
};
export const makePutRequestFormData = async (url, formData) => {
  try {
    const response = await api.put(url, formData, {
      headers: {
        "Content-Type": "multipart/form-data",
        Authorization: `Bearer ${environment.accessToken}`,
      },
    });
    return response.data;
  } catch (error) {
    console.error("Error haciendo la solicitud PUT:", error);
    throw error;
  }
};

export const makePostRequest = async (url, data = {}) => {
  try {
    const response = await api.post(url, data, {
      headers: {
        Authorization: `Bearer ${environment.accessToken}`,
      },
    });
    return response.data;
  } catch (error) {
    console.error("Error making POST request:", error);
    throw error;
  }
};

export const makePutRequest = async (url, data = {}) => {
  try {
    const response = await api.put(url, data, {
      headers: {
        Authorization: `Bearer ${environment.accessToken}`,
      },
    });
    return response.data;
  } catch (error) {
    console.error("Error making PUT request:", error);
    throw error;
  }
};

export const makePatchRequest = async (url, data = {}) => {
  try {
    const response = await api.patch(url, data, {
      headers: {
        Authorization: `Bearer ${environment.accessToken}`,
      },
    });
    return response.data;
  } catch (error) {
    console.error("Error making PATCH request:", error);
    throw error;
  }
};

export const makeDeleteRequest = async (url) => {
  try {
    const response = await api.delete(url, {
      headers: {
        Authorization: `Bearer ${environment.accessToken}`,
      },
    });
    return response.data;
  } catch (error) {
    console.error("Error making DELETE request:", error);
    throw error;
  }
};
