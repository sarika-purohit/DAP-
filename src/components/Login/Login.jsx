import React from 'react'
import "./Login.css"

const Login = () => {
    return (
        <div id="container">
            <div class="box">
                <div class="form-box">
                    <div class="ic-account"></div>
                    <form name="login-form" action="#" method="post">
                        <input class="login-form-input" type="text" name="your-email" placeholder="Enter Address 📬" required />
                        <input class="login-form-input" type="number" name="your-password" placeholder="Enter Value 💰" required />
                        <button class="login-form-btn" type="submit">Send Reef</button>
                        <p class="text">
                            <a data-url="#">You are logged in as : Test Account 🙉 🔄</a>
                        </p>
                    </form>
                </div>
                <div class="circle-01"></div>
                <div class="circle-02"></div>
            </div>
        </div>
    )
}

export default Login