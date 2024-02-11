import Sequelize, { Model } from 'sequelize';

class AirQuality extends Model {
  static init(sequelize) {
    //Fields registered by the user
    super.init({
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true
      },
      airQuality: {
        type: Sequelize.STRING
      },
      created_at: {
        type: Sequelize.DATE,
        defaultValue: Sequelize.NOW,
      },
      updated_at: {
        type: Sequelize.DATE,
        defaultValue: Sequelize.NOW,
      },
    },
      {
        sequelize,
        tableName: 'airQuality'
      });

    return this;
  }
}

export default AirQuality;