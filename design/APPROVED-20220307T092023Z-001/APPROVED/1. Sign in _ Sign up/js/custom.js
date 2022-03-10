

$(document).ready(function() {
    $('.check_box_btn button').on('click', function() {
      $('.check_box_btn button').removeClass("selected");
      $(this).toggleClass("selected"); 
    });

});







$(document).ready(function() {
    $('.tab_display_inner ul li a').on('click', function() {
      $('.tab_display_inner ul li a').removeClass("active");
      $(this).toggleClass("active"); 
    });

});

/************** File Uploder ***************/

 const fileUploader = document.getElementById('avatar');

        fileUploader.addEventListener('change', (event) => {
            const files = event.target.files;
            console.log('files', files);

            // show the upload feedback
            const feedback = document.getElementById('feedback');
            const msg = ` ${files[0].name} X`;
            feedback.innerHTML = msg;
        });
