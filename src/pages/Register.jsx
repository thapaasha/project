import React from "react";

export default function Register() {
  return (
    <div className="flex justify-between py-10 px-[5rem] ">
      <div>
        <img></img>
      </div>

      <form className="flex flex-col space-y-3">
        <div>
          <h1 className="text-[2rem] mb-2">Register</h1>
          <p className="text-[1rem] mb-2">Fill the form below to register.</p>
        </div>
        <div className="flex gap-3">
          <div className="flex flex-col">
            {" "}
            <label htmlFor="fname">First Name</label>
            <input
              type="text"
              id="fname"
              //   value={fname}
              placeholder="Your first name"
              onChange={(e) => console.log(e.target.value)}
              className="rounded-md border focus:border-none focus:outline-none "
            ></input>
          </div>
          <div className="flex flex-col">
            <label htmlFor="lname">Last Name</label>
            <input
              type="text"
              id="lname"
              //   value={lastname}
              placeholder="Your last name"
              onChange={(e) => console.log(e.target.value)}
              className="rounded-md border focus:border-none focus:outline-none "
            ></input>
          </div>
        </div>

        <label htmlFor="email">Email</label>
        <input
          type="text"
          id="email"
          // value={email}
          placeholder="Your email"
          onChange={(e) => console.log(e.target.value)}
          className="rounded-md border focus:border-none focus:outline-none "
        ></input>

        <label htmlFor="pass">Password</label>
        <input
          type="text"
          id="pass"
          // value={pass}
          placeholder="Your password"
          onChange={(e) => console.log(e.target.value)}
          className="rounded-md border focus:border-none focus:outline-none "
        ></input>

        <label htmlFor="phn">Phone number</label>
        <input
          type="text"
          id="phn"
          // value={phn}
          placeholder="Your phone number"
          onChange={(e) => console.log(e.target.value)}
          className="rounded-md border focus:border-none focus:outline-none "
        ></input>

        <label htmlFor="address">Address</label>
        <input
          type="text"
          id="address"
          // value={address}
          placeholder="Your address"
          onChange={(e) => console.log(e.target.value)}
          className="rounded-md border focus:border-none focus:outline-none "
        ></input>
        <p className="text-[0.8rem]">
          By signing in, you're agree to our Terms & Condition and Privacy
          Policy
        </p>
        <div className="bg-green border border-green-500 p-2 text-center rounded-md">
          <button className="bg-green">Create Account</button>
        </div>
      </form>
    </div>
  );
}
