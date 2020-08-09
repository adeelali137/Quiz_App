var name = prompt('Enter your Full Name: ')
var rollnum = prompt('Enter your Roll No: ')
var nameinput = document.getElementById('name');
var rollnuminput = document.getElementById('rollno');
nameinput.append(name);
rollnuminput.append(rollnum);

function result(){

    // for Q1
    var score = 0;
    var q1_right_answer = document.getElementById('q1-o3');
    var q1_answer2 = document.getElementById('q1-o1');
    var q1_answer3 = document.getElementById('q1-o2');
    var q1_answer4 = document.getElementById('q1-o4');
    if (q1_right_answer.checked == true) {
        score++
        // alert('Your Question 1 is right');
    }else{
        // alert('Q1 is Wrong the right answer is C option')
    };

        // for Q2
        var q2_right_answer = document.getElementById('q2-o3');
        var q2_answer2 = document.getElementById('q2-o1');
        var q2_answer3 = document.getElementById('q2-o2');
        var q2_answer4 = document.getElementById('q2-o4');
        if (q2_right_answer.checked == true) {
            score++
            // alert('Your Question 2 is right');
        }else{
            // alert('Q2 is Wrong the right answer is C option')
        };

            // for Q3
    var q3_right_answer = document.getElementById('q3-o1');
    var q3_answer2 = document.getElementById('q3-o2');
    var q3_answer3 = document.getElementById('q3-o2');
    var q3_answer4 = document.getElementById('q3-o4');
    if (q3_right_answer.checked == true) {
        score++
        // alert('Your Question 3 is right');
    }else{
        // alert('Q3 is Wrong the right answer is A option')
    };

        // for Q4
        var q4_right_answer = document.getElementById('q4-o4');
        var q4_answer2 = document.getElementById('q4-o2');
        var q4_answer3 = document.getElementById('q4-o2');
        var q4_answer4 = document.getElementById('q4-o1');
        if (q4_right_answer.checked == true) {
            score++
            // alert('Your Question 4 is right');
        }else{
            // alert('Q4 is Wrong the right answer is D option')
        };

            // for Q5
    var q5_right_answer = document.getElementById('q5-o3');
    var q5_answer2 = document.getElementById('q5-o1');
    var q5_answer3 = document.getElementById('q5-o2');
    var q5_answer4 = document.getElementById('q5-o4');
    if (q5_right_answer.checked == true) {
        score++
        // alert('Your Question 5 is right');
    }else{
        // alert('Q5 is Wrong the right answer is C option');
    };


var text = document.write('Mr. ' + name.toUpperCase() + ', Your total score is ' + score++ + '/5')

}