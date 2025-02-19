const {Sequeelize} = require('sequelize')

const sequelize =new Sequelize ({
    dialect:'sqlite', 
    storange:'database.sqlite'
})

sequelize.authenticate()
            .then(()=>{
                console.log('conexão feita com sucesso!')
                return sequelize.sync()
            })
            .catch(err =>) {
                console.error('não foi possivel se conectar', err)
            }

            module.exports = sequelize; 