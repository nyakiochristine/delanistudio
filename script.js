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
e
//business logic
$("form").submit(() => {
    //if($('mce-FNAME').val() === "" || $('mce-MERGE6'.val()===''){
        //$(".popp".show();
        //$("pop").text("Dont leave empty fields")
        //$(".popp").css({
            //"background-color" : "blue",
            //"font-size": "1em"
        });//
       

        
  //user logic
  //$(document).ready(() => {
    //let divs = ['1', '2', '3'];
    //divs.forEach((div) => {
        //if($('.text' + click0).is(":visible")){
            //$(".text"+ click1).hide();
        //}
        //$(".div" + div).click(() =>{
            //if($(".image" + click1).is(":visible")){
                ///$(".image" + click0).hide();
                //$(".text" + click2).show();
            //} else if($(".text" + click2).is(":visible")){
                //$(".text" + click1).hide();
                //$(".image" + click0).show();//
            //}
        //});
    //});//

    //$("button").click(function(party) {
        //var client = document.getElementById('nameDetail').value;
        //alert(`Thank You , Message has been recieved Successfully!`);
        //party.preventDefault();//
    //});//

    $(document).ready(function() {
        $(".col-sm-4").hide();
        $(".croseover").hover(function() {
            $(this).find(".col-sm-4").toggle(600);
        });
    
    });
    $(".click0").click(function() {
        $(".hide0").slideToggle(1000);
        $(".show0").slideToggle(1200);
    });
    
    $(".click1").click(function() {
        $(".hide1").slideToggle(1000);
        $(".show1").slideToggle(1200);
    });
    
    $(".click2").click(function() {
        $(".hide2").slideToggle(1000);
        $(".show2").slideToggle(1200);
    });