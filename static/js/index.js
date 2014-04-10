$(document).ready(function() {
    $("#username, #email").blur(function(e) {
        $.post("/validate/register", {value:e.target.value}, function(data) {
            if (data.Exist == true) {
                $(e.target).css("border-color", "#e82c4f");
            }
        });
    });
    $("form").submit(function() {
        if($("#email").val() == "" || $("#password").val() == "" || $("#username").val() == "") {
            $("#warnmsg").html("Incomplete form.");
            return false;
        }
    });
});