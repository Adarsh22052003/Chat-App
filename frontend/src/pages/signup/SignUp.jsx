import React from "react";
import GenderCheckBox from "./GenderCheckBox.jsx";

const SignUp = () => {
  return (
    <div className="flex flex-col items-center justify-center min-w-96 mx-auto">
      <div className="w-full p-6 rounded-lg shadow-sm bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0">
        <h1 className="text-3xl font-semibold text-center text-gray-300">
          Sign Up <span className="text-blue-500"> ChatApp</span>
        </h1>
        <form>
          <div>
            <label className="label p-2 ">
              <span className="text-base label-text ">Full Name</span>
            </label>
            <input
              type="text"
              placeholder="Enter fullname"
              className="input input-bordered w-full max-w-xs"
            />
          </div>
          <div>
            <label className="label p-2 ">
              <span className="text-base label-text ">Username</span>
            </label>
            <input
              type="text"
              placeholder="username"
              className="input input-bordered w-full max-w-xs"
            />
          </div>
          <div>
            <label className="label p-2 ">
              <span className="text-base label-text ">Password</span>
            </label>
            <input
              type="text"
              placeholder="Enter Password"
              className="input input-bordered w-full max-w-xs"
            />
          </div>
          <div>
            <label className='label p-2 '>
              <span className='text-base label-text '>Confirm Password</span>
            </label>
            <input type="text" placeholder="Confirm password" className="input input-bordered w-full max-w-xs" />
          </div>

        {/* Gender Checkbox goes here */}
        <GenderCheckBox/>
        <div>
            <a href="#" className='text-sm hover:underline hover:text-blue-600 mt-2 inline-block'>
              Already have an account
            </a>
          </div>
          
          <div>
            <button className='btn btn-block mt-2 border border-slate-700'>
              Login
            </button>
          </div>

          
        </form>
      </div>
    </div>
  );
};

export default SignUp;

// Starter code for signup 
// import React from "react";
// import GenderCheckBox from "./GenderCheckBox.jsx";

// const SignUp = () => {
//   return (
//     <div className="flex flex-col items-center justify-center min-w-96 mx-auto">
//       <div className="w-full p-6 rounded-lg shadow-sm bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0">
//         <h1 className="text-3xl font-semibold text-center text-gray-300">
//           Sign Up <span className="text-blue-500"> ChatApp</span>
//         </h1>
//         <form>
//           <div>
//             <label className="label p-2 ">
//               <span className="text-base label-text ">Full Name</span>
//             </label>
//             <input
//               type="text"
//               placeholder="Enter fullname"
//               className="input input-bordered w-full max-w-xs"
//             />
//           </div>
//           <div>
//             <label className="label p-2 ">
//               <span className="text-base label-text ">Username</span>
//             </label>
//             <input
//               type="text"
//               placeholder="username"
//               className="input input-bordered w-full max-w-xs"
//             />
//           </div>
//           <div>
//             <label className="label p-2 ">
//               <span className="text-base label-text ">Password</span>
//             </label>
//             <input
//               type="text"
//               placeholder="Enter Password"
//               className="input input-bordered w-full max-w-xs"
//             />
//           </div>
//           <div>
//             <label className='label p-2 '>
//               <span className='text-base label-text '>Confirm Password</span>
//             </label>
//             <input type="text" placeholder="Confirm password" className="input input-bordered w-full max-w-xs" />
//           </div>

//         {/* Gender Checkbox goes here */}
//         <GenderCheckBox/>
//         <div>
//             <a href="#" className='text-sm hover:underline hover:text-blue-600 mt-2 inline-block'>
//               Already have an account
//             </a>
//           </div>
          
//           <div>
//             <button className='btn btn-block mt-2 border border-slate-700'>
//               Login
//             </button>
//           </div>

          
//         </form>
//       </div>
//     </div>
//   );
// };

// export default SignUp;
