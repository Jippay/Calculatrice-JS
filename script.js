function calc(){
    var chiffre1 = parseFloat(document.forms["calculatrice"].elements["champChiffre1"].value);
    var chiffre2 = parseFloat(document.forms["calculatrice"].elements["champChiffre2"].value);
    var resultat
    if(document.forms["calculatrice"].elements["list"].value == "additionner") {
        var resultat = chiffre1 + chiffre2;
    }
    if(document.forms["calculatrice"].elements["list"].value == "soustraire") {
        var resultat = chiffre1 - chiffre2;
    }
    if(document.forms["calculatrice"].elements["list"].value == "multiplier") {
        var resultat = chiffre1 * chiffre2;
    }
    if(document.forms["calculatrice"].elements["list"].value == "diviser") {
        var resultat = chiffre1 / chiffre2;
    }
    
    document.forms["calculatrice"].elements["result"].value = resultat;

};
