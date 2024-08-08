import React, { useContext } from "react";
import { Link } from "react-router-dom";
import Input from "../../components/Input";
import Button from "../../components/Button";
import { Context } from "../../context/Context";
import { TwitterIcon } from "../../assets/Images/Icons";

function SignIn() {
  const { setToken } = useContext(Context);
  const handleFormSubmit = (e) => {
    e.preventDefault();
    const data = {
      login: e.target.login.value.trim(),
      password: e.target.password.value.trim(),
    };
    if (data.login == "Firdavs" && data.password == "123") {
      setToken(data);
    } else {
      alert("There is an error");
    }
    e.target.reset();
  };
  return (
    <form
      onSubmit={handleFormSubmit}
      autoComplete="off"
      className="w-[450px] mx-auto mt-[60px]"
    >
      <Link to={"/"}>
        <TwitterIcon/>
      </Link>
      <h1 className="my-[36px] font-black	text-[42px] leading-[49.22px] text-[#000000]">
        Log in to Twitter
      </h1>
      <Input
        placeholder={"Phone number, email address"}
        type={"text"}
        extraStyle={"mb-[25px]"}
        name={"login"}
      />
      <Input
        placeholder={"Password"}
        type={"password"}
        extraStyle={"mb-[25px]"}
        name={"password"}
      />
      <Button btn={"Log In"} type={"submit"} />
      <div className="flex justify-between mt-[40px]">
        <Link
          className="font-normal text-[18px] leading-[23.94px] text-[#1DA1F2]"
          to={"/sign-up"}
        >
          Forgot password?
        </Link>
        <Link
          className="font-normal text-[18px] leading-[23.94px] text-[#1DA1F2]"
          to={"/sign-up"}
        >
          Sign up to Twitter
        </Link>
      </div>
    </form>
  );
}

export default SignIn;
