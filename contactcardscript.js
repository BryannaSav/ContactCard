$(document).ready(function(){
    $("form").submit(function(e){
        e.preventDefault();
        var fname=$("#first_name").val();
        var lname=$("#last_name").val();
        var desc=$("#description").val();
        $(".cardarea").append("<div class='cards'><h3 class='cname'>"+fname+" "+lname+"</h3>"+"<h4>Click for Description!</h4>"+"<h5 class='cdesc'>"+desc+"</h5></div>");
    });
});
$(document).on('click', '.cards', function(){
    $(this).children().toggle();
});