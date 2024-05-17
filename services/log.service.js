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

export { printSuccess, printError, printHelp }