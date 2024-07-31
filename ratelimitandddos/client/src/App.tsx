import "./App.css";
import ReCAPTCHA from "react-google-recaptcha";
import axios from "axios";
import { useState } from "react";

const RECAPTCHA_SITE_KEY = import.meta.env.VITE_RECAPTCHA_SITE_KEY;

function App() {
  const [captcha, setCaptcha] = useState<string | null>(null);

  const handleSubmit = async (e: any) => {
    e.preventDefault();

    if (!captcha) {
      alert("please complete the captcha");
    }

    try {
      const response = await axios.post("http://localhost:3210/resetPassword", {
        email: "rizki@gmail.com",
        otp: "667474",
        newPassword: "okjkdajk",
        token: captcha,
      });

      console.log(response);

      if (response.data.msg == "password has been reset successfully") {
        alert("captcha success");
      } else {
        alert("captcha failed");
      }
    } catch (e) {
      console.log(e);
    }
  };
  return (
    <>
      <form onSubmit={handleSubmit}>
        <ReCAPTCHA
          sitekey={RECAPTCHA_SITE_KEY}
          onChange={(e) => setCaptcha(e)}
        />
        <button type="submit">Submit</button>
      </form>
    </>
  );
}

export default App;
