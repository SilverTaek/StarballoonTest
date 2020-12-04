$(document).ready(function () {
  var d = document, s = d.createElement('script');
  s.src = 'https://codingnojam.disqus.com/embed.js';
  s.setAttribute('data-timestamp', +new Date());
  (d.head || d.body).appendChild(s);
})




function readURL(input) {
  if (input.files && input.files[0]) {

    var reader = new FileReader();

    reader.onload = function (e) {
      $('.image-upload-wrap').hide();

      $('.file-upload-image').attr('src', e.target.result);
      $('.file-upload-content').show();


      // $('.image-title').html(input.files[0].name);
    };

    // var star1 = document.getElementById("rm1").innerText;
    // var star2 = document.getElementById("rm2").innerText;
    // var star3 = document.getElementById("rm3").innerText;
    // var star4 = document.getElementById("rm4").innerText;
    // var star5 = document.getElementById("rm5").innerText;
    // console.log(star1)
    // console.log(star2)
    // console.log(star3)
    // console.log(star4)
    // console.log(star5)


    reader.readAsDataURL(input.files[0]);
    $('.container').show();
    init().then(() => {
      predict();
      $('.container').hide();
      $('.image-title-wrap').show();
      $('.image').show();
      $('.main').show();
      $('.section__gender').hide();

    });

  } else {
    removeUpload();
  }
}

function removeUpload() {
  // $('.file-upload-input').replaceWith($('.file-upload-input').clone());
  // $('.image-title-wrap').hide();
  // $('.file-upload-content').hide();
  // $('.image-upload-wrap').show();
  // $('.main').hide();
  location.reload();
}
$('.image-upload-wrap').bind('dragover', function () {
  $('.image-upload-wrap').addClass('image-dropping');
});
$('.image-upload-wrap').bind('dragleave', function () {
  $('.image-upload-wrap').removeClass('image-dropping');
});

function gender() {
  if (gender1.style.display == 'block' && boy.style.display == 'none') {
    gender2.style.display = 'block'
    gender1.style.display = "none"
    girl.style.display = "none"
    boy.style.display = 'block'
    $("h1").css("color", "#73aace");
    $(".container").css("color", "#73aace");
    $(".file-upload").css("border-color", "#73aace")


  } else if (gender1.style.display == 'none' && boy.style.display == 'block') {
    gender2.style.display = 'none'
    gender1.style.display = 'block'
    girl.style.display = "block"
    boy.style.display = 'none'
    $("h1").css("color", "#fe918d");
    $(".container").css("color", "#fe918d");
    $(".file-upload").css("border-color", "#fe918d")
  }

}