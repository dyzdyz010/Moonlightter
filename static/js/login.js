$(document).ready(function() {
    $("#email").blur(function (e) {
        $.post("/validate/login", {email:e.target.value}, function(data) {
            if (data.Valid == false) {
                $(e.target).css("border-color", "#e82c4f");
            }
        });
    });
    $("form").submit(function() {
        if($("#email").val() == "" || $("#password").val() == "") {
            $("#warnmsg").html("Incomplete form.");
            return false;
        }
    });
});