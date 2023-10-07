import axios from "axios";

const connection = window.API_URL;

export const registerUser = async (userData) => {
    const result = { statusResponse: true, error: null, data: null }

    await axios.post(`${connection}/User/SaveUser`, userData)
        .then((response) => {
            result.data = response.data.IsSave;
        })
        .catch((error) => {
            result.statusResponse = false;
            result.error = error;
        });

    return result;
}

export const findUser = async (userData) => {
    const result = { statusResponse: true, error: null, data: null }

    await axios.post(`${connection}/User/UserRegistered`, userData)
        .then((response) => {
            result.data = response.data.Exists;
        })
        .catch((error) => {
            result.statusResponse = false;
            result.error = error;
        });

    return result;
}