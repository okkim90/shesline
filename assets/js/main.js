const marquee = () => {
    const marquee = document.querySelectorAll('.marquee');
    marquee.forEach((e)=>{
        let marqueeCont = e.querySelector('.marquee_txt');
        //console.log(marqueeCont);
        e.append(marqueeCont.cloneNode(true));
        e.append(marqueeCont.cloneNode(true));
        let marquee_width = parseInt(
            getComputedStyle(marqueeCont).getPropertyValue('width'), 10
        );
        let marquee_gap = parseInt(
            getComputedStyle(e).getPropertyValue('gap'), 10
        );
        let dir = e.dataset.marqueeDir;
        console.log(dir);
        if(dir === 'left'){
            const move = -1 * ( marquee_width + marquee_gap);
            gsap.fromTo(
                e.children,
                {x: 0},
                {
                    x: move,
                    duration: 16,
                    ease : "none",
                    repeat:-1
                }
            )
        }
        if(dir === 'right'){
            const move = 1 * ( marquee_width + marquee_gap);
            gsap.fromTo(
                e.children,
                {x: 0},
                {
                    x: move,
                    duration: 16,
                    ease : "none",
                    repeat:-1
                }
            )
        }     
    });  
}
document.addEventListener("DOMContentLoaded",marquee);




let fill_txt_box = document.querySelector('.fill_txt_box');
let fill_txt = `오랜 업무 노하우를 바탕으로 디자인, 상품기획, 개발, 제작까지의 전문 기획 진행과 영업력,/적재, 배송과 판매를 위한 원스탑 관리 물류 시스템을 도입하여 뷰티툴 전문 기업으로 발전하였습니다./IOS 9001과 ISO 14001 인증을 획득하여 안정적인 시스템과 환경경영시스템 구축을 통하여/높은 수준의 제품과 품질 제공을 약속합니다.`
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
                <div class="img_box" style="background-image:url('${e.img}')"  onclick="brand_popup(${i})" aria-label="Toolif popup">
                    <img src="${e.logo}" alt="${e.title}">
                    <button type="button" class="btn_popup"></button>
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
    gsap.to(window, .8,{
        scrollTo:body.offsetTop
    });
});

function gnb_link(sec){
    let pos = document.querySelector(sec);
    const h_h = document.querySelector('#header').offsetHeight
    gsap.to(window, .8,{
        scrollTo:pos.offsetTop - h_h
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
            //scrub:true,
            pin: '.cover_img',
            //markers:true,
            invalidateOnRefresh:true
        }
    }).to('.cover_img',{
        //opacity:1,
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
    spaceBetween: 30,
    grabCursor: true,
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
        draggable: true,
    },
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
    if (window.innerWidth < 1025) {
        return 15;
    }else{
        return 20;
    }
}

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
        i < count ? e.classList.add('on') : null
    });
}

function partner_add(add_count){
    let partner_item = document.querySelectorAll('.partner_item');
    let partner_item_length = document.querySelectorAll('.partner_item.on').length;
    let partner_cont_btn = document.querySelector('.partner_cont_btn');
    
    partner_item.forEach((e,i)=>{
        i < partner_item_length + add_count ? e.classList.add('on') : null
    });
    //console.log(partner_item_length);
    document.querySelectorAll('.partner_item.on').length == partner_item.length ? partner_cont_btn.classList.remove('on') : partner_cont_btn.classList.add('on');
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
    })
}


 // 37.495583, 127.135190
 const elluce = new naver.maps.LatLng(37.495583, 127.135190)
 const map = new naver.maps.Map('map', {
   center: new naver.maps.LatLng(37.495583, 127.135190),
   zoom: 16,
   minZoom: 8, //지도의 최소 줌 레벨
   scrollWheel: false,
   zoomControl: true, //줌 컨트롤의 표시 여부
   zoomControlOptions: { //줌 컨트롤의 옵션
       position: naver.maps.Position.TOP_RIGHT
 }});
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
    <h2>She's Line</h2>
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