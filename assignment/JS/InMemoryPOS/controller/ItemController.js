let itemCode;
let itemName;
let itemPrice;
let itemQty;
let selectedItemCode
$(window).on('load',function () {
    $('#btnItemSave').prop('disabled',true);
});

function getAllItemForTextField() {
    itemCode = $('#itemCode').val();
    itemName = $('#itemName').val();
    itemPrice = $('#itemPrice').val();
    itemQty = $('#itemQty').val();

}
$('#btnItemSave').click(function () {
    if (checkAllItem()){
        saveItem();
    }else {
        alert('error');
    }
});

$("#btnGetAllItem").click(function () {
   getAllItems()
});

$('#btnItemUpdate').click(function () {

    if (checkAllItem()){
     updateItem();
    } else {
        alert('error');
    }
});

function saveItem() {


    let itemCodes = $('#itemCode').val();

    if (searchExistItem(itemCodes.trim())) {
        // Swal.fire({
        //     icon: 'error',
        //     title: 'Oops...',
        //     text: 'This Customer Already Exist.'
        // });

        alert('already exist')
    }else {
        getAllItemForTextField();
        let newItem = Object.assign({},item);

        newItem.code = itemCode;
        newItem.name = itemName;
        newItem.price = itemPrice;
        newItem.qty = itemQty;


        itemDB.push(newItem);

        Swal.fire({
            position: 'top-end',
            icon: 'success',
            title: 'Item has been saved',
            showConfirmButton: false,
            timer: 1500

        })

        loadAllItemData();
        clearItemTextField();
        bindEvent()

    }

}

function updateItem() {
    getAllItemForTextField();

    Swal.fire({
        title: 'Do you want to save the changes?',
        showDenyButton: true,
        showCancelButton: true,
        confirmButtonText: 'Save',
        denyButtonText: `Don't save`,
    }).then((result) => {

        if (result.isConfirmed) {



            let index = -1;

            for (let itemObj of itemObj) {
                if (itemObj.code == selectedItemCode) {
                    index = itemDB.indexOf(itemObj);
                }
            }


            itemDB[index].code = itemCode;
            itemDB[index].name = itemName;
            itemDB[index].price = itemPrice;
            itemDB[index].qty = itemQty;

            loadAllItemData();
            clearItemTextField();
            $('#itemCode').prop('disabled', true);
            setItemDataTextField();
            Swal.fire('Saved!', '', 'success');


        } else if (result.isDenied) {
            Swal.fire('Changes are not saved', '', 'info')
        }


    });
}

function searchExistItem(code) {
    return itemDB.find(function (item) {
        return item.code == code;
    });
}

function loadAllItemData() {
    $('#tblItem').empty();
    for (var item of itemDB){
        var row = `<tr><td>${item.code}</td><td>${item.name}</td><td>${item.price}</td><td>${item.qty}</td></tr>`;
        $('#tblItem').append(row)
    }
}

function setItemDataTextField(code,name,price,qty) {
    $('#itemCode').val(code);
    $('#itemName').val(name);
    $('#itemPrice').val(price);
    $('#itemQty').val(qty);

}
function getAllItems() {

    $("#tblItem").empty();

    for (let i = 0; i < itemDB.length; i++) {
        let code = itemDB[i].code;
        let name = itemDB[i].name;
        let price = itemDB[i].price;
        let qty = itemDB[i].qty;


        let row = `<tr>
                     <td>${code}</td>
                     <td>${name}</td>
                     <td>${price}</td>
                     <td>${qty}</td>
                    
                    </tr>`;

        $("#tblItem").append(row);

        bindEvent();
    }
}
function bindEvent() {
    $('#tblItem>tr').click(function () {

        let code = $(this).children().eq(0).text();
        let name = $(this).children().eq(1).text();
        let price = $(this).children().eq(2).text();
        let qty = $(this).children().eq(3).text();


        setItemDataTextField(code,name,price,qty);
        $('#itemCode').prop('disabled', true);
        selectedItemCode = $('#itemCode').val();
    })
}