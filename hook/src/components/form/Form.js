import { React, useState } from "react";
import {axios} from "axios"
const Form = () => {
  const [values, setValues] = useState({
    username: "",
    email: "",
    password: "",
    retypePassword: "",
  });
  const [errors, setErrors] = useState({});
  const Validation = (values) => {
    let errors = {};
    if (!values.username) {
      errors.username = "nhập tên đầy đủ";
    }
    if (!values.email) {
      errors.email = "nhập email chính xác";
    } else if (!/\S+@\S+\.\S+/.test(values.email)) {
      errors.email = "Email address is invalid";
    }
    if (!values.password) {
      errors.password = "nhập đủ mật khẩu";
    } else if (values.password.length < 5) {
      errors.password = "mật khẩu dài hơn 5 kí tự";
    }
    return errors;
  };

  const handleChange = (evt) => {
    setValues({
      ...values,
      [evt.target.name]: evt.target.value,
    });
  };
  const submit = (evt) => {
    evt.preventDefault();
    setErrors(Validation(values));
  };

  return (
    <div>
      <form onSubmit={submit}>
      <div>
          <input
            type="text"
            onChange={handleChange}
            value={values.username}
            name="username"
            placeholder="Tên"
          />
         {errors.username && <span>{errors.username}</span>}
</div>
        <div>
          <input
            type="email"
            onChange={handleChange}
            value={values.email}
            name="email"
            placeholder="Email"
          />
          {errors.email && <span>{errors.email}</span>}
        </div>

        <div>
          <input
            type="password"
            onChange={handleChange}
            value={values.password}
            name="password"
            placeholder="Mật khẩu"
          />
          {errors.password && <span>{errors.password}</span>}
        </div>

        <div>
          <input
            type="password"
            onChange={handleChange}
            value={values.retypePassword}
            name="retypePassword"
            placeholder="Nhắc lại mật khẩu"
          />
          {errors.retypePassword && <span>{errors.retypePassword}</span>}
        </div>
        <button>gửi</button>
      </form>
    </div>
  );
};

export default Form;
