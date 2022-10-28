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
        <input value="${teachers_name}" class="form-check-input checks" type="radio" name="selectedteacher" id="flexRadioDefault1">
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
      $("#question2").hide();
      $("#question3submit").hide();
      $("#question3").hide();
      $("#question4submit").hide();
      $("#question4").hide();
    },
  });
  // Selected Teachers Starts//

  $(document).on("click", ".checks", function () {
    $(".checks").attr("disabled", true);
    $(".submit").attr("disabled", false);
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
        const { question_1, answer_1, answer_2} = items;
        question_1_result += `
        <div class="form-check" id="radiobtn">
        <h4>${question_1}?</h4><br>
        <input value="${question_1}" class="form-check-input" type="radio" name="question1" id="question1" checked>
        <input  value="${answer_1}" class="form-check-input selectanswer1" type="radio" name="answer1" id="flexRadioDefault1">
        <label class="form-check-label" for="flexRadioDefault1">
        ${answer_1}
        </label>
        <input value="${answer_2}" class="form-check-input selectanswer1" type="radio" name="answer1" id="flexRadioDefault">
        <label class="form-check-label questions1" for="flexRadioDefault1">
        ${answer_2}
        </label>
        </div> 
        `;
      });
      $("#feedbackform").append(question_1_result);
      $("#question3submit").hide();
      $("#question3").hide();
      $("#question4submit").hide();
      $("#question4").hide();
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
    $(".selectanswer1").attr("disabled", true);
    $(".submits").attr("disabled", false);
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
        const { question_2, answer_1, answer_2 } = items3;
        question_2_result += `
        <div class="form-check" id="radiobtn">
        <h4>${question_2}?</h4><br>
        <input value="${question_2}" class="form-check-input" type="radio" name="question2" id="question1" checked>
        <input  value="${answer_1}" class="form-check-input selectanswer2" type="radio" name="answer2" id="flexRadioDefault1">
        <label class="form-check-label" for="flexRadioDefault1">
        ${answer_1}
        </label>
        <input  value="${answer_2}" class="form-check-input selectanswer2" type="radio" name="answer2" id="flexRadioDefault">
        <label class="form-check-label questions1" for="flexRadioDefault1">
        ${answer_2}
        </label>
        </div> 
      `;
      });
      $("#question2").append(question_2_result);
      $("#question3").hide();
      $("#question4submit").hide();
      $("#question4").hide();
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
    $(".selectanswer2").attr("disabled", true);
    $(".submiting").attr("disabled", false);
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
        const { question_3, answer_1, answer_2 } = items4;
        question_3_result += `
        <div class="form-check" id="radiobtn">
        <h4>${question_3}?</h4><br>
        <input value="${question_3}" class="form-check-input" type="radio" name="question3" id="question1" checked>
        <input value="${answer_1}" class="form-check-input selectanswer3" type="radio" name="answer3" id="flexRadioDefault1">
        <label class="form-check-label" for="flexRadioDefault1">
        ${answer_1}
        </label>
        <input value="${answer_2}" class="form-check-input selectanswer3" type="radio" name="answer3" id="flexRadioDefault">
        <label class="form-check-label questions1" for="flexRadioDefault1">
        ${answer_2}
        </label>
        </div> 
        `;
      });
      $("#question3").append(question_3_result);
      $("#question4submit").hide();
      $("#question4").hide();
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
    $(".selectanswer3").attr("disabled", true);
    $(".question3submit").attr("disabled", false);
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
        const { question_4, answer_1, answer_2} = items5;
        question_4_result += `
        <div class="form-check" id="radiobtn">
        <h4>${question_4}?</h4><br>
        <input value="${question_4}" class="form-check-input" type="radio" name="question4" id="question1" checked>
        <input value="${answer_1}" class="form-check-input selectanswer4" type="radio" name="answer4" id="flexRadioDefault1">
        <label class="form-check-label" for="flexRadioDefault1">
        ${answer_1}
        </label>
        <input value="${answer_2}" class="form-check-input selectanswer4" type="radio" name="answer4" id="flexRadioDefault">
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
    $(".selectanswer4").attr("disabled", true);
    $(".question4submit").attr("disabled", false);
  });
  // selected question4 ends//

  // reload page starts//
  $(document).on("click", ".question4submit", function () {
    var selectedteachers = $("input:radio[name=selectedteacher]:checked").val();
    console.log(selectedteachers);
    var question_1 = $("input:radio[name=question1]:checked").val();
    console.log(question_1);
    var selectedanswer_1 = $("input:radio[name=answer1]:checked").val();
    console.log(selectedanswer_1);
    var question_2 = $("input:radio[name=question2]:checked").val();
    console.log(question_2);
    var selectedanswer_2 = $("input:radio[name=answer2]:checked").val();
    console.log(selectedanswer_2);
    var question_3 = $("input:radio[name=question3]:checked").val();
    console.log(question_3);
    var selectedanswer_3 = $("input:radio[name=answer3]:checked").val();
    console.log(selectedanswer_3);
    var question_4 = $("input:radio[name=question4]:checked").val();
    console.log(question_4);
    var selectedanswer_4 = $("input:radio[name=answer4]:checked").val();
    console.log(selectedanswer_4);
    var feedback_add_url = "http://localhost:2000/api//getfeedback";
    var add_feedback_list = JSON.stringify({
      selected_teacher_list: selectedteachers,
      question_1: question_1,
      answer_1: selectedanswer_1,
      question_2: question_2,
      answer_2: selectedanswer_2,
      question_3: question_3,
      answer_3: selectedanswer_3,
      question_4: question_4,
      answer_4: selectedanswer_4,
    });
    console.log(add_feedback_list);
    $.ajax({
      url: feedback_add_url,
      data: add_feedback_list,
      method: "POST",
      timeout: 0,
      headers: {
        "Content-Type": "application/json",
      },
      success: function () {
        location.reload(true);
      },
    });
  });
  // reload page ends//
});
