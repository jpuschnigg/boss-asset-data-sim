var fs = require('fs');
// @ts-ignore
var NodeXls = require('node-xls');

var data = []

var date = new Date()

for (let i = 1; i <=288; i++) {
    data.push({
        id: "sim" + i,
        tenantId: "sim1",
        createdById: "sim1",
        updatedById: "sim1",
        CustID: " ",
        GER_ID: " ",
        measurementDateTime: date,
        Asset_Type: "METER",
        tag: "METER_KW",
        value: "25.00",
        assetId: " ",
        yearVal: "2022",
        monthVal: "6",
        dayVal: "21",
        hourVal: Math.ceil(i / 12),
        minValInterval: i - 12 * Math.floor(i / 12.00001)
    })
}

var tool = new NodeXls();

var xls = tool.json2xls(data);
fs.writeFileSync('report.xlsx', xls, 'binary');