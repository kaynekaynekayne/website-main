const navMenus=document.querySelector('.nav-menus')
const menuBtn=document.querySelector('.menu-btn');
const closeBtn=document.querySelector('.close');
const aside=document.querySelector('aside');
const asideMenus=document.querySelector('.aside-menus');
const back=document.querySelector('.back');
const sections=document.querySelectorAll('section');
const imgs=document.querySelectorAll('img');


//라우터 구현
const about=document.querySelector('.about');
about.addEventListener('click',()=>{
    window.history.pushState({},'','/about');
    
})

// 메뉴 클릭시 섹션 이동
navMenus.addEventListener('click',(e)=>{
    const target=e.target.dataset.link;
    if(target==null){
        return;
    };
    handleScroll(target);
});

asideMenus.addEventListener('click',(e)=>{
    const target=e.target.dataset.link;
    if(target==null){
        return;
    }
    handleScroll(target);
});

const handleScroll=(selector)=>{
    console.log(selector);
    selector && document.querySelector(selector).scrollIntoView({behavior:'smooth'});
};


// 모바일 버젼 메뉴 클릭
const openMenu=()=>{
    back.className='back active';
    aside.className="active";
};

const closeMenu=()=>{
    back.className='back';
    aside.className='';
}

menuBtn.addEventListener('click',()=>{
    openMenu();
});

closeBtn.addEventListener('click',()=>{
    closeMenu();
});

back.addEventListener('click',()=>{
    closeMenu();
})


// 스크롤 하면 다음 섹션으로 이동

let page=1;
document.addEventListener('wheel',(e)=>{
    e.preventDefault();

    if(e.deltaY>0){
        if(page==6){
            return;
        }
        page++;
    } else if(e.deltaY<0){
        if(page==1){
            return;
        }
        page--;
    };

    let location=document.querySelector(`#${sections[page-1].id}`).offsetTop;
    window.scrollTo({top:location, behavior:'smooth'});

},{passive:false});
