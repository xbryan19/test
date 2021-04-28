const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const router = express.Router();
const axios = require('axios')

var knex = require('knex')({
  client: 'mssql',
  connection: {
    host: 'mis_sql',
    user: 'rhrdap',
    password: 'h56r13d',
    database: 'SMDInformations',
    options: {
      "enableArithAbort": true
    }
  },
});

router.use(cors()) //Cross-Origin Resource Sharing (CORS)
router.use(bodyParser.urlencoded({
  extended: false
}))
router.use(bodyParser.json())

//use router instead of app

router.get('/', (req, res) => {
  res.send('Hello world!')
})

// ========================== your routes here ==============================//

router.post('/account', (req, res) => {
  // console.log(req.body)
})

router.post('/getInfo/:id', (req, res) => {
  const sql = `SELECT * FROM MBWAEmployeeList('${req.params.id}')`
  // console.log(sql)
  knex.raw(sql)
    .then((data) => {
      res.send(data)
    })
    .catch((e) => {
      res.send(e)
    })
  // // $idNum = $req->input('idNum');
  // knex.raw(('{user}')")
  // return DB::connection("MIS_SQL")->select("SELECT * FROM MBWAEmployeeList('{$idNum}')");
})

router.post('/getTeams/:company/:department/:section', (req, res) => {
  
})


router.get('/qa', (req, res) => {
  
})


// ========================== your routes here ==============================//

module.exports = router;