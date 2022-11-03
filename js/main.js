// بسم الله به نستعين و الصلاه و السلام على سيد الخلق و اشرف الانبياء و المرسلين سيدنا محمد صلى الله عليه و سلم
// اللهم لك الحمد كما ينبغى لجلال و جهك و عظيم سلطانك 
// الحمد لله حمداً ملئ السموات و الارض 
// الحمد لله حمداً طيباً مباركاً فيه 
// الحمد لله عدد ما كان و عدد ما يكون و عدد الحركات و السكون 
// الحمد لله حمداً كثيراً
// الحمد حتى الرضى و الحمد لله عند الرضى و الحمد لله بعد الرضى 
// الحمد لله حتى يبلغ الحمد منتهاه 
// الحمد لله دائماً و ابداً... 
// اللهم انى استودك ما حفظت و ما فهمت و ما قرات و ما كتبت امانه و وديعه عندك و اسالك اللهم ان ترده على عند حاجتى اليه فانت حسبى و نعم الوكيل 


const darkMode = document.querySelector('.darkLight-mode');
const root = document.querySelector(':root');
const navbar = document.querySelector('.navbar');
const scrollbtn = document.querySelector('.scollbtn');
const image1 = document.querySelector('.the-image img');
const image2 = document.querySelector('[alt="omar"]');

darkMode.addEventListener('click', () => {

    root.classList.toggle('ToggleDarkmode');

    darkMode.classList.toggle('translateThebtn');

    if (root.classList.contains('ToggleDarkmode')) {
        darkMode.innerHTML = '<i class="uil uil-moon"></i>';
        image1.setAttribute('src', 'assests/dark-mode2.jpg');
        image2.setAttribute('src', 'assests/dark-image.jpg');
    } else {
        darkMode.innerHTML = '<i class="uil uil-sun"></i>';
        image1.setAttribute('src', 'assests/lightmode.jpg');
        image2.setAttribute('src', 'assests/light-image.jpg');
    }

    navbar.style.setProperty('filter', 'drop-shadow(2px 3px 5px white)');

})

//
const aboutSection = document.getElementById('About')

scrollbtn.addEventListener('click', () => {

    window.scrollTo({
        top: aboutSection.offsetTop,
        behavior: 'smooth',
    })
})

//
const skillbackgrounds = document.querySelectorAll('.skill-back')

window.addEventListener('scroll', () => {

    skillbackgrounds.forEach((p) => {
        if (scrollY > document.querySelector('.skillsSection').offsetTop) {
            p.style.width = p.getAttribute('data-percent')
        }
    })

})

const togglebtnSkills = document.querySelectorAll('.toggleSkills')

togglebtnSkills.forEach(ele => {
    ele.addEventListener('click', () => {

        if (ele.classList.contains('front')) {
            document.querySelectorAll('.someSkills')[0].classList.toggle('showSkills');

            ele.classList.toggle('uil-angle-up');
            ele.classList.toggle('uil-angle-down');
        }
        if (ele.classList.contains('graphic')) {
            document.querySelectorAll('.someSkills')[1].classList.toggle('showSkills');

            ele.classList.toggle('uil-angle-up');
            ele.classList.toggle('uil-angle-down')
        }
    })
})



//
const qualificationBtn = document.querySelectorAll('.qualificationBtn button');

const QualificationContents = document.querySelectorAll('.qualificationContent')

qualificationBtn.forEach(btn => {

    btn.addEventListener('click', () => {
        qualificationBtn.forEach((el) => {
            el.classList.remove('selected')
        })
        btn.classList.add('selected')

        QualificationContents.forEach((ele) => {

            if (ele.classList.contains(btn.getAttribute('data-content'))) {
                ele.style.display = 'block'
            } else {
                ele.style.display = 'none'
            }
        })

    })

})

//
const servicesBtns = document.querySelectorAll('.servicesBtn')

servicesBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        if (btn.classList.contains('frontService')) {
            document.querySelector('.frontOverlay').classList.add('notHide')
        }
        if (btn.classList.contains('graphicService')) {
            document.querySelector('.graphicOverlay').classList.add('notHide')
        }
    })
})

const servicesCloseBtn = document.querySelectorAll('.serviceClose')

servicesCloseBtn.forEach((btn) => {
    btn.addEventListener('click', () => {
        if (btn.classList.contains('frontServiseClose')) {
            document.querySelector('.frontOverlay').classList.remove('notHide')
        }
        if (btn.classList.contains('graphicServiseClose')) {
            document.querySelector('.graphicOverlay').classList.remove('notHide')
        }
    })
})

//

var swiper = new Swiper('.swiper', {
    effect: 'coverflow',
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: 'auto',
    coverflowEffect: {
        rotate: 50,
        stretch: 0,
        depth: 100,
        modifier: 1,
        slideShadows: true,
    },
    pagination: {
        el: '.swiper-pagination',
    },
});


//
const scrollUpbtnDiv = document.querySelector('.scrollUp');
const scrollUpbtn = document.querySelector('.scrollUp i');

window.addEventListener('scroll', () => {
    if (scrollY > document.querySelector('.skillsSection').offsetTop) {
        scrollUpbtnDiv.classList.add('showScrollUp')
    } else {
        scrollUpbtnDiv.classList.remove('showScrollUp')
    }
})
scrollUpbtn.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
})