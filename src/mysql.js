var createFilter = require('odata-v4-mysql').createFilter;
var createQuery = require('odata-v4-mysql').createQuery;
var cors = require("cors");
var express = require('express'),
    app = express();
var bodyParser = require('body-parser');
var events = require('events');
var eventEmitter = new events.EventEmitter();

//app.use(express.logger());
app.use(bodyParser.json());
var mysql      = require('mysql');
var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : 'resu1@@dba',
  database : 'jefferson',
  port : 3306
});

function lista_tabela(connection,table,req,res){
console.log("conectado tabela",table);
    var rows = 0;
    connection.query("select count(*) as count from "+table, function(err, result){
      console.log("err",err);
      console.log("result",result);
      console.log("req.query",req.query);
       //count = parseInt(result.count);
    });
// try {
  var filter = createFilter(req.query.$filter);
// } catch {
  // console.log("sem filtro");
// }
console.log("1",req.query);
console.log("2",req.query.$filter);
console.log("3",filter);
console.log("4",filter.parameters);
    if (req.query.$top) {filter.limit=parseInt(req.query.$top);}
    if (req.query.$skip && req.query.$skip != '0') {filter.skip=parseInt(req.query.$skip);}
    connection.query(filter.from(table), filter.parameters, function(err, result){
      console.log("err",err);
      console.log("result",result);

console.log(result);
  res.json(result);
    });
}


function edita_tabela(connection,table,cond,req,res){
console.log(":edit",req.body);
  var comando = '';
  var query = [];
  var objs = req.body;
  delete objs['oper'];
  delete objs['id'];
  query.push('UPDATE');
  query.push(table);
  query.push('SET ');
  comando += query.join(' ');
  query = [];
  var set = [];
  Object.keys(objs).forEach(function (key, i) {
    //set.push(key + ' = ($' + (i + 1) + ')'); 
    set.push(key + " = '" + objs[key] + "'"); 
  });
  query.push(set.join(', '));
  query.push(' WHERE ');
  comando += query.join(' ');
  query = [];
  var where = [];
  Object.keys(cond).forEach(function (key, i) {
    where.push(key + " = '" + cond[key] + "'"); 
  });
  query.push(where.join('AND '));

  comando += query.join(' ');
   connection.query(comando , function(err, result){
    console.log(comando);

    if (err) {
        console.log("ERROR");
        console.log(err);
        return;
    }
  res.json(result);
   });
}


function adiciona_tabela(connection,table,req,res){
console.log(table,":add",objs);
console.log(":edit",req.body);
  var objs = req.body;
  delete objs['oper'];
  delete objs['id'];
  var comando = '';
  var query = [];
  query.push('INSERT INTO');
  query.push(table);
  query.push(' (');
  comando += query.join(' ');
  query = [];
  var set = [];
  Object.keys(objs).forEach(function (key, i) {
    //set.push(key + ' = ($' + (i + 1) + ')'); 
    set.push(key); 
  });

  query.push(set.join(', '));
  query.push(') VALUES (');
  comando += query.join(' ');
  query = [];
  var where = [];
  Object.keys(objs).forEach(function (key, i) {
    where.push("'" + objs[key] + "'"); 
  });
  query.push(where.join(','));

  comando += query.join(' ');
  comando += ")";
   connection.query(comando , function(err, result){
  if (err) {
        console.log(comando);
        console.log("ERROR");
        console.log(err);
        return;
    }
  res.json(result);
   });
}


function deleta_tabela(connection,table,cond,req,res){
  console.log(table,":del",cond);
  console.log(":edit",req.body);
  var comando = '';
  var query = [];
  query.push('DELETE FROM ');
  query.push(table);
  comando += query.join(' ');
  query = [];
  query.push(' WHERE ');
  comando += query.join(' ');
  query = [];
  var where = [];
  Object.keys(cond).forEach(function (key, i) {
    where.push(key + " = '" + cond[key] + "'"); 
  });
  query.push(where.join('AND '));

  comando += query.join(' ');
   connection.query(comando , function(err, result){
  if (err) {
        console.log(comando);
        console.log("ERROR");
        console.log(err);
        return;
    }
  res.json(result);
   });
}


connection.connect();
connection.on('error', (err) => {
  console.error('something bad has happened!', err.stack)
})
//console.log(connection);
app.use(cors());
app.get("/api/fila", function(req, res) {
  lista_tabela(connection,"fila",req,res);
})
app.get("/api/atendentes", function(req, res) {
  console.log("lista atendentes",req.params);

  var cond = { "id_dos_atendentes" : req.params.id_dos_atendentes }
  console.log("lista atendentes",cond);
  // console.log("id_das_filas",id_das_filas);
  console.log("req params",req.params);
  console.log("req body",req.body);
  console.log("req.params.lenght",req.params.lenght,Object.keys(req.params).length);

  if (Object.keys(req.params).length > 0) {
    lista_tabela(connection,"atendentes",cond,req,res);
  } else {
    lista_tabela(connection,"atendentes",req,res);
  }
});


app.get("/api/adm", function(req, res) {
  console.log("lista adms",req.params);

  var cond = { "id_adm" : req.params.id_adm }
  console.log("lista atendentes",cond);
  // console.log("id_das_filas",id_das_filas);
  console.log("req params",req.params);
  console.log("req body",req.body);
  console.log("req.params.lenght",req.params.lenght,Object.keys(req.params).length);

  if (Object.keys(req.params).length > 0) {
    lista_tabela(connection,"adm",cond,req,res);
  } else {
    lista_tabela(connection,"adm",req,res);
  }

});


app.get("/api/atendimento", function(req, res) {
  lista_tabela(connection, "atendimento", req,res);
});
app.get("/api/atendentes_fila", function(req, res) {
  lista_tabela(connection, "atendentes_fila", req,res);
});
app.get("/api/atendentes_fila", function(req, res) {
  lista_tabela(connection, "atendentes_fila", req,res);
});
app.get("/api/adm", function(req, res) {
  lista_tabela(connection, "adm", req,res);

  var cond = { "id_adm" : req.params.id_adm }
  console.log("lista atendentes",cond);
  // console.log("id_das_filas",id_das_filas);
  console.log("req params",req.params);
  console.log("req body",req.body);
  console.log("req.params.lenght",req.params.lenght,Object.keys(req.params).length);

  if (Object.keys(req.params).length > 0) {
    lista_tabela(connection,"adm",cond,req,res);
  } else {
    lista_tabela(connection,"adm",req,res);
  }

});
app.post("/api/adm", function(req, res) {
  adiciona_tabela(connection,"adm",req,res);
});
app.post("/api/atendentes_fila", function(req, res) {
  adiciona_tabela(connection,"atendentes_fila",req,res);
});
app.post("/api/atendimento", function(req, res) {
  adiciona_tabela(connection,"atendimento",req,res);
});
app.post("/api/fila", function(req, res) {
  adiciona_tabela(connection,"fila",req,res);
});
app.post("/api/atendentes", function(req, res) {
  adiciona_tabela(connection,"atendentes",req,res);
});
app.post("/api/iniciaratendimento", function(req, res) {
  adiciona_tabela(connection,"iniciaratendimento",req,res);
});
app.delete("/api/fila/:id_das_filas", function(req, res) {
    var cond = { "id_das_filas" : req.params.id_das_filas }
    console.log("delete fila",cond);
    // console.log("id_das_filas",id_das_filas);
  console.log("req params",req.params);
  console.log("req body",req.body);

  deleta_tabela(connection,"fila",cond,req,res);
});
app.put("/api/fila/:id_das_filas", function(req, res) {
    var cond = { "id_das_filas" : req.params.id_das_filas }
    console.log("put fila",cond);
    // console.log("id_das_filas",id_das_filas);
  console.log("req params",req.params);
  console.log("req body",req.body);

  edita_tabela(connection,"fila",cond,req,res);
});
app.put("/api/adm/:id_adm", function(req, res) {
  var cond = { "id_adm" : req.params.id_adm }
  console.log("put fila",cond);
  // console.log("id_das_filas",id_das_filas);
console.log("req params",req.params);
console.log("req body",req.body);

edita_tabela(connection,"adm",cond,req,res);
});
app.put("/api/atendentes/:id_dos_atendentes", function(req, res) {
    var cond = { "id_dos_atendentes" : req.params.id_dos_atendentes }
    console.log("put atendente",cond);
    // console.log("id_dos_atendentes",id_dos_atendentes);
  console.log("req params",req.params);
  console.log("req body",req.body);

  edita_tabela(connection,"atendentes",cond,req,res);
});
app.delete("/api/atendentes/:id_dos_atendentes", function(req, res) {
    var cond = { "id_dos_atendentes" : req.params.id_dos_atendentes }
    console.log("delete atendentes",cond);
    // console.log("id_dos_atendentes",id_dos_atendentes);
  console.log("req params",req.params);
  console.log("req body",req.body);

  deleta_tabela(connection,"atendentes",cond,req,res);
});
app.delete("/api/adm/:id_adm", function(req, res) {
  var cond = { "id_adm" : req.params.id_adm }
  console.log("delete atendentes",cond);
  // console.log("id_adm",id_adm);
console.log("req params",req.params);
console.log("req body",req.body);

deleta_tabela(connection,"adm",cond,req,res);
});
app.delete("/api/atendimento/:id", function(req, res) {
    var cond = { "id" : req.params.id }
    console.log("delete atendimento",cond);
    // console.log("id",id);
  console.log("req params",req.params);
  console.log("req body",req.body);

  deleta_tabela(connection,"atendimento",cond,req,res);
});
app.put("/api/atendimento/:id", function(req, res) {
    var cond = { "id" : req.params.id }
    console.log("put atendimento",cond);
    // console.log("id",id);
  console.log("req params",req.params);
  console.log("req body",req.body);

  edita_tabela(connection,"atendimento",cond,req,res);
});
app.put("/api/atendentes_fila/:id", function(req, res) {
    var cond = { "id" : req.params.id }
    console.log("put atendentes_fila",cond);
    // console.log("atendentes_fila",atendentes_fila);
  console.log("req params",req.params);
  console.log("req body",req.body);

  edita_tabela(connection,"atendentes_fila",cond,req,res);
});
app.post("/api/treino", function(req, res) {
  adiciona_tabela(connection,"treino",req,res);
});
app.delete("/api/atendentes_fila/:id", function(req, res) {
    var cond = { "id" : req.params.id }
    console.log("delete atendentes_fila",cond);
    // console.log("id",id);
  console.log("req params",req.params);
  console.log("req body",req.body);

  deleta_tabela(connection,"atendentes_fila",cond,req,res);
});

var events = require('events');
var eventEmitter = new events.EventEmitter();

app.get('/countdown', function(req, res) {
  res.writeHead(200, {
    'Content-Type': 'text/event-stream',
    'Cache-Control': 'no-cache',
    'Connection': 'keep-alive'
  })
  countdown(res);
})
app.post('/avisa', function(req, res) {
  // console.log(res.body);
  console.log(req.body);
  res.send(eventEmitter.emit('proximo',req.body));
})


function countdown(res) {
  console.log(res);
  var dados;
  eventEmitter.on('proximo', function(dados){
    console.log("dados",dados);
    res.write("data: "  + JSON.stringify(dados) + "\n\n");
  });

}

var server = app.listen(4001);
//console.log('Servidor Express iniciado na porta %s', server.address().port());
console.log('Servidor Express iniciado na porta %s', server.address());
