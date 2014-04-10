var Colors = new function()
{
  this.ColorFromHSV = function(hue, sat, val)
  {
    var color = new Color();
    color.SetHSV(hue,sat,val);
    return color;
  }

  this.ColorFromRGB = function(r, g, b)
  {
    var color = new Color();
    color.SetRGB(r,g,b);
    return color;
  }

  this.ColorFromHex = function(hexStr)
  {
    var color = new Color();
    color.SetHexString(hexStr);
    return color;
  }

  function Color()
  {
    //Stored as values between 0 and 1
    var red = 0;
    var green = 0;
    var blue = 0;

    //Stored as values between 0 and 360
    var hue = 0;

    //Strored as values between 0 and 1

    var saturation = 0;
    var value = 0;

    this.SetRGB = function(r, g, b)
    {
      if (isNaN(r) || isNaN(g) || isNaN(b))
        return false;

      r = r/255.0;
      red = r > 1 ? 1 : r < 0 ? 0 : r;
      g = g/255.0;
      green = g > 1 ? 1 : g < 0 ? 0 : g;
      b = b/255.0;
      blue = b > 1 ? 1 : b < 0 ? 0 : b;

      calculateHSV();
      return true;
    }

    this.Red = function() { return Math.round(red*255); }

    this.Green = function() { return Math.round(green*255); }

    this.Blue = function() { return Math.round(blue*255); }

    this.SetHSV = function(h, s, v)
    {
      if (isNaN(h) || isNaN(s) || isNaN(v))
        return false;

      hue = (h >= 360) ? 359.99 : (h < 0) ? 0 : h;
      saturation = (s > 1) ? 1 : (s < 0) ? 0 : s;
      value = (v > 1) ? 1 : (v < 0) ? 0 : v;
      calculateRGB();
      return true;
    }

    this.Hue = function()
    { return hue; }

    this.Saturation = function()
    { return saturation; }

    this.Value = function()
    { return value; } 

    this.SetHexString = function(hexString)
    {
      if(hexString == null || typeof(hexString) != "string")
        return false;

      if (hexString.substr(0, 1) == '#')
        hexString = hexString.substr(1);

      if(hexString.length != 6)
        return false;

      var r = parseInt(hexString.substr(0, 2), 16);
      var g = parseInt(hexString.substr(2, 2), 16);
      var b = parseInt(hexString.substr(4, 2), 16);

      return this.SetRGB(r,g,b);
    }

    this.HexString = function()
    {
      var rStr = this.Red().toString(16);
      if (rStr.length == 1)
        rStr = '0' + rStr;
      var gStr = this.Green().toString(16);
      if (gStr.length == 1)
        gStr = '0' + gStr;
      var bStr = this.Blue().toString(16);
      if (bStr.length == 1)
        bStr = '0' + bStr;
      return ('#' + rStr + gStr + bStr).toUpperCase();
    }

    this.Complement = function()
    {
      var newHue = (hue>= 180) ? hue - 180 : hue + 180;
      var newVal = (value * (saturation - 1) + 1);
      var newSat = (value*saturation) / newVal;
      var newColor = new Color();
      newColor.SetHSV(newHue, newSat, newVal);
      return newColor;
    }

    function calculateHSV()
    {
      var max = Math.max(Math.max(red, green), blue);
      var min = Math.min(Math.min(red, green), blue);

      value = max;

      saturation = 0;
      if(max != 0)
        saturation = 1 - min/max;

      hue = 0;
      if(min == max)
        return;

      var delta = (max - min);
      if (red == max)
        hue = (green - blue) / delta;
      else if (green == max)
        hue = 2 + ((blue - red) / delta);
      else
        hue = 4 + ((red - green) / delta);
      hue = hue * 60;
      if(hue <0)
        hue += 360;
    }

    function calculateRGB()
    {
      red = value;
      green = value;
      blue = value;

      if(value == 0 || saturation == 0)
        return;

      var tHue = (hue / 60);
      var i = Math.floor(tHue);
      var f = tHue - i;
      var p = value * (1 - saturation);
      var q = value * (1 - saturation * f);
      var t = value * (1 - saturation * (1 - f));
      switch(i)
      {
        case 0:
          red = value; green = t; blue = p;
          break;
        case 1:
          red = q; green = value; blue = p;
          break;
        case 2:
          red = p; green = value; blue = t;
          break;
        case 3:
          red = p; green = q; blue = value;
          break;
        case 4:
          red = t; green = p; blue = value;
          break;
        default:
          red = value; green = p; blue = q;
          break;
      }
    }
  }
}
();

function Position(x, y)
{
  this.X = x;
  this.Y = y;

  this.Add = function(val)
  {
    var newPos = new Position(this.X, this.Y);
    if(val != null)
    {
      if(!isNaN(val.X))
        newPos.X += val.X;
      if(!isNaN(val.Y))
        newPos.Y += val.Y
    }
    return newPos;
  }

  this.Subtract = function(val)
  {
    var newPos = new Position(this.X, this.Y);
    if(val != null)
    {
      if(!isNaN(val.X))
        newPos.X -= val.X;
      if(!isNaN(val.Y))
        newPos.Y -= val.Y
    }
    return newPos;
  }

  this.Min = function(val)
  {
    var newPos = new Position(this.X, this.Y)
    if(val == null)
      return newPos;

    if(!isNaN(val.X) && this.X > val.X)
      newPos.X = val.X;
    if(!isNaN(val.Y) && this.Y > val.Y)
      newPos.Y = val.Y;

    return newPos;  
  }

  this.Max = function(val)
  {
    var newPos = new Position(this.X, this.Y)
    if(val == null)
      return newPos;

    if(!isNaN(val.X) && this.X < val.X)
      newPos.X = val.X;
    if(!isNaN(val.Y) && this.Y < val.Y)
      newPos.Y = val.Y;

    return newPos;  
  }  

  this.Bound = function(lower, upper)
  {
    var newPos = this.Max(lower);
    return newPos.Min(upper);
  }

  this.Check = function()
  {
    var newPos = new Position(this.X, this.Y);
    if(isNaN(newPos.X))
      newPos.X = 0;
    if(isNaN(newPos.Y))
      newPos.Y = 0;
    return newPos;
  }

  this.Apply = function(element)
  {
    if(typeof(element) == "string")
      element = document.getElementById(element);
    if(element == null)
      return;
    if(!isNaN(this.X))
      element.style.left = this.X + 'px';
    if(!isNaN(this.Y))
      element.style.top = this.Y + 'px';  
  }
}