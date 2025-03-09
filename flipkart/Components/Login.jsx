import { useState } from "react";
import axios from 'axios'
import { Typography, Input, Button } from "@material-tailwind/react";
import { EyeSlashIcon, EyeIcon } from "@heroicons/react/24/solid";
import { useNavigate } from "react-router-dom";

export function Login() {
  const [passwordShown, setPasswordShown] = useState(false);
  const togglePasswordVisiblity = () => setPasswordShown((cur) => !cur);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [incorrectSpan, setIncorrectSpan] = useState("")
  const [correctSpan, setCorrectSpan] = useState("")
  const navigate = useNavigate();



  const handleSubmit=async()=> {

    try {
      const response = await axios.post("http://localhost:4000/login", { email: email, password: password })
      console.log("try", response?.data);
      setCorrectSpan(response?.data.message)
      
      localStorage.setItem("token",response?.data?.token)

      setTimeout(() => {
        setCorrectSpan("")
        navigate('/')
      }, 500)

    } catch (err) {
      if (err.response)
        // console.log("Entered into err",err.response.data.message)
        setIncorrectSpan(err.response.data.message);
      return;
    }
    setEmail("")
    setPassword("")
    setIncorrectSpan("")
    

    // navigate('/');

  }


  return (
    <section className="grid text-center h-screen items-center p-8 bg-cyan-50">
      <div className=" z-10 backdrop-blur-sm ">
        <Typography variant="h3" className="mb-2">
          Login In
        </Typography>
        <Typography className="mb-16 text-gray-600 font-normal text-[18px]">
          Enter your email and password to sign in
        </Typography>
        <form action="/login" method="post" className="mx-auto max-w-[24rem] text-left">
          <div className="mb-6">
            <label htmlFor="email">
              <Typography
                variant="small"
                className="mb-2 block font-medium text-gray-900"
              >
                Your Email
              </Typography>
            </label>
            <Input
              onChange={(event) => setEmail(event.target.value)}
              value={email}
              id="email"
              color="gray"
              size="lg"
              type="email"
              name="email"
              placeholder="name@mail.com"
              className="w-full placeholder:opacity-100 focus:border-t-primary border-t-blue-gray-200"
              labelProps={{
                className: "hidden",
              }}
            />
          </div>
          <div className="mb-6">
            <label htmlFor="password">
              <Typography
                variant="small"
                className="mb-2 block font-medium text-gray-900"
              >
                Password
              </Typography>
            </label>
            <Input
              onChange={(event) => setPassword(event.target.value)}
              value={password}
              size="lg"
              placeholder="********"
              name="password"
              labelProps={{
                className: "hidden",
              }}
              className="w-full placeholder:opacity-100 focus:border-t-primary border-t-blue-gray-200"
              type={passwordShown ? "text" : "password"}
              icon={
                <i onClick={togglePasswordVisiblity}>
                  {passwordShown ? (
                    <EyeIcon className="h-5 w-5" />
                  ) : (
                    <EyeSlashIcon className="h-5 w-5" />
                  )}
                </i>
              }
            />
          </div>

          <span className="text-green-600 text-xs">{correctSpan}</span>
          <span className="text-red-600">{incorrectSpan}</span>

          <Button onClick={handleSubmit}  color="gray" size="lg" className="mt-6 bg-amber-600" fullWidth>
            sign in
          </Button>
          <div className="!mt-4 flex justify-end">
            <Typography
              as="a"
              color="blue-gray"
              variant="small"
              className="font-medium cursor-pointer"
              onClick={()=>navigate('/forgot-password')}
            >
              Forgot password
            </Typography>
          </div>
          <Button
            variant="outlined"
            size="lg"
            className="mt-6 flex h-12 items-center justify-center gap-2"
            fullWidth
          >
            <img
              src={`https://www.material-tailwind.com/logos/logo-google.png`}
              alt="google"
              className="h-6 w-6"
            />{" "}
            sign in with google
          </Button>
          <Typography
            variant="small"
            color="gray"
            className="!mt-4 text-center font-normal"
          >
            Not registered?{" "}
            <a href="/signup" className="font-medium text-gray-900">
              Create account
            </a>
          </Typography>
        </form>
      </div>
    </section>
  );
}

export default Login;