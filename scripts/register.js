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
    let payment=$('#txtPayment').val();
    let color=$('#txtColor').val();
    let user= new User(email,password,first,last,age,address,phone,payment,color);
    console.log(user);
}
//console log the user

function init(){
    console.log("init function");
    $('#btn-save').click(registerUser);
}
window.onload=init;