
const express = require('express')
const path = require('path')
const PORT = process.env.PORT || 5000
var bodyParser = require('body-parser');




express()
.use(express.static(path.join(__dirname, 'public')))
.set('views', path.join(__dirname, 'views'))
.set('view engine', 'ejs')
.get('/', (req, res) => res.render('pages/index')) 
.get('/static', (req, res) => res.render('pages/static')) //TESTING PURPOSES
.post('/getRate', function(req,res){calculateRate(req,res)})// TESTING 
.use(bodyParser.json()) // for parsing application/json
.use(bodyParser.urlencoded({ extended: true })) // for parsing application
.listen(PORT, () => console.log(`Listening on ${ PORT }`))
  


  
  function calculateRate(req, res) {   
    console.log('at calculateRate function');
    console.log(req.body.mType);
    //const mailType = request.body.mType;
    //const weight = request.body.weightPack;
  
    var result = 5; //testing

    const params = {result: result};
    res.render('pages/getResultRates', params);
                  }