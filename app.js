function cross(){
    var mystr = document.calc.txt.value;
    var modified = mystr.slice(0, -1); 
    document.calc.txt.value = modified;
}