const { getWeather } = require('./src/index.js');
(async () => {
    var weatherResult = await getWeather('london', 'united kingdom');
    console.log(weatherResult);
})()