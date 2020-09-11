
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
    picsdownload += "<p><a href=\"pictures/OnStageGirls1.zip\" download>" + "On Stage Girls 1" + "</a><br>";
    picsdownload += "<p><a href=\"pictures/OnStageGirls2.zip\" download>" + "On Stage Girls 2" + "</a><br>";
    picsdownload += "<p><a href=\"pictures/OnStageGuys1.zip\" download>" + "On Stage Guys 1" + "</a><br>";
    picsdownload += "<p><a href=\"pictures/OnStageGuys2.zip\" download>" + "On Stage Guys 2" + "</a><br>";
    picsdownload += "<p><a href=\"pictures/Group.zip\" download>" + "Groups" + "</a><br>";
    picsdownload += "<a href=\"pictures/SeatedCandid.zip\" download>" + "Seated - Candid" + "</a></p><br>";

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