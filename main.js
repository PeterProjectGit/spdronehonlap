

// submit_button = document.querySelectorAll(".contact2-form-btn")
// submit_button.forEach(gomb => {
//     gomb.addEventListener("click", function(event){
       
//     })
// });
 


// gpt kódok javított
(function ($) {
    "use strict";


    /*==================================================================
    [ Focus Contact2 ]*/
    $('.input2').each(function(){
        $(this).on('blur', function(){
            if($(this).val().trim() != "") {
                $(this).addClass('has-val');
            }
            else {
                $(this).removeClass('has-val');
            }
        })    
    })
            
  
    
    /*==================================================================
    [ Validate ]*/
    var name = $('.validate-input input[name="name"]');
    var email = $('.validate-input input[name="email"]');
    var message = $('.validate-input textarea[name="message"]');


    $('.validate-form').on('submit',function(){
        var check = true;

        if($(name).val().trim() == ''){
            showValidate(name);
            check=false;
        }


        if($(email).val().trim().match(/^([a-zA-Z0-9_\-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([a-zA-Z0-9\-]+\.)+))([a-zA-Z]{1,5}|[0-9]{1,3})(\]?)$/) == null) {
            showValidate(email);
            check=false;
        }

        if($(message).val().trim() == ''){
            showValidate(message);
            check=false;
        }

        return check;
    });


    $('.validate-form .input2').each(function(){
        $(this).focus(function(){
           hideValidate(this);
       });
    });

    function showValidate(input) {
        var thisAlert = $(input).parent();

        $(thisAlert).addClass('alert-validate');
    }

    function hideValidate(input) {
        var thisAlert = $(input).parent();

        $(thisAlert).removeClass('alert-validate');
    }
    
    

})(jQuery);



function topLayer(params) {
    const btnPrimary = document.querySelectorAll('.főgombok');
    const elements = document.querySelectorAll('.container *');

    const iksz = document.querySelector("#iksz")

    const keret = document.querySelector(".minvisible")
    const szakasz = document.querySelector("szakasz")
    const body = document.querySelector("body")

    btnPrimary.forEach(button => {
        button.addEventListener("click", (event) => {
            event.preventDefault();
            body.style.backgroundImage = "None"

            keret.style.display = "block"


            szakasz.style.opacity = '0.9'
            szakasz.style.filter = 'blur(5px)';

            body.classList.add('no-scroll');


        })
    })

    // eredeti állapot visszaállítása
    iksz.addEventListener("click", () => {
        body.style.backgroundImage = 'url("./img/background.jpg")'
        keret.style.display = "None"
        szakasz.style.opacity = '1'
        szakasz.style.filter = "None"
        console.log("megy")
        body.classList.remove('no-scroll');

    })
  

}

topLayer()