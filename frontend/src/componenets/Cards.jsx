// import React from "react";

// function Cards({ item }) {
//   console.log(item);
//   return (
//     <div className="mt-6 ml-5 mr-5 my-5 ">
//       <div className="card bg-base-100 shadow-sm hover:scale-105 duration-200 dark:bg-slate-900 dark:text-white">
//         <figure>
//           <img src={item.image} alt="Shoes" />
//         </figure>
//         <div className="card-body">
//           <h2 className="card-title">
//             {item.name}
//             <div className=" overflow- badge badge-secondary ">
//               {item.category}
//             </div>
//           </h2>
//           <p>{item.title}</p>
//           <div className="card-actions flex justify-between mt-2 ">
//             <div className="badge badge-outline hover:bg-pink-500 hover:text-white duration-200 px-2 py-2 ">
//               ${item.price}
//             </div>
//             <div className=" badge badge-outline cursor-pointer hover:bg-pink-500 hover:text-white duration-200 px-2 py-2 ">
//               Buy Now
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Cards;

import React from "react";

function Cards({ item }) {
  return (
    <>
      <div className="mt-4 my-3 p-3">
        <div className="card card-sm  bg-base-100 shadow-xl hover:scale-105 duration-200 dark:bg-slate-900 dark:text-white dark:border ">
          <figure>
            <img className="w-65 h-70" src={item.image} alt="Shoes" />
          </figure>
          <div className="card-body">
            <h2 className="card-title">
              {item.name}
              <div className="badge badge-secondary">{item.category}</div>
            </h2>
            <p>{item.title}</p>
            <div className="card-actions justify-between">
              {/* <div className="badge badge-outline">${item.price}</div> */}
              <div className=" cursor-pointer px-2 py-1 rounded-full border-[2px] hover:bg-pink-500 hover:text-white duration-200">
                ${item.price}
              </div>
              <div className=" cursor-pointer px-2 py-1 rounded-full border-[2px] hover:bg-pink-500 hover:text-white duration-200">
                Buy Now
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Cards;
