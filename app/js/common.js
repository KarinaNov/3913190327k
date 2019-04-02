

  
  document.getElementById('add-comment__button').onclick = function(){

    var outText = document.getElementById('out_text');
    outText.innerHTML += '<br><span class="comment__name-user">Лилия Семёновна</span>';
    outText.innerHTML += '<span class="comment__date">14 октября 2011</span>';
    outText.innerHTML += '<div class="comment__triangle-grey"></div>';
    outText.innerHTML += '<div class="comment__triangle-blue"></div>';
    outText.innerHTML += '<div id="box_generate" class="box_generate"></div>';

    var inputText = document.getElementById('input_text').value;
    var generateText = document.querySelectorAll('.box_generate')
    [document.querySelectorAll('.box_generate').length - 1].innerHTML = inputText;

  }
    
  var input = document.getElementById("input_text");
  input.addEventListener("keyup", function(event) {

    if (event.keyCode === 13 && event.ctrlKey)  {

      var outText = document.getElementById('out_text');
      outText.innerHTML += '<br><span class="comment__name-user">Лилия Семёновна</span>';
      outText.innerHTML += '<span class="comment__date">14 октября 2011</span>';
      outText.innerHTML += '<div class="comment__triangle-grey"></div>';
      outText.innerHTML += '<div class="comment__triangle-blue"></div>';
      outText.innerHTML += '<div id="box_generate" class="box_generate"></div>';

      var inputText = document.getElementById('input_text').value;
      var generateText = document.querySelectorAll('.box_generate')
      [document.querySelectorAll('.box_generate').length - 1].innerHTML = inputText;
     }
    });
     

function check() {
  document.getElementById('add-comment__button').disabled = input.value ? false : "disabled";
}