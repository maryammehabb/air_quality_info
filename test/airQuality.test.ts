import { nearestCityServices } from '../src/services/services';

beforeEach(() => {
    jest.clearAllMocks();
});

describe('get air quality', () => {

    test('Return Pollution of nearest city', async () => {
        const lat = 30.8025;
        const lon = 26.8206;
        const data = await nearestCityServices.getNearestCity(lat, lon);
        expect(data.Pollution.aqius).toEqual(32);
    });
});
