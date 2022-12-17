const navMenus=document.querySelector('.nav-menus')
const menuBtn=document.querySelector('.menu-btn');
const closeBtn=document.querySelector('.close');
const aside=document.querySelector('aside');
const asideMenus=document.querySelector('.aside-menus');
const back=document.querySelector('.back');



navMenus.addEventListener('click',(e)=>{
    const link=e.target.dataset.link;
    if(link===null){
        return;
    }
    handleScroll(link);
});

asideMenus.addEventListener('click',(e)=>{
    const link=e.target.dataset.link;
    if(link===null){
        return;
    }
    handleScroll(link);
});

const handleScroll=(selector)=>{
    selector && document.querySelector(selector).scrollIntoView({behavior:'smooth'});
};



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
