window.onload=function(){
    //top option view 작은 사진 클릭시 사진변경 동작

    var s_img = document.getElementById('s_img');
    var s_img_list = s_img.getElementsByTagName('a');
    console.log(s_img_list);

    for(i = 0; i<s_img_list.length; i++){
        s_img_list[i].onclick = function(){
            var b_img = document.getElementById('b_img');
            b_img.src = this.href;
            return false;
        };        
    };
}
//옵션 선택시 금액 변경



$(function(){

    //로그인 모달창 
    $('.login').click(function(){
        $('#login').show();
    });
    $('.submit').click(function(){
        $('#login').hide();
    });
    $('#login .bg').click(function(){
        $('#login').css({'display':'none'});
    });

    //리뷰 더보기 버튼 클릭시 동작
    $('.review_wrap').click(function(){
        if($(this).hasClass('active')){
            $(this).find('.review_more_cont').stop().slideUp(300);
            $(this).removeClass('active');
        }else{
            $(this).find('.review_more_cont').stop().slideDown(300);
            $(this).addClass('active');
        }

    });

    
})