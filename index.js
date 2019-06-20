
var express = require('express');
const path = require('path')
var bodyParser = require('body-parser');
var app = express();
var port = 5000;


app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({extended: true}));
app.set('views', path.join(__dirname, 'views'))
//https://www.tutorialspoint.com/nodejs/nodejs_express_framework.htm
app.get('/', (req, res) => res.render('pages/static'));
app.post('/getRate',  calculateRate);


  app.listen(port, function () {
    console.log("Example app listening at Port:", port);
});


  
  function calculateRate(req, res) {  
    console.log('at calculateRate function');
    const mailType = req.body.mType;
    const weight = req.body.weightPack;
    var result = 0; 
    ///////////////////////////
    if (mailType == "Stamped")
    {
      console.log("stamped else");
      if(weight <= 0 || weight == 1)
      {
        result = 0.55;           
      }
      else if(weight == 2 )
      {
        result = 0.70;
      }
      else if(weight == 3)
      {
        result = 0.85;
      }
      else
      {
        result = 1.00;
      }
    }
    ///////////////////////////
    else if (mailType == "Metered")
    {
      console.log("Metered else");
      if(weight <= 0 || weight == 1)
      {
        result = 0.50;           
      }
      else if(weight == 2 )
      {
        result = 0.65;
      }
      else if(weight == 3)
      {
        result = 0.80;
      }
      else
      {
        result = 0.95;
      }
    }
    ///////////////////////////
    else if (mailType == "Flats")
    {
      console.log("Flats else");
      if(weight <= 0 || weight == 1)
      {
        result = 2.29;           
      }
      else if(weight == 2 )
      {
        result = 2.50;
      }
      else if(weight == 3)
      {
        result = 2.71;
      }
      else if(weight == 4)
      {
        result = 2.91;
      }
      else if(weight == 5)
      {
        result = 3.12;
      }
      else if(weight == 6)
      {
        result = 3.33;
      }
      else if(weight == 7)
      {
        result = 3.54;
      }
      else if(weight == 8)
      {
        result = 3.75;
      }
      else if(weight == 9 || weight == 10 || weight == 11 || weight == 12)
      {
        result = 4.79;
      }
      else
      {
        result = 5.83;
      }
    }
    ///////////////////////////
    else if (mailType == "Service—Retail")
    {
      console.log("Service—Retail else");
      if(weight <= 0 || weight == 1 || weight == 2 || weight == 3 || weight == 4)
      {
        result = 3.66;           
      }
      else if(weight == 5 || weight == 6 || weight == 7 || weight == 8)
      {
        result = 4.39;
      }
      else if(weight == 9 || weight == 10 || weight == 11 || weight == 12)
      {
        result = 5.19;
      }      
      else if(weight == 13)
      {
        result = 5.71;
      }
      else
      {
        result = 5.71;
      }
    }

console.log(result);
    const params = {result: result, weight: weight, mail_Type: mailType };
    console.log(params);


    res.render('pages/getResultRates', params);
                  }