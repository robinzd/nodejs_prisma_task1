$(document).ready(function () {
  var url = "http://localhost:2000/api//readuser";
  var count=1
  $.ajax({
    dataType: "json",
    url: url,
    success: function (datas) {
      var result = "";
      datas.data.forEach((item) => {
        const{first_name,last_name,contact_number,email_id,address,status}=item;
    result += `
                <tr>
                    <td>${count}</td>
                    <td>${first_name}</td>
                    <td>${last_name}</td>
                    <td>${contact_number}</td>
                    <td>${email_id}</td>
                    <td>${address}</td>
                    <td>${status}</td>
                    <td>
                    <a href="#" class="view" title="View" data-toggle="tooltip"><i class="material-icons">&#xE417;</i></a>
                    <a href="#" class="edit" title="Edit" data-toggle="tooltip"><i class="material-icons">&#xE254;</i></a>
                    </td>
                    </tr>
                    ${count++}
                `});
               
                $("#table").append(result);
                

    //   <a href="#" class="delete" title="Delete" data-toggle="tooltip" onclick="return confirm('Do you really want to Delete ?');"><i class="material-icons">&#xE872;</i></a>
    },
  });

  // submit button ajax
 $('#userform').on('submit',function(e){
    e.preventDefault();
    let date_ob = new Date();
    var firstname=$('#firstname').val();
    var lastname=$('#lastname').val();
    var number=$('#number').val();
    var email=$('#email').val();
    var address=$('#address').val();
    var status=$('#status').val();
    var url1="http://localhost:2000/api//userregistration";
    if(firstname!='' && lastname!='' &&number!=''  &&email!=''  &&address!==''  &&status!=''){
      var result=JSON.stringify({ 
        first_name:firstname,
        last_name: lastname,
        contact_number:number,
        email_id:email,
        address: address,
        created_at: date_ob,
        updated_at: date_ob,
        status: status,})
     $.ajax({
           type:'Post',
           dataType:"JSON",
           url:url1,
           data:JSON.parse(result), 
          success:function(response){
            console.log(response);
          }
        });
      }else{
      alert("Please Provide All The Information!")
    }
  })
});









