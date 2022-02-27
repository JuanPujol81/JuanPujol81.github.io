    const ham = document.querySelector('.ham')
    const enlaces = document.querySelector('.menu')
    ham.addEventListener('click', () => {
        enlaces.classList.toggle('activado')
    })

    ham.addEventListener('touch', () => {
        enlaces.classList.toggle('activado')
    })

    ham.addEventListener('touchmove', () => {
        enlaces.classList.toggle('desactivado')
    })
