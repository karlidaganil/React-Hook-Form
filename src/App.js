import { useState } from "react";
import { useForm } from "react-hook-form";

const App = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
  });
  const onSubmit = (data) => {
    console.log(data);
    setFormData(data);
  };
  return (
    <>
      <div className="d-flex justify-content-center align-items-center vh-100 p-2">
        <form className="form-group" onSubmit={handleSubmit(onSubmit)}>
          <pre>{JSON.stringify(formData, undefined, 2)}</pre>
          <h1 className="border-bottom">Registration Form</h1>
          <div>
            <label for="">Username</label>
            <input
              type="text"
              name="username"
              class="form-control"
              placeholder="Enter username"
              {...register("username", {
                required: "Username required",
              })}
            />
            {errors.username && errors.username.message}
          </div>
          <div>
            <label for="">Email</label>
            <input
              type="email"
              name="email"
              class="form-control"
              placeholder="Enter email"
              {...register("email", {
                required: "Email required",
              })}
            />
            {errors.email && errors.email.message}
          </div>
          <div>
            <label for="">Password</label>
            <input
              type="password"
              name="password"
              class="form-control"
              placeholder="Enter email"
              {...register("password", {
                required: "Password required",
                minLength: {
                  value: 6,
                  message: "Min password length must be 6",
                },
              })}
            />
            {errors.password && errors.password.message}
          </div>
          <button type="submit" class="btn btn-warning">
            Submit
          </button>
        </form>
      </div>
    </>
  );
};

export default App;
