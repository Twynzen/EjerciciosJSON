document.addEventListener("DOMContentLoaded", ()=>{
  let jsonstr=`[
    {"id":"2", "first_name":"Sam","last_name":"Smith",
    "phone":"111-222-3333","email":"ssmith@yahoo.com",
    "address":"33 Birch Rd","city":"Miami","state":"FL"},
    {"id":"3", "first_name":"Brad","last_name":"Traversy",
     "phone":"211-322-4333","email":"brad@test.com",
     "address":"222 South St","city":"Portland","state":"FL"}
  ]`
  let jsonobj=JSON.parse(jsonstr)
  let form=document.querySelector("form")
