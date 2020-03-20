
$('span').toggle(

function() {
$('#main').css('left', '0')
},
function() {
$('#main').css('left', '250px')
})

function jcQuestion1() {
    var body = "1: What cost codes would you create? \n" + document.getElementById("q1text").value + "\n\n";
    	body +=  "2: When recording expense related transactions, what cost classes would you use? \n" + document.getElementById("q2text").value + "\n\n";
        body +=  "3: If you decided to budget this job, what would it look like? \n" + document.getElementById("q3text").value + "\n\n";
        body +=  "4. What is the total cost to make this cake? How would you determine this? \n" + document.getElementById("q4text").value + "\n\n";
        body +=  "5. If you were looking to make a profit, how much would you charge your friend for the cake? How would you determine this amount? \n" + document.getElementById("q5text").value + "\n\n";
    var email = document.getElementById("facilitator").value;
    var location = "mailto:" + email + "?subject=J/C Questions: Part 1" + "&body=" + encodeURIComponent(body);
    window.location.href = location;
}

function jcQuestion2() {
    var body = "1: What new cost codes would you be adding? \n" + document.getElementById("q1text").value + "\n\n";
    	body +=  "2: When recording expense related transactions, what cost classes would you use? \n" + document.getElementById("q2text").value + "\n\n";
        body +=  "3: What additional modules in Foundation would you utilize? \n" + document.getElementById("q3text").value + "\n\n";
        body +=  "4. How would you use these additional modules to track expenses? \n" + document.getElementById("q4text").value + "\n\n";
    var email = document.getElementById("facilitator").value;
    var location = "mailto:" + email + "?subject=J/C Questions: Part 2" + "&body=" + encodeURIComponent(body);
    window.location.href = location;
}
/*
function openSlideMenu() {
document.getElementById('side-menu').style.width = '250px';
document.getElementById('main').style.marginLeft = '250px';
document.getElementById('navbar').style.marginLeft = '250px';
}
*/
