import { getWeather } from '../index';
test('extract simple weather data', async () => {
  const weatherResult = await getWeather('london', 'united kingdom');
  expect(weatherResult?.location).toBe('London');
  expect(weatherResult?.locationDetail).toBe('England, United Kingdom');
});