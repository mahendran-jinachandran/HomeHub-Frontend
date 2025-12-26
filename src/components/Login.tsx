import { useDispatch, useSelector } from "react-redux";
import type { AppDispatch, RootState } from "../store/store";
import { useForm } from "react-hook-form";
import type { LoginUser } from "../store/features/auth-types";
import { loginUser } from "../store/features/actions/authActions";
import Card from "./shared/Card";
import { BiSolidHomeHeart } from "react-icons/bi";
import Input from "./shared/Input";
import Button from "./shared/Button";
import { useNavigate } from "react-router";
import { useEffect } from "react";

const Login = () => {
  const { error, loading, success, userInfo } = useSelector(
    (state: RootState) => state.auth
  );

  const { register, handleSubmit } = useForm<LoginUser>();

  const dispatch = useDispatch<AppDispatch>();

  const navigate = useNavigate();

  useEffect(() => {
    if (success) navigate("/dashboard");
  }, [success]);

  const userLogin = (data: LoginUser) => {
    if (!data) return;
    dispatch(loginUser(data));
  };

  const navigateToSignup = () => {
    navigate("/signup");
  };

  return (
    <form
      onSubmit={handleSubmit(userLogin)}
      className="h-full flex items-center justify-center"
    >
      <Card height="11/12">
        <article className="flex items-center justify-center flex-col gap-5 w-4xl h-11/12">
          <section className="flex items-center justify-center">
            <BiSolidHomeHeart size={42} color="#579feb" />
            <h1 className="text-3xl m-2 font-semibold font-inter leading-tight">
              Home Hub
            </h1>
          </section>
          <h1 className="font-inter font-bold text-2xl">Welcome Back</h1>
          <p className="font-inter font-light">
            Signin to manage your family and home organisation
          </p>

          <Input
            label="User Name"
            placeHolder="John Doe"
            required
            {...register("userName")}
            inputType="text"
            error={error ?? undefined}
          />

          <Input
            label="Password"
            required
            {...register("password")}
            inputType="password"
            error={error ?? undefined}
          />

          <Button buttonText="Log In" buttonType="primary" disabled={loading} />

          <p>
            Don't have an account?{" "}
            <span>
              <a
                onClick={() => navigateToSignup()}
                className=" font-inter font-extralight text-primary cursor-pointer"
              >
                Sign up
              </a>
            </span>
          </p>
        </article>
      </Card>
    </form>
  );
};

export default Login;
