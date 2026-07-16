const loginBtn = document.getElementById// Get DOM elements
const loginBox = document.getElementById('loginBox');
const signupBox = document.getElementById('signupBox');
const toSignUpBtn = document.getElementById('toSignUp');
const toLoginBtn = document.getElementById('toLogin');

// Switch to Sign Up View
toSignUpBtn.addEventListener('click', () => {
    // Hide Login Box with a subtle fade out
    loginBox.classList.add('hidden');
    
    // Show Sign Up Box after a small delay to allow smooth transition
    setTimeout(() => {
        signupBox.classList.remove('hidden');
        // Reset transform state for entering element
        signupBox.style.transform = 'translateX(0)';
    }, 200);
});

// Switch to Login View
toLoginBtn.addEventListener('click', () => {
    // Hide Sign Up Box
    signupBox.classList.add('hidden');
    
    // Show Login Box
    setTimeout(() => {
        loginBox.classList.remove('hidden');
        loginBox.style.transform = 'translateX(0)';
    }, 200);
});;

const supabaseClient = supabase.createClient(
            "https://nfgqkdvlyookvironbjv.supabase.co",
        "sb_publishable_u3sgrpY_ha7tqqGldPN9SQ_nqAqw2PH",
      );
      
      async function createNewUser(event) {
        event.preventDefault()
        
        const email = document.querySelector("#signup-email").value;
        const password = document.querySelector("#signup-password").value
        
        const UsrName = document.querySelector('#signup-name').value
        
        const object = {
            email: email,
            
            password : password,
            
            options : {
                data :{
                    name : UsrName
                }
            }
        }
        const response = await supabaseClient.auth.signUp(object)
        
        if (response.error) {
            Swal.fire({
  icon: "error",
  title: "Oops...",
  text: response.error.message,
  footer:''
});
        }else {
    Swal.fire({
        icon: "success",
        title: "Account Created!",
        text: "Your account has been created successfully. Please log in.",
        confirmButtonText: "Login"
    }).then(() => {
        
        // Hide signup form
        signupBox.classList.add("hidden");
        
        // Show login form
        loginBox.classList.remove("hidden");
        
        // Optional: clear the signup form
        document.querySelector("#signup-name").value = "";
        document.querySelector("#signup-email").value = "";
        document.querySelector("#signup-password").value = "";
        
        // Optional: pre-fill the login email
        document.querySelector("#login-email").value =
            email;
        
    });
}
      }
      
      
      
      /*-----*****-----
          Login/SignIn */
          
          
    async function login(event){
        event.preventDefault()
        
        
        const email = document.querySelector('#login-email').value
        
        const password = document.querySelector('#login-password').value
        
        const obj = {
            email : email,
            password : password
        }
        
        const response = await supabaseClient.auth.signInWithPassword(obj)
        
        
        if(response.error){
            Swal.fire({
            icon: "error",
            title: "Oops...",
            text: response.error.message,
            footer: " "
            })
        }else{
            window.location.href = "./profile.html"
        }
    }