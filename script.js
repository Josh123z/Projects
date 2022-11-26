$(document).ready(function(){
    const $button = $("button");
    
    $button.on("click",()=>{
        const randNo = Math.ceil(Math.random()*88);

        $.get(`https://akabab.github.io/starwars-api/api/id/${randNo}.json`,
        function(data){
            $(".name").text(data['name'])
            $(".char-photo").attr("src",data['image'])
            $(".char-photo").removeClass("none");
        });
    });

    if ($(".char-photo").attr("src") === ""){
        $(".char-photo").addClass("none");
    } 
});