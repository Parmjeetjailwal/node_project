const express = require('express')
const fetch = require('node-fetch')
const router = express.Router()

const host= 'http://10.96.10.128:8000'

router.get('/', (req, res)=>{
    res.render('index')
})

router.get('/addData', (req, res)=>{
    res.render('addData')
})

router.post('/addData', async(req, res)=>{
    
    const empData = {
        emp_name : req.body.emp_name,
        emp_contact: req.body.emp_contact,
        emp_add: req.body.emp_add
    }
    console.log(empData);
    const body = JSON.stringify(empData)
    console.log(body);
    const response = await fetch(host, {method: 'POST', body: body,headers: {'Content-Type': 'application/json'} });
    const data = await response.json();
    // console.log(data);
   
    res.render('submitResponse', {data: data})
})

router.get('/list-employees', async(req, res)=>{
    const response = await fetch(host, {headers: {'Content-Type': 'application/json'}});
    const data = await response.json();
    console.log(data);
    res.render('listEmployee', {data: data})
})

router.get('/delete/:emp_id', async(req, res)=>{
    const emp_id = req.params.emp_id
    const params = {
        emp_id: emp_id
    }
    const body = JSON.stringify(params)
    const deleteResponse = await fetch(host, {method: 'DELETE', body: body, headers: {'Content-Type': 'application/json'}});
    const data1 = await deleteResponse.json();
    console.log(data1);
    const response = await fetch(host, {headers: {'Content-Type': 'application/json'}});
    const data = await response.json();
    // console.log(data);
    res.render('listEmployee', {data: data})
})

module.exports= router
