import chalk from 'chalk';
import dedent from 'dedent-js';

const log = console.log;
const printError = (error) => {
    log(chalk.bgRed(' ERROR ', error));
}

const printSuccess = (message) => {
    log(chalk.bgGrey(' SUCCESS ', message));
}

const printHelp = () => {
    log(dedent(`${chalk.bgCyan(' HELP ')}
    Without options - select city
    -s [CITY] - for select city
    -h [CITY] - for showing help
    -t [API_KEY] - for saving token
    `));
}

const printWeather = (res, icon) => {
    log(dedent(`${chalk.bgYellow(' WEATHER ')} Weather in city ${res.name}
    ${icon}  ${res.weather[0].description}
    Temperature: ${res.main.temp} (feels like ${res.main.feels_like})
    Humidity: ${res.main.humidity}
    Wind speed: ${res.wind.speed}
    `));
}

export { printSuccess, printError, printHelp, printWeather }