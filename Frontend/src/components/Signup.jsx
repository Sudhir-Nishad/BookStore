import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import "./signup.css";
import Login from "./Login";
export default function Signup() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => console.log(data);
  return (
    <>
      <div className="signup_wrapper">
        <div
          style={{ width: "50%", display: "flex", justifyContent: "center" }}
        >
          <div
            className="modal-box"
            style={{ position: "relative", width: "100%" }}
          >
            <form method="dialog" onSubmit={handleSubmit(onSubmit)}>
              {/* if there is a button in form, it will close the modal */}
              <Link
                to={"/"}
                className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
              >
                ✕
              </Link>

              <h3 className="font-bold text-lg">Signup</h3>
              <div className="email_wrapper">
                <h1>Name</h1>
                <input
                  type="text"
                  className="email"
                  placeholder="Enter your name"
                  {...register("name", {
                    required: "Name is required",
                    pattern: {
                      // value: /\S+@\S+\.\S+/,
                      // message: "Entered value does not match email format"
                    },
                  })}
                />
                {errors.name}
              </div>

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
                      message: "Entered value does not match email format",
                    },
                  })}
                />
                <br></br>
                {errors.email && (
                  <span className="error">{errors.email.message}</span>
                )}
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
                      message: "Password must have at least 6 characters",
                    },
                  })}
                />
                <br></br>
                {errors.password && (
                  <span className="error">{errors.password.message}</span>
                )}
              </div>

              <div className="login_signup_wrapper">
                <button className="login_btn">Signup</button>
                <div style={{ color: "gray", fontSize: "16px" }}>
                  Have an account?{" "}
                  <span>
                    <button
                      style={{ textDecoration: "underline" }}
                      className="login_link"
                      onClick={() =>
                        document.getElementById("my_modal_3").showModal()
                      }
                    >
                      Login
                    </button>
                    <Login />
                  </span>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
