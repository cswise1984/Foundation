$('span').toggle(
  function () {
    $('#main').css('left', '0')
  },
  function () {
    $('#main').css('left', '250px')
  });

function jcQuestion1() {
  var body = "1: What cost codes would you create? \n" + document.getElementById("q1text").value + "\n\n";
      body += "2: When recording expense related transactions, what cost classes would you use? \n" + document.getElementById("q2text").value + "\n\n";
      body += "3: If you decided to budget this job, what would it look like? \n" + document.getElementById("q3text").value + "\n\n";
      body += "4. What is the total cost to make this cake? How would you determine this? \n" + document.getElementById("q4text").value + "\n\n";
      body += "5. If you were looking to make a profit, how much would you charge your friend for the cake? How would you determine this amount? \n" + document.getElementById("q5text").value + "\n\n";
  var email = document.getElementById("facilitator").value;
  var location = "mailto:" + email + "?subject=J/C Questions" + "&body=" + encodeURIComponent(body);
  window.location.href = location;
}

function contactMe() {
  var body = "Hello Education Department, \n\n";
      body += "Thought that can help Continuing Development: \n" + document.getElementById("emailText").value + "\n\n";
      body += "Thank you! \n\n";
  var location = "mailto:cpk@foundationsoft.com" + "?subject=Continuing Education: " + document.getElementById("subject").value + "&body=" + encodeURIComponent(body);
  window.location.href = location;
}

var p1 = "<h1>Change your Default email Application</h1>";
    p1 += "<hr>";
    p1 += "<div class=\"exercise\"><img src=\"./images/email.jpg\" alt=\"email\" class=\"img-ex\">";
    p1 += "<h3>Default your PC Email to Outlook</h3>";
    p1 += "</div>";
    p1 += "<p>For this class we will be asking you to fill out and email things. This will change your defualt setting to have Outlook 2016 become your default when sending the questionairs to your Facilitator. This is a really quick Tutorial on how to make that change.</p >";
    p1 += "<div class=\"exercise\"><img src=\"./images/settings.jpg\" alt=\"settings\" class=\"img-ex\">";
    p1 += "<h3>Changing your Settings</h3>";
    p1 += "</div>";
    p1 += "<div class=\"email_tutorial\">";
    p1 += "<img src=\"./images/email_settings.jpg\" alt=\"settings\" class=\"tutorial-ex\">";
    p1 += "<ol>";
    p1 += "<li>Select your Start Menu</li><br>";
    p1 += "<li>Select the Settings Icon</li><br>";
    p1 += "<li>Select Apps (Uninstall, defaults, optional features)</li><br>";
    p1 += "<li>Select Default Apps from the Left Side Menu</li><br>";
    p1 += "<li>Change the Email from the Mail app to Outlook 2016</li><br>";
    p1 += "</ol>";
    p1 += "</div>";
    p1 += "<div class=\"exercise\"><img src=\"./images/email.jpg\" alt=\"email\" class=\"img-ex\">";
    p1 += "<h3>Test your Skills</h3>";
    p1 += "</div>";
    p1 += "<form method=\"post\" enctype=\"text/plain\" name=\"form\" action =\"mailto:ENTER YOUR FACILITATOR EMAIL ADDRESS?subject=I%20changed%20my%20default%20email%20program\">";
    p1 += "<p>Click on the Button to test your email application. Make sure that you change the to address to be your Facilitator's email address(for Joe Wise \"jcw@foundationsoft.com\" for Christopher Wise \"csw@foundationsoft.com\")</p>";
    p1 += "<div class='submitWrapper'>";
    p1 += "<input value=\"Test Email\" type=\"submit\" class=\"quizSubmit\">";
    p1 += "</div>";
    p1 += "</form>";
    p1 += "<br><br><br><br><br><br><br>";

var p2 = "<h1>Scenario: Lets make a cake!</h1>";
    p2 += "<hr>";
    p2 += "<p>In the Scenario from Job Costing and baking a cake, please answer the Questions Below.</p>";
    p2 += "<ul>";
    p2 += "<li>Think of all the modules you would use to track things like Labor/Burden, Materials, Subcontractors, Owned Equipment, Rented Equipment, Other Misc. Costs</li>";
    p2 += "</ul>";
    p2 += "<form method=\"post\" enctype=\"text/plain\" name=\"form\" action=\"javascript: jcQuestion1()\">";
    p2 += "<strong>Please Choose your Facilitator:</strong><br>";
    p2 += "<select name=\"1\" name=\"facilitator\" id=\"facilitator\" style=\"width: 250px\">";
    p2 += "<option value=\"\"> Select</option>";
    p2 += "<option value=\"csw@foundationsoft.com\"> Christopher Wise </option>";
    p2 += "<option value=\"jcw@foundationsoft.com\"> Joseph Wise </option>";
    p2 += "<option value=\"cpk@foundationsoft.com\"> Chris Kundmueller </option>";
    p2 += "</select>";
    p2 += "<p><strong>1: What cost codes would you create?</strong><br>";
    p2 += "<textarea type=\"text\" name=\"Cost Codes\" placeholder=\"Enter cost code descriptions here\" id=\"q1text\" class=\"answer\" rows=\"6\"></textarea></p>";
    p2 += "<hr>";
    p2 += "<p><strong>2: When recording expense related transactions, what Modules and Cost Classes would you use?</strong><br>";
    p2 += "<textarea type=\"text\" name=\"Cost Classes\" placeholder=\"Enter cost classes here\" id=\"q2text\" class=\"answer\" rows=\"6\"></textarea><br></p>";
    p2 += "<hr>";
    p2 += "<p><strong>3: If you decided to budget this job, what would it look like?</strong><br>";
    p2 += "<textarea type=\"text\" name=\"Budget\" placeholder=\"Enter budget items here\" id=\"q3text\" class=\"answer\" rows=\"6\"></textarea><br></p>";
    p2 += "<hr>";
    p2 += "<p><strong>4. What is the total cost to make this cake? How did you determine this?</strong><br>";
    p2 += "<textarea type=\"text\" name=\"Total Cost of Cake\" placeholder=\"Enter total Cost of Cake and How...\" id=\"q4text\" class=\"answer\" rows=\"6\"></textarea><br></p>";
    p2 += "<hr>";
    p2 += "<p><strong>5. If you were looking to make a profit, how much would you charge your colleague for the cake? How would you determine this amount?</strong><br>";
    p2 += "<textarea type=\"text\" name=\"Profit\" placeholder=\"How much would you charge\" id=\"q5text\" class=\"answer\" rows=\"6\"></textarea><br></p>";
    p2 += "<hr>";
    p2 += "<div class='submitWrapper'>";
    p2 += "<input value=\"Submit\" type=\"submit\" class=\"quizSubmit\">";
    p2 += "</div>";
    p2 += "</form>";
    p2 += "<br><br><br><br><br><br><br><br><br>";

var home = "<h1>A Work in Progress</h1>";
    home += "<p>This is our first time implementing an extended development program outside of new hire training. Like anything else, it will take a lot of time and effort to make this program great, and the program you’re participating in is new.</p>";
    home += "<p>In implementing this program we’re doing our best to balance a lot of factors like keeping class sizes small and making sure that clients are still served while we educate our staff. However, we plan to continuously improve this program. We may occasionally ask you for feedback on the effectiveness of this program though an anonymous survey, but we’re open to receiving feedback from you at any point in time. Please feel free to send any feedback on these programs to <a href=\"mailto:cpk@foundationsoft.com?subject=Continuing%20Education:%20Feedback\">Chris Kundmueller</a>.</p>";

var contact = "<div class=\"contactEmail-container\">";
    contact += "<h1>Contact Education</h1>";
    contact += "<hr>";
    contact += "<!-- <form method=\"post\" name=\"emailform\" action=\"action_page.php\"> -->";
    contact += "<form class=\"contactEmail-form\" method=\"post\" action=\"javascript: contactMe()\" class=\"contactme\" enctype=\"text/plain\">";
    contact += "<label for=\"name\"><strong>Name</strong></label><br>";
    contact += "<input type=\"text\" id=\"name\" name=\"name\" placeholder=\"Your name\" style=\"width: 520px;\"><br>";
    contact += "<br>";
    contact += "<label for=\"subject\"><strong>Subject:</strong></label><br>";
    contact += "<input type=\"text\" id=\"subject\" name=\"subject\" placeholder=\"Subject\" style=\"width: 520px;\"><br>";
    contact += "<br>";
    contact += "<label for=\"body\"><strong>Thoughts:</strong></label><br>";
    contact += "<textarea id=\"emailText\" name=\"body\" placeholder=\"Tell us what you are thinking\" style=\"height: 300px; width: 520px;\"></textarea><br>";
    contact += "<div class=\'submitWrapper\'>";
    contact += "<input type=\"submit\" value=\"Submit\">";
    contact += "<input type=\"reset\" value=\"Reset\">";
    contact += "</form>";
    contact += "</div>"

$("#changeEmail").click(function () {
  $('.container').html(p1);
});
$("#jcExercise").click(function () {
  $(".container").html(p2);
});
$("#home").click(function () {
  $(".container").html(home);
});
$("#contact").click(function () {
  $(".container").html(contact);
});