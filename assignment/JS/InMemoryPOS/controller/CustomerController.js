
saveCustomer();

let customerId;
let customerFName;
let customerLName;
let customerAddress;
let customerSalary;


function getAllCustomerForTextField() {
     customerId = $('#customerId').val();
     customerFName = $('#cusFirstName').val();
     customerLName = $('#cusLastName').val();
    customerAddress = $('#cusAddress').val();
     customerSalary = $('#cusSalary').val();
}

function saveCustomer() {
    $('#btnCusSave').click(function () {

        alert('moda samudhi');
        let customerIds = $('#customerId').val();


        if (searchExistCustomer(customerIds)){
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Something went wrong!',
                footer: '<a href="">Why do I have this issue?</a>'
            })
        }else {
            getAllCustomerForTextField();
            let newCustomer = Object.assign({},customer);

            newCustomer.id = customerId;
            newCustomer.firstName = customerFName;
            newCustomer.lastName = customerLName;
            newCustomer.address = customerAddress;
            newCustomer.salary = customerSalary;

            customerDB.push(newCustomer);

            Swal.fire({
                icon:  'success',
                title: 'Saved',
            })

            loadAllData();
            setDataTextField("","","","","")

        }
    });
}

function searchExistCustomer(id) {
    return customerDB.find(function (customer) {
        return customer.id == id;
    });
}

function loadAllData() {
    for (var customer of customerDB){
        var row = `<tr><td>${customer.id}</td><td>${customer.firstName}</td><td>${customer.lastName}</td><td>${customer.address}</td><td>${customer.salary}</td></tr>`;
        $('#tblCustomer').append(row)
    }
}

function setDataTextField(id,firstName,lastName,address,salary) {
    $('#customerId').val(id);
    $('#cusFirstName').val(firstName);
    $('#cusLastName').val(lastName);
    $('#cusAddress').val(address);
    $('#cusSalary').val(salary);
}
