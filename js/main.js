var myFullpage = new fullpage('#fullpage', {
    menu: '#menu',
    anchors: ['section1', 'section2', 'section3', 'section4', 'section5','section6','section7'],
    sectionsColor: ['#f2f2f2', '#f2f2f2', '#f2f2f2', '#f2f2f2', '#f2f2f2', '#f2f2f2', '#f2f2f2'],
    autoScrolling: true,  //스크롤 바를 스크롤 하면 한 페이지씩 넘어감(기본설정)
    scrollBar:true
});

$(function(){

    //btn버튼을 클릭하면 해당 섹션으로 부드럽게 이동
    $('.topBtn').click(function(){
        $('html').animate({scrollTop:0},1000);
    });

    var menuItem = $('ul li a');   //메뉴 버튼을 변수로

    menuItem.click(function(){
        $(this).addClass("active");
        $(this).parent().siblings().find("a").removeClass("active");

        var el = $(this).attr("href");      //클릭한 a의 속성 href속성의 속성값을 변수에
        //console.log(el);

        var $el = $(el);
        var headerH = $('header').height();
        //헤더의 높이값을 변수에
        scrollTo($el, headerH);
    });

    function scrollTo(eee,hh){
        var offsetTop = eee.offset().top;    //화면 제일 위에서 부터 위치값
        console.log("offSet값은?"+offsetTop); //헤더의 높이 값을 변수에

        var scrollTotal = offsetTop-hh;
        $('html, body').animate({scrollTop:scrollTotal},1000);
    }
    

});


///22

var windowHeight = $(window).height();      //열린 창의 세로 길이를 구해서 변수에 넣는다
$("section").css("height",windowHeight);    //위에서 구한 세로길이로 section의 height값 설정

$(window).resize(function(){
    var windowHeight = $(window).height();
    $("section").css("height",windowHeight);
});



//리모트 버튼을 누르면 화면이동
var pos = [];   //변수 pos는 배열

for(var i=1 ; i<8 ; i++){               //각 섹션의 위치값을 변수(배열)로 저장
    pos.push($('#s'+i).offset().top-80);
};
console.log(pos);


//스크롤 된 거리를 구하고 리모트 버튼에 클라스가 들어간다
$(window).scroll(function(){
    var scrollH = $(window).scrollTop();
    $('.s_num').text(scrollH);   //화면에 스크롤된 거리가 직접보이게


    if(scrollH < pos[1]){
        $('#remote a').removeClass('on');
        $('#remote a').eq(0).addClass('on');
        $("#headerIn li").removeClass("on");
        $("#headerIn li").eq(0).addClass("on");
    } 
    else if (scrollH >= pos[1] && scrollH < pos[2]){
        $('#remote a').removeClass('on');
        $('#remote a').eq(1).addClass('on');
        $("#headerIn li").removeClass("on");
        $("#headerIn li").eq(1).addClass("on");
    } 
    else if (scrollH >= pos[2] && scrollH < pos[3]){
        $('#remote a').removeClass('on');
        $('#remote a').eq(2).addClass('on');
        $("#headerIn li").removeClass("on");
        $("#headerIn li").eq(2).addClass("on");
    } 
    else if (scrollH >= pos[3] && scrollH < pos[4]){
        $('#remote a').removeClass('on');
        $('#remote a').eq(3).addClass('on');
        $("#headerIn li").removeClass("on");
        $("#headerIn li").eq(2).addClass("on");
    } 
    else if (scrollH >= pos[4] && scrollH < pos[5]){
        $('#remote a').removeClass('on');
        $('#remote a').eq(4).addClass('on');
        $("#headerIn li").removeClass("on");
        $("#headerIn li").eq(3).addClass("on");
    }
    else if (scrollH >= pos[5] && scrollH < pos[6]){
        $('#remote a').removeClass('on');
        $('#remote a').eq(5).addClass('on');
        $("#headerIn li").removeClass("on");
        $("#headerIn li").eq(3).addClass("on");
    }
    else{
        $('#remote a').removeClass('on');
        $('#remote a').eq(6).addClass('on');
        $("#headerIn li").removeClass("on");
        $("#headerIn li").eq(4).addClass("on");
    }
});


//리모트 버튼을 누르면 부드럽게 움직임
$('#remote a').click(function(e){
    e.preventDefault();
   var ttt = this.hash;     //  #(해쉬) 값을 얻어온다
    console.log(ttt);

    $('html, body').animate({scrollTop:$(ttt).offset().top},500,'swing');
});

//각 section안의 btnDown 버튼 클릭
$('section .btnDown').on("click",function(){
    var aa = $(this).parents('section').index();

    $('html, body').animate({scrollTop:pos[aa+1]},500,'swing');

});











// for(초기값;조건식;증감식){ 실행구 }
// A.push(B)    :배열A에 배열값B를 집어넣는다

