
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { FaGoogle, FaFacebookF, FaPinterestP } from "react-icons/fa";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import "./Login.css";

const LoginForm = () => {
  const [showPassword, setShowPassword] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
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
