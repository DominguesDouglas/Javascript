const express = require('express');
const cors = require('cors');
const routes = require('./routes');

const app = express();

app.use(cors());
app.use(express.json());
app.use(routes);

app.listen(3333);

/**
 *  Route / Resource
 */

 /**
  * HTTP Metods
  * 
  * GET: Busca/listagem informações no back-end
  * POST: Criar informação no back-end
  * PUT: Alterar informação no back-end
  * DELETE: Deletar uma informação no back-end
  */

/**
 * Parameters:
 * 
 * Query: named parameters sent before "?" (filter, paginaiton)
 * Rout Params: Parameters used to identify resources
 * Request Body: Corpo requisição ( criar ou alterar recursos )
 */

 /**
  * SQL
  * NoSQL: MongoDB, CouchDB
  */



 
