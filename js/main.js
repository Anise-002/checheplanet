
$(function(){
    $('.login').click(function(){
        $('#login').show();
    });
    $('.submit').click(function(){
        $('#login').hide();
    });
    $('#login .bg').click(function(){
        $('#login').css({'display':'none'});
    })

    //배너 슬라이드
    var a= 0;
    var banner = $('.banner_list');
   
    function move(tg,start,end){
        tg.css('left',start).animate({'left':end},1000);
    };
        
        setInterval(function(){
            var pre = banner.eq(a);
            move(pre,0,'-100%');
            a++;
            if(a == banner.length){
                a=0;
            };
            var next = banner.eq(a);
            move(next,'100%',0);
        },3000);



    //.banner_item 슬라이드
    var i = 0;
    $('.banner_item_wrap .btn_left').click(function(){
        if(i>0){
            $('.banner_items_list').css({'margin-left':'+=278px'});
            i--;
        }
        console.log(i);
    });

    $('.banner_item_wrap .btn_right').click(function(){        
        if(i<2){
            $('.banner_items_list').css({'margin-left':'-=278px'});
            i++;
        }
        console.log(i);
    });



    //캠페인 슬라이드 
    var slides = document.querySelector('.poster_list_wrap ul'),
        slide = document.querySelectorAll('.poster_list_wrap li'),
        currentIndex = 0,
        slideCount = slide.length,
        slideWidth = 235,
        slideMargin = 20,
        prevBtn = document.querySelector('.poster_list .btn_left'),
        nextBtn = document.querySelector('.poster_list .btn_right');
    
        makeClone();

        function makeClone(){
            for(var i = 0; i <slideCount; i++){
                var cloneSlide = slide[i].cloneNode(true);
                cloneSlide.classList.add('clone');
                slides.appendChild(cloneSlide);
            }
            for(var i = slideCount-1;  i >= 0;  i--){
                var cloneSlide = slide[i].cloneNode(true);
                cloneSlide.classList.add('clone');
                slides.prepend(cloneSlide);
            }
        }

        updateWidth();
        setinitalPos();
        setTimeout(function(){
            slides.classList.add('animate');
        },100);

        function updateWidth(){
            var currentSlide = document.querySelectorAll('.poster_list_wrap li');
            var newSlideCount = currentSlide.length;

            var newWidth = (slideWidth+slideMargin) * newSlideCount + 'px';
            slides.style.width = newWidth;
        }

        function setinitalPos(){
            var newPos = - (slideWidth+slideMargin)*slideCount;
            slides.style.transform = 'translateX('+ newPos +'px)';
        }

        //버튼 클릭 
        nextBtn.addEventListener('click',function(){
            moveSlide(currentIndex+1);
        });
        prevBtn.addEventListener('click',function(){
            moveSlide(currentIndex-1);
        });
    
        function moveSlide(num){
            slides.style.left = -num * (slideWidth + slideMargin) +'px';
            currentIndex = num;
            console.log(currentIndex,slideCount );
    
            if(currentIndex == slideCount || currentIndex == -slideCount ){
                setTimeout(function(){
                    slides.classList.remove('animate');
                    slides.style.left = '0px';
                    currentIndex = 0;
                },500);
                setTimeout(function(){
                    slides.classList.add('animate');
                },600);
            }
         };
         var  timer = undefined;
            //자동 넘김 슬라이드
            function autoSlide(){
                if(timer == undefined){
                    timer = setInterval(function(){
                        moveSlide(currentIndex+1);
                    },2000);
                }
            }
            autoSlide();
});