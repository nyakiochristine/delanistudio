(function($) {
    window.fnames = new Array();
    window.ftypes = new Array();
    fnames[0] = 'EMAIL';
    ftypes[0] = 'email';
    fnames[1] = 'FNAME';
    ftypes[1] = 'text';
    fnames[2] = 'LNAME';
    ftypes[2] = 'text';
    fnames[3] = 'ADDRESS';
    ftypes[3] = 'address';
    fnames[4] = 'PHONE';
    ftypes[4] = 'phone';
    fnames[5] = 'BIRTHDAY';
    ftypes[5] = 'birthday';
    fnames[6] = 'MMERGE6';
    ftypes[6] = 'dropdown';
    fnames[7] = 'MMERGE7';
    ftypes[7] = 'text';
}(jQuery));
//var $mcj = jQuery.noConflict((true));
/* end of mailchimp function*/

//user/UI logic$
  
$(".images").hover(function () {
    $(this).children(".img").fadeToggle(1200, "linear");

});

$(".visible").click(function(){
    $(".visible").hide()
    $(".hidden").toggle()
    $(".hidden").show()
    
});

$(".visible2").click(function(){
    $(".visible2").hide()
    $(".hidden2").toggle()
    $(".hidden2").show()
    $()
});

$(".visible3").click(function(){
    $(".visible3").hide()
    $(".hidden3").toggle()
    $(".hidden3").show()
    $()
});
//......................business logic.................//
$("form").submit(() => {
    if($('#mce-FNAME').val() === "" || $("#mce-EMAIL").val() === "" || $('#mce-MMERGE6').val() === ''){
        $(".form-pop").show();
        $(".popping").text("Don't leave empty fields")
        $(".form2").css({
            "background-color" : "teal",
            "font-size" : "30px"
        });

    } else {
        $(".form2").show();
        $(".popping").text(`Thank you ${$("#mce-FNAME").val()} for contacting us. We  have received your message and will get back to you SOON!`)
        $(".form2").css({
            "background-color" : "blue",
            "font-size" : "30px"
        });
    }
});











  
