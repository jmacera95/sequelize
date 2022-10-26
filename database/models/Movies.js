module.exports = (sequelize, DataTypes) => {
    const alias = "Movies";
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
        title: {
            type: DataTypes.STRING(500)
        },
        rating: {
            type: DataTypes.DECIMAL
        },
        awards: {
            type: DataTypes.INTEGER
        },
        release_date: {
            type: DataTypes.DATE
        },
        length: {
            type: DataTypes.INTEGER
        },
        genre_id: {
            type: DataTypes.INTEGER
        }
    }
    const config = {
        tableName: "movies",
        timestamps: false
    }
    
    const Movies = sequelize.define(alias, cols, config);

    Movies.associate = function(models) {
        Movies.belongsTo(models.Genres, {
            as: "genre",
            foreignKey: "genre_id"
        })

        Movies.belongsToMany(models.Actor, {
            as: "actors",
            through: "actor_movie",
            foreignKey: "movie_id",
            otherKey: "actor_id",
            timestamps: false
        })
    }

    return Movies;
}