import getWeatherInfo from './weatherService';

export const getWeather = async (city, country = '') => {
    return await getWeatherInfo(city, country);
};