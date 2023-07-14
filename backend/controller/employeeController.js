const Empoloyee = require('../models/Employee')
const validator = require('validator')

exports.create = (req, res)=>{
    if (!req.body) {
        res.status(400).send({
          message: "Content can not be empty!"
        });
    }
    // console.log(req.body);
    const empData = {
        emp_name : req.body.emp_name,
        emp_contact: req.body.emp_contact,
        emp_add: req.body.emp_add
    }

    // const validateData = (empData)=>{
    //   if(validator.default.isLength(empData.emp_name, {min: 3, max:255})){
    //     return false
    //   }
    //   else if(validator.default.isMobilePhone(empData.emp_contact)){
    //     return false
    //   }
    //   else return true
    // }

    // const checkValidation = validateData(empData)
    // if(!checkValidation) res.status(500).json({Message: "Input Data doesn't follow the standards"})
    
    const employee = new Empoloyee(empData)
    employee.create((err, data) => {
        if (err)
          res.status(500).send({
            message:
              err.message || "Some error occurred while creating the Employees."
          });
        else res.status(201).send(data);
      })
}

exports.findAll = (req, res) => {
   Empoloyee.findAll((err, data)=>{
    if (err)
    res.status(500).send({
      message:
        err.message || "Some error occurred while retrieving Employees."
    });
  else res.send(data);
   })
};

exports.addData = (req, res)=>{
  res.render('index')
}

exports.deleteOne = (req, res)=>{
  const empId = req.body.emp_id
  Empoloyee.deleteOne(empId, (err, data)=>{
    if (err)
          res.status(500).send({
            message:
              err.message || "Some error occurred while creating the Employees."
          });
    else res.status(202).send(data);
  })
}