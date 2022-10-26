module.exports = (sequelize, DataTypes) => {
    const alias = "Genres";
    const cols = {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        created_at: {
            type: DataTypes.DATE
        },
        updated_at: {
            type: DataTypes.DATE
        },
        name: {
            type: DataTypes.STRING(100)
        },
        ranking: {
            type: DataTypes.INTEGER
        },
        active: {
            type: DataTypes.INTEGER
        }
    }
    const config = {
        tableName: "genres",
        timestamps: false
    }
    
    const Genres = sequelize.define(alias, cols, config);

    Genres.associate = function(models) {
        Genres.hasMany(models.Movies, {
            as: "movies",
            foreignKey: "genre_id"
        })
    }

    return Genres;
}