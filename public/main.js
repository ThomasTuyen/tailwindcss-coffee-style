const showMenu = (toggleId,navId) =>{
    const toggle = document.getElementById(toggleId),
            nav = document.getElementById(navId)
    
    if(toggle && nav){
        toggle.addEventListener('click',()=>{
                nav.classList.toggle('hidden')
                nav.classList.toggle('tn-topmenu-expanded')
        })
    }       
}
showMenu('nav-toggle','nav-menu')