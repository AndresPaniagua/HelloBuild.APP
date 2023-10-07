import axios from "axios";

const connection = window.API_URL;

export const getToken = async (email, password) => {
    const result = { statusResponse: true, error: null, token: null }
    const data = {
        Email: email,
        Password: password
    }

    await axios.post(`${connection}/Token/Authentication`, data)
        .then((response) => {
            result.token = response.data.token;
        })
        .catch((error) => {
            result.statusResponse = false;
            result.error = error;
        });

    return result;
}

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

export const getRepositories = async (email, password, dataGit) => {
    const result = { statusResponse: true, error: null, data: null }
    const token = await getToken(email, password);

    await axios.post(`${connection}/Github/GetRepositories`, dataGit, {
        headers: { Authorization: `Bearer ${token.token}` },
    })
        .then((response) => {
            result.data = response.data;
        })
        .catch((error) => {
            result.statusResponse = false;
            result.error = error;
        });

    return result;
}

export const getFavRepositories = async (email, password, dataGit) => {
    const result = { statusResponse: true, error: null, data: null }
    const token = await getToken(email, password);

    await axios.post(`${connection}/Github/GetFavRepositories`, dataGit, {
        headers: { Authorization: `Bearer ${token.token}` },
    })
        .then((response) => {
            result.data = response.data;
        })
        .catch((error) => {
            result.statusResponse = false;
            result.error = error;
        });

    return result;
}
