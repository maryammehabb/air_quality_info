import { Request, Response } from 'express';
import { nearestCityServices } from '../services/services';
export class UsersApiController {
    app: any

    constructor(app: any) {
        this.app = app
    }

    setupEndpoints() {
        try {
            this.app.get(
                '/airQuality',
                async (req: Request, res: Response) => {
                    try {
                        const key = req.query?.key as string;
                        const lat = Number(req.query?.lat);
                        const lon = Number(req.query?.lon);
                        const data = await nearestCityServices.getNearestCity(lat, lon, key);
                        res.status(200).send({ Result: data });
                    } catch (err) {
                        res.status(400).send({
                            success: false,
                            msg: err.messages || 'error occured.',
                            error: err,
                        });
                    }
                }
            );
        } catch (err) {
            console.log("err is :: ", err);
        }
    }
}