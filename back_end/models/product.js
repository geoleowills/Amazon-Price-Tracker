"use strict";

const Sequelize = require("sequelize");

module.exports = (sequelize) => {
    class Product extends Sequelize.Model {}
    Product.init(
        {
            id: {
                type: Sequelize.INTEGER,
                primaryKey: true,
                autoIncrement: true,
            },
            title: {
                type: Sequelize.STRING,
                allowNull: false,
                validate: {
                    notNull: {
                        msg: "Please provide a title.",
                    },
                    notEmpty: {
                        msg: "Please provide a title.",
                    },
                },
            },
            url: {
                type: Sequelize.STRING,
                allowNull: false,
                validate: {
                    notNull: {
                        msg: "Please provide a url.",
                    },
                    notEmpty: {
                        msg: "Please provide a url.",
                    },
                },
            },
            currentPrice: {
                type: Sequelize.INTEGER,
                allowNull: true,
            },
            targetPrice: {
                type: Sequelize.INTEGER,
                allowNull: false,
                validate: {
                    notNull: {
                        msg: "Target price missing.",
                    },
                    notEmpty: {
                        msg: "Target price missing.",
                    },
                },
            },
        },
        { sequelize }
    );

    Product.associate = (models) => {
        Product.belongsTo(models.User, {
            foreignKey: {
                fieldName: "userId",
                allowNull: false,
                validate: {
                    notNull: {
                        msg: "Please provide a User ID.",
                    },
                    notEmpty: {
                        msg: "Please provide a User ID.",
                    },
                },
            },
        });
    };

    return Product;
};
