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

function deckQuestion1() {
  var body = "1. Questions to Ask: \n\n" + document.getElementById("q1text").value + "\n\n";
      body += "2. Resources for Pricing: \n\n" + document.getElementById("q2text").value + "\n\n";
  var email = document.getElementById("facilitator").value;
  var location = "mailto:" + email + "?subject=Deck Questions" + "&body=" + encodeURIComponent(body);
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
    p1 += "<p>Click on the Button to test your email application. Make sure that you change the to address to be your Facilitator's email address (for Joe Wise \"jcw@foundationsoft.com\" for Christopher Wise \"csw@foundationsoft.com\")</p>";
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

var jc ="<h1>What does Job Costing accomplish?</h1>";
    jc += "<p>When a good job costing structure is in place, it allows the Owners, Managers, Project Managers and Supervisors to closely track a project’s progress, profitability and schedule. This is done by breaking a project into manageable parts. These are the tasks within a project. Most of our clients self perform most of these tasks. Some of our clients Subcontract the tasks to other companies. Some costs associated with a project are overhead or cost of doing business.</p>";
    jc += "<div class=\"exercise\"><img src=\"./images/exercise.JPG\" alt=\"Exercise\" class=\"img-ex\">";
    jc += "<h3>How can a Project be broken down into manageable parts?</h3>";
    jc += "</div>";
    jc += "<p>When a job or project is awarded, there is the job as a whole. It can be determined that the job is profitable or not. This is crucial to the life of the company. In many instances, the job is broken down into tasks or cost codes. Many General Contractors use what is know as the CSI (Construction Standard Industry) Codes. These are broken down into groups or Divisions. These should not be confused with financial divisions in Foundation Software. They are nothing more that groupings for sorting basic parts of the project. </p>";
    jc += "<h3>CSI Cost Code Breakdown</h3><br>";
    jc += "<div class=\"csicodes\">";
    jc += "<table class=\"csicodes-table\">";
    jc += "<tr>";
    jc += "<td colspan=\"2\" style=\"text-align: center;\"><strong>CSI Divisions</strong></td>";
    jc += "</tr>";
    jc += "<tr id=\"exprow1\">";
    jc += "<td class=\"accounts\">1000-General Requirements</td>";
    jc += "<td class=\"accounts\">9000-Finishes</td>";
    jc += "</tr>";
    jc += "<tr id=\"exprow2\">";
    jc += "<td class=\"accounts\">2000-Sitework</td>";
    jc += "<td class=\"accounts\">10000-Specialties</td>";
    jc += "</tr>";
    jc += "<tr id=\"exprow3\">";
    jc += "<td class=\"accounts\">3000-Concrete</td>";
    jc += "<td class=\"accounts\">11000-Equipment</td>";
    jc += "</tr>";
    jc += "<tr id=\"exprow4\">";
    jc += "<td class=\"accounts\">4000-Masonry</td>";
    jc += "<td class=\"accounts\">12000-Furnishings</td>";
    jc += "</tr>";
    jc += "<tr id=\"exprow5\">";
    jc += "<td class=\"accounts\">5000-Metal</td>";
    jc += "<td class=\"accounts\">13000-Special Construction</td>";
    jc += "</tr>";
    jc += "<tr id=\"exprow6\">";
    jc += "<td class=\"accounts\">6000-Woods and Plastics</td>";
    jc += "<td class=\"accounts\">14000-Conveying Systems</td>";
    jc += "</tr>";
    jc += "<tr id=\"exprow7\">";
    jc += "<td class=\"accounts\">7000-Thermal and Moisture Protection</td>";
    jc += "<td class=\"accounts\">15000-Mechanical</td>";
    jc += "</tr>";
    jc += "<tr id=\"exprow8\">";
    jc += "<td class=\"accounts\">8000-Doors and Windows</td>";
    jc += "<td class=\"accounts\">16000-Electrical</td>";
    jc += "</tr>";
    jc += "</table>";
    jc += "<p>The CSI Code Structure is broken down into Divisions (Cost Code Groups in Foundation).</p>";
    jc += "<p>Under Each of the Divisions listed to the right, there are a number of cost codes associated with those.</p>";
    jc += "<p>Not every Construction Company uses this format and will establish their own guidelines that they want to use. Foundation Software allows for various types of job costing based on the client needs and wants.</p>";
    jc += "<p>In most instances Owners, PM’s, Management and Superintendents like more detail of the costs of the project. Most will break the cost into more manageable areas such as Labor, Materials, Subcontract, Rented Equipment, Other Costs. Within Foundation Software we have these as predefined cost classes.</p>";
    jc += "<p><a href=\"./Exercises/CSI Codes.pdf\" download=\"CSI Codes\">Click Here</a> for an example that will show the Division and Cost Code structure.</p>";
    jc += "</div>";
    jc += "<br>";
    jc += "<div class=\"exercise\"><img src=\"./images/exercise.JPG\" alt=\"Exercise\" class=\"img-ex\">";
    jc += "<h3>How can I get even more detail?</h3>";
    jc += "</div>";
    jc += "<p>A common question arises to how can we track the different parts or areas of a project? Simple…..Phase the Job. This will give another level of detail to Job Cost Reporting.</p>";
    jc += "<p>What is a Phase? Simply put, a phase is a Job within a Job, if a company wants to break a large or major project into smaller projects they will phase a project. Some examples of phases are:</p>";
    jc += "<ul>";
    jc += "<li>Floors in a hotel or hospital</li>";
    jc += "<li>Lots in a subdivision</li>";
    jc += "<li>Buildings on a campus</li>";
    jc += "<li>Wings of a building</li>";
    jc += "</ul>";
    jc += "<p>There is a simple hierarchy for using phases. If we are dividing a project into the phases or mini projects, the breakdown is:</p>";
    jc += "<ol>";
    jc += "<li>Project (Job)</li>";
    jc += "<li>Job within a Project (Phase)</li>";
    jc += "<li>Task within the Phase (Cost Code)</li>";
    jc += "<li>Type of cost within the Cost Code (Cost Class)</li>";
    jc += "</ol>";
    jc += "<div class=\"exercise\"><img src=\"./images/scenario.jpg\" alt=\"Exercise\" class=\"img-ex\">";
    jc += "<h3>Practical Application</h3>";
    jc += "</div>";
    jc += "<form method=\"post\" enctype=\"text/plain\" name=\"form\" action=\"javascript: deckQuestion1()\">";
    jc += "<strong>Please Choose your Facilitator:</strong><br>";
    jc += "<select name=\"1\" name=\"facilitator\" id=\"facilitator\" style=\"width: 250px\">";
    jc += "<option value=\"\"> Select</option>";
    jc += "<option value=\"csw@foundationsoft.com\"> Christopher Wise </option>";
    jc += "<option value=\"jcw@foundationsoft.com\"> Joseph Wise </option>";
    jc += "<option value=\"cpk@foundationsoft.com\"> Chris Kundmueller </option>";
    jc += "</select>";
    jc += "<h3></h3>";
    jc += "<p>What questions would you need to ask?<br>";
    jc += "<textarea type=\"text\" name=\"Questions\" placeholder=\"(Enter your questions here)\" id=\"q1text\" class=\"answer\" rows=\"6\"></textarea></p>";
    jc += "<p>What resources are available to you to price a deck?<br>";
    jc += "<textarea type=\"text\" name=\"Pricing resources\" placeholder=\"(Enter your resources here)\" id=\"q2text\" class=\"answer\" rows=\"6\"></textarea></p>";
    jc += "<div class='submitWrapper'>";
    jc += "<input value=\"Submit\" type=\"submit\" class=\"quizSubmit\">";
    jc += "</div>";
    jc += "<br><br><br><br><br><br><br>";

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
$("#jobCost").click(function () {
  $(".container").html(jc);
});
