import getWeatherInfo from './weatherService';

export const getWeather: any = async (city: string, country: string = '') => {
    return await getWeatherInfo(city, country);
};