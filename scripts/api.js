// Função GET para realizar uma requisição GET
const get = async (url) => {
    const response = await fetch(url);
    return await response.json();
};

// Função POST para realizar uma requisição POST
const post = async (url, data) => {
    await fetch(url, {
        method: 'POST',
        headers: {"Content-Type" : "application/json"},
        body: JSON.stringify(data)
    });
};

export default {get, post}