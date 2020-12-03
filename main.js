function readURL(input) {
  if (input.files && input.files[0]) {

    var reader = new FileReader();

    reader.onload = function (e) {
      $('.image-upload-wrap').hide();

      $('.file-upload-image').attr('src', e.target.result);
      $('.file-upload-content').show();


      // $('.image-title').html(input.files[0].name);
    };

    reader.readAsDataURL(input.files[0]);
    $('.container').show();
    init().then(() => {
      predict();
      $('.container').hide();
      $('.image-title-wrap').show();

      $('.main').show();
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
    const URL = "";
  } else if (gender1.style.display == 'none' && boy.style.display == 'block') {
    gender2.style.display = 'none'
    gender1.style.display = 'block'
    girl.style.display = "block"
    boy.style.display = 'none'
  }

}