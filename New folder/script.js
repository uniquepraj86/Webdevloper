let tableData = document.getElementById("tableData");

let userList = [];
let size=[1];

displayTable = () => {
  
  var userId = document.getElementById("userId");
  var userClass = document.getElementById("userClass");
  var userName = document.getElementById("userName");
  var userlName = document.getElementById("userlName");
  var userMail = document.getElementById("userMail");
  var userPassword = document.getElementById("userPassword");
  var userbDate = document.getElementById("userbDate");
  var userAddress = document.getElementById("userAddress");
  

 
  var obj = {
      Id: userId.value,
      Class: userClass.value,
      Name: userName.value,
      lName: userlName.value,
      Email: userMail.value,
      Password: userPassword.value,
      Bdate: userbDate.value,
      Address: userAddress.value,
   
    };
    userList.push(obj);
    console.log(userList);
    for (var i = 0; i <=size-1; i++) {
        let saved = tableData.innerHTML;
        saved =
        saved +
        `<tr>
        
        <td>${obj.Id}</td>
        <td>${obj.Class}</td>
        <td>${obj.Name}</td>
        <td>${obj.lName}</td>
        <td>${obj.Email}</td>
        <td>${obj.Password}</td>
        <td>${obj.Bdate}</td>
        <td>${obj.Address}</td>
     
        </tr>`;
        tableData.innerHTML = saved;
        
       function reset(){
        document.getElementById('myform').reset();
       }
    };
}

