// SignupForm.jsx
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import "./SignUp.css";

const SignupForm = () => {
  const [showPassword, setShowPassword] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log("Signup Data:", data);
  };

  return (
    <div className="login-container">
      <div className="login-box">
        <h2>Create Your Profile</h2>
        <p className="subtitle">Join us by filling the details below</p>

        <form onSubmit={handleSubmit(onSubmit)} className="login-form">
          {/* Name */}
          <div className="input-group">
            <input
              type="text"
              placeholder="Full Name"
              {...register("name", { required: "Name is required" })}
            />
          </div>
          {errors.name && <p className="error">{errors.name.message}</p>}

          {/* Email */}
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

          {/* Password */}
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
          {errors.password && <p className="error">{errors.password.message}</p>}

          {/* Location */}
          <div className="input-group">
            <input
              type="text"
              placeholder="Location"
              {...register("location", { required: "Location is required" })}
            />
          </div>
          {errors.location && <p className="error">{errors.location.message}</p>}

          {/* Skills Offered */}
          <div className="input-group">
            <input
              type="text"
              placeholder="Skills you can offer"
              {...register("skillsOffered", {
                required: "Please list offered skills",
              })}
            />
          </div>
          {errors.skillsOffered && <p className="error">{errors.skillsOffered.message}</p>}

          {/* Skills Wanted */}
          <div className="input-group">
            <input
              type="text"
              placeholder="Skills you want to learn"
              {...register("skillsWanted", {
                required: "Please list wanted skills",
              })}
            />
          </div>
          {errors.skillsWanted && <p className="error">{errors.skillsWanted.message}</p>}

          {/* Availability - Radio Buttons */}
          <label className="radio-label">Availability</label>
          <div className="radio-group">
            <label>
              <input
                type="radio"
                value="Available"
                {...register("availability", { required: "Select availability" })}
              />
              Available
            </label>
            <label>
              <input
                type="radio"
                value="Not Available"
                {...register("availability")}
              />
              Not Available
            </label>
            <label>
              <input
                type="radio"
                value="Occasionally"
                {...register("availability")}
              />
              Occasionally
            </label>
          </div>
          {errors.availability && (
            <p className="error">{errors.availability.message}</p>
          )}

          {/* Submit */}
          <button type="submit" className="submit-btn">
            Create Account
          </button>

          <p className="signup">
            Already have an account?{" "}
            <a href="#">Log in now</a>
          </p>
        </form>
      </div>
    </div>
  );
};

export default SignupForm;
