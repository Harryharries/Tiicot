const express = require('express');
const app = express();
const bodyParser = require('body-parser')
app.use(bodyParser.json());

app.use(bodyParser.urlencoded({ extended: false }));

app.use(require('cors')())
app.use(express.json())

let studentList = [
{
    firstname: 'harry',
    lastname: 'wang'
  },{
    firstname: 'harry',
    lastname: 'gu'
  }, {
    firstname: 'willson',
    lastname: 'yu'
  }, {
    firstname: 'jack',
    lastname: 'david'
  },{
    firstname: 'hid',
    lastname: 'david'
  }, {
    firstname: 'tife',
    lastname: 'amber'
  },     {
    firstname: 'harry',
    lastname: 'guw'
    },]

app.get('/student', async(req, res) => {
    res.send(JSON.stringify(studentList));
  })

app.get('/student/:name', async(req, res) => {
    let resultList = [];
    var thename = req.params.name;
    
    for(var i = 0; i<studentList.length; i++){
        if(studentList[i].firstname == thename || studentList[i].lastname == thename || studentList[i].firstname+studentList[i].lastname==thename){
            resultList.push(studentList[i])
        }
    }

    res.send(JSON.stringify(resultList));
})

app.listen(3001,()=>{
    console.log('success')
})