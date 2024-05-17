#!/usr/bit/env node
import { getArgs } from './helpers/args.js'
import { printHelp, printSuccess, printError } from './services/log.service.js';
import { saveKeyValue, TOKEN_DICTIONARY } from './services/storage.service.js';
import { getWeather } from './services/api.service.js';

const saveToken = async (token) => {
    if (!token.length) {
        printError('No token value')
        return
    }
    try {
        await saveKeyValue(TOKEN_DICTIONARY.token, token)
        printSuccess('Token saved')
    } catch (e) {
        printError(e.message)
    }

}
// 8c9b91e50316cc2e96972fae35667d9e
// https://api.openweathermap.org/data/2.5/weather?q={city name},{state code},{country code}&appid={API key}

const initCLI = () => {
    const args = getArgs(process.argv)
    if (args.h) {
        printHelp()
    }
    if (args.s) {
        // save city
    }
    if (args.t) {
        return saveToken(args.t)
    }
    getWeather('moscow')
}

initCLI();