const wrapper =document.querySelector('.wrapper');
const registerLink =document.querySelector('.register-Link');
const loginLink =document.querySelector('.login-link');

registerLink.onclik = () => {
    wrapper.classList.add('active');

}

loginLink.onclik = () => {
    wrapper.classList.remove('active');

}

