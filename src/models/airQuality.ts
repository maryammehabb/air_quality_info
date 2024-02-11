import { Model, Optional } from 'sequelize';

type AirQualityAttributes = {
  id: number,
  airQuality: string,
};

type AirQualityCreationAttributes = Optional<AirQualityAttributes, 'id'>;

export class AirQuality extends Model<AirQualityAttributes, AirQualityCreationAttributes> {
  declare id: number;
  declare airQuality: string;
}