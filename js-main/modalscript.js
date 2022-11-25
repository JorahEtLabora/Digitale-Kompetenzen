

/* Toasts */
/* Cookies abgelehnt */
$(document).ready(function(){
    $("#cookie-dismiss").click(function(){
        $("#rejectedToast").toast("show");
    });
});
/* Cookies akzeptiert */
$(document).ready(function(){
    $("#cookie-accept").click(function(){
        $("#acceptedToast").toast("show");
    });
});