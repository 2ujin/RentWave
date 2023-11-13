const { Sequelize } = require('sequelize');

const rentwavedb = new Sequelize('rentwave', 'postgres', "Norbury123", {
    host: 'localhost',
    port:5432,
    dialect: 'postgres',    
    logging: false
});

(async () => {
    try {
      await rentwavedb.authenticate();
      console.log('Connection has been established successfully to database.');
    } catch (error) {
      console.error('Unable to connect to the database:', error);
    }
})();

module.exports = {
    rentwavedb
}