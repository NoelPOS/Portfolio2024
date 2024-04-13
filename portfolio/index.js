const menuIcon = document.querySelector('#menu-icon')
const navbar = document.querySelector('.navbar')

menuIcon.onclick = () => {
  menuIcon.classList.toggle('bx-x')
  navbar.classList.toggle('active')
}

const sections = document.querySelectorAll('section')
const navlinks = document.querySelectorAll('header nav a')

window.onscroll = () => {
  sections.forEach((sec) => {
    const top = window.scrollY
    const offset = sec.offsetTop - 150
    const height = sec.offsetHeight
    const id = sec.getAttribute('id')

    if (top >= offset && top < offset + height) {
      navlinks.forEach((links) => {
        links.classList.remove('active')
        document
          .querySelector('header nav a[href*=' + id + ']')
          .classList.add('active')
      })
    }
  })
}

const form = document.querySelector('form')
const fullname = document.getElementById('fullname')
const email = document.getElementById('email')
const phone = document.getElementById('phonenumber')
const subject = document.getElementById('subject')
const message = document.getElementById('message')

function sendEmail() {
  const body = `Full Name : ${fullname.value} <br/> Email: ${email.value} <br/> Phone Number: ${phone.value} <br/> Message: ${message.value}`
  Email.send({
    Host: 'smtp.elasticemail.com',
    Username: 'noelsi536@gmail.com',
    Password: 'AB1A1D94CBE435D9526900FAA6C379281161',
    To: 'noelsi536@gmail.com',
    From: 'noelsi536@gmail.com',
    Subject: subject.value,
    Body: body,
  }).then((message) => {
    if (message === 'OK') {
      Swal.fire({
        title: 'Success!',
        text: 'Message sent successfully!',
        icon: 'success',
      })
    }
  })
}

form.addEventListener('submit', (e) => {
  e.preventDefault()
  sendEmail()
})
