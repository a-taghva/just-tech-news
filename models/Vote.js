const { Model, DataTypes } = require('seqeulize');
const sequelize = require('../config/connection');

class Vote extends Model {};

Vote.init(
    {
        id: {
            type: DataType.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        user_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            reference: {
                model: 'user',
                key: 'id'
            }
        },
        post_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            reference: {
                model: 'post',
                key: 'id'
            }
        }
    },
    {
        sequelize,
        timestamps: false,
        freezTableName: true,
        underscored: true,
        modelName: 'vote'
    }
);


 module.exports = Vote;
