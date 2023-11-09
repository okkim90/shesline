
/*
const marquee = () => {
    const marquee = document.querySelectorAll('.marquee');
    marquee.forEach((e)=>{
        let marqueeCont = e.querySelector('.marquee_txt');
        //console.log(marqueeCont);
        // e.append(marqueeCont.cloneNode(true));
        // e.append(marqueeCont.cloneNode(true));
        let marquee_width = parseInt(
            getComputedStyle(marqueeCont).getPropertyValue('width'), 10
        );
        let marquee_gap = parseInt(
            getComputedStyle(e).getPropertyValue('gap'), 10
        );
        let dir = e.dataset.marqueeDir;
        //console.log(dir);
        const moveLeft = 1 * ( marquee_width + marquee_gap);
        const moveRight = -1 * ( marquee_width + marquee_gap);
        if(dir === 'left'){
            
            gsap.fromTo(
                e.children,
                {x: 0},
                {
                    x: moveLeft,
                    duration: 16,
                    ease : "linear",
                    repeat:-1
                }
            ).totalProgress(0.5)
        }
        if(dir === 'right'){
            
            gsap.fromTo(
                e.children,
                {x: 0},
                {
                    x: moveRight,
                    duration: 16,
                    ease : "none",
                    repeat:-1
                }
            )
        }     
    });  
}
document.addEventListener("DOMContentLoaded",marquee);
*/

// window.addEventListener('DOMContentLoaded', ()=> {
    
//         const { innerHeight } = window;
//         document.documentElement.style.setProperty("--app-height",`${innerHeight}px`);
  
    
// });

// window.mobileAndTabletCheck = function() {
//     let check = false;
//     (function(a){if(/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino|android|ipad|playbook|silk/i.test(a)||/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(a.substr(0,4))) check = true;})(navigator.userAgent||navigator.vendor||window.opera);
//     return check;
// };


function setScreenSize() {
    let vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty('--vh', `${vh}px`);
}
setScreenSize();

var prevWidth = window.innerWidth;
window.addEventListener('resize', ()=>{
    if (window.innerWidth !== prevWidth ) {
        prevWidth = window.innerWidth;
        setScreenSize()
    }
});
 

let marquee_left = gsap.to('.dir_left .marquee_txt',{
    xPercent: -100,
    repeat:-1,
    duration:16,
    ease:'linear',
}).totalProgress(0.5);

let marquee_right = gsap.to('.dir_right .marquee_txt',{
    xPercent: 100,
    repeat:-1,
    duration:16,
    ease:'linear',
}).totalProgress(0.5);

let currentScroll = 0;
let isScrollingDown = true;
window.addEventListener("scroll", function(){
  
    if ( window.pageYOffset > currentScroll ) {
        isScrollingDown = true;
        //console.log('down');
    } else {
        isScrollingDown = false;
        //console.log('down');
    }
        
    gsap.to(marquee_left, {
        timeScale: isScrollingDown ? 1 : -1
    });
    gsap.to(marquee_right, {
        timeScale: isScrollingDown ? 1 : -1
    });

    currentScroll = window.pageYOffset
});



let fill_txt_box = document.querySelector('.fill_txt_box');
let fill_txt = `오랜 업무 노하우를 바탕으로 디자인, 상품기획, 개발, 제작까지의 전문 기획 진행과 영업력,/ 적재, 배송과 판매를 위한 원스탑 관리 물류 시스템을 도입하여 뷰티툴 전문 기업으로 발전하였습니다./IOS 9001과 ISO 14001 인증을 획득하여 안정적인 시스템과 환경경영시스템 구축을 통하여/높은 수준의 제품과 품질 제공을 약속합니다.`
let fil_arr = fill_txt.split("");

fil_arr.forEach((e)=>{
    newBox = document.createElement('span');
    br = document.createElement('br');
    gap = document.createElement('span');
    
    if (e === '/'){
        fill_txt_box.append(br);
    }else if(e === ' '){
        gap.classList.add('gap');
        fill_txt_box.append(gap);
    }else{
        newBox.classList.add('fill_txt_item');
        newBox.innerHTML = e;
        newBox.setAttribute('data-text',e);
        fill_txt_box.append(newBox);
    }
});
let fill_txt_item = document.querySelectorAll('.fill_txt_box span');

let fill_timer;
let count = 0;
function fill_ani(){
    reset_ani()
    /*
    for(let i=0;i<fill_txt_item.length;i++){
        
        fill_timer = setTimeout(()=>{
            fill_txt_item[i].classList.add('on')
            console.log(i)
        }, 80*i)
    
    }*/

    fill_timer = setInterval(()=>{
        
        if(count < fill_txt_item.length){
            fill_txt_item[count].classList.add('on')
            count +=1;
        }
    },40);
}


function reset_ani(){
    //count = 0;
    clearInterval(fill_timer);
}


ScrollTrigger.create({
    trigger: fill_txt_box,
    start: "top bottom",
    end: "bottom top",
    onEnter: () => fill_ani(),
    onEnterBack: ()=> fill_ani(),
    onLeave: () => reset_ani(),
    onLeaveBack: ()=> reset_ani(),
    //markers:true,
});




const brand_data = [
    {
        title:'툴리프',
        img:'../assets/img/brand_bg1.png',
        logo:'../assets/img/logo_toolif.svg',
        pop_img:'../assets/img/brand_pop_bg1.png',
        //pop_slogan:'툴리프 슬로건 ㅁㄴㅇㄹㅁㄴㅇㄹㅁㄴㅇㄹ Toolif.',
        pop_cont:`
        Accentuating 'Tool+Beauty Lifestyle' as a brand slogan, Toolif, is a cosmetic product brand that continuously researches to make makeup easier for beginners, more convenient for makeup experts, and achievable for everyone, ensuring that anyone can achieve the desired results easily while maintaining a focus on the latest trends in the beauty industry.
        `,
        link:'www.toolif.com'
    },
    {
        title:'버블톡',
        img:'../assets/img/brand_bg2.png',
        logo:'../assets/img/logo_bubbletok.svg',
        pop_img:'../assets/img/brand_pop_bg2.png',
        pop_slogan:'반짝이는 동그란 버블이 톡톡 터지는 기분!',
        pop_cont:`
        버블톡은 톡톡 튀는 아이디어를 더한 데일리 라이프 리빙 소품 브랜드입니다. <br> 실용적이고 참신한 아이디어가 녹여진 버블톡과 함께 반복되는 일상 속에서 찾아오는 작은 변화를 느껴보세요.
        `,
        link:'www.bubbletok.com'
    },
    {
        title:'올리브크라운',
        img:'../assets/img/brand_bg3.png',
        logo:'../assets/img/logo_olivecrown.svg',
        pop_img:'../assets/img/brand_pop_bg3.png',
        pop_slogan:'고대 그리스, 오직 승자에게만 허락된 OliveCrown.',
        pop_cont:`
        올리브크라운은 자신을 당당하게 표현하고자 하는 분들을 위한 하이엔드 헤어 액세서리 브랜드입니다. <br>  
        올리브크라운 만의 고급스러운 디자인과 높은 품질의 헤어 악세서리 상품들로 <br>  
        한층 더 아름다운 스타일링을 완성하세요.
        `,
        link:'www.olivecrown.com'
    }
]
const brand_list = document.querySelector('.brand_list');
const qweqwe = () => {
    let arr = [];
    brand_data.map((e,i)=>{
        arr.push(
            `
            <li class="brand_item col_item">
                <div class="img_box" onclick="brand_popup(${i})" aria-label="Toolif popup">
                    <div class="bg_box" style="background-image:url('${e.pop_img}')"></div>
                    <img src="${e.logo}" alt="${e.title}" class="brand_logo brand_logo_${i}">
                    <button type="button" class="btn_popup"></button>
                    <!--<img src="${e.pop_img}" alt="${e.title}" class="hidden">-->
                </div>
            </li>
            `
        );
        
    });
    return arr.join("")
};
brand_list.innerHTML =  qweqwe();



const brand_popup_element = document.querySelector('.brand_popup');
function brand_popup(i){
    let pop_slogan = '';
    if(brand_data[i].pop_slogan){
        pop_slogan =  `<div class="t_slogan">${brand_data[i].pop_slogan}</div>`
    }
    const pop_cont = `
        <div class="brand_popup_inner" onclick="close_popup();">
            <div class="brand_popup_cont" onclick="event.stopPropagation()">
                <button type="button" onclick="close_popup()" class="btn_close_popup" aria-label="close popup"></button>
                <div class="img_box" style="background-image:url('${brand_data[i].pop_img}')"></div>
                <div class="txt_box">
                    <div class="t_tit">
                        <h3>${brand_data[i].title}</h3>
                        <a href="https://${brand_data[i].link}" class="link">${brand_data[i].link}</a>
                    </div>
                    ${pop_slogan}
                    <div class="t_desc">${brand_data[i].pop_cont}</div>
                </div>
            </div>
        </div>
    `
    brand_popup_element.innerHTML = pop_cont;
    brand_popup_element.classList.add('on');
}

function close_popup(){
    brand_popup_element.classList.remove('on');
}


const toggleActiveOnViewport = () => {
    let elements = document.querySelectorAll(".aniBox");
    elements.forEach((e)=>{
        let matrix = new WebKitCSSMatrix(getComputedStyle(e).transform);
        //console.log(matrix.f);
        let matrixY = matrix.f;
        ScrollTrigger.create({
            trigger: e,
            start: `-${matrixY} bottom`,
            end: `bottom-=${matrixY} top`,
            // start: 'top bottom',
            // end : 'bottom top',
            onEnter: function() {
                e.classList.add('gogo');
                
            },
            /*
            onEnterBack: function() {
                e.classList.add('gogo');
            },
            onLeave: function() {
                e.classList.remove('gogo');
            },
            onLeaveBack: function() {
                e.classList.remove('gogo');
            },
            */
            invalidateOnRefresh:true,
           //markers: true,
        });
    });
   
}
window.addEventListener('DOMContentLoaded', toggleActiveOnViewport);




/* go to top */
document.querySelector('.btn_top').addEventListener('click',()=>{
    let body = document.getElementsByTagName('body')[0];
   
    gsap.to(window,{
        duration: 0.8,
        ease: "power2.inOut",
        scrollTo:body.offsetTop,
        delay:  0.06
    })
});

function gnb_link(sec){
    let pos = document.querySelector(sec);
    const h_h = document.querySelector('#header').offsetHeight
    gsap.to(window,{
        duration: 0.8,
        ease: "power2.inOut",
        scrollTo:pos,
        delay:  0.06
    })
}

const gnb_pos = () => {
    const elements = document.querySelectorAll(".sec_area");
    const nav_item = document.querySelectorAll('.nav_item');
    elements.forEach((e, i)=>{
        
        ScrollTrigger.create({
            trigger: e,
            start: `top center`,
            end: `bottom center`,
            onEnter: function() {
                
                nav_item[i].classList.add('on');
            },
           
            onEnterBack: function() {
                
                nav_item[i].classList.add('on');
            },
            onLeave: function() {
                nav_item.forEach((nav)=>{
                    nav.classList.remove('on')
                })
                //nav_item[i].classList.add('on');
            },
            onLeaveBack: function() {
                nav_item.forEach((nav)=>{
                    nav.classList.remove('on')
                })
                //nav_item[i].classList.add('on');
            },
            
            invalidateOnRefresh:true,
           //markers: true,
        });
    });
}


['DOMContentLoaded', 'scroll'].forEach(event => window.addEventListener(event, gnb_pos()));

/* header */
const mv_wrap = document.querySelector('.mv_wrap');
const header = document.querySelector('.header');
ScrollTrigger.create({
    trigger: mv_wrap,
    start:()=> "top " + header.offsetHeight,
    end:()=> "bottom " + header.offsetHeight,
    onEnter: () => header.classList.remove('on'),
    onLeave: () => {header.classList.add('on')},
    onEnterBack:() => header.classList.remove('on'),
    onLeaveBack:() => {header.classList.add('on')},
});




/* mv */
const mv = new Swiper('.mv',{
    loop : true,
    speed : 600,
    pagination: {
        el: '.mv_page',
        type: "fraction",
    },
    navigation: {
        nextEl: '.mv_next',
        prevEl: '.mv_prev',
    },
    on: {
        init: function(){
          let index = this.realIndex;
          document.querySelector(`.mv_item[data-swiper-slide-index='${index}']`).classList.add('on');
          
        },
        slideChange : function() {
          startProgressbar();
          let index = this.realIndex;
          document.querySelectorAll('.mv_item').forEach((e)=>{e.classList.remove('on')})
          document.querySelector(`.mv_item[data-swiper-slide-index='${index}']`).classList.add('on');
         
        },
    }
});

const $autoplay_delay = 6; 

const $progress_btn = document.querySelector('.mv_btn');


const circle = document.querySelector('.progress_circle');
let RADIUS = circle.getAttribute('r');
let CIRCUMFERENCE = 2 * Math.PI * RADIUS;
circle.style.strokeDasharray = CIRCUMFERENCE;

function progress(per){
    let progress = per / 100;
    let dashoffset = CIRCUMFERENCE * (1 - progress);
    circle.style.strokeDashoffset = dashoffset;
}

let isPause,
    tick,
    percentTime;

function startProgressbar() {
    resetProgressbar();
    percentTime = 0;
    progress_play();
    tick = setInterval(interval, 10);
}

function interval() {
    if(isPause === false) {
        percentTime += 1 / ($autoplay_delay+0.1);
        /*$bar.css({
            width: percentTime+"%"
        });*/
        progress(percentTime);
        if(percentTime >= 100){
            mv.slideNext();
            startProgressbar();
        }
    }
}

function resetProgressbar() {
    /*$bar.css({
        width: 0+'%' 
    });*/
    progress(0);
    clearTimeout(tick);
}

function progress_pause(){
    isPause = true;
    $progress_btn.classList.add('pause');
}
function progress_play(){
    isPause = false;
    $progress_btn.classList.remove('pause');
}

$progress_btn.addEventListener('click',function(){
    if(isPause){
        progress_play()
    }else{
        isPause = true;
        progress_pause()
    }
});

if(document.querySelector('.mv')) {
    startProgressbar();
}






/* cover img */
const cover_img = document.querySelector('.cover_img');
const cover_bg = document.querySelector('.cover_bg');
function cover(){
    let cover_img_h = cover_img.clientHeight;
    //console.log(cover_img_h);
   
    gsap.timeline({
        scrollTrigger : {
            trigger: '.cover_box',
            start: "top bottom",
            //end: ()=> `+=${cover_img_h}`,
            end: "bottom bottom",
            pinSpacing: false,
            scrub:0.3,
            pin: '.cover_img',
            //markers:true,
            invalidateOnRefresh:true
        }
    }).to('.cover_img',{
        opacity:1,
        duration:3,
        ease:'none'
    });
}
['DOMContentLoaded'].forEach(event => window.addEventListener(event, cover));
/*
gsap.to(cover_bg,{
    
    opacity: 0,
    top:0,
    ease: 'none',
    scrollTrigger : {
        trigger: '.cover_box',
        start: "-10% bottom ",
        end: "110% bottom",
        scrub:true,
        //markers:true
       
    }
});
*/




/* history & award */
const ha_btn = document.querySelectorAll('.ha_btn');
const ha_item = document.querySelectorAll('.ha_item');

function hasClass(element, clsName) {
    return(' ' + element.className + ' ').indexOf(' ' + clsName + ' ') > -1;
}

const ha_list = new Swiper('.ha_list',{
    loop : false,
    //speed : 600,
    slidesPerView: 4,
    spaceBetween: 40,
    grabCursor: true,
    breakpoints: {
        767: {
          slidesPerView: 2,  
          spaceBetween: 20,
          //freeMode:true,
          slidesPerView: 1.6
        },
        1024: {
          slidesPerView: 3,  
          spaceBetween: 30,
        }
    },
    navigation: {
        nextEl: '.ha_next',
        prevEl: '.ha_prev',
    },
});

ha_filter('history');
function ha_filter(filter_name){
    ha_btn.forEach(e => {
        e.classList.remove('on');
        if(e.dataset.filter == filter_name){
            e.classList.add('on');
        }
    });
    ha_item.forEach(e => {
        e.style.display='none';
        if(e.classList.contains(filter_name)){
            e.style.display = 'block';
        }
    });
   
    ha_list.update();
    ha_list.slideTo(0);
    //ha_h_resize();
}



/* products */
const prod_data = [
    {name:'Makeup Brush & Puff', img:'../assets/img/prod1.png'},
    {name:'Hair Brush & Tool', img:'../assets/img/prod2.png'},
    {name:'Basic Hair Accessories', img:'../assets/img/prod3.png'},
    {name:'Nail', img:'../assets/img/prod4.png'},
    {name:'Cotton', img:'../assets/img/prod5.png'},
    {name:'Bath', img:'../assets/img/prod6.png'},
    {name:'Eyelash', img:'../assets/img/prod7.png'},
    {name:'Handmade Hair Accessories', img:'../assets/img/prod8.png'},
];


const prod_cont = (()=>{
    let arr = [];
    prod_data.map((e, i)=>{
        arr.push(
            `
                <div class="swiper-slide prod_item">
                    <div class="img_box">
                        <img src="${e.img}" alt="${e.name}">
                    </div> 
                    <h3 class="tit">${e.name}</h3>
                </div>
            `
        )
    });

    return arr.join('');
});
const prod_list_el = document.querySelector('.prod_list .swiper-wrapper');    
prod_list_el.innerHTML = prod_cont();



const prod_list = new Swiper('.prod_list',{
    loop : false,
    //speed : 600,
    slidesPerView: 3,
    spaceBetween: 24,
    grabCursor: true,
    scrollbar: {
        el: ".prod-scrollbar",
        //hide: true,
        dragSize: 260,
        draggable: true,
    },
    breakpoints: {
        767: {
          slidesPerView: 1,  
          spaceBetween: 12,
          scrollbar: { 
            dragSize: 50,
        },
        },
        1024: {
            slidesPerView: 2,  
            spaceBetween: 50,
            spaceBetween: 16,
            scrollbar: { 
                dragSize: 100,
            },
        
        }
    }
    
});

/* partner */
const partnerCont = document.querySelector('.partner_cont');
const partnerSort = document.querySelector('.partner_sort');
const partnerList = document.querySelector('.partner_list');
const partnerData = [
    {filter:"Korea", name:'올리브영', img:'../assets/img/partner/korea/partner_korea_01.png'},
    {filter:"Korea", name:'GS25', img:'../assets/img/partner/korea/partner_korea_02.png'},
    {filter:"Korea", name:'emart', img:'../assets/img/partner/korea/partner_korea_03.png'},
    {filter:"Korea", name:'Homeplus', img:'../assets/img/partner/korea/partner_korea_04.png'},
    {filter:"Korea", name:'CU', img:'../assets/img/partner/korea/partner_korea_05.png'},
    {filter:"Korea", name:'CHICOR', img:'../assets/img/partner/korea/partner_korea_06.png'},
    {filter:"Korea", name:'No Brand', img:'../assets/img/partner/korea/partner_korea_07.png'},
    {filter:"Korea", name:'JAJU', img:'../assets/img/partner/korea/partner_korea_08.png'},
    {filter:"Korea", name:'Homeplus express', img:'../assets/img/partner/korea/partner_korea_09.png'},
    {filter:"Korea", name:'emart everyday', img:'../assets/img/partner/korea/partner_korea_010.png'},
    {filter:"Korea", name:'7-ELEVEN', img:'../assets/img/partner/korea/partner_korea_011.png'},
    {filter:"Korea", name:'LOTTE super', img:'../assets/img/partner/korea/partner_korea_012.png'},
    {filter:"Korea", name:'emart24', img:'../assets/img/partner/korea/partner_korea_013.png'},
    {filter:"Korea", name:'LOHBs+', img:'../assets/img/partner/korea/partner_korea_014.png'},
    {filter:"Korea", name:'OFFICE NEX', img:'../assets/img/partner/korea/partner_korea_015.png'},
    {filter:"Korea", name:'LOTTE Mart', img:'../assets/img/partner/korea/partner_korea_016.png'},
    {filter:"Korea", name:'StoryWay', img:'../assets/img/partner/korea/partner_korea_017.png'},
    {filter:"Korea", name:'SHINSEGAE', img:'../assets/img/partner/korea/partner_korea_018.png'},
    {filter:"Korea", name:'AMOREPACIFIC', img:'../assets/img/partner/korea/partner_korea_019.png'},
    {filter:"Korea", name:'온누리약국', img:'../assets/img/partner/korea/partner_korea_020.png'},
    {filter:"Korea", name:'Alpha', img:'../assets/img/partner/korea/partner_korea_021.png'},

    
    {filter:"Global", name:'Walmart', img:'../assets/img/partner/global/partner_global_online_01.png'},
    {filter:"Global", name:'FOREVER21', img:'../assets/img/partner/global/partner_global_online_02.png'},
    {filter:"Global", name:'kosette', img:'../assets/img/partner/global/partner_global_online_03.png'},
    {filter:"Global", name:'coupang', img:'../assets/img/partner/global/partner_global_online_04.png'},
    {filter:"Global", name:'배달의 민족 B마트', img:'../assets/img/partner/global/partner_global_online_05.png'},
    {filter:"Global", name:'SSG', img:'../assets/img/partner/global/partner_global_online_06.png'},
    {filter:"Global", name:'SKINRx', img:'../assets/img/partner/global/partner_global_online_07.png'},
    {filter:"Global", name:'LOTTE ON', img:'../assets/img/partner/global/partner_global_online_08.png'},
    {filter:"Global", name:'SHINSEGAE SHOPPING', img:'../assets/img/partner/global/partner_global_online_09.png'},
    {filter:"Global", name:'오너클랜', img:'../assets/img/partner/global/partner_global_online_010.png'},

];
const setPartnerBtn = (()=>{
    const btn_arr = partnerData.filter((item, i) => {
        return (
            partnerData.findIndex((item2, j) => {
                return item.filter === item2.filter;
            }) === i
        );
    });
    let arr = [];
    /*
    arr.push(
        `
        <button type="button" data-filter="Total" onclick="setPartner('Total')" class="partner_sort_btn btn_sort on">TOTAL</button>
        `
    )
    */
    btn_arr.map((e,i)=>{
        arr.push(
            `
            <button type="button" data-filter="${e.filter}" onclick="setPartner('${e.filter}')" class="partner_sort_btn btn_sort">${e.filter}</button>
            `
        )
    });
    partnerSort.innerHTML = arr.join('');
})();


let pcount = ()=>{
    if (window.innerWidth < 768) {
        return 10;
    }else if(window.innerWidth >= 768 && window.innerWidth < 1025){
        return 15;
    }else if(window.innerWidth >= 1025) {
        return 20;
    }
}
let add_count = ()=>{

    if (window.innerWidth < 768) {
        return 2;
    }else if(window.innerWidth >= 768 && window.innerWidth < 1025){
        return 3;
    }else {
        return 4;
    }
};
let prev_pcount = pcount();
let timer;
window.addEventListener('resize', ()=>{
    let next_pcount = pcount();
    clearTimeout(timer);
    timer = setTimeout(()=>{
        if(prev_pcount == next_pcount){
            
        }else{
            prev_pcount = next_pcount
            partner_count(prev_pcount);
        }
        
        add_count();
    },300);
  
});





const setPartner = (filter)=>{
    let arr = [];
    partnerData.map((e, i)=>{
        if(filter == e.filter){
            arr.push(
                `
                <li class="partner_item col_item">
                    <img src="${e.img}" alt="${e.name}">
                    
                </li>
                `
            )
        }else if(filter == 'Total'){
            arr.push(
                `
                <li class="partner_item col_item">
                    <img src="${e.img}" alt="${e.name}">
                    
                </li>
                `
            )
        }
    });
    partnerList.innerHTML = arr.join('');
    document.querySelectorAll('.partner_sort_btn').forEach((e)=>{
        e.classList.remove('on');
        if(e.dataset.filter == filter){
            e.classList.add('on')
        }
    });


    partner_count(pcount());
    

    ScrollTrigger.refresh();
    
    
};
setPartner('Korea');




function partner_count(count){
    let partner_item = document.querySelectorAll('.partner_item');
    let partner_cont_btn = document.querySelector('.partner_cont_btn');
    partner_item.length > count ? partner_cont_btn.classList.add('on') : partner_cont_btn.classList.remove('on');
    partner_item.forEach((e,i)=>{
        e.classList.remove('on');
        i < count ? e.classList.add('on') : null
    });
}

function partner_add(){
    let partner_item = document.querySelectorAll('.partner_item');
    let partner_item_length = document.querySelectorAll('.partner_item.on').length;
    let partner_cont_btn = document.querySelector('.partner_cont_btn');
    
    partner_item.forEach((e,i)=>{
        i < partner_item_length + add_count() ? e.classList.add('on') : null
    });
    //console.log(partner_item_length);

    document.querySelectorAll('.partner_item.on').length == partner_item.length ? partner_cont_btn.classList.remove('on') : partner_cont_btn.classList.add('on');
    ScrollTrigger.refresh();

}


function contact_popup(){
    const popup_contact = document.querySelector('.popup_contact');
    popup_contact.classList.add('on');
}


function toggle_mapInfo(idx){
    const map_info_item = document.querySelectorAll('.map_info_item');
    map_info_item.forEach((e,i)=>{
        e.classList.remove('on')
        if(idx == i){
            e.classList.add('on') 
        }
    });
    //map_load(idx)
}


 // 37.495583, 127.135190
// 37.495119, 127.036243
const map_data = [
    {loc:'본사', posX: 37.495583, posY:127.135190},
    {loc:'강남', posX: 37.495119, posY:127.036243},
    {loc:'물류1', posX: 37.578629, posY:127.229863},
    {loc:'물류2', posX: 37.333963, posY:127.371458}
]
map_load(0);
 function map_load(idx){
   
    let posX, posY, loc;
    loc = map_data[idx].loc;
    posX = map_data[idx].posX;
    posY = map_data[idx].posY;

    const elluce = new naver.maps.LatLng(posX, posY)
    const map = new naver.maps.Map('map', {
      center: new naver.maps.LatLng(posX, posY),
      zoom: 16,
      minZoom: 8, //지도의 최소 줌 레벨
      scrollWheel: false,
      zoomControl: true, //줌 컨트롤의 표시 여부
      zoomControlOptions: { //줌 컨트롤의 옵션
          position: naver.maps.Position.TOP_RIGHT,
          style: naver.maps.ZoomControlStyle.SMALL
        },
        
    });
    const marker = new naver.maps.Marker({
        icon: {
          url: "../assets/img/marker.webp",
          scaledSize: new naver.maps.Size(30, 30),
          origin: new naver.maps.Point(0, 0),
        },
        position: elluce,
        map: map
    });
   
    const contentString = [
    `<div class="marker_desc" >
       <h2>She's Line [${loc}]</h2>
    </div>`
    ].join('');
   
    const infowindow = new naver.maps.InfoWindow({
        content: contentString,
        //maxWidth: 300,
       
        backgroundColor: "transparent",
        borderWidth: 0,
        disableAnchor: true,
        textAlign: "center",
        margin: "auto",
   
        pixelOffset: new naver.maps.Point(0, -10)
    });
    /*
    naver.maps.Event.addListener(marker, "click", function(e) {
        if (infowindow.getMap()) {
            infowindow.close();
        } else {
            infowindow.open(map, marker);
        }
    });
    */
   
    infowindow.open(map, marker);
 }
 