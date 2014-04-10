$(document).ready(function() {
    console.log(document.cookie);
    $(".tilecolor").click(function(e) {
        $(e.target.parentElement).fadeOut();
        console.log($(e.target.parentElement).children());
        var color = {};
        var nodes = $(e.target.parentElement).children();
        color.name = nodes.eq(1).html();
        color.hex = nodes.eq(2).html();
        console.log(JSON.stringify(color));
        $.post("/collection", {colorname: color.name}, function(data) {});
    });
});