/*
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */

// Wait for the deviceready event before using any of Cordova's device APIs.
// See https://cordova.apache.org/docs/en/latest/cordova/events/events.html#deviceready
document.addEventListener('deviceready', onDeviceReady, false);

function onDeviceReady() {
    // Cordova is now initialized. Have fun!

    console.log('Running cordova-' + cordova.platformId + '@' + cordova.version);
    document.getElementById('deviceready').classList.add('ready');
}

/*let trip_name = document.querySelector('#tName');
let trip_destination = document.querySelector('#tDestination');
let trip_date = document.querySelector('#tDate');
let trip_risk = document.querySelector('#tRisk');
let trip_description = document.querySelector('#tDescription');*/


let btnSubmit = document.querySelector('#submit');

btnSubmit.addEventListener('click',() =>{
 var db = openDatabase('myDatabase','1.0','First Web DB' 2*1024*1024);
 var msg;

 db.transaction(function (tx){
 tx.executeSql('CREATE TABLE IF NOT EXISTS LOGS (id unique AUTOINCREMENT, name STRING, destination STRING ,date STRING ,risk STRING ,description STRING)');
 tx.executeSql('INSERT INTO LOGS (name, destination, date, risk, description) VALUES (?, ?,?,?,?'), [tName.innerText, tDestination.innerText, tDate.innerText, tRisk.innerText, tDescription.innerText];

 msg = '<p>Log message created and row inserted.</p>';
 document.querySelector('#status').innerHTML =  msg;
 })

  db.transaction(function (tx) {
             tx.executeSql('SELECT * FROM LOGS', [], function (tx, results) {
                var len = results.rows.length, i;
                msg = "<p>Found rows: " + len + "</p>";
                document.querySelector('#status').innerHTML +=  msg;

                for (i = 0; i < len; i++) {
                   msg = "<p><b>" + results.rows.item(i).log + "</b></p>";
                   document.querySelector('#status').innerHTML +=  msg;
                }
             }, null);
          });
});





