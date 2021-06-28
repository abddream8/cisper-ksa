$(document).ready(function(){
   




    $(".link1").click(function(){
        $(".link1").addClass("toggle-color")
        $(".link2").removeClass("toggle-color")
        $(".link3").removeClass("toggle-color")
        $(".link4").removeClass("toggle-color")


   /*     $(".under1").addClass("toggle-under-nav")
        $(".under2").removeClass("toggle-under-nav")
        $(".under3").removeClass("toggle-under-nav")
        $(".under4").removeClass("toggle-under-nav")*/


    })
    $(".link2,.arrowone").click(function(){
        $(".link2").addClass("toggle-color")
        $(".link1").removeClass("toggle-color")
        $(".link3").removeClass("toggle-color")
        $(".link4").removeClass("toggle-color")


        
        /*$(".under2").addClass("toggle-under-nav")
        $(".under1").removeClass("toggle-under-nav")
        $(".under3").removeClass("toggle-under-nav")
        $(".under4").removeClass("toggle-under-nav")*/
        
        
    })
    $(".link3").click(function(){
        $(".link3").addClass("toggle-color")
        $(".link2").removeClass("toggle-color")
        $(".link1").removeClass("toggle-color")
        $(".link4").removeClass("toggle-color")
        
    /*    $(".under3").addClass("toggle-under-nav")
        $(".under1").removeClass("toggle-under-nav")
        $(".under2").removeClass("toggle-under-nav")
        $(".under4").removeClass("toggle-under-nav")*/
        
        
    })
    $(".link4").click(function(){
        $(".link4").addClass("toggle-color")
        $(".link2").removeClass("toggle-color")
        $(".link3").removeClass("toggle-color")
        $(".link1").removeClass("toggle-color")



      /*  $(".under4").addClass("toggle-under-nav")
        $(".under1").removeClass("toggle-under-nav")
        $(".under2").removeClass("toggle-under-nav")
        $(".under3").removeClass("toggle-under-nav")*/
    })
   









    


})




document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});


$("#sanmeals").hide()

$(".a").animate({left:"-53%"});
$(".aa,.a").click(function(){
   $("#sand").show(500);
    $("#sanmeals").hide();
    $(".aa").addClass("toggle-color");
    $(".bb").removeClass("toggle-color");
    $(".a").animate({left:"-53%"});
    $(".b").animate({left:"53%"});
})
$(".bb,.b").click(function(){
    $("#sand").hide();
    $("#sanmeals").show(500);
    $(".aa").removeClass("toggle-color");
    $(".bb").addClass("toggle-color");
    $(".b").animate({left:"-53%"});
    $(".a").animate({left:"53%"});
    
})
$(".minioptions").hide()
$(".hamburg img").click(function(){
    $(".minioptions").slideToggle()
  
})


//inter section observer

const navbar = document.getElementById(".smallnav");
const header = document.querySelector(".second-back");
const headerOption = {
    root:null,
    rootMargin:'600px',
    threshold:1.0
};
const headerObserver = new IntersectionObserver(function (entries, headerObserver) {
    entries.forEach( entry => {
        if(!entry.isIntersecting) {
            $(".smallnav").addClass("toggle-smallbar");
            $(".sharebtn img").attr("src","./shareyellow.svg");
            $(".hamburg img").attr("src","./redham.svg");
            $(".minilogo img").attr("src","./graylog.svg");
            $(".smallunder1").removeclass("toggle-small-under");
        }else{
            $(".smallnav").removeClass("toggle-smallbar");
            $(".sharebtn img").attr("src","./share.svg")
            $(".hamburg img").attr("src","./minihamburger.svg");
            $(".minilogo img").attr("src","./smalllog.svg");
            $(".smallunder1").addclass("toggle-small-under");
    }
        });
},headerOption)
headerObserver.observe(header);

$("#minisandmeals").hide();

$(".divs1").click(function(){
    $(".divs1 img").addClass("toggle-mini-under");
    $(".divs2 img").removeClass("toggle-mini-under");
    $(".divs3 img").removeClass("toggle-mini-under");
    $(".divs4 img").removeClass("toggle-mini-under");
    $(".divs5 img").removeClass("toggle-mini-under");
    $(".divs6 img").removeClass("toggle-mini-under");
    $("#minisand").show();
    $("#minisandmeals").hide();
})
$(".divs2").click(function(){
    $(".divs2 img").addClass("toggle-mini-under");
    $(".divs1 img").removeClass("toggle-mini-under");
    $(".divs3 img").removeClass("toggle-mini-under");
    $(".divs4 img").removeClass("toggle-mini-under");
    $(".divs5 img").removeClass("toggle-mini-under");
    $(".divs6 img").removeClass("toggle-mini-under");
    $("#minisand").hide();
    $("#minisandmeals").show();
})
$(".divs3").click(function(){
    $(".divs3 img").addClass("toggle-mini-under");
    $(".divs2 img").removeClass("toggle-mini-under");
    $(".divs1 img").removeClass("toggle-mini-under");
    $(".divs4 img").removeClass("toggle-mini-under");
    $(".divs5 img").removeClass("toggle-mini-under");
    $(".divs6 img").removeClass("toggle-mini-under");
})
$(".divs4").click(function(){
    $(".divs4 img").addClass("toggle-mini-under");
    $(".divs2 img").removeClass("toggle-mini-under");
    $(".divs1 img").removeClass("toggle-mini-under");
    $(".divs3 img").removeClass("toggle-mini-under");
    $(".divs5 img").removeClass("toggle-mini-under");
    $(".divs6 img").removeClass("toggle-mini-under");
})
$(".divs5").click(function(){
    $(".divs5 img").addClass("toggle-mini-under");
    $(".divs2 img").removeClass("toggle-mini-under");
    $(".divs1 img").removeClass("toggle-mini-under");
    $(".divs4 img").removeClass("toggle-mini-under");
    $(".divs3 img").removeClass("toggle-mini-under");
    $(".divs6 img").removeClass("toggle-mini-under");
})
$(".divs6").click(function(){
    $(".divs6 img").addClass("toggle-mini-under");
    $(".divs2 img").removeClass("toggle-mini-under");
    $(".divs1 img").removeClass("toggle-mini-under");
    $(".divs4 img").removeClass("toggle-mini-under");
    $(".divs5 img").removeClass("toggle-mini-under");
    $(".divs3 img").removeClass("toggle-mini-under");
})


$(".smalllink1").click(function(){
   /* $(".smallunder1").addClass("toggle-small-under");
    $(".smallunder2").removeClass("toggle-small-under");
    $(".smallunder3").removeClass("toggle-small-under");
    $(".smallunder4").removeClass("toggle-small-under");*/
    $(".minioptions").slideUp();
})
$(".smalllink2").click(function(){
   /* $(".smallunder2").addClass("toggle-small-under");
    $(".smallunder1").removeClass("toggle-small-under");
    $(".smallunder3").removeClass("toggle-small-under");
    $(".smallunder4").removeClass("toggle-small-under");*/
    $(".minioptions").slideUp();
})
$(".smalllink3").click(function(){
   /* $(".smallunder3").addClass("toggle-small-under");
    $(".smallunder2").removeClass("toggle-small-under");
    $(".smallunder1").removeClass("toggle-small-under");
    $(".smallunder4").removeClass("toggle-small-under");*/
    $(".minioptions").slideUp();
})
$(".smalllink4").click(function(){
   /* $(".smallunder4").addClass("toggle-small-under");
    $(".smallunder2").removeClass("toggle-small-under");
    $(".smallunder3").removeClass("toggle-small-under");
    $(".smallunder1").removeClass("toggle-small-under");*/
    $(".minioptions").slideUp();
})
$(".minioptions img").click(function(){
    $(".minioptions").slideUp()
})


$(".ch1").click(function(){
    $(".ch1").attr("src", "./checked.svg")
    $(".ch2").attr("src", "./unchecked.svg")
    $(".ch3").attr("src", "./unchecked.svg")
    $(".smallslider").animate({left:"-200px"});
})


$(".ch2").click(function(){
    $(".ch2").attr("src", "./checked.svg")
    $(".ch1").attr("src", "./unchecked.svg")
    $(".ch3").attr("src", "./unchecked.svg")
    $(".smallslider").animate({left:"0px !important"});
})






if (navigator.userAgent.includes('Firefox')) {
    $(".pathone").css("top","490px");
    $(".smallslider").css("height","90%");
    $(".black").css("bottom", "95px");
    $(".minidont").css("top", "-50px");
  };

const navigation = document.getElementById("nav1");
const slider = document.getElementById("test");
const sliderOption = {
    root:null,
    rootMargin:'600px',
    threshold:1.0
};
const sliderObserver = new IntersectionObserver(function (enter, sliderOption) {
    enter.forEach(single => {
        if(!single.isIntersecting){
            $(".navone").addClass("navone-toggle");
            $(".logoone img").attr("src", "./graylogo.svg")
            $(".link1,.link2,.link3,.link4").addClass("link-toggle-color");
            $(".under1").removeClass("toggle-under-nav");
        }else{
            $(".navone").removeClass("navone-toggle");
            $(".logoone img").attr("src", "./logo.svg")
            $(".link1,.link2,.link3,.link4").removeClass("link-toggle-color");
            $(".under1").addClass("toggle-under-nav");
        }
    });
},sliderOption);
sliderObserver.observe(slider);




$(document).on('scroll', function() {
    if ($(this).scrollTop() >= $('#hyperabout').position().top) {
      $(".under2").addClass("toggle-under-nav")
      $(".link2").addClass("toggle-color");
    }else{
        $(".under2").removeClass("toggle-under-nav")
        $(".link2").removeClass("toggle-color");
    }
})
$(document).on('scroll', function() {
    if ($(this).scrollTop() >= $('#menuscroll').position().top) {
        $(".under3").addClass("toggle-under-nav")
        $(".under2").removeClass("toggle-under-nav")
    }else{
        $(".under3").removeClass("toggle-under-nav")
    }
  })
$(document).on('scroll', function() {
    if ($(this).scrollTop() >= $("#hyper-formandback").position().top) {
        $(".under4").addClass("toggle-under-nav")
        $(".under3").removeClass("toggle-under-nav")
    }else{
        $(".under4").removeClass("toggle-under-nav")
    }
  })
  
  


$(document).on('scroll', function() {
    if ($(this).scrollTop() >= $("#hyperabout").position().top) {
        $(".smallunder2").addClass("toggle-small-under")
    }else{
        $(".smallunder2").removeClass("toggle-small-under")
    }
})
$(document).on('scroll', function() {
    if ($(this).scrollTop() >= $("#hyperminitest").position().top) {
        $(".smallunder3").addClass("toggle-small-under")
    }else{
        $(".smallunder3").removeClass("toggle-small-under")
        $(".smallunder2").removeClass("toggle-small-under")
    }
  })




  $(".send").click(function(){
      let firstInput = $(".f-i").val();
      let secondInput = $(".s-i").val();
      let thirdInput = $(".t-i").val();

      if(firstInput == "" || secondInput == "" || thirdInput ==""){
          alert("قم بملئ كامل حقول الطلب اولا!.");
          $(".send").attr("disabled", true);
        }else if(!$.isNumeric(secondInput)){
            alert("يمنع ادخال الاحرف في حقل الرقم!.");
            $(".send").attr("disabled", true);
      }
  });
  $(".f-i,.s-i,.t-i").focus(function(){
      $(".send").attr("disabled",false);
  });

  $(".formtwo").submit(function(){
    $(".f-i,.s-i,.t-i").val("");
  })




  $(".minifour").click(function(){
      let firstInputMini = $(".minione").val();
      let secondInputMini = $(".minitwo").val();
      let thirdInputMini = $(".minithree").val();

      if(firstInputMini == "" || secondInputMini == "" || thirdInputMini ==""){
          alert("قم بملئ كامل حقول الطلب اولا!.");
          $(".minifour").attr("disabled", true);
        }else if(!$.isNumeric(secondInputMini)){
            alert("يمنع ادخال الاحرف في حقل الرقم!.");
            $(".minifour").attr("disabled", true);
      }
  });
  $(".minione,.minitwo,.minithree").focus(function(){
      $(".minifour").attr("disabled",false);
  });

  $(".miniform").submit(function(){
    $(".minione,.minitwo,.minithree").val("");
  })