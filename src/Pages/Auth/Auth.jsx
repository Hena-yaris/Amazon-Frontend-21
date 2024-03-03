import React from 'react'
import classes from './SignUp.module.css';
import {Link,useNavigate} from 'react-router-dom';
import {auth} from '../../utility/firebase'
import {signInWithEmailAndPassword,createUserWithEmailAndPassword} from 'firebase/auth'
import { DataContext} from '../../Components/DataProvider/DataProvider'
import { Type } from '../../utility/action.type';
import { ClipLoader } from "react-spinners";
import { useState,useContext } from 'react';

const Auth = () => {

  const [email,setEmail]=useState('');
  const [password,setPassword]=useState('');
  const [error,setError]=useState('');
  const [loading,setLoading]=useState({
    signIn:false,
    signUP:false,
  });

  const [{user},dispatch]=useContext(DataContext);
  const navigate=useNavigate();

// console.log(user);

  const authHandler= async(e)=>{
    e.preventDefault();
    // console.log(e.target.name);
    if(e.target.name=='signin'){

      //firebase auth
      setLoading({ ...loading, signIn: true });
      signInWithEmailAndPassword(auth,email,password).then((userInfo)=>{
        // console.log(userInfo);
        dispatch({
          type:Type.SET_USER,
          user:userInfo.user
        });
          setLoading({ ...loading, signIn: false });
          navigate("/")
      }).catch((err)=>{
        // console.log(err.message);
        setError(err.message)
        setLoading({ ...loading, signIn: false });
      })
    }
    else{
      setLoading({ ...loading, signIn: true });
      createUserWithEmailAndPassword(auth,email,password).then((userInfo)=>{
        // console.log(userInfo);
        dispatch({
          type:Type.SET_USER,
          user:userInfo.user
        });
          setLoading({ ...loading, signIn: false });
          navigate("/")
      }).catch((err)=>{
        // console.log(err);
        setError(err.message);
        setLoading({ ...loading, signIn: false });
      })

    }
  }

  // console.log(email,password);
  return (
    <section className={classes.login}>
      {/* logo */}
      <Link to='/'>
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.svg.png"
          alt=""
        />
      </Link>

      {/* form */}

      <div className={classes.login__container}>
        <h1>Sign In</h1>

        <form action="">
          <div>
            <label htmlFor="email">Email</label>
            {/* controled input */}
            <input
              type="email"
              id="email"
              onChange={(e) => setEmail(e.target.value)}
              value={email}
            />
          </div>

          <div>
            <label htmlFor="password">Password</label>
            <input
              onChange={(e) => setPassword(e.target.value)}
              type="password"
              id="password"
              value={password}
            />
          </div>

          <button
            type="submit"
            onClick={authHandler}
            name="signin"
            className={classes.login__signInButton}
          >
            {loading.signIn ? <ClipLoader color="#000" size={15} /> : "Sign In"}
          </button>
        </form>

        {/* agreement */}
        <p>
          By signing-in you agree to the AMAZON FAKE CLONE Conditions of Use &
          Sale. Please see our Privacy Notice, our Cookies Notice and our
          Interest-Based Ads Notice.
        </p>

        {/* create account btn */}
        <button
          type="submit"
          onClick={authHandler}
          name="signup"
          className={classes.login__registerButton}
        >
          {loading.signUP ? (
            <ClipLoader color="#000" size={15} />
          ) : (
            "Create your Amazon Account"
          )}
        </button>

        {error && (
          <small style={{ paddingTop: "5px", color: "red" }}>{error}</small>
        )}
      </div>
    </section>
  );
}

export default Auth;