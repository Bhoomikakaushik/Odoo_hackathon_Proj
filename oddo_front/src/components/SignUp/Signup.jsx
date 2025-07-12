import React, { useState } from "react";
import { useForm } from "react-hook-form";
import axios from "axios";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import "./SignUp.css";
import { useNavigate } from "react-router-dom";
const SignupForm = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [message, setMessage] = useState("");

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const navigate = useNavigate(); // ⏩ Navigation hook
  const onSubmit = async (data) => {

    const payload = {
      ...data,
      isPublic: true,
      rating: 0,
      completedSwaps: 0,
      isBanned: false,
      createdAt: new Date().toISOString(),
      profilePhoto: "",
    };

    try {
      const res = await axios.post(
        "http://localhost:8000/api/v1/user/signup",
        payload
      );
      console.log(res.message);
      if (res.status === 201) {
        reset();
      } else {
        alert(`⚠️ ${res.data.message}`);
      }
      navigate("/login");
    } catch (err) {
      console.error(err);
      setMessage("Something went wrong.");
    }
  };

  return (
    <div className="login-container">
      <div className="login-box">
        <h2>Create Your Account</h2>
        <p className="subtitle">Fill out the details below</p>

        <form onSubmit={handleSubmit(onSubmit)} className="login-form">
          <div className="input-group">
            <input
              type="text"
              placeholder="Full Name"
              {...register("name", { required: "Name is required" })}
            />
          </div>
          {errors.name && <p className="error">{errors.name.message}</p>}

          <div className="input-group">
            <input
              type="email"
              placeholder="Email"
              {...register("email", {
                required: "Email is required",
                pattern: {
                  value: /^\S+@\S+\.\S+$/,
                  message: "Invalid email address",
                },
              })}
            />
          </div>
          {errors.email && <p className="error">{errors.email.message}</p>}

          <div className="input-group password-group">
            <input
              type={showPassword ? "text" : "password"}
              placeholder="Password"
              {...register("password", {
                required: "Password is required",
                minLength: { value: 6, message: "Minimum 6 characters" },
              })}
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
          {errors.password && (
            <p className="error">{errors.password.message}</p>
          )}

          <div className="input-group">
            <input
              type="text"
              placeholder="Location"
              {...register("location")}
            />
          </div>

          <div className="input-group">
            <input
              type="text"
              placeholder="Skills you can offer"
              {...register("skillsOffered")}
            />
          </div>

          <div className="input-group">
            <input
              type="text"
              placeholder="Skills you want to learn"
              {...register("skillsWanted")}
            />
          </div>

          <label className="radio-label">Availability</label>
          <div className="radio-group">
            <select
              {...register("availability", {
                required: "Please select availability",
              })}
            >
              <option value="">Select Availability</option>
              <option value="Weekends">Weekends</option>
              <option value="Evenings">Evenings</option>
              <option value="Weekdays">Weekdays</option>
              <option value="Flexible">Flexible</option>
            </select>
          </div>

          <button type="submit" className="submit-btn">
            Create Account
          </button>

          {message && <p className="error">{message}</p>}

          <p className="signup">
            Already have an account? <a href="#">Log in</a>
          </p>
        </form>
      </div>
    </div>
  );
};

export default SignupForm;
