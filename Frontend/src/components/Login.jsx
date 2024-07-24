import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import "./login.css";

export default function Login() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => console.log(data);

  return (
    <div>
      <dialog id="my_modal_3" className="modal">
        <div className="modal-box">
          <form method="dialog" onSubmit={handleSubmit(onSubmit)}>
            <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
            onClick={()=>document.getElementById("my_modal_3").close()}>
              ✕
            </button>

            <h3 className="font-bold text-lg">Login</h3>
            <div className="email_wrapper">
              <h1>Email</h1>
              <input
                type="email"
                className="email"
                placeholder="Enter your email"
                {...register("email", { 
                  required: "Email is required",
                  pattern: {
                    value: /\S+@\S+\.\S+/,
                    message: "Entered value does not match email format"
                  }
                })}
              />
              <br></br>
              {errors.email && <span className="error">{errors.email.message}</span>}
            </div>

            <div className="email_wrapper">
              <h1>Password</h1>
              <input
                type="password"
                className="password"
                placeholder="Enter your password"
                {...register("password", { 
                  required: "Password is required",
                  minLength: {
                    value: 6,
                    message: "Password must have at least 6 characters"
                  }
                })}
              />
              <br></br>
              {errors.password && <span className="error">{errors.password.message}</span>}
            </div>

            <div className="login_signup_wrapper">
              <button className="login_btn">Login</button>
              <div style={{ color: "gray", fontSize: "16px" }}>
                Not registered?{" "}
                <span>
                  <Link to={"/signup"}>Signup</Link>
                </span>
              </div>
            </div>
          </form>
        </div>
      </dialog>
    </div>
  );
}