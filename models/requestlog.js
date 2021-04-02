'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class RequestLog extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  RequestLog.init({
    dtmRequestDate: DataTypes.DATE,
    szEndpoint: DataTypes.STRING,
    szParameter: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'RequestLog',
  });
  return RequestLog;
};