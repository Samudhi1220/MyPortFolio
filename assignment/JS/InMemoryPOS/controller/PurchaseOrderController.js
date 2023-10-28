let orderID;
let orderedCustomerId;
let orderDate;
let orderedItemId;
let price;
let orderQty;
let cash;
let discount;
let order;
let orderDetail;
let finalBalance;
let typeCash;
let subTotal;
let balance;
$('#customer').prop('disabled', true);
$('#address').prop('disabled', true);
$('#itemNam').prop('disabled', true);
$('#qtyOnHand').prop('disabled', true);
$('#price').prop('disabled', true);
function setCustomerId() {
    $('#inputCustomerId').empty();
    $('#inputCustomerId').append('<option selected>Choose...</option>');
    for (let customer of customerDB) {
        let selector = `<option id="selectOption">${customer.id}</option>`
        $('#inputCustomerId').append(selector);
    }
}

function setItemId() {
    $('#inputItemCodes').empty();
    $('#inputItemCodes').append('<option selected>Choose...</option>');
    for (let item of itemDB) {
        let selector = `<option>${item.code}</option>`
        $('#inputItemCodes').append(selector);
    }
}

$('#inputCustomerId').on('change', function () {
    orderedCustomerId = $('#inputCustomerId').val();
    let index = -1;

    for (let customerObj of customerDB) {
        if (customerObj.id == orderedCustomerId) {
            index = customerDB.indexOf(customerObj);
        }
    }

    if (orderedCustomerId == 'Choose...') {
        $('#customer').val('');
        $('#address').val('');
    } else {
        $('#customer').val(customerDB[index].firstName);
        $('#address').val(customerDB[index].address);

    }
});

$('#inputItemCodes').on('change',function () {
    orderedItemId = $('#inputItemCodes').val();
    let index = -1;

    for (let itemObj of itemDB) {
        if (itemObj.code == orderedItemId) {
            index = itemDB.indexOf(itemObj);
        }
    }

    if (orderedItemId == 'Choose...') {
        $('#itemNam').val('');
        $('#price').val('');
        $('#qtyOnHand').val('');
    } else {
        $('#itemNam').val(itemDB[index].name);
        $('#price').val(itemDB[index].price);
        $('#qtyOnHand').val(itemDB[index].qty);

    }


});

$('#date').on('change', function () {
    orderDate = $('#date').val();

})

