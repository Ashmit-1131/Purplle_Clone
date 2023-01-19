import "./Register.css";

import ValidationForm from "./ValidationForm";
// import swal from "sweetalert";

function Register() {
  return (
    <div className="register_page">
      <div className="register_auth">
        <div className="signup_fb_google">
          <p className="about_you">About You</p>
          <p className="sign_up_with">Sign Up With</p>

       

          <hr
            style={{
              marginTop: "40px",
              color: "1px solid gray",
            }}
          />
        </div>

        <div className="signup_form">
          <p className="create_email_text">Or create an email account</p>

          <ValidationForm />
        </div>
      </div>
    </div>
  );
}

export default Register;
