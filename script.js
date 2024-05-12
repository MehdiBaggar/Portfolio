const bars = document.getElementById('bars');
const close = document.getElementById('close');

const navigation = document.getElementById('navigation');
let i = 1
bars.addEventListener('click', () => {
    navigation.classList.add('active')
})

close.addEventListener('click', () => {
    navigation.classList.remove('active')

})




const skillslist = document.querySelectorAll('.skills-list .box');


Array.from(skillslist).forEach((skill) => {
    console.log(skill.querySelector('.count').textContent)
    let count = skill.querySelector('.count').textContent
    setInterval(mytime, count * 10)
    function mytime() {
        skill.querySelector('.box-chart span').style.width = count

    }
    //  console.log(skill.textContent)
})

const scroolopt = ScrollReveal({
    origin: 'top',
    distance: '60px',

    duration: 2000,
    delay: 300
})

scroolopt.reveal('.title', {})
scroolopt.reveal('section p', { origin: 'bottom', delay: 600 })

scroolopt.reveal('button', { origin: 'bottom', delay: 1200 })
scroolopt.reveal('.btn', { origin: 'bottom', delay: 1200 })
scroolopt.reveal('.line', { origin: 'top', delay: 1200 })
scroolopt.reveal('.tag', { origin: 'left', delay: 1200 })

scroolopt.reveal('social-icons ', { origin: 'top', delay: 800 })

scroolopt.reveal('.image', { origin: 'right', delay: 800 })



const sections = document.querySelectorAll('section[id]');

const scrollActive = () => {
    const Scrolldown = window.scrollY;

    sections.forEach(current => {
        const sectionHeight = current.offsetHeight
        const sectionTop = current.offsetTop - 60
        const sectionId = current.getAttribute('id')
        const sectionClass = document.querySelector('.navigation a[href*=' + sectionId + ']')

        if (Scrolldown > sectionTop && Scrolldown <= sectionTop + sectionHeight) {
            sectionClass.classList.add('active')

        } else {
            sectionClass.classList.remove('active')

        }
    })
}

window.addEventListener('scroll',scrollActive)