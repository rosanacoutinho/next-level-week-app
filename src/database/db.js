//importar a dependencia do sqlite3
const sqlite3 = require("sqlite3").verbose()

//criar o objeto que ira fazer operacoes no banco de dados
const db = new sqlite3.Database("./src/database/database.db")

module.exports = db



//utilizar o objeto de banco de dados, para nossas operacoes
// db.serialize(()=>{
//     db.run(`
//             CREATE TABLE IF NOT EXISTS places (
//                 id INTEGER PRIMARY KEY AUTOINCREMENT,
//                 image TEXT,
//                 name TEXT,
//                 address TEXT,
//                 address2 TEXT,
//                 state TEXT,
//                 city TEXT,
//                 items TEXT
//             );
//          `)
// })

// const query = `INSERT INTO places (
//                     image, name, address, address2, state, city, items
//                 ) VALUES (
//                     ?,?,?,?,?,?,?);`

// const values = ["https://images.unsplash.com/photo-1567393528677-d6adae7d4a0a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80", 
// "Papersider", 
// "Guilherme Gemballa, Jardim America",
// "Numero 206", 
// "Santa Catarina", 
// "Rio do Sul", 
// "Papeis e Papelao"]


// function afterInsetData(err){
//     if(err){
//         return console.log(err)
//     }
//     console.log("Cadastrado com sucesso")
//     console.log(this)
// }


// db.run(query,values, afterInsetData)

// db.all(`SELECT name FROM places`, function(err, rows){
//     if(err){
//         return console.log(err)
//     }
//     console.log("Aqui estao seus registros")
//     console.log(rows)
// })


// db.run(`DELETE FROM places where id =?`, [1],function(err, rows){
//     if(err){
//         return console.log(err)
//     }
//     console.log("Registro deletado com sucesso")
// })







