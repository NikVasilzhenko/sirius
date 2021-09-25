$(document).ready(function(){

//    
//    <section class="wow slideInLeft" data-wow-duration="2s" data-wow-delay="5s"></section>
//    <section class="wow slideInRight" data-wow-offset="10"  data-wow-iteration="10"></section>

    /*wow init*/
    new WOW().init();   
    
    /*brends slider*/
    $('#js-slider').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        dots: false,
        infinite: false,
        responsive: [
            {
              breakpoint: 1024,
              settings: {
                dots: true
              }
            }
        ]
    });
	
	/*кнопка скролл*/
    $('.js-scroll').click(function(e){
        e.preventDefault();
        var anchor = $(this).attr("href");
        var scroll_el = $(anchor);
        if ($(scroll_el).length != 0) { 
            $('html, body').animate({ scrollTop: $(scroll_el).offset().top}, 250); 
        }
    }); 
    
    /*открыть поп-ап*/
    $('.js-order').on('click', function(e){
        $('#js-popup-overlay').add('#js-popup').fadeToggle('300');
        $('body').add('html').toggleClass('noscroll');
        var targ = $(e.target);
        if(targ.hasClass('btn--rainbow') || targ.hasClass('btn--empty')){
            $('html').attr({style: 'overflow: hidden'});
            $('body').attr({style: 'overflow: hidden'});
            $('body').scroll = "no"; // ie only
        } else if (targ.hasClass('popup__overlay') || targ.hasClass('popup__close')){
            $('html').removeAttr('style');  // firefox, chrome
            $('body').removeAttr('style');  // firefox, chrome
            $('body').scroll = "yes"; // ie only
        }
    }); 
    
    /*валидация на заполнение отправка формы и ответ*/
    $('.js-form-val').on('submit', function(e){
            e.preventDefault();
    
            var form = $(this),
                fields = $(form).find('.js-val'),            
                valid = true;
    
            $.each($(fields), function(){
                if (!$.trim($(this).val())){
                    $(this).closest('.input-wrap').addClass('error');
                    valid = false;            
                } else {
                    $(this).closest('.input-wrap').removeClass('error');
                }
            });
    
            if (valid){
               $.ajax({
    				url: "php/mail.php",
    				type: "POST",
    				response: "HTML",
    				data: $(this).serialize(),    
                    success: function(data) {
    					$(form).closest('#js-popup').addClass('ok-block').append(
                            '<div class="ok-f">Спасибо! <br><br>Наши специалисты свяжутся с Вами.</div>'
                        );                     
                    },
    				error: function() {
    					console.log("Не возможно отправить");
    				}
    			});
            }
        });
    $('.js-val').on('keypress', function(){
        $(this).closest('.input-wrap').removeClass('error');
    });
    
    /*ring diagramm*/
    if($(window).width() > 767){
        $('.path-1').hover(function(){
            $('#js-diagramms').addClass('path-1');
        },function(){
            $('#js-diagramms').removeClass('path-1');
        });
        $('.path-2').hover(function(){
            $('#js-diagramms').addClass('path-2');
        },function(){
            $('#js-diagramms').removeClass('path-2');
        });
        $('.path-3').hover(function(){
            $('#js-diagramms').addClass('path-3');
        },function(){
            $('#js-diagramms').removeClass('path-3');
        });
    }
    
    /*shaddow away*/
    $('.js-shaddow-wrap').mousemove(function(e){
        var pos = $(this).offset();
        var elem_left = pos.left;
        var Xinner = e.pageX - elem_left;
        var wrapWidth = $(this).width();
        var shaddowPos = Xinner / (wrapWidth / 100);
        $(this).find('.js-shaddow').css('left', shaddowPos + '%');
    });
    $('.js-shaddow-wrap').mouseout(function(){
        $(this).find('.js-shaddow').removeAttr('style');
    });
    
});

/*Запрет ввода не чисел*/

function Ftest (obj){
    if (this.ST) return; var ov = obj.value;
    var ovrl = ov.replace (/\d*\.?\d*/, '').length; 
    this.ST = true;
    if (ovrl > 0) {
        obj.value = obj.lang; 
        Fshowerror (obj); 
        return
    }
    obj.lang = obj.value; 
    this.ST = null;
}
function Fshowerror (obj){
    if (!this.OBJ){
        this.OBJ = obj; 
        obj.style.backgroundColor = 'pink'; 
        this.TIM = setTimeout (Fshowerror, 50);
    } else {
        this.OBJ.style.backgroundColor = ''; 
        clearTimeout (this.TIM); 
        this.ST = null; 
        Ftest (this.OBJ); 
        this.OBJ = null;
    }
}