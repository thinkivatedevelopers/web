$(document).ready(function(){
   
    $("#submitBtn").click(function(){     
        $("#contactform").submit(function(e) {
          e.preventDefault();
            $("#plz-wait").show();
           
           $name=$('#name').val();
          
           $email=$('#email').val();
           
           $mobile= $('#mobile').val();
          
           $company= $('#company').val();
          
           $message= $('#message').val();
           
            


           data={
             'name':$name,
             'email':$email,
             'mobile':$mobile,
             'message':$message,
             'method':"Thinkivate Website",
             'company':$company,
             'against':"Thinkivate" 

           }
           
         
            var actionurl = e.currentTarget.action;

           
          
            //do your own request an handle the results
            $.ajax({
                    url: actionurl,
                    type: 'POST',
                    data:data
                    
            })
            .done(function(data){
              console.log('response data from server');
                console.log(data);

                $("#plz-wait").hide();
                $('#thankyou_success_message').show();
                $('#thankyou_error_message').hide();
                
                $('#name').val('');
                $('#email').val('');
                $('#mobile').val('');
                $('#company').val('');
                $('#message').val('');
            }).fail(function(){
                $("#plz-wait").hide();
              // console.log("An error occurred, the files couldn't be sent!");
               //alert("An error occurred, the files couldn't be sent!");
               $('#thankyou_error_message').show();
                   $('#thankyou_success_message').hide();
                   $('#name').val('');
                   $('#email').val('');
                   $('#mobile').val('');
                   $('#company').val('');
                   $('#message').val('');
             });
           

            }); // Submit the form





        //https://script.google.com/macros/s/AKfycby-WK0eHXZyCVeRl0E44Wwq2p8zcvgGBHOcOZiN/exec
    });
});


//Get the button
var mybutton = document.getElementById("myBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}


// for sidebar 
function myFnc(e){
    e.classList.toggle("show");

    var elem = document.getElementById("sideID"),
    style = window.getComputedStyle(elem),
    top = style.getPropertyValue("right");

    if(top == "0px"){
        elem.style.right = "-260px";
    }else{
        elem.style.right = "0px";
    }
}