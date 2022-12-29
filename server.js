const express = require('express')
const app = express()
app.use(express.json())

app.listen(8000, () => {
    console.log('server is up')
})

app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

var contacts = [
    {
         empId: '1',
        createdBy: 'Yashu',
        updatedBy: 'Teju',
        firstName: 'Teju',
        lastName: 'H',
        employeeId: '10',
        mobileNo: '9663340387',
        jobTitle: 'Web Developer',
        deptName: ' ',
        datePick:' ',
        companyId: ' ',
        adress: 'Bangalore'
      }
]
app.get('/contacts', (req, res) => {
    res.send({
        data: contacts
    })
})

app.get('/contact/:id', (req, res) => {
    var id = req.params.id
    var newContact = contacts.filter(el => el.empId == id)
    res.send({
        data: newContact
    })
})

app.post('/contact', (req, res) => {
    console.log( req.body)
    var createdBy = req.body.createdBy
    var updatedBy = req.body.updatedBy
    var firstName = req.body.firstName
    var lastName = req.body.lastName
    var employeeId = req.body.employeeId
    var mobileNo = req.body.mobileNo
    var jobTitle = req.body.jobTitle
    var deptName = req.body.deptName
    var datePick = req.body.datepick
    var companyId = req.body.companyId
    var adress = req.body.adress

    contacts.push(
        {
       empId: (contacts.length + 1).toString(),
        createdBy :createdBy,
        updatedBy : updatedBy,
        firstName :firstName,
        lastName :lastName,
        employeeId : employeeId,
        mobileNo : mobileNo,
        jobTitle : jobTitle,
        deptName :deptName,
        datePick : datePick,
        companyId : companyId,
        adress : adress
        }
    )
    console.log(contacts)
    res.send({
        success: true,
        message: 'data added succesfully'
    })
})

app.delete('/contact/:id', (req, res) => {
    console.log(id);
    var id = req.params.id
    var newContact = contacts.filter(el => el.empId != id)
    contacts = newContact
    res.send({
        success: true,
        message: "deleted successfully"
    })
})

app.put('/contact/:id', (req, res) => {
    var id = req.params.id
    console.log("id "+id);
    console.log(req.body);
    var createdBy = req.body.createdBy
    var updatedBy = req.body.updatedBy
    var firstName = req.body.firstName
    var lastName = req.body.lastName
    var employeeId = req.body.employeeId
    var mobileNo = req.body.mobileNo
    var jobTitle = req.body.jobTitle
    var deptName = req.body.deptName
     var datePick = req.body.datePick
    var companyId = req.body.companyId
    var adress = req.body.adress

    var index = contacts.findIndex(el => el.empId == id)
    console.log('index '+index);
    contacts[index] = {
        empId:id,
        createdBy :createdBy,
        updatedBy : updatedBy,
        firstName :firstName,
        lastName :lastName,
        employeeId : employeeId,
        mobileNo : mobileNo,
        jobTitle : jobTitle,
        deptName :deptName,
        date : datePick,
        companyId : companyId,
        adress : adress
    }
    console.log("after update");
    console.log(contacts);
    res.send({
        success: true,
        message: "data updated successfully"
    })
})