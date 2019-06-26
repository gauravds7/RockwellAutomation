var express=require('express')
var app=express();

var customerInfo=function(req,resp)
{
	var dataOfEmployeeAccounts=
	[
	{
		Eid:'1', acctNo:101, Employeename:'abc', BranchLocation:'pune', BusinessShare:'33%', employeeType:"Jr"
	},
	{
		Eid:'2', acctNo:102, Employeename:'pqr', BranchLocation:'france', BusinessShare:'67%', employeeType:"Sr"
	},
	{
		Eid:'3', acctNo:103, Employeename:'xyz', BranchLocation:'london', BusinessShare:'13%'	, employeeType:"Sr"																																 
	},
	{
		Eid:'4', acctNo:104, Employeename:'gaurav', BranchLocation:'usa', BusinessShare:'13%'	, employeeType:"Sr"																																 
	}
	];
	resp.send(dataOfEmployeeAccounts)
};

app.get('/accountsInfo',customerInfo );

var server = app.listen(5000, function () {
var host = server.address().address
var port = server.address().port
console.log("WebApp app listening at http://localhost:5000", host, port)
})