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
        const response = await supabaseClient.auth.signUp({
          email: email,
          password: password,
        });
        console.log("response:", response)

      }