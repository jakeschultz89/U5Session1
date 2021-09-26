// create a user object/constructor
class User {
    constructor(email,password,first,last,age,address,phone,payment,color){
        this.email=email;
        this.password=password;
        this.firstName=first;
        this.lastName=last;
        this.age=age;
        this.address=address;
        this.phoneNumber=phone;
        this.payment=payment;
        this.color=color;
    }
}

// create the register function
function registerUser(){
    let email=$('#txtEmail').val();
    let password=$('#txtPassword').val();
    let first=$('#txtFirst').val();
    let last=$('#txtLast').val();
    let age=$('#txtAge').val();
    let address=$('#txtAddress').val();
    let phone=$('#txtPhone').val();
    let payment=$('#selPayment').val();
    let color=$('#txtColor').val();
    let user= new User(email,password,first,last,age,address,phone,payment,color);
    console.log(user);
    saveUser(user); //this function is on the storeManager.js
    clearInputs();
}
//console log the user

//function to clear
function clearInputs(){
    $('#txtEmail').val('');
    $('#txtPassword').val('');
    $('#txtFirst').val('');
    $('#txtLast').val('');
    $('#txtAge').val('');
    $('#txtAddress').val('');
    $('#txtPhone').val('');
    $('#txtPayment').val('');
    $('#txtColor').val('rgb(0,0,0)');
}
function setNavInfo(){
    let list=readUsers();
    let count=list.length;
    $(".menu-info label").text(count+" users");
}

function init(){
    console.log("init function");
    $('#btn-save').click(registerUser);
    setNavInfo();
}
window.onload=init;