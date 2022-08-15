const key = '26882eff26cf0a40820e34b652aa938d';

const requestCity = async city => {
    const baseURL = 'https://api.openweathermap.org/data/2.5/weather';

    const query = `?q=${city}&appid=${key}`

    const response = await fetch(baseURL + query);
    const data = await response.json();
    return data;
};
