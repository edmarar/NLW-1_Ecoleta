
// comentar varias linhas de uma vez: ctrl+;

// importar a dependência do sqlite3
const sqlite3 = require("sqlite3").verbose()
// verbose() -> mensagens no terminal

// criar o objeto que irá fazer operações no banco de dados

const db = new sqlite3.Database("./src/database/database.db") // arg -> onde será criado o banco de dados

module.exports = db // para exportar db

// utilizar o objeto de banco de dados para as operações
// db.serialize(()=>{ // vai rodar uma sequência de códigos

    // com comandos SQL eu vou:

    // 1 Criar uma tabela 
    // db.run(` 
     //    CREATE TABLE IF NOT EXISTS places (
        //    id INTEGER PRIMARY KEY AUTOINCREMENT,
          //  image TEXT,
          //  name TEXT,
         //   address TEXT,
          //  address2 TEXT,
          //  state TEXT,
          //  city TEXT,
          //  items TEXT 
       // );
   // `)
    // ´´ -> tamplate string

    // 2 Inserir dados na tabela

   // const query = `
  //      INSERT INTO places (
  //          image,
  //          name,
  //          address,
  //          address2,
  //          state,
  //          city,
  //          items
  //      ) VALUES (?,?,?,?,?,?,?);
  //   `

  //  const values =  [
  //      "https://images.unsplash.com/photo-1516992654410-9309d4587e94?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80",
  //      "Papersider",
  //      "Guilherme Gemballa, Jardmin América",
  //      "N° 260",
  //      "Santa Catarina",
  //      "Rio do Sul",
  //      "Resíduos Eletrônicos, Lâmpadas"
  //  ] 

  //   function afterInsertData(err) {
  //      if (err) {
  //          return console.log(err)
  //      }
  //      console.log("Cadastrado com sucesso")
  //      console.log(this) // quando necessário o -this- não pode arrow function
  //  }    

  //  db.run(query, values, afterInsertData) // afterInsertData() -> a função executaria na mesma hora


    // 3 Consultar os dados da tabela

        // db.all(`SELECT *  FROM places`, function(err, rows){
            // SELECT -o que você quer ver- FROM places...
            //   if (err) {
                //     return console.log(err)
            //  }
            // console.log("Aqui estão seus registros: ")
            // console.log(rows)        
        // })    

    // 4 Deletar um dado da tabela

      //  db.run(`DELETE FROM places WHERE id = ?`, [3], function(err){
      //       if (err) {
      //             return console.log(err)
      //       }
      //       console.log("Registro deletado com sucesso")        
      //  })
  // }) 

