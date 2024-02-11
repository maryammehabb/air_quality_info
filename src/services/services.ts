import axios from 'axios';
import { AirQuality } from '../models/airQuality';
const config = require('../config/app.config');
class NearestCityServices {

    private static instance: NearestCityServices;
    constructor() { };

    public async getNearestCity(latitude: number, longitude: number, key?: string) {
        try {
            let headers = {
                "Content-Type": "application/json",
            };
            const basePath = config.BASE_URL;
            const path = `${basePath}/v2/nearest_city`;
            const params = {
                key: key || config.KEY,
                lon: longitude,
                lat: latitude,
            };
            const options = {
                headers,
                method: 'GET',
                params
            };
            const result = await axios(path, options);
            return { 'Pollution': result?.data?.data?.current?.pollution };
        } catch (err) {
            console.log("Err in getNearestCity API:: ", err);
        }
    }
    public async getParisZone() {
        const latitude = 48.856613;
        const longitude = 2.352222;
        const result = await nearestCityServices.getNearestCity(latitude, longitude);
        console.log("hiii ", result.Pollution);
        await nearestCityServices.saveAirQuality(result?.Pollution);
    }
    public async saveAirQuality(airQuality: AirQuality) {
        try {
            await AirQuality.create(airQuality);
        } catch (err) {
            console.log('err in saving :: ', err);
        }
    }

    static getInstance() {
        if (!NearestCityServices.instance) {
            NearestCityServices.instance = new NearestCityServices();
        }
        return NearestCityServices.instance;
    }
}

export const nearestCityServices = NearestCityServices.getInstance();
