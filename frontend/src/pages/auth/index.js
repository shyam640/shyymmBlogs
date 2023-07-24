import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from 'axios';
import Loader from '../../components/atoms/Loader';
import Swal from "sweetalert2";

const Auth = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [confirmPassword, setConfirmPassword] = useState("");
  const [key, setKey] = useState("");

  const navigate = useNavigate();

  useEffect(() => {
    const userInfo = localStorage.getItem("userInfo");

    if (userInfo) {
      Swal.fire({
        position: "top-end",
        icon: "success",
        title: "Authorized",
        showConfirmButton: true,
        timer: 3000,
      });
      navigate("/admin/upload");
    }
  }, [navigate]);

  const registerSubmitHandler = async (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      Swal.fire({
        position: "top-end",
        icon: "error",
        title: "Password Not Matched",
        showConfirmButton: false,
        timer: 3000,
      });
    } else if (key !== process.env.REACT_APP_SECURITY_KEY) {
      Swal.fire({
        position: "top-end",
        icon: "error",
        title: "Security Key do not match",
        showConfirmButton: false,
        timer: 3000,
      });
    } else {
      try {
        const config = {
          header: {
            "Content-type": "application/json"
          }
        }
        setLoading(true);
        const { data } = await axios.post('/api/users/auth/register', {
          name, email, password, key
        }, config);
        localStorage.setItem('userInfo', JSON.stringify(data));
        setLoading(false);
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "Registered Successfully",
          showConfirmButton: true,
          timer: 3000,
        });
        navigate("/admin/upload");
      } catch (error) {
        setLoading(false);
        Swal.fire({
          position: "top-end",
          icon: "error",
          title: "Registration Failed",
          showConfirmButton: true,
          timer: 3000,
        });
      }
    }

  }

  const loginSubmitHandler = async (e) => {
    e.preventDefault();
    try {
      const config = {
        header: {
          "Content-type": "application/json"
        }
      }
      setLoading(true);
      const { data } = await axios.post('/api/users/auth/login', {
        email, password
      }, config);
      localStorage.setItem('userInfo', JSON.stringify(data));
      setLoading(false);
      Swal.fire({
        position: "top-end",
        icon: "success",
        title: "Login Successful",
        showConfirmButton: true,
        timer: 3000,
      });
      navigate('/admin/upload');
    } catch (e) {
      setLoading(false);
      Swal.fire({
        position: "top-end",
        icon: "error",
        title: "Invalid Credentials",
        showConfirmButton: true,
        timer: 3000,
      });
    }
  }


  return (
    <>
      <div class="my-8 pt-16 grid grid-cols-2 divide-x">
        {loading && <Loader />}
        <section class="bg-transparent">
          <div class="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
            <div class="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
              <div class="p-6 space-y-4 md:space-y-6 sm:p-8">
                <h1 class="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                  Create Admin
                </h1>
                <form class="space-y-4 md:space-y-6" onSubmit={registerSubmitHandler}>
                  <div>
                    <label for="name" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your Name</label>
                    <input type="name" name="name" id="name" onChange={(e) => setName(e.target.value)} class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Full Name" required="true" />
                  </div>
                  <div>
                    <label for="email" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your Email</label>
                    <input type="email" name="email" id="email" onChange={(e) => setEmail(e.target.value)} class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="name@company.com" required="true" />
                  </div>
                  <div>
                    <label for="password" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Password</label>
                    <input type="password" name="password" id="password" onChange={(e) => setPassword(e.target.value)} placeholder="••••••••" class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required="true" />
                  </div>
                  <div>
                    <label for="confirm-password" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Confirm password</label>
                    <input type="password" name="confirm-password" id="confirm-password" onChange={(e) => setConfirmPassword(e.target.value)} placeholder="••••••••" class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required="true" />
                  </div>
                  <div>
                    <label for="key" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Enter Key</label>
                    <input type="password" name="key" id="key" onChange={(e) => setKey(e.target.value)} placeholder="••••••••" class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required="true" />
                  </div>
                  <div class="flex items-start">
                    <div class="flex items-center h-5">
                      <input id="terms" aria-describedby="terms" type="checkbox" class="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800" required="true" />
                    </div>
                    <div class="ml-3 text-sm">
                      <label for="terms" class="font-light text-gray-500 dark:text-gray-300">I accept the <a class="font-medium text-primary-600 hover:underline dark:text-primary-500" href="/404">Terms and Conditions</a></label>
                    </div>
                  </div>
                  <button type="submit" class="w-full text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">Create Admin</button>
                </form>
              </div>
            </div>
          </div>
        </section>
        <section class="bg-transparent">
          <div class="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
            <div class="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
              <div class="p-6 space-y-4 md:space-y-6 sm:p-8">
                <h1 class="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                  Login Admin
                </h1>
                <form class="space-y-4 md:space-y-6" onSubmit={loginSubmitHandler}>
                  <div>
                    <label for="email" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your email</label>
                    <input type="email" name="email" id="email" onChange={(e) => setEmail(e.target.value)} class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="name@company.com" required="true" />
                  </div>
                  <div>
                    <label for="password" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Password</label>
                    <input type="password" name="password" id="password" onChange={(e) => setPassword(e.target.value)} placeholder="••••••••" class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required="true" />
                  </div>
                  <button type="submit" class="w-full text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">Login Admin</button>
                </form>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Auth;
