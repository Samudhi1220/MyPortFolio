const ORDER_ID_REGEX = /^(OR00-)[0-9]{3}$/;
const QTY_REGEX = /[0-9]{1,9}/;

let o_vArray = new Array();
o_vArray.push({field: $("#orderId"), regEx: ORDER_ID_REGEX});
o_vArray.push({field: $("#orderQTY"), regEx: QTY_REGEX});

function checkOrderValidation(object) {
    if (object.regEx.test(object.field.val())) {
        setOrderTextBorder(true, object);
        return true;
    }
    setOrderTextBorder(false, object);
    return false;
}

function setOrderTextBorder(bol, ob) {
    if (!bol) {
        if (ob.field.val().length >= 1) {
            ob.field.css("border", "2px solid red");
        } else {
            ob.field.css("border", "1px solid #ced4da");
        }
    } else {
        if (ob.field.val().length >= 1) {
            ob.field.css("border", "2px solid green");
        } else {
            ob.field.css("border", "1px solid #ced4da");
        }
    }
}

function checkAllOrderRegex() {
    for (let i = 0; i < o_vArray.length; i++) {
        if (!checkOrderValidation(o_vArray[i])) {
            return false;
        }
    }
    return true;
}
focusNextOrderTextField();
setBtnOrder();
function focusNextOrderTextField() {
    $('#orderQTY,#orderId').on('keyup', function (e) {
        let indexNo = o_vArray.indexOf(o_vArray.find((c) => c.field.attr("id") == e.target.id));

        let checker = checkOrderValidation(o_vArray[indexNo]);

        if (e.key == "Tab") {
            e.preventDefault();
        }
        if (e.key == 'Enter') {

        }
        setBtnOrder();
    });
}


function setBtnOrder() {

    if (checkAllOrderRegex() && parseInt($('#orderQTY').val()) <= parseInt($('#qtyOnHand').val())) {
        $("#btnAddItem").prop("disabled", false);
    } else {
        $("#btnAddItem").prop("disabled", true);
    }
}

function checkOrderedQTY() {

    if ($('#qtyOnHand').val() != '') {
        if (parseInt($('#orderQTY').val()) <= parseInt($('#qtyOnHand').val()) && parseInt($('#orderQTY').val()) != 0) {
            $('#orderQtySpan').css('display', 'none');
            $('#orderQTY').css('border', '1px solid #ced4da');

}
    }
}


