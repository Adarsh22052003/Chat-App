import React from 'react'

function Login() {
  return (
    <div className='flex flex-col items-center justify-center min-w-96 mx-auto'>
      <div className='w-full p-6 shadow-md bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0'>
        <h1 className="text-3xl font-semibold text-center text-gray-300">Login
          <span className='text-blue-500'> ChatApp</span>
        </h1>
        <form >
          <div>
            <label className='label p-2 '>
              <span className='text-base label-text '>Username</span>
            </label>
            <input type="text" placeholder="Enter username" className="input input-bordered w-full max-w-xs" />
          </div>

          <div>
            <label className='label p-2 '>
              <span className='text-base label-text '>Paasword</span>
            </label>
            <input type="password" placeholder="Enter Password" className="input input-bordered w-full max-w-xs" />
          </div>

          <div>
            <a href="#" className='text-sm hover:underline hover:text-blue-600 mt-2 inline-block'>
              {"Don't"} have an account
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
  )
}

export default Login


// STARTER CODE FOR THIS FILE 
// function Login() {
//   return (
//     <div className='flex flex-col items-center justify-center min-w-96 mx-auto'>
//       <div className='w-full p-6 shadow-md bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0'>
//         <h1 className="text-3xl font-semibold text-center text-gray-300">Login
//           <span className='text-blue-500'> ChatApp</span>
//         </h1>
//         <form >
//           <div>
//             <label className='label p-2 '>
//               <span className='text-base label-text '>Username</span>
//             </label>
//             <input type="text" placeholder="Enter username" className="input input-bordered w-full max-w-xs" />
//           </div>

//           <div>
//             <label className='label p-2 '>
//               <span className='text-base label-text '>Paasword</span>
//             </label>
//             <input type="password" placeholder="Enter Password" className="input input-bordered w-full max-w-xs" />
//           </div>

//           <div>
//             <a href="#" className='text-sm hover:underline hover:text-blue-600 mt-2 inline-block'>
//               {"Don't"} have an account
//             </a>
//           </div>
//           <div>
//             <button className='btn btn-block mt-2'>
//               Login
//             </button>
//           </div>

//         </form>
//       </div>

//     </div>
//   )
// }
