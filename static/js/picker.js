$(document).ready(function() {
    var hueBarPressed = false;
    var color = $("#colorhex").val();
    var currentColor = Colors.ColorFromHex(color);
    console.log("Color: ", color);
    var colorValid = true;
    
    updateGradientBox();
    updateQuickColor(currentColor);
    updateStaticColor();
    
    $("#colorhex").blur(function() {
        var flag = currentColor.SetHexString($("#colorhex").val());
        if(flag == true) {
            $("#colorhex").css("border-color", "#12c214");
            updateGradientBox();
            updateQuickColor(currentColor);
            updateStaticColor();
        } else {
            $("#colorhex").css("border-color", "#e82c4f");
            colorValid = false;
        }
    });
    
    $("#gradientBox").on("mousemove", function(e) {
        posx = e.offsetX;
        posy = e.offsetY;
        var color = Colors.ColorFromHSV(currentColor.Hue(), 1-posy/255.0, posx/255.0);
        updateQuickColor(color);
    });
    
    $("#gradientBox").click(function(e) {
        posx = e.offsetX;
        posy = e.offsetY;
        var color = Colors.ColorFromHSV(currentColor.Hue(), 1-posy/255.0, posx/255.0);
        currentColor = color;
        updateStaticColor();
    });
    
    $("#hueBarDiv").on("mousedown", function(e) {
        hueBarPressed = true;
        hueColorChanged(e.offsetY);
        console.log("hue bar pressed.");
    });
    
    $("#hueBarDiv").on("mousemove", function(e) {
        if(hueBarPressed) {
            hueColorChanged(e.offsetY);
            console.log("hue color changed.");
        }
    });
    
    $("#hueBarDiv").on("mouseup", function(e) {
        hueBarPressed = false;
        hueColorChanged(e.offsetY);
        updateQuickColor(currentColor);
    });
    
    $("#hexBox").change(function(e) {
        console.log(e);
    });
        
    function hueColorChanged(posY) {
        currentColor.SetHSV((256 - posY)*359.99/255, currentColor.Saturation(), currentColor.Value());
            updateQuickColor(currentColor);
            updateGradientBox();
    }
    
    function updateTable() {
        $("#hexBox").val(currentColor.HexString());
        
        $("#redBox").val(currentColor.Red());
        $("#greenBox").val(currentColor.Green());
        $("#blueBox").val(currentColor.Blue());
        
        $("#hueBox").val(parseInt(currentColor.Hue()));
        $("#saturationBox").val(currentColor.Saturation().toString().substr(0, 3));
        $("#valueBox").val(currentColor.Value().toString().substr(0, 3));
    }
    
    function updateQuickColor(color) {
        $("#quickColor").css("background-color", color.HexString());
        currentColor = color;
        updateTable();
    }
    
    function updateStaticColor() {
        $("#staticColor").css("background-color", currentColor.HexString());
        $("#colorhex").val(currentColor.HexString());
    }
    
    function updateGradientBox() {
        $("#gradientBox").css("background-color", Colors.ColorFromHSV(currentColor.Hue(), 1, 1).HexString());
    }
    
    $("form").submit(function() {
        if($("#colorhex").val() == "" || $("#colorname").val() == "" || colorValid == false) {
            $("#warnmsg").html("Incomplete form.");
            return false;
        }
    });
});