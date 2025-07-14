const showHiddenPass = (loginPass, loginEye) =>{
    const input = document.getElementById(loginPass),
        iconEye = document.getElementById(loginEye)

    iconEye.addEventListener('click', () =>{
        if(input.type === 'password'){
            input.type = 'text'

            iconEye.classList.add('fa-solid fa-eye')
            iconEye.classList.remove('fa-solid fa-eye-slash')

        } else{
            input.type = 'password'

            iconEye.classList.remove('fa-solid fa-eye')
            iconEye.classList.add('fa-solid fa-eye-slash')
        }
    })
}

showHiddenPass('login-pass','login-eye')