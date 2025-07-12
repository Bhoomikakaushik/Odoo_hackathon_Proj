
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { FaGoogle, FaFacebookF, FaPinterestP } from "react-icons/fa";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import "./Login.css";
import axios from "axios";
import { useNavigate } from "react-router-dom"; 


const LoginForm = () => {
  const navigate = useNavigate(); 

  const [showPassword, setShowPassword] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    try {
      const response = await axios.post("http://localhost:8000/api/v1/user/login", data);

      if (response.status === 200) {
        const { token } = response.data;
        localStorage.setItem("token", token); 
        navigate("/");
      }
    } catch (err) {
      if (err.response?.status === 401) {
        setLoginError("Invalid email or password.");
      } else if (err.response?.status === 404) {
        setLoginError("User not found.");
      } else {
        setLoginError("Something went wrong.");
      }
    }
  };

  return (
    <div className="login-container">
      <div className="login-box">
        <h2>Log in to your Account</h2>
        <p className="subtitle">Welcome back! Please enter your details</p>

        <form onSubmit={handleSubmit(onSubmit)} className="login-form">
          {/* Phone Field */}
          <div className="input-group">
            <input
              type="text"
              placeholder="Email"
              {...register("email", { required: true })}
            />
          </div>
          {errors.phone && <p className="error">Email is required</p>}

          {/* Password Field */}
          <div className="input-group password-group">
            <input
              type={showPassword ? "text" : "password"}
              placeholder="Password"
              {...register("password", { required: true })}
            />
            <span
              className="toggle-icon"
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? (
                <AiOutlineEyeInvisible size={18} />
              ) : (
                <AiOutlineEye size={18} />
              )}
            </span>
          </div>
          {errors.password && <p className="error">Password is required</p>}

          {/* Continue */}
          <button type="submit" className="submit-btn">
            Continue
          </button>

          {/* Terms */}
          <p className="terms">
            By clicking continue, you have read and agree to our{" "}
            <a href="#">Terms of Use</a> & <a href="#">Privacy Policy</a>
          </p>

          {/* Divider */}
          <div className="divider">
            <hr />
            <span>or</span>
            <hr />
          </div>

          {/* Social Icons */}
          <div className="social-icons">
            <button><FaGoogle color="#DB4437" size={20} /></button>
            <button><FaFacebookF color="#1877F2" size={20} /></button>
            <button><FaPinterestP color="#000" size={20} /></button>
          </div>

          {/* Sign Up */}
          <p className="signup">
            Don't have an account? <a href="#">Create new account now</a>
          </p>
        </form>
      </div>
    </div>
  );
};

export default LoginForm;
