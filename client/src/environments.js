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