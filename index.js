// variable declaration
var addUserVal = {};
var userVal = [];
var tablehtml = "";

//This fn is onload function
function onloadFn() {
    defaultVal();
}

//This fn is used to set default html table values
function defaultVal() {
    document.getElementById("addEdit").setAttribute("onclick", "addUser();");
    document.getElementById("addEdit").innerHTML = "Add";
    if(userVal.length == 0) {
        document.getElementById("tblBody").innerHTML = "<tr><td colspan='7'>No record found</td></td>";
    }
}

//This fn is used to reset values
function reset() {
    addUserVal = {};
    tablehtml = "";
    document.getElementById("username").value = "";
    document.getElementById("email").value = "";
    document.getElementById("mobile").value = "";
    defaultVal();
}

//This function is used to add user values to object variable
function addUser() {
    if(validation()){
        return false;
    }
    addUserVal = {
        id:(userVal.length*1+1*1),
        username:document.getElementById("username").value,
        email:document.getElementById("email").value,
        mobile:document.getElementById("mobile").value
    }
    userVal.push(addUserVal);
    addToTable();
}

//this function is used to add table values
function addToTable() {
    for(let i=0;i<userVal.length;i++) {
        tablehtml += "<tr>";
        tablehtml += "<td>"+(i+1)+"</td>";
        tablehtml += "<td>"+userVal[i].id+"</td>";
        tablehtml += "<td>"+userVal[i].username+"</td>";
        tablehtml += "<td>"+userVal[i].email+"</td>";
        tablehtml += "<td>"+userVal[i].mobile+"</td>";
        tablehtml += "<td colspan='2'>";
        tablehtml += "<div style='padding: 5px;' class='button_cont' align='center'>";
        tablehtml += "<a class='edit' target='_blank' rel='nofollow noopener' onclick='editTableVal("+userVal[i].id+");'>Edit</a>";
        tablehtml += "<a class='edit' target='_blank' rel='nofollow noopener' onclick='deleteUser("+userVal[i].id+");'>Remove</a>";
        tablehtml += "</div>";
        tablehtml += "</td>";
        tablehtml += "</tr>";
    }
    document.getElementById("tblBody").innerHTML = tablehtml;
    reset();
}

//This fn is used to edit the table values
function editTableVal(id) {
    var found = userVal.filter(function(item) { return item.id === id; });
    document.getElementById("username").value = found[0].username;
    document.getElementById("email").value = found[0].email;
    document.getElementById("mobile").value = found[0].mobile;
    document.getElementById("addEdit").setAttribute("onclick", "updateUser("+id+");");
    document.getElementById("addEdit").innerHTML = "Update";
}

//This fn is used to update the table values
function updateUser(id) {
    var objIndex = userVal.findIndex((obj => obj.id == id));
    userVal[objIndex].username = document.getElementById("username").value;
    userVal[objIndex].email = document.getElementById("email").value;
    userVal[objIndex].mobile = document.getElementById("mobile").value;
    addToTable();
    reset();
}

//This fn is used to delete the table values
function deleteUser(id) {
    var objIndex = userVal.findIndex((obj => obj.id == id));
    userVal.splice(objIndex,1);
    addToTable();
}

//This fn is used to validate input fields
function validation() {
    var a = {};
    a.username = document.getElementById("username").value;
    a.email = document.getElementById("email").value;
    a.mobile = document.getElementById("mobile").value;
    if(checkEmptyVal(a.username) || checkEmptyVal(a.email) || checkEmptyVal(a.mobile)){
        return true;
    }
    return false;
}

function checkEmptyVal(val) {
    if(val=="" || val==null || val==undefined){
        return true;
    }else{
        return false;
    }
}