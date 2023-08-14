// template_lyak4mo
// service_83u3rhs
// q2J01nha93jCrFcpL

function contact (event) {
    event.preventDefault();
    const loading = document.querySelector('.modal__overlay--loading')
    const success = document.querySelector('.modal__overlay--success')
    loading.classList += " modal__overlay--visible"
    emailjs
    .sendForm(
        'service_83u3rhs',
        'template_lyak4mo',
        event.target,
        'q2J01nha93jCrFcpL'
    ).then(() => {
        loading.classList.remove("modal__overlay--visible");
        success.classList += " modal__overlay--visible"
        console.log('it worked1')
    }).catch(() => {
        loading.classList.remove("modal__overlay--visible");
        alert(
            "the email service is temporarily unavailable. Please contact me directly on jareeraghany@gmail.com"
        )
    })
}

let isModalOpen = false;
function toggleModal () {
    if (isModalOpen) {
        isModalOpen = false
        return document.body.classList.remove("modal--open")
    }
    isModalOpen = true ;
    document.body.classList += (" modal--open")
}

