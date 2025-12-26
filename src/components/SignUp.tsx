import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { registerUser } from "../store/features/actions/authActions";
import type { UserRegister } from "../store/features/auth-types";
import type { AppDispatch, RootState } from "../store/store";
import Input from "./shared/Input";
import Button from "./shared/Button";
import Card from "./shared/Card";
import { BiSolidHomeHeart } from "react-icons/bi";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router";

const SignUp = () => {
  const { error, loading, success, userInfo } = useSelector(
    (state: RootState) => state.auth
  );

  const [password, setPassword] = useState("");

  const [confirmPassword, setConfirmPassword] = useState("");

  const { register, handleSubmit } = useForm<UserRegister>();

  const dispatch = useDispatch<AppDispatch>();

  const navigate = useNavigate();

  let passwordError = false;

  useEffect(() => {
    if (success) navigate("/dashboard");
  }, [success]);

  const submitForm = (data: UserRegister) => {
    if (!data) return;
    if (password !== confirmPassword) passwordError = true;
    dispatch(registerUser(data));
  };

  const handlePasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value);
  };

  const handleConfirmPasswordChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setConfirmPassword(event.target.value);
  };

  return (
    <form
      onSubmit={handleSubmit(submitForm)}
      className="h-full flex items-center justify-center"
    >
      <Card height="h-11/12">
        <article className="flex items-center justify-center flex-col gap-5 w-4xl h-11/12">
          <section className="flex items-center justify-center">
            <BiSolidHomeHeart size={42} color="#579feb" />
            <h1 className="text-3xl m-2 font-semibold font-inter leading-tight">
              Home Hub
            </h1>
          </section>
          <Input
            label="Name"
            placeHolder="John Doe"
            required
            {...register("userName")}
            inputType="text"
            error={error ?? undefined}
          />
          <Input
            label="Email"
            placeHolder="name@example.com"
            required
            {...register("email")}
            inputType="email"
            error={error ?? undefined}
          />
          <Input
            label="Password"
            placeHolder="Enter your password"
            required
            {...register("password")}
            inputType="password"
            error={error ?? undefined}
            value={password}
            name="password"
            onChange={handlePasswordChange}
          />

          {/* <Input
            label="Confirm Password"
            placeHolder="Confirm your password"
            required
            inputType="password"
            error={error ?? undefined}
            value={confirmPassword}
            name="confirmPassword"
            onChange={handleConfirmPasswordChange}
          /> */}

          <p className="font-inter font-extralight text-xs">
            By signing up, you agree to the{" "}
            <span>
              {/* Add routing here */}
              <a className=" font-inter font-extralight text-primary cursor-pointer">
                Terms of Service
              </a>
            </span>
          </p>
          <Button
            buttonText="Sign In"
            buttonType="primary"
            disabled={loading && passwordError}
          />

          {passwordError && (
            <p className="text-red-400 font-inter ">Password Mismatch</p>
          )}
        </article>
      </Card>
    </form>
  );
};

export default SignUp;
