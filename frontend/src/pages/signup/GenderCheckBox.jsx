import React from "react";

const GenderCheckBox = () => {
  return (
    <div className="flex">
      <div className="form-control">
        <label className={"label gap-2 cursor-pointer"}>
          <span className="label-text">Male</span>
          <input
            type="checkbox"
            className="checkbox border-slate-950"
          />
        </label>
      </div>
      <div>
        <label className={"label gap-2 cursor-pointer"}>
          <span className="label-text">Female</span>
          <input
            type="checkbox"
            className="checkbox border-slate-950"
          />
        </label>
      </div>
    </div>
  );
};

export default GenderCheckBox;

// Starter code here

// import React from "react";

// const GenderCheckBox = () => {
//   return (
//     <div className="flex">
//       <div className="form-control">
//         <label className={"label gap-2 cursor-pointer"}>
//           <span className="label-text">Male</span>
//           <input
//             type="checkbox"
//             className="checkbox border-slate-950"
//           />
//         </label>
//       </div>
//       <div>
//         <label className={"label gap-2 cursor-pointer"}>
//           <span className="label-text">Female</span>
//           <input
//             type="checkbox"
//             className="checkbox border-slate-950"
//           />
//         </label>
//       </div>
//     </div>
//   );
// };

// export default GenderCheckBox;
