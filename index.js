menuAparecendo()
slow2()
slow1()
slow()

function menuAparecendo(){
    const menu = document.querySelector('.menuclick')
    const menulist = document.querySelector('.menu')
    
    menu.addEventListener('click',()=>{
        if(menulist.style.display === 'block'){
            menulist.style.display = 'none'
        }else{menulist.style.display = 'block'}
    })
}
function slow(){
    const sections = document.querySelectorAll("header");

    function checkScroll() {
        sections.forEach(section => {
            const sectionTop = section.getBoundingClientRect().top;
            const windowHeight = window.innerHeight;
    
            if (sectionTop < windowHeight * 0.75) {
                section.style.opacity = "1";
                section.style.transform = "translateY(0)";
            }
        });
    }
    
    window.addEventListener("scroll", checkScroll);
    window.addEventListener("load", checkScroll); 
}

function slow1(){
    const sections1 = document.querySelectorAll(".sessao1");

    function checkScroll1() {
        sections1.forEach(section1 => {
            const sectionTop1 = section1.getBoundingClientRect().top;
            const windowHeight1 = window.innerHeight;
    
            if (sectionTop1 < windowHeight1 * 0.75) {
                section1.style.opacity = "1";
                section1.style.transform = "translateY(0)";
            }
        });
    }
    
    window.addEventListener("scroll", checkScroll1);
    window.addEventListener("load", checkScroll1); 
}
function slow2(){
    const sections3 = document.querySelectorAll(".convidados");

    function checkScroll3() {
        sections3.forEach(sections3 => {
            const sectionTop3 = sections3.getBoundingClientRect().top;
            const windowHeight3 = window.innerHeight;
    
            if (sectionTop3 < windowHeight3 * 0.75) {
                sections3.style.opacity = "1";
                sections3.style.transform = "translateY(0)";
            }
        });
    }
    
    window.addEventListener("scroll", checkScroll3);
    window.addEventListener("load", checkScroll3); 
}
