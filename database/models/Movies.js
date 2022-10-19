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

    return Movies;
}