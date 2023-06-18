// showing scroll button to top 

window.onscroll = function(){
  if(document.documentElement.scrollTop > 900) {
    document.getElementById("scrolltotop").className = "scrolltop";
  }
else {
  document.getElementById("scrolltotop").className = "";
}
}

//navbar shwoing 

    const hamburger = document.getElementsByClassName("bi-list")[0]; //array 0 to target the first element of the class
    const closeMenu = document.getElementsByClassName("bi-x-lg")[0];
    const nav= document.getElementsByClassName("menu")[0];
    const menuItems = document.getElementsByClassName("item");  // returns an array
    hamburger.addEventListener('click',show=()=>{
      
    nav.style.right="0%";


    setTimeout(() => {
      hamburger.style.display="none";
      closeMenu.style.display="inline-block";
     closeMenu.style.color="#02a388"
    }, 650);

  

    closeMenu.addEventListener('click',hide=()=>{
        nav.style.right="calc(-100% - 1px)";
        closeMenu.style.display="none";
    hamburger.style.display="inline-block";
    })

    for (let i = 0; i < menuItems.length; i++) {
      menuItems[i].addEventListener('click', hide);
    }

    })



// Scroll to top
 scrollToTop=()=>{
  window.scrollTo(0,0);
}


//subsribed

let user_name = document.getElementById("name");
let email = document.getElementById("email");
let showText = document.getElementById("subscribed");

 subscribe=()=>{

  let namePattern = /^[a-zA-Z\s]+$/;  //name pattern
  let emailPattern = /[a-zA-Z0-9._%+-]+@gmail\.com$/;  //email pattern


  if(user_name.value && email.value){

    if( namePattern.test(user_name.value) && emailPattern.test(email.value)){
      let username = user_name.value;
      user_name.value = "";
      email.value = "";
      showText.textContent=`thank you ${username} for subscribing.`
    }

    else{
      showText.textContent="Enter a valid name or email."
    }
  }

  else{
    
    if(user_name.value && !email.value){

      if(namePattern.test(user_name.value)){
        showText.textContent="Enter an email";
      }
      else {
        showText.textContent="Enter a valid name and an email"
      }
    }
  
    else if(!user_name.value && email.value){

        if(emailPattern.test(email.value)){
          showText.textContent="Enter a name";
        }
        else{
          showText.textContent="Enter a name and a valid email";
        }
    }

    else{
      showText.textContent="enter name and email";
    }
  }
 }


