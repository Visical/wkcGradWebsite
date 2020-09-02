
function validateForm(){
    var p = document.forms["pictureForm"]["pword"].value;
    if (p == ""){
        alert("Password must be filled out");
        return false;
    } 
    var len = p.length;
    if(len != 8){
        alert("Password is incorrect");
        return false;
    }

    var bool = decrypt(p);
    console.log(bool);
    if(bool == false){
        alert("Password is incorrect");
        return bool;
    }

    var picsdownload = "<h4>Click a link to download the file</h4>";
    picsdownload += "<p><a href=\"pictures/BalconyGirls1.zip\" download>" + "Girls Balcony 1" + "</a><br>";
    picsdownload += "<p><a href=\"pictures/BalconyGirls2.zip\" download>" + "Girls Balcony 2" + "</a><br>";
    picsdownload += "<p><a href=\"pictures/BalconyGirls3.zip\" download>" + "Girls Balcony 3+" + "</a><br>";
    picsdownload += "<p><a href=\"pictures/BalconyGuys.zip\" download>" + "Guys Balcony" + "</a><br>";
    picsdownload += "<p><a href=\"pictures/BalconyGroups.zip\" download>" + "Group Balcony" + "</a><br>";
    picsdownload += "<p><a href=\"pictures/Speeches.zip\" download>" + "Speeches" + "</a><br>";
    picsdownload += "<a href=\"pictures/GrandMarchLineUp.zip\" download>" + "Grand March Line Up" + "</a></p><br>";

    document.getElementById("shown-body").innerHTML = picsdownload;

    return false;

}

function decrypt(p){

    var pw = "DEx9eZFZ";
    var bool = false;
    var letters = [];
    for (var i = 0; i < p.length; i++){
        var l;
        if(i >= 5){
            l = p.substring(i, i + 1);
            letters[i - 5] = l;
        } else {
            l = p.substring(i, i + 1);
            letters[i + 3] = l;
        }
    }
    var res = letters.join("");
    console.log(res);
    if (res == pw){
        bool = true;
    }
    return bool;
}