const request = require("request");

const forecast = (lon, lat, callback) => {
  const url =
    "https://api.darksky.net/forecast/4bd6f6f76cd13d53c85e0d7a84af8f3d/" +
    encodeURIComponent(lat) +
    "," +
    encodeURIComponent(lon) +
    "?units=si";
  request({ url: url, json: true }, (error, { body }) => {
    if (error) {
      callback(" Weather service unavailable!! ", undefined);
    } else if (body.error) {
      callback(" Unable to find location!! ", undefined);
    } else {
      callback(undefined, {
        temperature: body.currently.temperature,
        precipProb: body.currently.precipProbability,
        summary: body.currently.summary,
      });
    }
  });
};

module.exports = forecast;
