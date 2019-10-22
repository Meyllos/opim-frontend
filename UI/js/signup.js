class Signup extends IsQ{

    constructor(){
        super();
        this.validate();
    }

    /* process */
    process(email,passcode) {
        QredirectTo("emailverification.html");
    }

    validate(){
        
        const email      = Qval(".email");
        const passcode   = Qval(".password");
        const confirmPasscode   = Qval(".confirmPassword");

        let   isValid      = true
    

        if (!this.Qvalid("email", email)) {

            Qselect('.email-disp-error').textContent = "Invalid email address";
            isValid = false;
            
        } else {
            Qselect('.email-disp-error').textContent = "";  
        }
        
        if (passcode.length < 6 ) {

            Qselect('.password-disp-error').textContent = "Password should have 6 caracters or more";
            isValid = false;
        } else {
            Qselect('.password-disp-error').textContent = "";
        }

        if (passcode != confirmPasscode ) {

            Qselect('.confirmPassword-disp-error').textContent = "Password does not match";
            isValid = false;
        } else {
            Qselect('.confirmPassword-disp-error').textContent = "";
        }

        if (isValid == true) {
            this.process(email,passcode)
        }

    }
}