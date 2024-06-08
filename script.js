function ShowSideBar(){
    const sidebar= document.querySelector('.navbar .sidebar')
    sidebar.style.display = 'flex'
}

function HideSideBar(){
    const sidebar= document.querySelector('.navbar .sidebar')
    sidebar.style.display = 'none'
}

function OpenPopUp(){
    const signup= document.querySelector('.popup')
    signup.style.display='block'
}

function ClosePopUp(){
    const signup= document.querySelector('.popup')
    signup.style.display='none'    
}

function OpenLoginPopUp(){
    const signup= document.querySelector('.popuplogin')
    signup.style.display='block'
}

function CloseLoginPopUp(){
    const signup= document.querySelector('.popuplogin')
    signup.style.display='none'    
}

function ForgotPassword(){
    alert('Link to reset the password has been sent to your registered mail id.')
}

function Addtocart(){
    alert('Added to Cart!')
}