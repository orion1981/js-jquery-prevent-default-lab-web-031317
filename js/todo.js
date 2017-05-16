$(document).ready(function(){

  submitForm()

});

function submitForm(){
  $('form').submit(function(event){
    event.preventDefault();
    console.log("button push")
    var item = $('#item').val();
    var listItem = `<li> ${item} </li>`

    $('ol').append(listItem)
  })


}
