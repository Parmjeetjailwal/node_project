const sql = require("../db/conn")

module.exports = class Empolyee {
    constructor({emp_name, emp_contact, emp_add}){
    
        this.emp_name = emp_name
        this.emp_contact = emp_contact
        this.emp_add = emp_add       
    }

    create(result){
        
        sql.query("INSERT INTO EMPLOYEES SET ?", this, (err, res) => {
            if (err) {
              console.log("error: ", err);
              result(err, null);
              return;
            }
        console.log("created Employee: ", { id: res.insertId, ...this });
        result(null, { id: res.insertId, ...this });
        });
    };
    static findAll(result){
        let query = "SELECT * FROM EMPLOYEES";
        sql.query(query, (err, res) => {
            if (err) {
              console.log("error: ", err);
              result(null, err);
              return;
            }
        
            console.log("Employees: ", res);
            result(null, res);
          });
    }

    static deleteOne(empId, result){
      sql.query("DELETE FROM EMPLOYEES WHERE emp_id = ?", empId, (err, res) => {
        if (err) {
          console.log("error: ", err);
          result(err, null);
          return;
        }
    console.log("employee deleted ");
    result(null, { data: res});
    });
    }
}