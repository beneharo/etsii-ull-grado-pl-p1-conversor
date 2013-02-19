function calculate() {
    var result;
    var original = document.getElementById("original");
    var converted = document.getElementById("converted");
    var temp = original.value;
    var regexp = /-?[0-9]+(\.[0-9]+)?\s?(C|c|F|f)/g;
    
    var m = temp.match(regexp);
    
    if (m) {
        var num = m.toString().match(/-?[0-9]+(\.[0-9]+)?/gi);
        var type = m.toString().match(/c|f/i);
        num = parseFloat(num);
        if (type == 'c' || type == 'C') {
            result = (num * 9 / 5) + 32;
            result = result + "F";
        } else {
            result = (num - 32) * 5 / 9;
            result = result + "C";
        }
        converted.innerHTML = result;
    } else {
        converted.innerHTML = "ERROR! Try something like '-4.2C' instead";
    }
}
