//================================================================================================================================================================//
                            //Storing datas//
//================================================================================================================================================================//

//CustomerDATA
let customerData = [
    {
        "cust_id": "1",
        "cust_login_id": "vicky@gmail.com",
        "cust_pass": "123",
        "bank_id": "1",
        "cust_name": "Vignesh",
        "phone": "9791674810",
        "pan": "INFPK6487M",
        "aadhar": "814273020135",
        "address": "Chennai"
    },
    {
        "cust_id": "2",
        "cust_login_id": "kohli@gmail.com",
        "cust_pass": "123",
        "bank_id": "1",
        "cust_name": "Kohli",
        "phone": "7893218791",
        "pan": "INFPK6488A",
        "aadhar": "814273020321",
        "address": "Delhi"
    },
    {
        "cust_id": "3",
        "cust_login_id": "dhoni@gmail.com",
        "cust_pass": "123",
        "bank_id": "2",
        "cust_name": "Dhoni",
        "phone": "8793128971",
        "pan": "UYTPO2110O",
        "aadhar": "678132678123",
        "address": "Ranchi"
    },
]

//Account DATA
let accountData = [
    {
        "account_id": "1",
        "account_num": "11111122222",
        "amount": "3500",
        "cust_id": "1",
        "bank_id": "1"
    },
    {
        "account_id": "2",
        "account_num": "11111188888",
        "amount": "1060930",
        "cust_id": "2",
        "bank_id": "1"
    },
    {
        "account_id": "3",
        "account_num": "11111177777",
        "amount": "420",
        "cust_id": "3",
        "bank_id": "2"
    }
]

//Employee DATA
let employeeData = [
    {
        "emp_id": "1",
        "emp_login_id": "loki@gmail.com",
        "emp_pass": "123",
        "bank_id": "1",
        "emp_name": "Lokesh",
        "role_id": "1"
    },
    {
        "emp_id": "2",
        "emp_login_id": "ak@gmail.com",
        "emp_pass": "123",
        "bank_id": "2",
        "emp_name": "AK",
        "role_id": "1"
    },
    {
        "emp_id": "3",
        "emp_login_id": "dilli@gmail.com",
        "emp_pass": "123",
        "bank_id": "1",
        "emp_name": "Dilli",
        "role_id": "2"
    },
    {
        "emp_id": "4",
        "emp_login_id": "das@gmail.com",
        "emp_pass": "123",
        "bank_id": "2",
        "emp_name": "Das",
        "role_id": "2"
    },
    {
        "emp_id": "5",
        "emp_login_id": "rolex@gmail.com",
        "emp_pass": "123",
        "bank_id": "3",
        "emp_name": "Rolex",
        "role_id": "1"
    },
    {
        "emp_id": "6",
        "emp_login_id": "remo@gmail.com",
        "emp_pass": "123",
        "bank_id": "3",
        "emp_name": "Remo",
        "role_id": "2"
    },
    {
        "emp_id": "7",
        "emp_login_id": "vikram@gmail.com",
        "emp_pass": "123",
        "bank_id": "4",
        "emp_name": "Vikram",
        "role_id": "1"
    },
    {
        "emp_id": "8",
        "emp_login_id": "nokia@gmail.com",
        "emp_pass": "123",
        "bank_id": "4",
        "emp_name": "Nokia",
        "role_id": "2"
    }
]

//Bank DATA
let bankData = [
    {
        "bank_id": "1",
        "bank_name": "HDFC",
        "branch_name": "Madipakkam",
        "ifsc_code": "HDFC0000111",
        "manager_id": "1"
    },
    {
        "bank_id": "2",
        "bank_name": "ICICI",
        "branch_name": "Nanganallur",
        "ifsc_code": "ICIC0000054",
        "manager_id": "2"
    },
    {
        "bank_id": "3",
        "bank_name": "HDFC",
        "branch_name": "Adambakkam",
        "ifsc_code": "HDFC0001858",
        "manager_id": "5"
    },
    {
        "bank_id": "4",
        "bank_name": "ICICI",
        "branch_name": "Velachery",
        "ifsc_code": "ICIC0000385",
        "manager_id": "7"
    }
]

//Transactions DATA
let transactionData = [
    {
        "trans_id": "1",
        "cust_id": "1",
        "bank_id": "1",
        "from_acc_no": "11111122222",
        "to_acc_no": "11111122222",
        "amount_transfered": "3300",
        "trans_note": "Self transfer",
        "date_time": "21-7-2022 | 10:40"
    },
    {
        "trans_id": "2",
        "cust_id": "2",
        "bank_id": "1",
        "from_acc_no": "11111188888",
        "to_acc_no": "11111188888",
        "amount_transfered": "1060930",
        "trans_note": "Self transfer",
        "date_time": "21-7-2022 | 10:42"
    },
    {
        "trans_id": "3",
        "cust_id": "1",
        "bank_id": "1",
        "from_acc_no": "11111122222",
        "to_acc_no": "11111122222",
        "amount_transfered": "200",
        "trans_note": "First transfer",
        "date_time": "21-7-2022 | 10:57"
    },
    {
        "trans_id": "4",
        "cust_id": "2",
        "bank_id": "1",
        "from_acc_no": "11111188888",
        "to_acc_no": "11111122222",
        "amount_transfered": "-200",
        "trans_note": "First transfer",
        "date_time": "21-7-2022 | 10:57"
    }
]

//================================================================================================================================================================//
                            //Fetching Datas//
//================================================================================================================================================================//

//Fetch BankDetails with bank_id
function getBankDetails(bank_id) {
    let bank = bankData.find(bank => bank.bank_id == bank_id);
    return bank;
}

//Fetch AccountDetails with cust_id
function getAccountDetails(cust_id) {
    let account = accountData.find(account => account.cust_id == cust_id);
    return account;    
}

//Fetch AccountDetails with account number
function getAccountDetailsWithAccountNumber(acc_num) {
    let account = accountData.find(account => account.account_num === acc_num);
    return account;
}

//================================================================================================================================================================//
                            //Validators & Generators//
//================================================================================================================================================================//
//Regex Check for login onKeyUp
function validateLogin(id, msg, btn) {
    var loginID = document.getElementById(id).value.trim();
    var msgForUser = document.getElementById(msg);
    msgForUser.innerHTML = "";
    var expr = /^([\w-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([\w-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$/;
    if (!expr.test(loginID)) {
        msgForUser.innerHTML = "Invalid Login ID.";
        document.getElementById(btn).style.display = "none";
    } else {
        document.getElementById(btn).style.display = "";
    }
}

//Regex email validation
function validateEmail(email) {
    var regex = /\S+@\S+\.\S+/;
    return regex.test(email);
}

function validatePANnumber(pan) {
    var regex = /^([a-zA-Z]){5}([0-9]){4}([a-zA-Z]){1}?$/;
    return regex.test(pan);
}

//Limit Account Number to 11 Characters
function limitAccNum(element, msgDiv, btn) {
    if (element.value.length > 11 || element.value.length < 11) {
        element.value = element.value.substr(0, 11);
        document.getElementById(msgDiv).innerHTML = "<p style=color:red>The account number is 11 digits</p>";
    } else {
        document.getElementById(msgDiv).innerHTML = "";
        document.getElementById(btn).style.display = "";
    }
}

//Limit Amount to 7 Characters
function limit(element, msgDiv) {
    var max_chars = 7;
    if (element.value.length > max_chars) {
        element.value = element.value.substr(0, max_chars);
        document.getElementById(msgDiv).innerHTML = "<p style=color:red>Maximum only 10,00,000 can be transfered</p>";
    } else {
        document.getElementById(msgDiv).innerHTML = "";
    }
}

//Allow only number to be entered
function onlyNumberKey(e) {
    // Only ASCII character in that range allowed
    var ASCIICode = (e.which) ? e.which : e.keyCode;
    if (ASCIICode > 31 && (ASCIICode < 48 || ASCIICode > 57))
        return false;
    return true;
}

//Allow only alphabets
function isAlphabet(word) {
    return !/[^a-zA-Z]/.test(word);
}

//TimeStamp
function getTimeStamp() {
    var d = new Date;
    var formattedDate = [d.getDate(), d.getMonth()+1, d.getFullYear()].join('-')+' | '+[d.getHours(), d.getMinutes()].join(':');
    return formattedDate;
}

//ID Generator
function generateUniqueID(num) {
    return Math.trunc(Math.random()*Number("1".padEnd(num+1, "0"))).toString();
}

//================================================================================================================================================================//
                            //LOGIN//
//================================================================================================================================================================//

//Open Staff Login
function openStaffLogin() {
    document.getElementById("loginDivision").style.display = "none";
    document.getElementById("loginDivisionForStaff").style.display = "";
    openLoginPage();
}

//Open Customer Login
function openCustomerLogin() {
    document.getElementById("loginDivision").style.display = "";
    document.getElementById("loginDivisionForStaff").style.display = "none";
    openLoginPage();
}

//Login Validator For Customer
function logIn(id, pass, msg) {
    openLoginPage();
    var userId = document.getElementById(id).value.trim();
    var userPass = document.getElementById(pass).value;
    let msgDiv = document.getElementById(msg);
    if (userId === "" && userPass === "") {
        msgDiv.innerHTML = "<p style=color:red>Please enter your user ID and password</p>";
    } else if (userId === "") {
        msgDiv.innerHTML = "<p style=color:red>Please enter your user ID</p>";
    } else if (!validateEmail(userId)) {
        msgDiv.innerHTML = "<p style=color:red>Enter a valid mail id</p>";
    } else if (userPass === "") {
        msgDiv.innerHTML = "<p style=color:red>Please enter your password</p>";
    } else if (userPass.length < 3) {
        msgDiv.innerHTML = "<p style=color:red>Password should be minimum 3 characters</p>";
    } else {
        msgDiv.innerHTML = "<p></p>";
        customerAuthenticateLogin(userId, userPass, msgDiv, id, pass);
    }
}

//Login Authenticator for Customer
function customerAuthenticateLogin(userId, userPass, msgDiv, id, pass) {
    if (!customerData.find(customer => customer.cust_login_id === userId)) {
        msgDiv.innerHTML = "<p style=color:red>Invalid User ID, Try again!</p>";
    } else {
        let customerToLogin = customerData.find(customer => customer.cust_login_id === userId);
        if (customerToLogin.cust_pass !== userPass) {
            msgDiv.innerHTML = "<p style=color:red>Invalid password, Try again!</p>";
        } else {
            sessionStorage.setItem("currentUser", JSON.stringify(userId));        
            msgDiv.innerHTML = "<p style=color:green>Valid User. Redirecting!</p>";
            openCustomerHomePage();
            document.getElementById(id).value = "";
            document.getElementById(pass).value = "";
            msgDiv.innerHTML = "";
        }
    }
}

//Login Validator For Employee
function logInForEmployee(id, pass, msg) {
    openLoginPage();
    var userId = document.getElementById(id).value.trim();
    var userPass = document.getElementById(pass).value;
    let msgDiv = document.getElementById(msg);
    if (userId === "" && userPass === "") {
        msgDiv.innerHTML = "<p style=color:red>Please enter your user ID and password</p>";
    } else if (userId === "") {//Add regex as well
        msgDiv.innerHTML = "<p style=color:red>Please enter your user ID</p>";
    } else if (!validateEmail(userId)) {
        msgDiv.innerHTML = "<p style=color:red>Enter a valid mail id</p>";
    } else if (userPass === "") {
        msgDiv.innerHTML = "<p style=color:red>Please enter your password</p>";
    } else if (userPass.length < 3) {
        msgDiv.innerHTML = "<p style=color:red>Password should be minimum 3 characters</p>";
    } else {
        msgDiv.innerHTML = "<p></p>";
        employeeAuthenticateLogin(userId, userPass, msgDiv, id, pass);
    }
}

//Login Authenticator for Employee
function employeeAuthenticateLogin(userId, userPass, msgDiv, id, pass) {
    if (!employeeData.find(employee => employee.emp_login_id === userId)) {
        msgDiv.innerHTML = "<p style=color:red>Invalid User ID, Try again!</p>";
    } else {
        let employeeToLogin = employeeData.find(employee => employee.emp_login_id === userId);
        if (employeeToLogin.emp_pass !== userPass) {
            msgDiv.innerHTML = "<p style=color:red>Invalid password, Try again!</p>";
        } else {
            sessionStorage.setItem("currentUser", JSON.stringify(userId));
            msgDiv.innerHTML = "<p style=color:green>Valid User. Redirecting!</p>";
            openStaffHomePage();
            document.getElementById(id).value = "";
            document.getElementById(pass).value = "";
            msgDiv.innerHTML = "";
        }
    }
}

//Logout
function logout() {
    sessionStorage.clear();
    openLoginPage();
}

//Check is user logged in
function isUserLoggedIn() {
    var userIdJSON = sessionStorage.getItem("currentUser");
    var userId = JSON.parse(userIdJSON);
    let customer = customerData.find(customer => customer.cust_login_id === userId);
    let employee = employeeData.find(employee => employee.emp_login_id === userId);
    if (isUserCustomer(userId, customer)) {
        openCustomerHomePage();
    } else if (isUserBankStaff(userId, employee) || isUserBankManager(userId, employee)) {
        openStaffHomePage();
    } else {
        logout();
    }
}

window.onload = isUserLoggedIn();

//================================================================================================================================================================//
//================================================================================================================================================================//
//================================================================================================================================================================//
                            //Customer Module//
//================================================================================================================================================================//
//================================================================================================================================================================//
//================================================================================================================================================================//
function isUserCustomer(userId, customer) {
    return userId != null && typeof customer != "undefined";  
}

//================================================================================================================================================================//
                            //Customer Home TAB//
//================================================================================================================================================================//
//Customer Home
function openCustomerDetails() {
    closeOtherPagesForCustomerHome();
    var userIdJSON = sessionStorage.getItem("currentUser");
    try {
        var userId = JSON.parse(userIdJSON);
        let customer = customerData.find(customer => customer.cust_login_id === userId);
        if (isUserCustomer(userId,customer)) {
            fetchAndDisplayCustomerDetails(customer);
        } else {
            throw new Error('Invalid User!');
        }
    } catch (error) {
        console.log(error);
        logout();
    }
    document.getElementById("userInfoCustHome").style.display = "";
    document.getElementById("trasferMoney").style.display = "none";
    document.getElementById("showBalanceDiv").style.display = "none";
    document.getElementById("transactionHistoryDiv").style.display = "none";
    document.getElementById("myInfoDiv").style.display = "none";
}

function fetchAndDisplayCustomerDetails(customer) {
    document.getElementById("welcomeAreaCustHome").innerHTML = "<h3> Welcome " + customer.cust_name + "!</h3>";
    document.getElementById("userInfo1CustHome").innerHTML = "<p> Aadhar Number: " + customer.aadhar + "</p>";            
    document.getElementById("userInfo2CustHome").innerHTML = "<p> Pan Number: " + customer.pan + "</p>";
    let bank = getBankDetails(customer.bank_id);
    document.getElementById("userInfo3CustHome").innerHTML = "<p> Bank Name: " + bank.bank_name + "</p>";  
    document.getElementById("userInfo4CustHome").innerHTML = "<p> Branch Name: " + bank.branch_name + "</p>";   
    let account = getAccountDetails(customer.cust_id);   
    document.getElementById("userInfo5CustHome").innerHTML = "<p> Account Number: " + account.account_num + "</p>";
}

//================================================================================================================================================================//
                            //Customer Show Balance TAB//
//================================================================================================================================================================//
//Customer Show Balance
function openCustomerShowBalance() {
    closeOtherPagesForCustomerHome();
    var userIdJSON = sessionStorage.getItem("currentUser");
    try {
        var userId = JSON.parse(userIdJSON);
        let customer = customerData.find(customer => customer.cust_login_id === userId);
        if (isUserCustomer(userId, customer)) {
            fetchAndDisplayCustomerBalance(customer);
        } else {
            throw new Error('Invalid User!');
        }
    } catch (error) {
        console.log(error);
        logout();
    }
    document.getElementById("userInfoCustHome").style.display = "none";
    document.getElementById("trasferMoney").style.display = "none";
    document.getElementById("showBalanceDiv").style.display = "";
    document.getElementById("transactionHistoryDiv").style.display = "none";
    document.getElementById("myInfoDiv").style.display = "none";
}

function fetchAndDisplayCustomerBalance(customer) {
    let account = getAccountDetails(customer.cust_id);   
    document.getElementById("balanceAvailableField").innerHTML = "<p> ₹ " + account.amount + "</p>";
}

//================================================================================================================================================================//
                            //Customer Edit Info TAB//
//================================================================================================================================================================//
//Open Customer Edit Info Tab
function openCustomerInfoTab() {
    closeOtherPagesForCustomerHome();
    var userIdJSON = sessionStorage.getItem("currentUser");
    try {
        var userId = JSON.parse(userIdJSON);
        let customer = customerData.find(customer => customer.cust_login_id === userId);
        if (isUserCustomer(userId, customer)) {
            document.getElementById("userPhoneNumField").innerHTML = "<p> Phone: " + customer.phone + "</p>";
            document.getElementById("userAddressField").innerHTML = "<p> Address: " + customer.address + "</p>";        
        } else {
            throw new Error('Invalid User!');
        }
    } catch (error) {
        console.log(error);
        logout();
    }   
    document.getElementById("userInfoCustHome").style.display = "none";
    document.getElementById("trasferMoney").style.display = "none";
    document.getElementById("showBalanceDiv").style.display = "none";
    document.getElementById("transactionHistoryDiv").style.display = "none";
    document.getElementById("myInfoDiv").style.display = "";
    document.getElementById("custInfo").style.display = "";
    document.getElementById("displayMsg").innerHTML = "";
    document.getElementById("editDetails").style.display = "none";
}

//Fetch Other details and show edit text box
function showEditFields() {
    closeOtherPagesForCustomerHome();
    var userIdJSON = sessionStorage.getItem("currentUser");
    try {
        var userId = JSON.parse(userIdJSON);
        let customer = customerData.find(customer => customer.cust_login_id === userId);
        if (isUserCustomer(userId, customer)) {
            document.getElementById("passField").value = customer.cust_pass;
            document.getElementById("phoneField").value = customer.phone;
            document.getElementById("addressField").value = customer.address;
        } else {
            throw new Error('Invalid User!');
        }    
    } catch (error) {
        console.log(error);
        logout();
    }
    document.getElementById("custInfo").style.display = "none";
    document.getElementById("editDetails").style.display = "";
}

//Show Password in the edit 
function showPassword() {
    var x = document.getElementById("passField");
    if (x.type === "password") {
        x.type = "text";
    } else {
        x.type = "password";
    }
}

//Edit Customer Information function
function editInfo() {
    closeOtherPagesForCustomerHome();
    var userIdJSON = sessionStorage.getItem("currentUser");
    try {
        var userId = JSON.parse(userIdJSON);
        let customer = customerData.find(customer => customer.cust_login_id === userId);
        if (isUserCustomer(userId, customer)) {
            validateAndUpdateCustomerData(customer);
        } else {
            throw new Error('Invalid User!');
        }
    } catch (error) {
        console.log(error);
        logout();
    }
}

function validateAndUpdateCustomerData(customer) {
    let msgDiv = document.getElementById("displayMsg");
    var newUserPass = document.getElementById("passField").value;
    var newUserPhone = document.getElementById("phoneField").value.trim();
    var newUserAddress = document.getElementById("addressField").value.trim();
    var oldPass = customer.cust_pass;
    var oldPhone = customer.phone;
    var oldAddress = customer.address;
    if (newUserPass === "" || newUserPhone === "" || newUserAddress === "") {
        msgDiv.innerHTML = "<p style=color:red>Please fill all the details to be updated</p>";
    } else if (oldPass === newUserPass && oldPhone === newUserPhone && oldAddress === newUserAddress) {
        msgDiv.innerHTML = "<p style=color:red>Please modify atleast one field to updated</p>";
    } else if (newUserPass.length < 3 || newUserPass.length > 16) {
        msgDiv.innerHTML = "<p style=color:red>The Password should be minimum 3 characters and maximum 16 characters</p>";
    } else if(isNaN(newUserPhone)){
        msgDiv.innerHTML = "<p style=color:red>Don't enter text, Please enter a valid mobile number.</p>";
    } else if (newUserPhone.length != 10) {
        msgDiv.innerHTML = "<p style=color:red>Please enter 10 digit Mobile number.</p>";
    } else if (newUserAddress.length < 3 || newUserAddress.length > 50) {
        msgDiv.innerHTML = "<p style=color:red>The Address should be minimum 3 characters and maximum 50 characters</p>";
    } else if (customerData.some(customer => customer.phone === newUserPhone) && oldPhone!=newUserPhone) {
        msgDiv.innerHTML = "<p style=color:red>This phone number already exists</p>";
    } else {
        customer.cust_pass = newUserPass;
        customer.phone = newUserPhone;
        customer.address = newUserAddress;
        document.getElementById("editDetails").style.display = "none";
        msgDiv.innerHTML = "<p style=color:green>User Updated Successfully!</p>";
    }
}

//================================================================================================================================================================//
                            //Customer Transaction History TAB//
//================================================================================================================================================================//
//Open Transactions
function openCustomerTransactions() {
    closeOtherPagesForCustomerHome();
    var userIdJSON = sessionStorage.getItem("currentUser");
    try {
        var userId = JSON.parse(userIdJSON);
        let customer = customerData.find(customer => customer.cust_login_id === userId);
        if (isUserCustomer(userId, customer)) {
            fetchAndDisplayCustomerTransactions(customer);
            document.getElementById("userInfoCustHome").style.display = "none";
            document.getElementById("trasferMoney").style.display = "none";
            document.getElementById("showBalanceDiv").style.display = "none";
            document.getElementById("transactionHistoryDiv").style.display = "";
            document.getElementById("myInfoDiv").style.display = "none";
        } else {
            throw new Error('Invalid User!');
        }
    } catch (error) {
        console.log(error);
        logout();
    }
}

function fetchAndDisplayCustomerTransactions(customer) {
    let customerTransactions = transactionData.filter(transaction => transaction.cust_id === customer.cust_id).reverse();
    console.log(customerTransactions);
    if (customerTransactions.length === 0) {
        document.getElementById("custTransactionHistoryDiv").innerHTML = "<p> No Transactions till now</p>";
    } else {
        var balance = getAccountDetails(customer.cust_id).amount;
        out = "<table> \
            <tr> \
                <th>Date | Time</th> \
                <th>From Account Number </th> \
                <th>To Account Number</th> \
                <th>Amount Transferred</th> \
                <th>Balance</th> \
                <th>Transaction Note</th> \
            </tr>";
        for (let i = 0; i < customerTransactions.length; i++) {
            let amount = customerTransactions[i].amount_transfered;
            out += "<tr><td>" + customerTransactions[i].date_time + "</td> \
                    <td>" + customerTransactions[i].from_acc_no + "</td> \
                    <td>" + customerTransactions[i].to_acc_no + "</td>";
            if (Math.sign(amount) === -1) {
                out += "<td style='color: red'>" + customerTransactions[i].amount_transfered + "</td>";
            } else {
                out += "<td style='color: green'>" + customerTransactions[i].amount_transfered + "</td>";
            }
            out += "<td>" + balance + "</td> \
                    <td>" + customerTransactions[i].trans_note + "</td> \
                    </tr>";
            balance = Number(balance) - Number(customerTransactions[i].amount_transfered);        
        }
        out += "</table>";
        document.getElementById("custTransactionHistoryDiv").innerHTML = out;
    }
}

//================================================================================================================================================================//
                            //Customer Transfer Fund TAB//
//================================================================================================================================================================//
//Open Transfer Fund
function openCustomerTransferFund() {
    closeOtherPagesForCustomerHome();
    var userIdJSON = sessionStorage.getItem("currentUser");
    try {
        var userId = JSON.parse(userIdJSON);
        let customer = customerData.find(customer => customer.cust_login_id === userId);
        if (isUserCustomer(userId, customer)) {
            document.getElementById("userInfoCustHome").style.display = "none";
            document.getElementById("trasferMoney").style.display = "";
            document.getElementById("getAccNumDiv").style.display = "";
            document.getElementById("validateAccNumBtn").style.display = "none";

            document.getElementById("msgForUserCustHome").innerHTML = "";
            document.getElementById("accNumFieldCustHome").value = "";
            document.getElementById("moneyfieldCustHome").value = "";
            document.getElementById("notefieldCustHome").value = "";

            document.getElementById("transferFundDiv").style.display = "none";
            document.getElementById("showBalanceDiv").style.display = "none";
            document.getElementById("transactionHistoryDiv").style.display = "none";
            document.getElementById("myInfoDiv").style.display = "none";
        } else {
            throw new Error('Invalid User!');
        }   
    } catch (error) {
        console.log(error);
        logout();
    }
}

//Validate Account Number 
function validateAccountNumberForTransfer() {
    closeOtherPagesForCustomerHome();
    var userIdJSON = sessionStorage.getItem("currentUser");
    try {
        var userId = JSON.parse(userIdJSON);
        let customer = customerData.find(customer => customer.cust_login_id === userId);
        if (isUserCustomer(userId, customer)) {
            accountNumberValidationAndRedirect(customer);
        } else {
            throw new Error('Invalid User!');
        }       
    } catch (error) {
        console.log(error);
        logout();
    }
}

function accountNumberValidationAndRedirect(customer) {
    var accNum = document.getElementById("accNumFieldCustHome").value.trim();
    let msgDiv = document.getElementById("msgForUserCustHome");
    if (accNum === "") {
        msgDiv.innerHTML = "<p style=color:red>Please enter the account number</p>";
    } else if (isNaN(accNum)) {
        msgDiv.innerHTML = "<p style=color:red>Please enter valid account number</p>";
    } else if (accNum.length!=11) {
        msgDiv.innerHTML = "<p style=color:red>Account Number is 11 Digits</p>";
    } else {
        let fromAccount = getAccountDetails(customer.cust_id);
        if (!accountData.some(account => account.account_num === accNum)) {
            msgDiv.innerHTML = "<p style=color:red>Account Number doesn't exist, enter an existing account number to transfer.</p>";
        } else if (fromAccount.account_num === accNum) {
            msgDiv.innerHTML = "<p style=color:red>Don't enter your Account Number</p>";
        } else {
            document.getElementById("getAccNumDiv").style.display = "none";
            document.getElementById("transferFundDiv").style.display = "";
            document.getElementById("accNumToBeSentCustHome").innerHTML = "Enter the amount to be transferred to: " + accNum;
        }
    }
}

//Transfer Fund
function transferFund() {
    closeOtherPagesForCustomerHome();
    var userIdJSON = sessionStorage.getItem("currentUser");
    try {
        var userId = JSON.parse(userIdJSON);
        let customer = customerData.find(customer => customer.cust_login_id === userId);
        if (isUserCustomer(userId, customer)) {
            validateAndTransferFund(customer);
        } else {
            throw new Error('Invalid User!');         
        }       
    } catch (error) {
        console.log(error);
        logout();
    }
}

function validateAndTransferFund(customer) {
    var accNum = document.getElementById("accNumFieldCustHome").value.trim();
    var amount = Math.trunc(document.getElementById("moneyfieldCustHome").value.trim());
    var note = document.getElementById("notefieldCustHome").value.trim();
    let msgDiv = document.getElementById("msgForUserCustHome");
    if (accNum === "") {
        msgDiv.innerHTML = "<p style=color:red>Please enter the account number</p>";
    } else if (isNaN(accNum)) {
        msgDiv.innerHTML = "<p style=color:red>Please enter valid account number, don't enter special characters.</p>";
    } else if (accNum.length!=11) {
        msgDiv.innerHTML = "<p style=color:red>Account Number is 11 Digits</p>";
    } else {
        let fromAccount = getAccountDetails(customer.cust_id);
        if (!accountData.some(account => account.account_num === accNum)) {
            msgDiv.innerHTML = "<p style=color:red>Account Number doesn't exist, enter an existing account number to transfer.</p>";
        } else if (fromAccount.account_num === accNum) {
            msgDiv.innerHTML = "<p style=color:red>Don't enter your Account Number</p>";
        } else {
            if (amount === "" || amount === "0") {
                msgDiv.innerHTML = "<p style=color:red>Min enter 1 Rupee</p>";
            } else if (isNaN(amount)) {
                msgDiv.innerHTML = "<p style=color:red>Please enter valid amount, don't enter characters.</p>";
            } else if (fromAccount.amount < amount) {
                msgDiv.innerHTML = "<p style=color:red>Try entering value less than your balance. Your Balance is " + fromAccount.amount + "</p>"
            } else if (amount < 1) {
                msgDiv.innerHTML = "<p style=color:red>The minimum transaction is ₹1</p>"
            } else if (1000000 < amount) {
                msgDiv.innerHTML = "<p style=color:red>The maximum transaction is ₹1000000</p>"
            } else if (note.length > 20) {
                msgDiv.innerHTML = "<p style=color:red>Note can be maximum 20 Characters</p>";
            } else {
                let toAccount = accountData.find(account => account.account_num === accNum);
                fromAccount.amount = Number(fromAccount.amount) - Number(amount);
                transactionData.push({
                    "trans_id": generateUniqueID(8),
                    "cust_id": fromAccount.cust_id,
                    "bank_id": fromAccount.bank_id,
                    "from_acc_no": fromAccount.account_num,
                    "to_acc_no": toAccount.account_num,
                    "amount_transfered": -amount,
                    "trans_note": note,
                    "balance": fromAccount.amount,
                    "date_time": getTimeStamp()               
                });
                toAccount.amount = Number(toAccount.amount) + Number(amount);
                transactionData.push({
                    "trans_id": generateUniqueID(8),
                    "cust_id": toAccount.cust_id,
                    "bank_id": toAccount.bank_id,
                    "from_acc_no": fromAccount.account_num,
                    "to_acc_no": toAccount.account_num,
                    "amount_transfered": Number(amount),
                    "trans_note": note,
                    "balance": toAccount.amount,
                    "date_time": getTimeStamp()               
                });
                document.getElementById("getAccNumDiv").style.display = "none";
                document.getElementById("transferFundDiv").style.display = "none";
                msgDiv.innerHTML = "<p style=color:green> ₹ " + amount + " transfered successfully to account no: " + toAccount.account_num + "</p>";
                console.log(transactionData);
            }
        }
    }
}

//================================================================================================================================================================//
//================================================================================================================================================================//
//================================================================================================================================================================//
                            //Bank Employee Module//
//================================================================================================================================================================//
//================================================================================================================================================================//
//================================================================================================================================================================//
function isUserBankStaff(userId, employee) {
    return userId != null && typeof employee != "undefined" && employee.role_id == 2;  
}

function isUserBankManager(userId, employee) {
    return userId != null && typeof employee != "undefined" && employee.role_id == 1;  
}

//================================================================================================================================================================//
                            //Employee Home TAB//
//================================================================================================================================================================//
//Employee Home
function openEmployeeDetails() {
    closeOtherPagesForStaffHome();
    var userIdJSON = sessionStorage.getItem("currentUser");
    try {
        var userId = JSON.parse(userIdJSON);
        let employee = employeeData.find(employee => employee.emp_login_id === userId);
            console.log(employee);
        if (isUserBankManager(userId, employee)) {
            fetchAndDisplayBankManagerDetails(employee);
        } else if (isUserBankStaff(userId, employee)) {
            fetchAndDisplayBankStaffDetails(employee);
        } else {
            throw new Error('Invalid User!');
        }   
    } catch (error) {
        console.log(error);
        logout();
    }
    document.getElementById("userInfo").style.display = "";
    document.getElementById("addMoneyDiv").style.display = "none";
    document.getElementById("withdrawMoneyDiv").style.display = "none";
    document.getElementById("viewAllCustomersDiv").style.display = "none";
    document.getElementById("viewAllStaffsDiv").style.display = "none";
    document.getElementById("bankWideTransactionsDiv").style.display = "none";
    document.getElementById("addNewStaffDiv").style.display = "none";
    document.getElementById("deleteStaffDiv").style.display = "none";
}

function fetchAndDisplayBankManagerDetails(employee) {
    document.getElementById("welcomeArea").innerHTML = "<h3> Welcome " + employee.emp_name + "!</h3>";
    document.getElementById("bankManagerFunctions").style.display = "";
    document.getElementById("bankStaffFunctions").style.display = "none";
    document.getElementById("userInfo1").innerHTML = "<p> Role Name: Manager </p>";
    let bank = getBankDetails(employee.bank_id);
    document.getElementById("userInfo2").innerHTML = "<p> Bank Name: " + bank.bank_name + "</p>";
    document.getElementById("userInfo3").innerHTML = "<p> Branch Name: " + bank.branch_name + "</p>";
}

function fetchAndDisplayBankStaffDetails(employee) {
    document.getElementById("welcomeArea").innerHTML = "<h3> Welcome " + employee.emp_name + "!</h3>";
    document.getElementById("bankStaffFunctions").style.display = "";
    document.getElementById("bankManagerFunctions").style.display = "none";
    document.getElementById("userInfo1").innerHTML = "<p> Role Name: Staff </p>";  
    let bank = getBankDetails(employee.bank_id);
    document.getElementById("userInfo2").innerHTML = "<p> Bank Name: " + bank.bank_name + "</p>";
    document.getElementById("userInfo3").innerHTML = "<p> Branch Name: " + bank.branch_name + "</p>";
}

//================================================================================================================================================================//
                            //Employee - Staff - View All Customers TAB//
//================================================================================================================================================================//
//View All Customers
function openViewAllCustomers() {
    closeOtherPagesForStaffHome();
    var userIdJSON = sessionStorage.getItem("currentUser");
    try {
        var userId = JSON.parse(userIdJSON);
        let employee = employeeData.find(employee => employee.emp_login_id === userId);
        if (isUserBankStaff(userId, employee)) {
            fetchAndDisplayAllCustomersInBank(employee);
        } else {
            throw new Error('Invalid User!');
        }   
    } catch (error) {
        console.log(error);
        logout();
    } 
    document.getElementById("userInfo").style.display = "none";
    document.getElementById("addMoneyDiv").style.display = "none";
    document.getElementById("withdrawMoneyDiv").style.display = "none";
    document.getElementById("viewAllCustomersDiv").style.display = "";
}

function fetchAndDisplayAllCustomersInBank(employee) {
    document.getElementById("bankStaffFunctions").style.display = "";
    document.getElementById("bankManagerFunctions").style.display = "none";
    let customersOfThisBank = customerData.filter(customer => customer.bank_id === employee.bank_id);
    if (customersOfThisBank.length === 0) {
        document.getElementById("allCustTable").innerHTML = "<p> No customers till now</p>";
    } else {
        out = "<table> \
        <tr> \
            <th>Account Number</th> \
            <th>Customer Name</th> \
            <th>Customer Login ID</th> \
            <th>PAN Number</th> \
            <th>Aadhar Number</th> \
            <th>Phone Number</th> \
            <th>Address</th> \
            <th>Balance</th> \
        </tr>";
        for (let i = 0; i < customersOfThisBank.length; i++) {
            let account = getAccountDetails(customersOfThisBank[i].cust_id);
            out += "<tr>\<td>" + account.account_num + "</td> \
                    <td>" + customersOfThisBank[i].cust_name + "</td> \
                    <td>" + customersOfThisBank[i].cust_login_id + "</td> \
                    <td>" + customersOfThisBank[i].pan + "</td> \
                    <td>" + customersOfThisBank[i].aadhar + "</td> \
                    <td>" + customersOfThisBank[i].phone + "</td> \
                    <td>" + customersOfThisBank[i].address + "</td> \
                    <td>" + account.amount + "</td> \
                    </tr>";
            }
        out += "</table>";
        document.getElementById("allCustTable").innerHTML = out;
    }
}

//================================================================================================================================================================//
                            //Employee - Staff - Add Money TAB//
//================================================================================================================================================================//
//Open Add Money
function openAddMoney() {
    closeOtherPagesForStaffHome();
    var userIdJSON = sessionStorage.getItem("currentUser");
    try {
        var userId = JSON.parse(userIdJSON);
        let employee = employeeData.find(employee => employee.emp_login_id === userId);
        if (isUserBankStaff(userId, employee)) {
            document.getElementById("bankStaffFunctions").style.display = "";
            document.getElementById("bankManagerFunctions").style.display = "none";
            document.getElementById("userInfo").style.display = "none";
            document.getElementById("addMoneyDiv").style.display = "";
            document.getElementById("getAccNumDivForAdd").style.display = "";
            document.getElementById("validateAccNumBtn1").style.display = "none";
            document.getElementById("msgForUser").innerHTML = "";
            document.getElementById("accNumField").value = "";
            document.getElementById("moneyfield").value = "";
            document.getElementById("notefield").value = "";
            document.getElementById("moneyDivForAdd").style.display = "none";
            document.getElementById("withdrawMoneyDiv").style.display = "none";
            document.getElementById("viewAllCustomersDiv").style.display = "none";
        } else {
            throw new Error('Invalid User!');
        }         
    } catch (error) {
        console.log(error);
        logout();
    }
}

//Validate Customer Account Number
function validateCustomerAccountNumber(field, msgDiv, divToHide, divToOpen, operation) {
    closeOtherPagesForStaffHome();
    var userIdJSON = sessionStorage.getItem("currentUser");
    try {
        var userId = JSON.parse(userIdJSON);
        let employee = employeeData.find(employee => employee.emp_login_id === userId);
        if (isUserBankStaff(userId, employee)) {
            var accNum = document.getElementById(field).value.trim();
            if (accNum === "") {
                document.getElementById(msgDiv).innerHTML = "<p style=color:red>Please enter the account number</p>";
            } else if (isNaN(accNum)) {
                document.getElementById(msgDiv).innerHTML = "<p style=color:red>Please enter valid account number</p>";
            } else if (accNum.length!=11) {
                document.getElementById(msgDiv).innerHTML = "<p style=color:red>Account Number is 11 Digits</p>";
            } else {
                if (!accountData.some(account => account.account_num === accNum)) {
                    document.getElementById(msgDiv).innerHTML = "<p style=color:red>Account Number doesn't exist, enter an existing account number to transfer.</p>";
                } else if (getAccountDetailsWithAccountNumber(accNum).bank_id != employee.bank_id) {
                    document.getElementById(msgDiv).innerHTML = "<p style=color:red>Cannot transfer to other bank/branch.</p>";
                } else {
                    document.getElementById(divToHide).style.display = "none";
                    document.getElementById(divToOpen).style.display = "";
                    document.getElementById("accNumToBeSent").innerHTML = "Enter the amount to be "+ operation +" : " + accNum;
                }
            }
        } else {
            throw new Error('Invalid User!');       
        }        
    } catch (error) {
        console.log(error);
        logout();
    }
}

//Add Money Function
function addMoney() {
    closeOtherPagesForStaffHome();
    var userIdJSON = sessionStorage.getItem("currentUser");
    try {
        var userId = JSON.parse(userIdJSON);
        let employee = employeeData.find(employee => employee.emp_login_id === userId);
        if (isUserBankStaff(userId, employee)) {
            validateAndAddMoney(employee);
        } else {
            throw new Error('Invalid User!');       
        }
    } catch (error) {
        console.log(error);
        logout();
    }
}

function validateAndAddMoney(employee) {
    let msgDiv = document.getElementById("msgForUser");
    var accNum = document.getElementById("accNumField").value.trim();
    var amount = Math.trunc(document.getElementById("moneyfield").value.trim());
    var note = document.getElementById("notefield").value.trim();
    if (accNum === "") {
        msgDiv.innerHTML = "<p style=color:red>Please enter the account number</p>";
    } else if (isNaN(accNum)) {
        msgDiv.innerHTML = "<p style=color:red>Please enter valid account number</p>";
    } else if (accNum.length!=11) {
        msgDiv.innerHTML = "<p style=color:red>Account Number is 11 Digits</p>";
    } else {
        if (!accountData.some(account => account.account_num === accNum)) {
            msgDiv.innerHTML = "<p style=color:red>Account Number doesn't exist, enter an existing account number to transfer.</p>";
        } else if (getAccountDetailsWithAccountNumber(accNum).bank_id != employee.bank_id) {
            msgDiv.innerHTML = "<p style=color:red>Cannot transfer to other bank/branch.</p>";
        } else if (amount === "" || amount === "0") {
            msgDiv.innerHTML = "<p style=color:red>Min enter 1 Rupee</p>";
        } else if (isNaN(amount)) {
            msgDiv.innerHTML = "<p style=color:red>Don't enter special characters, Please enter valid amount.</p>";
        } else if (amount > 1000000) {
            msgDiv.innerHTML = "<p style=color:red>The maximum transaction is ₹1000000</p>";
        } else if (amount < 1) {
            msgDiv.innerHTML = "<p style=color:red>Try to deposit amount minimum of than ₹1.</p>";
        } else if (note.length > 20) {
            msgDiv.innerHTML = "<p style=color:red>Note can be maximum 20 Characters.</p>";
        } else {
            //Add Money function
            getAccountDetailsWithAccountNumber(accNum).amount = Number(getAccountDetailsWithAccountNumber(accNum).amount) + Number(amount);
            console.log(getAccountDetailsWithAccountNumber(accNum).amount);
            transactionData.push({
                    "trans_id": generateUniqueID(8),
                    "cust_id": getAccountDetailsWithAccountNumber(accNum).cust_id,
                    "bank_id": getAccountDetailsWithAccountNumber(accNum).bank_id,
                    "from_acc_no": accNum,
                    "to_acc_no": accNum,
                    "amount_transfered": amount,
                    "trans_note": note,
                    "balance": getAccountDetailsWithAccountNumber(accNum).amount,
                    "date_time": getTimeStamp()               
                });
            console.log(transactionData);
            document.getElementById("getAccNumDivForAdd").style.display = "none";
            document.getElementById("moneyDivForAdd").style.display = "none";
            msgDiv.innerHTML = "<p style=color:green>₹ " + amount + " added successfully.</p>";
        }
    }
}

//================================================================================================================================================================//
                            //Employee - Staff - Withdraw Money TAB//
//================================================================================================================================================================//
//Open Withdraw Money
function openWithdrawMoney() {
    closeOtherPagesForStaffHome();
    var userIdJSON = sessionStorage.getItem("currentUser");
    try {
        var userId = JSON.parse(userIdJSON);
        let employee = employeeData.find(employee => employee.emp_login_id === userId);
        if (isUserBankStaff(userId, employee)) {
            document.getElementById("bankStaffFunctions").style.display = "";
            document.getElementById("bankManagerFunctions").style.display = "none";
            document.getElementById("userInfo").style.display = "none";
            document.getElementById("addMoneyDiv").style.display = "none";
            document.getElementById("withdrawMoneyDiv").style.display = "";
            document.getElementById("getAccNumDivForWithdraw").style.display = "";
            document.getElementById("validateAccNumBtn2").style.display = "none";
            document.getElementById("msgForUserForWithdraw").innerHTML = "";
            document.getElementById("accNumFieldForWithdraw").value = "";
            document.getElementById("moneyfieldForWithdraw").value = "";
            document.getElementById("notefieldForWithdraw").value = "";
            document.getElementById("moneyDivForWithdraw").style.display = "none";
            document.getElementById("viewAllCustomersDiv").style.display = "none";
        } else {
            throw new Error('Invalid User!');        
        }
    } catch (error) {
        console.log(error);
        logout();
    }
}

//Validate Account Number => Is done from common function available in "Employee - Staff - Add Money TAB" section in code.

//Withdraw Money Function
function withdrawMoney() {
    closeOtherPagesForStaffHome();
    var userIdJSON = sessionStorage.getItem("currentUser");
    try {
        var userId = JSON.parse(userIdJSON);
        let employee = employeeData.find(employee => employee.emp_login_id === userId);
        if (isUserBankStaff(userId, employee)) {
            validateAndWithdrawMoney(employee);
        } else {
            throw new Error('Invalid User!');    
        }
    } catch (error) {
        console.log(error);
        logout();
    }
}

function validateAndWithdrawMoney(employee) {
    let msgDiv = document.getElementById("msgForUserForWithdraw");
    var accNum = document.getElementById("accNumFieldForWithdraw").value.trim();
    var amount = Math.trunc(document.getElementById("moneyfieldForWithdraw").value.trim());
    var note = document.getElementById("notefieldForWithdraw").value.trim();
    if (accNum === "") {
        msgDiv.innerHTML = "<p style=color:red>Please enter the account number</p>";
    } else if (isNaN(accNum)) {
        msgDiv.innerHTML = "<p style=color:red>Please enter valid account number</p>";
    } else if (accNum.length!=11) {
        msgDiv.innerHTML = "<p style=color:red>Account Number is 11 Digits</p>";
    } else { 
        if (!accountData.some(account => account.account_num === accNum)) {
            msgDiv.innerHTML = "<p style=color:red>Account Number doesn't exist, enter an existing account number to transfer.</p>";
        } else if (getAccountDetailsWithAccountNumber(accNum).bank_id != employee.bank_id) {
            msgDiv.innerHTML = "<p style=color:red>Cannot transfer to other bank/branch.</p>";
        } else if (amount === "" || amount === "0") {
            msgDiv.innerHTML = "<p style=color:red>Min enter 1 Rupee</p>";
        } else if (isNaN(amount)) {
            msgDiv.innerHTML = "<p style=color:red>Don't enter special characters, Please enter valid amount.</p>";
        } else if (getAccountDetailsWithAccountNumber(accNum).amount < amount) {
            msgDiv.innerHTML = "<p style=color:red>Insufficient amount, your balance is "+ getAccountDetailsWithAccountNumber(accNum).amount +"</p>";
        } else if (amount > 1000000) {
            msgDiv.innerHTML = "<p style=color:red>The maximum transaction is ₹1000000</p>";
        } else if (amount < 1) {
            msgDiv.innerHTML = "<p style=color:red>Try to deposit amount minimum of than ₹1.</p>";
        } else if (note.length > 20) {
            msgDiv.innerHTML = "<p style=color:red>Note can be maximum 20 Characters.</p>";
        } else {
            //Withdraw money function
            getAccountDetailsWithAccountNumber(accNum).amount = Number(getAccountDetailsWithAccountNumber(accNum).amount) - Number(amount);
            console.log(getAccountDetailsWithAccountNumber(accNum).amount);
            transactionData.push({
                    "trans_id": generateUniqueID(8),
                    "cust_id": getAccountDetailsWithAccountNumber(accNum).cust_id,
                    "bank_id": getAccountDetailsWithAccountNumber(accNum).bank_id,
                    "from_acc_no": accNum,
                    "to_acc_no": accNum,
                    "amount_transfered": -amount,
                    "trans_note": note,
                    "balance": getAccountDetailsWithAccountNumber(accNum).amount,
                    "date_time": getTimeStamp()               
                });
            console.log(transactionData);
            document.getElementById("getAccNumDivForWithdraw").style.display = "none";
            document.getElementById("moneyDivForWithdraw").style.display = "none";
            msgDiv.innerHTML = "<p style=color:green>₹ " + amount + " withdrawn successfully!</p>";
        }
    }
}

//================================================================================================================================================================//
                            //Employee - Manager - View All Staff TAB//
//================================================================================================================================================================//
//View All Staff
function openViewAllStaffs() {
    closeOtherPagesForStaffHome();
    var userIdJSON = sessionStorage.getItem("currentUser");
    try {
        var userId = JSON.parse(userIdJSON);
        let employee = employeeData.find(employee => employee.emp_login_id === userId);
        if (isUserBankManager(userId, employee)) {
            fetchAndDisplayAllEmployeesInBank(employee);
        } else {
            throw new Error('Invalid User!');
        }
    } catch (error) {
        console.log(error);
        logout();
    }
    document.getElementById("userInfo").style.display = "none";
    document.getElementById("viewAllStaffsDiv").style.display = "";
    document.getElementById("bankWideTransactionsDiv").style.display = "none";
    document.getElementById("addNewStaffDiv").style.display = "none";
    document.getElementById("deleteStaffDiv").style.display = "none";
}

function fetchAndDisplayAllEmployeesInBank(employee) {
    document.getElementById("bankStaffFunctions").style.display = "none";
    document.getElementById("bankManagerFunctions").style.display = "";   
    let employeesOfThisBank = employeeData.filter(e => e.bank_id == employee.bank_id);
    if (employeesOfThisBank.length === 0) {
        document.getElementById("listAllStaffsDiv").innerHTML = "<p> No staffs till now</p>";
    } else {
        out = "<table> \
        <tr> \
                <th>Employee ID</th> \
                <th>Employee Name</th> \
                <th>Employee Login ID</th> \
                <th>Employee Role</th> \
            </tr>";
        for (let i = 0; i < employeesOfThisBank.length; i++) {
            if (employeesOfThisBank[i].role_id == 1) {
                var roleName = "Manager";
            } else {
                roleName = "Staff";
            }
            out += "<tr><td>" + employeesOfThisBank[i].emp_id + "</td> \
                    <td>" + employeesOfThisBank[i].emp_name + "</td> \
                    <td>" + employeesOfThisBank[i].emp_login_id + "</td> \
                    <td>" + roleName + "</td> \
                </tr>";
        }
        out += "</table>";
        document.getElementById("listAllStaffsDiv").innerHTML = out;
    }
}

//================================================================================================================================================================//
                            //Employee - Manager - Add Staff TAB//
//================================================================================================================================================================//
//Open Add New Staff
function openManagerAddStaffs() {
    closeOtherPagesForStaffHome();
    var userIdJSON = sessionStorage.getItem("currentUser");
    try {
        var userId = JSON.parse(userIdJSON);
        let employee = employeeData.find(employee => employee.emp_login_id === userId);
        if (isUserBankManager(userId, employee)) {
            document.getElementById("bankStaffFunctions").style.display = "none";
            document.getElementById("bankManagerFunctions").style.display = "";
            document.getElementById("userInfo").style.display = "none";
            document.getElementById("viewAllStaffsDiv").style.display = "none";
            document.getElementById("bankWideTransactionsDiv").style.display = "none";
            document.getElementById("addNewStaffDiv").style.display = "";
            document.getElementById("getUserNameToAddDiv").style.display = "";
            document.getElementById("staffLoginIDfield").value = "";
            document.getElementById("staffDetailsToAddDiv").style.display = "none";
            document.getElementById("deleteStaffDiv").style.display = "none";
            document.getElementById("msgForUserInAddStaff").innerHTML = "";
            document.getElementById("nameOfStaffToBeAdded").value = "";
            document.getElementById("passwordOfStaffToBeAdded").value = ""; 
        } else {
            throw new Error('Invalid User!');
        }
    } catch (error) {
        console.log(error);
        logout();
    }
}

//Validate if ID available or not
function validateStaffToAdd() {
    closeOtherPagesForStaffHome();
    var userIdJSON = sessionStorage.getItem("currentUser");
    try {
        var userId = JSON.parse(userIdJSON);
        let employee = employeeData.find(employee => employee.emp_login_id === userId);
        if (isUserBankManager(userId, employee)) {
            let msgDiv = document.getElementById("msgForUserInAddStaff");
            var newStaffID = document.getElementById("staffLoginIDfield").value.trim();
            if (newStaffID === "") {
                msgDiv.innerHTML = "<p style=color:red>Please enter the login ID for staff</p>";
            } else if (!validateEmail(newStaffID)) {
                msgDiv.innerHTML = "<p style=color:red>Please enter a valid mail ID</p>";        
            } else if (employeeData.some(employee => employee.emp_login_id === newStaffID)) {
                msgDiv.innerHTML = "<p style=color:red>This ID already exist, try different ID</p>";        
            } else {
                document.getElementById("getUserNameToAddDiv").style.display = "none";
                document.getElementById("staffDetailsToAddDiv").style.display = "";
                document.getElementById("staffIDFromTextHeading").innerHTML = "Enter the other details to create the staff with login id: " + newStaffID;
            }
        } else {
            throw new Error('Invalid User!');
        }
    } catch (error) {
        console.log(error);
        logout();
    }
}

//Add Staff
function addStaff() {
    closeOtherPagesForStaffHome();
    var userIdJSON = sessionStorage.getItem("currentUser");
    try {
        var userId = JSON.parse(userIdJSON);
        let employee = employeeData.find(employee => employee.emp_login_id === userId);
        if (isUserBankManager(userId, employee)) {
            validateAndAddStaff(employee);
        } else {
            throw new Error('Invalid User!');
        }
    } catch (error) {
        console.log(error);
        logout();
    }
}

function validateAndAddStaff(employee) {
    let msgDiv = document.getElementById("msgForUserInAddStaff");
    var newStaffID = document.getElementById("staffLoginIDfield").value.trim();
    var newStaffName = document.getElementById("nameOfStaffToBeAdded").value.trim();
    var newStaffPass = document.getElementById("passwordOfStaffToBeAdded").value;
    if (newStaffID === "" || newStaffName === "" || newStaffPass === "") {
        msgDiv.innerHTML = "<p style=color:red>Enter all the details</p>";
    } else if (!validateEmail(newStaffID)) {
        msgDiv.innerHTML = "<p style=color:red>Please enter a valid mail ID</p>";        
    } else if (employeeData.some(employee => employee.emp_login_id === newStaffID)) {
        msgDiv.innerHTML = "<p style=color:red>This ID already exist, try different ID</p>";        
    } else if (newStaffName.length < 2 || newStaffName.length > 30) {
        msgDiv.innerHTML = "<p style=color:red>The name should be minimum of 2 characters to maximum of 30 characters only</p>";        
    } else if (!isAlphabet(newStaffName)) {
        msgDiv.innerHTML = "<p style=color:red>Enter only alphabets in name.</p>";        
    } else if (newStaffPass.length < 3 || newStaffPass.length > 16) {
        msgDiv.innerHTML = "<p style=color:red>Password should be minimum 3 characters and maximum of 16 characters</p>";        
    } else {
        employeeData.push({
                "emp_id": generateUniqueID(8),
                "emp_login_id": newStaffID,
                "emp_pass": newStaffPass,
                "bank_id": employee.bank_id,
                "emp_name": newStaffName,
                "role_id": "2" 
            });
        console.log(employeeData);
        document.getElementById("staffDetailsToAddDiv").style.display = "none";
        msgDiv.innerHTML = "<p style=color:green>Staff Created Successfully</p>";
    }
}

//================================================================================================================================================================//
                            //Employee - Manager - Delete Staff TAB//
//================================================================================================================================================================//
//Open Delete Staff
function openManagerDeleteStaffs() {
    closeOtherPagesForStaffHome();
    var userIdJSON = sessionStorage.getItem("currentUser");
    try {
        var userId = JSON.parse(userIdJSON);
        let employee = employeeData.find(employee => employee.emp_login_id === userId);
        if (isUserBankManager(userId, employee)) {
            document.getElementById("bankStaffFunctions").style.display = "none";
            document.getElementById("bankManagerFunctions").style.display = "";
            document.getElementById("userInfo").style.display = "none";
            document.getElementById("viewAllStaffsDiv").style.display = "none";
            document.getElementById("bankWideTransactionsDiv").style.display = "none";
            document.getElementById("addNewStaffDiv").style.display = "none";
            document.getElementById("deleteStaffDiv").style.display = "";
            document.getElementById("getUserNameToDeleteDiv").style.display = "";
            document.getElementById("empDetails").style.display = "none";
            document.getElementById("deleteStaffBtn").style.display = "none";
            document.getElementById("addNewStaffDiv").style.display = "none";
            document.getElementById("msgForUserInDeleteStaff").innerHTML = "";
            document.getElementById("staffToDeleteIDfield").value = "";
        } else {
            throw new Error('Invalid User!');        
        }
    } catch (error) {
        console.log(error);
        logout();
    }
}

//Validations for delete staff
function validateStaffToDelete() {
    closeOtherPagesForStaffHome();
    var userIdJSON = sessionStorage.getItem("currentUser");
    try {
        var userId = JSON.parse(userIdJSON);
        let employee = employeeData.find(employee => employee.emp_login_id === userId);
        if (isUserBankManager(userId, employee)) {
            let msgDiv = document.getElementById("msgForUserInDeleteStaff");
            var staffIdToDelete = document.getElementById("staffToDeleteIDfield").value.trim();
            if (staffIdToDelete === "") {
                msgDiv.innerHTML = "<p style=color:red>Enter the user ID to be removed</p>";
            } else if (!validateEmail(staffIdToDelete)) {
                msgDiv.innerHTML = "<p style=color:red>Please enter a valid mail ID</p>";    
            } else if (!employeeData.some(employee => employee.emp_login_id === staffIdToDelete)) { 
                msgDiv.innerHTML = "<p style=color:red>This ID doesn't exist, try different ID</p>";        
            } else {
                let employeeToDelete = employeeData.find(employee => employee.emp_login_id === staffIdToDelete);
                if (employee.bank_id != employeeToDelete.bank_id || employeeToDelete.role_id==1) {
                    msgDiv.innerHTML = "<p style=color:red>You don't have access to delete this staff.</p>";                    
                } else {
                    document.getElementById("getUserNameToDeleteDiv").style.display = "none";
                    document.getElementById("empDetails").style.display = "";
                    document.getElementById("deleteStaffBtn").style.display = "";
                    document.getElementById("empDetails").innerHTML = "<br><p> Login ID: " + staffIdToDelete + "</p><br><p> Name: " + employeeToDelete.emp_name + "</p><br>";
                }
            } 
        } else {
            throw new Error('Invalid User!');
        } 
    } catch (error) {
        console.log(error);
        logout();
    }  
}

//Delete Staff Function
function deleteStaff() {
    closeOtherPagesForStaffHome();
    var userIdJSON = sessionStorage.getItem("currentUser");
    try {
        var userId = JSON.parse(userIdJSON);
        let employee = employeeData.find(employee => employee.emp_login_id === userId);
        if (isUserBankManager(userId, employee)) {
            validateAndDeleteStaff(employee);
        } else {
            throw new Error('Invalid User!');
        }    
    } catch (error) {
        console.log(error);
        logout();
    }
}

function validateAndDeleteStaff(employee) {
    let msgDiv = document.getElementById("msgForUserInDeleteStaff");
    var staffIdToDelete = document.getElementById("staffToDeleteIDfield").value.trim();
    if (staffIdToDelete === "") {
        msgDiv.innerHTML = "<p style=color:red>Enter the user ID to be removed</p>";
    } else if (!validateEmail(staffIdToDelete)) {
        msgDiv.innerHTML = "<p style=color:red>Please enter a valid mail ID</p>";    
    } else if (!employeeData.some(employee => employee.emp_login_id === staffIdToDelete)) { 
        msgDiv.innerHTML = "<p style=color:red>This ID doesn't exist, try different ID</p>";        
    } else {
        let employeeToDelete = employeeData.find(employee => employee.emp_login_id === staffIdToDelete);
        if (employee.bank_id != employeeToDelete.bank_id || employeeToDelete.role_id==1) {
            msgDiv.innerHTML = "<p style=color:red>You don't have access to delete this staff.</p>";                    
        } else {
            indexToRemove = employeeData.findIndex(employee => employee.emp_login_id === staffIdToDelete);
            employeeData.splice(indexToRemove, 1);
            document.getElementById("getUserNameToDeleteDiv").style.display = "none";
            document.getElementById("empDetails").style.display = "none";
            document.getElementById("deleteStaffBtn").style.display = "none";
            msgDiv.innerHTML = "<p style=color:green>Staff Deleted Successfully!</p>";
        }
    }
}

//================================================================================================================================================================//
                            //Employee - Manager - Bank Wide Transactions TAB//
//================================================================================================================================================================//
//Open Bank Wide Transactions
function openBankWideTransactions() {
    closeOtherPagesForStaffHome();
    var userIdJSON = sessionStorage.getItem("currentUser");
    try {
        var userId = JSON.parse(userIdJSON);
        let employee = employeeData.find(employee => employee.emp_login_id === userId);
        if (isUserBankManager(userId, employee)) {
            fetchAndDisplayBankWideTransactions(employee);
            document.getElementById("userInfo").style.display = "none";
            document.getElementById("viewAllStaffsDiv").style.display = "none";
            document.getElementById("bankWideTransactionsDiv").style.display = "";
            document.getElementById("addNewStaffDiv").style.display = "none";
            document.getElementById("deleteStaffDiv").style.display = "none";
        } else {
            throw new Error('Invalid User!');
        }  
    } catch (error) {
        console.log(error);
        logout();
    }
}

function fetchAndDisplayBankWideTransactions(employee) {
    let bankWideTransactions = transactionData.filter(transaction => transaction.bank_id === employee.bank_id).reverse();
    if (bankWideTransactions.length === 0) {
        document.getElementById("listAllTransactions").innerHTML = "<p> No Transactions till now</p>";
    } else {
        out = "<table> \
            <tr> \
                <th>Date | Time</th> \
                <th>From Account Number	</th> \
                <th>To Account Number</th> \
                <th>Amount Transferred</th> \
                <th>Transaction Note</th> \
            </tr>";
            for (let i = 0; i < bankWideTransactions.length; i++) {
                out += "<tr><td>" + bankWideTransactions[i].date_time + "</td> \
                        <td>" + bankWideTransactions[i].from_acc_no + "</td> \
                        <td>" + bankWideTransactions[i].to_acc_no + "</td> \
                        <td>" + bankWideTransactions[i].amount_transfered + "</td> \
                        <td>" + bankWideTransactions[i].trans_note + "</td> \
                    </tr>";
            }
        out += "</table>";
        document.getElementById("listAllTransactions").innerHTML = out;
    }
}

//================================================================================================================================================================//
//================================================================================================================================================================//
//================================================================================================================================================================//
                            // SignUp Module//
//================================================================================================================================================================//
//================================================================================================================================================================//
//================================================================================================================================================================//
//Open SignUp
function openSignUp() {
    document.getElementById("signupDivision").style.display = "";
    document.getElementById("displayMsgSignUp").innerHTML = "";
        document.getElementById("userNameIdSignUp").style.display = "";
        document.getElementById("bankDetailsSignUp").style.display = "none";
        document.getElementById("branchDetailsSignUp").style.display = "none";
        document.getElementById("otherDetailsSignUp").style.display = "none";
        document.getElementById("errorMsgSignUp").style.display = "";
    openSignUpPage()
}

//Check userID exist
function checkUserExist() {
    openSignUpPage();
    var userName = document.getElementById("nameFieldSignUp").value.trim();
    var userId = document.getElementById("loginIdFieldSignUp").value.trim();
    let errorDiv = document.getElementById("errorMsgSignUp");
    if (userName === "" && userId === "") {
        errorDiv.innerHTML = "<p style=color:red>Please enter your user name and user ID to signup</p>";
    } else if (userName === "") {
        errorDiv.innerHTML = "<p style=color:red>Please enter your user name to signup</p>";
    } else if (userId === "") {
        errorDiv.innerHTML = "<p style=color:red>Please enter your user ID to signup</p>";
    } else if (userName.length < 2 || userName.length > 30) {
        errorDiv.innerHTML = "<p style=color:red>User Name should be minimum of 2 characters to maximum of 30 characters</p>";
    } else if (!isAlphabet(userName)) {
        errorDiv.innerHTML = "<p style=color:red>Enter only alphabets in name.</p>";        
    } else if (userId.length < 5 || userId.length > 320) {
        errorDiv.innerHTML = "<p style=color:red>Login ID must be minimum 5 characters and maximum of 320 characters</p>";
    } else if (!validateEmail(userId)) {
        errorDiv.innerHTML = "<p style=color:red>Enter a valid mail ID</p>";
    } else if (customerData.find(customer => customer.cust_login_id === userId)) {
        errorDiv.innerHTML = "<p style=color:red>This login ID already exist! Click Login or enter different ID to register.</p>";
    } else {
        errorDiv.innerHTML = "<p></p>";
        fetchUniqueBanksAndPopulate();
        document.getElementById("userNameIdSignUp").style.display = "none";
        document.getElementById("bankDetailsSignUp").style.display = "";
        document.getElementById("branchDetailsSignUp").style.display = "none";
        document.getElementById("otherDetailsSignUp").style.display = "none";
        document.getElementById("errorMsgSignUp").style.display = "none";
        document.getElementById("nextBtnSignUp").style.display = "none";
    }
}

//Get the unique banks 
function fetchUniqueBanksAndPopulate() {
    let uniqueBanks = Array.from(new Set(bankData.map(bank => bank.bank_name)));
    let out = "";
    for (let i = 0; i < uniqueBanks.length; i++) {
        out += "<option value=" + uniqueBanks[i] + ">" + uniqueBanks[i] + "</option>";
    }
    document.getElementById("bankSelectField").innerHTML = out;
};

//Get branch for selected bank Function
function getBranchForBank() {
    openSignUpPage();
    var bankField = document.getElementById("bankSelectField");
    var selectedBank = bankField.options[bankField.selectedIndex].value.trim();
    if (typeof bankData.find(b => b.bank_name === selectedBank) !== "undefined") {
        let branchesForBank = bankData.filter(bank => bank.bank_name === selectedBank);
        let out = "";
        for (let i = 0; i < branchesForBank.length; i++) {
            out += "<option value=" + branchesForBank[i].branch_name + ">" + branchesForBank[i].branch_name + "</option>";
        }
        document.getElementById("branchSelectField").innerHTML = out;
        document.getElementById("userNameIdSignUp").style.display = "none";
        document.getElementById("bankDetailsSignUp").style.display = "none";
        document.getElementById("branchDetailsSignUp").style.display = "";
        document.getElementById("otherDetailsSignUp").style.display = "none";
        document.getElementById("errorMsgSignUp").style.display = "none";
        document.getElementById("nextBtnSignUp").style.display = "none";        
    } else {
        document.getElementById("errorMsgForBankSignUp").innerHTML = "<p style=color:red>Error occured, please refresh and try again.</p>";
    }

}

//Open other details in signup
function openOtherDetailsForSignUp() {
    openSignUpPage();
    var bankField = document.getElementById("bankSelectField");
    var selectedBank = bankField.options[bankField.selectedIndex].value.trim();
    var branchField = document.getElementById("branchSelectField");
    var selectedBranch = branchField.options[branchField.selectedIndex].value.trim();
    let bank = bankData.find(b => b.bank_name === selectedBank && b.branch_name === selectedBranch);
    if (typeof bank !== "undefined") {
        document.getElementById("userNameIdSignUp").style.display = "none";
        document.getElementById("bankDetailsSignUp").style.display = "none";
        document.getElementById("branchDetailsSignUp").style.display = "none";
        document.getElementById("otherDetailsSignUp").style.display = "";
        document.getElementById("errorMsgSignUp").style.display = "none";
        document.getElementById("nextBtnSignUp").style.display = "none";
    } else {
        document.getElementById("errorMsgForBranchSignUp").innerHTML = "<p style=color:red>Error Occured, please refresh and try again!</p>";
    }    
}

//SignUp
function signUp() {
    openSignUpPage();
    var userName = document.getElementById("nameFieldSignUp").value.trim();
    var userId = document.getElementById("loginIdFieldSignUp").value.trim();
    var userBankName = document.getElementById("bankSelectField").value.trim();
    var userBranchName = document.getElementById("branchSelectField").value.trim();
    var userPass = document.getElementById("passFieldSignUp").value;
    var userAadhar = document.getElementById("aadharFieldSignUp").value.trim();
    var userPan = document.getElementById("panFieldSignUp").value.trim();
    var userPhone = document.getElementById("phoneFieldSignUp").value.trim();
    var userAddress = document.getElementById("addressFieldSignUp").value.trim();
    validateAndCreateNewUser(userName, userId, userBankName, userBranchName, userPass, userAadhar, userPan, userPhone, userAddress);
}

//validations for signup
function validateAndCreateNewUser(userName, userId, userBankName, userBranchName, userPass, userAadhar, userPan, userPhone, userAddress) {
    let msgDiv = document.getElementById("displayMsgSignUp");
    let bank = bankData.find(b => b.bank_name === userBankName && b.branch_name === userBranchName);
    if (userName === "" || userId === "" || userBankName === "" || userBranchName === "" || userPass === "" || userAadhar === "" || userPan === "" || userPhone === "" || userAddress === "") {
        msgDiv.innerHTML = "<p style=color:red>Please enter all the details to signup</p>";
    } else if (userName.length < 2 || userName.length > 30) {
        msgDiv.innerHTML = "<p style=color:red>User Name should be minimum of 2 characters to maximum of 30 characters</p>";
    } else if (!isAlphabet(userName)) {
        msgDiv.innerHTML = "<p style=color:red>Enter only alphabets in name.</p>";        
    } else if (userId.length < 5 || userId.length > 320) {
        msgDiv.innerHTML = "<p style=color:red>Login ID must be minimum 5 characters and maximum of 320 characters</p>";
    } else if (!validateEmail(userId)) {
        msgDiv.innerHTML = "<p style=color:red>Enter a valid mail ID</p>";
    } else if (customerData.find(customer => customer.cust_login_id === userId)) {
        msgDiv.innerHTML = "<p style=color:red>This login ID already exist! Click Login or enter different ID to register.</p>";
    } else if (userPass.length < 3 || userPass.length > 16) {
        msgDiv.innerHTML = "<p style=color:red>Password should be minimum 3 characters and maximum of 16 characters.</p>";
    } else if (typeof bank === "undefined") {
        msgDiv.innerHTML = "<p style=color:red>Error occured in Bank/Branch selection, please refresh & try again!</p>";
    } else if (isNaN(userPhone)) {
        msgDiv.innerHTML = "<p style=color:red>Phone number should not have text, please enter number.</p>";
    } else if (userPhone.length != 10) {
        msgDiv.innerHTML = "<p style=color:red>Invalid phone number, Please try again(10 digits is valid).</p>";
    } else if (userPan.length != 10) {
        msgDiv.innerHTML = "<p style=color:red>Invalid PAN number, Please try again(10 digits is valid).</p>";
    } else if (!validatePANnumber(userPan)) {
        msgDiv.innerHTML = "<p style=color:red>Invalid PAN number, Example PAN number => INFPK6487M.</p>";
    } else if (isNaN(userAadhar)) {
        msgDiv.innerHTML = "<p style=color:red>Aadhar should not have text, please enter number.</p>";
    } else if (userAadhar.length != 12) {
        msgDiv.innerHTML = "<p style=color:red>Invalid Aadhar number, Please try again(12 digits is valid).</p>";
    } else if (userAddress.length < 3 || userAddress.length > 50) {
        msgDiv.innerHTML = "<p style=color:red>Address should be minimum 3 characters and maximum 50 characters.</p>";
    } else if (typeof customerData.find(c => c.aadhar === userAadhar) !== "undefined") {
        msgDiv.innerHTML = "<p style=color:red>Aadhar number already exists, go back and login or try giving different Aadhar number.</p>";
    } else if (typeof customerData.find(c => c.pan === userPan) !== "undefined") {
        msgDiv.innerHTML = "<p style=color:red>PAN number already exists, go back and login or try giving different PAN number.</p>";
    } else if (typeof customerData.find(c => c.phone === userPhone) !== "undefined") {
        msgDiv.innerHTML = "<p style=color:red>Phone number already exists, go back and login or try giving different Phone number.</p>";
    } else {
        customerData.push({
            "cust_id": generateUniqueID(8),
            "cust_login_id": userId,
            "cust_pass": userPass,
            "bank_id": bank.bank_id,
            "cust_name": userName,
            "phone": userPhone,
            "pan": userPan,
            "aadhar": userAadhar,
            "address": userAddress
        });
        let customer = customerData.find(c => c.cust_login_id === userId);
        accountData.push({
            "account_id": generateUniqueID(8),
            "account_num": generateUniqueID(11),
            "amount": "0",
            "cust_id": customer.cust_id,
            "bank_id": bank.bank_id
        });
        console.log(customerData);
        console.log(accountData);
        document.getElementById("signupDivision").style.display = "none";
        msgDiv.innerHTML = "<p style=color:green>User created successfully!</p>";
        document.getElementById("nameFieldSignUp").value = "";
        document.getElementById("loginIdFieldSignUp").value = "";
        document.getElementById("bankSelectField").value = "";
        document.getElementById("branchSelectField").value = "";
        document.getElementById("passFieldSignUp").value = "";
        document.getElementById("aadharFieldSignUp").value = "";
        document.getElementById("panFieldSignUp").value = "";
        document.getElementById("phoneFieldSignUp").value = "";
        document.getElementById("addressFieldSignUp").value = "";
    }
}

//================================================================================================================================================================//
//================================================================================================================================================================//
//================================================================================================================================================================//
                            // Open Modules //
//================================================================================================================================================================//
//================================================================================================================================================================//
//================================================================================================================================================================//

function openLoginPage() {
    document.getElementById("loginPageDiv").style.display = "";
    document.getElementById("signUpPageDiv").style.display = "none";
    document.getElementById("customerHomePageDiv").style.display = "none";
    document.getElementById("staffHomePageDiv").style.display = "none";
}

function openSignUpPage() {
    document.getElementById("loginPageDiv").style.display = "none";
    document.getElementById("signUpPageDiv").style.display = "";
    document.getElementById("customerHomePageDiv").style.display = "none";
    document.getElementById("staffHomePageDiv").style.display = "none";   
}

function openCustomerHomePage() {
    document.getElementById("loginPageDiv").style.display = "none";
    document.getElementById("signUpPageDiv").style.display = "none";
    document.getElementById("customerHomePageDiv").style.display = "";
    document.getElementById("staffHomePageDiv").style.display = "none";   
    openCustomerDetails();
}

function openStaffHomePage() {
    document.getElementById("loginPageDiv").style.display = "none";
    document.getElementById("signUpPageDiv").style.display = "none";
    document.getElementById("customerHomePageDiv").style.display = "none";
    document.getElementById("staffHomePageDiv").style.display = "";   
    openEmployeeDetails();   
}

function closeOtherPagesForCustomerHome() {
    document.getElementById("loginPageDiv").style.display = "none";
    document.getElementById("signUpPageDiv").style.display = "none";
    document.getElementById("customerHomePageDiv").style.display = "";
    document.getElementById("staffHomePageDiv").style.display = "none"; 
}

function closeOtherPagesForStaffHome() {
    document.getElementById("loginPageDiv").style.display = "none";
    document.getElementById("signUpPageDiv").style.display = "none";
    document.getElementById("customerHomePageDiv").style.display = "none";
    document.getElementById("staffHomePageDiv").style.display = "";   
}


//================================================================================================================================================================//
//================================================================================================================================================================//
//================================================================================================================================================================//


