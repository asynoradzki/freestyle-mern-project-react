export async function fetchData(url, method, data) {
    const response = await fetch(url, {
        method: method,
        headers: {
            "Content-Type": "application/json",
        },
        body: data ? JSON.stringify(data) : undefined,
    });
    const resData = await response.json();
    return resData;
}


export async function fetchDataWithAuth(url, method, data) {
    const token = localStorage.getItem('token');
    if (!token) {
        return
    }
    const response = await fetch(url, {
        method: method,
        headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${token}`
        },
        body: data ? JSON.stringify(data) : undefined,
    });
    const resData = await response.json();
    return resData;
}

export function getToken() {
    const token = localStorage.getItem('token');
    return token ? token : null
 
}