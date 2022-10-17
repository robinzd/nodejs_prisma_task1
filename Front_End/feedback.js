$(document).ready(function () {
  var url = "http://localhost:2000/api//getteachers";
  $.ajax({
    dataType: "json",
    url: url,
    success: function (datas2) {
      console.log(datas2);
      var result = "";
      datas2.data1.forEach((items1) => {
        const { teachers_name } = items1;
        result += `
        <div class="form-check" id="radiobtn">
        <input data-teachers="${teachers_name}" class="form-check-input checks" type="radio" name="flexRadioDefault" id="flexRadioDefault1">
        <label class="form-check-label" for="flexRadioDefault1">
        ${teachers_name}<br>
        </label>
        </div> 
        `;
      });
      $("#studentfeedback").append(result);
      $("#feedbackform").hide();
      $("#question1submit").hide();
      $("#question2submit").hide();
      $('#question2').hide();
      $('#question3submit').hide();
      $('#question3').hide();
      $('#question4submit').hide();
      $('#question4').hide();
    },
  });
  // Selected Teachers Starts//

  $(document).on("click", ".checks", function () {
    var save_teacher = $(this).data("teachers");
    var save_teacher_url = "http://localhost:2000/api//saveteacher";
    var select_teacher_data = JSON.stringify({
      teachers_name: save_teacher,
    });
    $.ajax({
      url: save_teacher_url,
      data: select_teacher_data,
      method: "POST",
      timeout: 0,
      headers: {
        "Content-Type": "application/json",
      },
    });
    $(".checks").attr("disabled", true);
    $(".submit").attr("disabled",false)
  });
  // Selected Teachers Ends //

  // Div Closes Opens Conditions Starts //
  $(document).on("click", ".submit", function () {
    $("#question1submit").show();
    $("#submit").hide();
    $("#feedbackform").show();
    $("#studentfeedback").hide();
  });
  //Div Closes Opens Conditions Starts//

  // Showing questions_1 starts//
  var question1_url = "http://localhost:2000/api//getquestion1";
  $.ajax({
    dataType: "json",
    url: question1_url,
    success: function (datas) {
      console.log(datas);
      var question_1_result = "";
      datas.data1.forEach((items) => {
        const { 
          question_1,
          answer_1,
          answer_2
        } = items;
        question_1_result += `
        <div class="form-check" id="radiobtn">
        <h4>${question_1}?</h4><br>
        <input data-question1="${question_1}" data-answer="${answer_1}" class="form-check-input selectanswer1" type="radio" name="flexRadioDefault" id="flexRadioDefault1">
        <label class="form-check-label" for="flexRadioDefault1">
        ${answer_1}
        </label>
        <input data-question1="${question_1}" data-answer="${answer_2}" class="form-check-input selectanswer1" type="radio" name="flexRadioDefault" id="flexRadioDefault">
        <label class="form-check-label questions1" for="flexRadioDefault1">
        ${answer_2}
        </label>
        </div> 
        `;
      });
      $("#feedbackform").append(question_1_result);
      $('#question3submit').hide();
      $('#question3').hide();
      $('#question4submit').hide();
      $('#question4').hide();
    },
  });
  // Showing questions_1 ends//

//some divs are showing starts//
  $(document).on("click", ".submits", function () {
    $("#question1submit").hide();
    $("#question2").show();
    $("#question2submit").show();
    $("#feedbackform").hide();
    console.log("hai");
  });
//some divs are showing ends//


// selected questions started //
$(document).on("click", ".selectanswer1", function () {
  var get_slected_question = $(this).data("question1");
  var get_selected_answer=$(this).data("answer");
  var selected1_question_url  = "http://localhost:2000/api//selectedquestion1";
  var selected1_question = JSON.stringify({
    question_1: get_slected_question,
    answer:get_selected_answer
  });
  console.log(selected1_question);
  $.ajax({
    url: selected1_question_url,
    data: selected1_question,
    method: "POST",
    timeout: 0,
    headers: {
      "Content-Type": "application/json",
    },
  });
  $(".selectanswer1").attr("disabled", true);
  $(".submits").attr("disabled",false);
});
// selected questions ended//


// show question2 starts//
var question2_url = "http://localhost:2000/api//getquestion2";
  $.ajax({
    dataType: "json",
    url: question2_url,
    success: function (datas3) {
      console.log(datas3);
      var question_2_result = "";
      datas3.data1.forEach((items3) => {
        const { 
          question_2,
          answer_1,
          answer_2
        } = items3;
        question_2_result += `
        <div class="form-check" id="radiobtn">
        <h4>${question_2}?</h4><br>
        <input data-question2="${question_2}" data-answer2="${answer_1}" class="form-check-input selectanswer2" type="radio" name="flexRadioDefault" id="flexRadioDefault1">
        <label class="form-check-label" for="flexRadioDefault1">
        ${answer_1}
        </label>
        <input data-question2="${question_2}" data-answer2="${answer_2}" class="form-check-input selectanswer2" type="radio" name="flexRadioDefault" id="flexRadioDefault">
        <label class="form-check-label questions1" for="flexRadioDefault1">
        ${answer_2}
        </label>
        </div> 
        `;
      });
      $("#question2").append(question_2_result);
      $('#question3').hide();
      $('#question4submit').hide();
      $('#question4').hide();
    },
  });
// show question2 ends//


//closing divs starts//
$(document).on("click", ".submiting", function () {
  $("#question2submit").hide();
  $("#question3").show();
  $("#question3submit").show();
  $("#question2").hide();
  console.log("hai");
});
//closing divs ends//

// selected question2 started //
$(document).on("click", ".selectanswer2", function () {
  var get_slected_question2 = $(this).data("question2");
  var get_selected_answer2=$(this).data("answer2");
  var selected2_question_url  = "http://localhost:2000/api//selectedquestion2";
  var selected2_question = JSON.stringify({
    question_2: get_slected_question2,
    answer:get_selected_answer2
  });
  console.log(selected2_question);
  $.ajax({
    url: selected2_question_url,
    data: selected2_question,
    method: "POST",
    timeout: 0,
    headers: {
      "Content-Type": "application/json",
    },
  });
  $(".selectanswer2").attr("disabled",true);
  $(".submiting").attr("disabled",false)
});
// selected question2 ends //

// show question3 starts//
var question3_url = "http://localhost:2000/api//getquestion3";
  $.ajax({
    dataType: "json",
    url: question3_url,
    success: function (datas4) {
      console.log(datas4);
      var question_3_result = "";
      datas4.data1.forEach((items4) => {
        const { 
          question_3,
          answer_1,
          answer_2
        } = items4;
        question_3_result += `
        <div class="form-check" id="radiobtn">
        <h4>${question_3}?</h4><br>
        <input data-question3="${question_3}" data-answer3="${answer_1}" class="form-check-input selectanswer3" type="radio" name="flexRadioDefault" id="flexRadioDefault1">
        <label class="form-check-label" for="flexRadioDefault1">
        ${answer_1}
        </label>
        <input data-question3="${question_3}" data-answer3="${answer_2}" class="form-check-input selectanswer3" type="radio" name="flexRadioDefault" id="flexRadioDefault">
        <label class="form-check-label questions1" for="flexRadioDefault1">
        ${answer_2}
        </label>
        </div> 
        `;
      });
      $("#question3").append(question_3_result);
      $('#question4submit').hide();
      $('#question4').hide();
    },
  });
// show question3 ends//

//closing divs starts//
$(document).on("click", ".question3submit", function () {
  $("#question3submit").hide();
  $("#question4").show();
  $("#question4submit").show();
  $("#question3").hide();
  console.log("hai");
});
//closing divs ends//

// selected question2 started //
$(document).on("click", ".selectanswer3", function () {
  var get_slected_question3 = $(this).data("question3");
  var get_selected_answer3=$(this).data("answer3");
  var selected3_question_url  = "http://localhost:2000/api//selectedquestion3";
  var selected3_question = JSON.stringify({
    question_3: get_slected_question3,
    answer:get_selected_answer3
  });
  console.log(selected3_question);
  $.ajax({
    url: selected3_question_url,
    data: selected3_question,
    method: "POST",
    timeout: 0,
    headers: {
      "Content-Type": "application/json",
    },
  });
  $(".selectanswer3").attr("disabled",true);
  $(".question3submit").attr("disabled",false);
});
// selected question2 ends //


// show question 4 starts//
var question4_url = "http://localhost:2000/api//getquestion4";
  $.ajax({
    dataType: "json",
    url: question4_url,
    success: function (datas5) {
      console.log(datas5);
      var question_4_result = "";
      datas5.data1.forEach((items5) => {
        const { 
          question_4,
          answer_1,
          answer_2
        } = items5;
        question_4_result += `
        <div class="form-check" id="radiobtn">
        <h4>${question_4}?</h4><br>
        <input data-question4="${question_4}" data-answer4="${answer_1}" class="form-check-input selectanswer4" type="radio" name="flexRadioDefault" id="flexRadioDefault1">
        <label class="form-check-label" for="flexRadioDefault1">
        ${answer_1}
        </label>
        <input data-question4="${question_4}" data-answer4="${answer_2}" class="form-check-input selectanswer4" type="radio" name="flexRadioDefault" id="flexRadioDefault">
        <label class="form-check-label questions1" for="flexRadioDefault1">
        ${answer_2}
        </label>
        </div> 
        `;
      });
      $("#question4").append(question_4_result);
    },
  });
// show question 4 ends//

// selected question4 starts//
$(document).on("click", ".selectanswer4", function () {
  var get_slected_question4 = $(this).data("question4");
  var get_selected_answer4=$(this).data("answer4");
  var selected4_question_url  = "http://localhost:2000/api//selectedquestion4";
  var selected4_question = JSON.stringify({
    question_4: get_slected_question4,
    answer:get_selected_answer4
  });
  console.log(selected4_question);
  $.ajax({
    url: selected4_question_url,
    data: selected4_question,
    method: "POST",
    timeout: 0,
    headers: {
      "Content-Type": "application/json",
    },
  });
  $(".selectanswer4").attr("disabled",true);
  $(".question4submit").attr("disabled",false);
});
// selected question4 ends//

// reload page starts//
$(document).on("click", ".question4submit", function () {
 location.reload(true);
});
// reload page ends//
});
