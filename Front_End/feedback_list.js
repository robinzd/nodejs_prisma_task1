$(document).ready(function () {
  var feedback_url = "http://localhost:2000/api//feedbacklists";
  $.ajax({
    dataType: "json",
    url: feedback_url,
    success: function (datas4) {
      console.log(datas4);
      var result = "";
      datas4.data1.forEach((items1) => {
        const {
          selected_teacher_list,
          question_1,
          answer_1,
          question_2,
          answer_2,
          question_3,
          answer_3,
          question_4,
          answer_4,
        } = items1;
        result += `
        <div class="card"  style="width: 18rem;">
        <div class="card-body" >
        <h5 class="card-title">${selected_teacher_list}</h5>
        <h6 class="card-subtitle mb-2 text-muted">${question_1}?</h6>
        <p class="card-text">${answer_1}</p>
        <h6 class="card-subtitle mb-2 text-muted">${question_2}?</h6>
        <p class="card-text">${answer_2}</p>
        <h6 class="card-subtitle mb-2 text-muted">${question_3}?</h6>
        <p class="card-text">${answer_3}</p>
        <h6 class="card-subtitle mb-2 text-muted">${question_4}?</h6>
        <p class="card-text">${answer_4}</p>
        </div>
        </div>
          `;
      });
      $("#feedbackcard").append(result);
    },
  });
});
