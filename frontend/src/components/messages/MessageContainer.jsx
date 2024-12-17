import React, { useState } from 'react';
import Messages from './Messages.jsx';
import MessageInput from './MessageInput.jsx';
import { TiMessages } from 'react-icons/ti';

function MessageContainer() {
  const noChatSelected = false;

  return (
    <div className="md:min-w-[450px] flex flex-col h-full">
      {noChatSelected ? (
        <NoChatSelected />
      ) : (
        <>
          {/* Header */}
          <div className="bg-slate-500 px-4 py-2 mb-2">
            <span className="text-gray-900 font-bold">John Doe</span>
          </div>
          <Messages />
          <MessageInput />
        </>
      )}
    </div>
  );
}

export default MessageContainer;

// NoChatSelected Component
const NoChatSelected = () => {
  return (
    <div className="flex justify-center items-center h-full w-full">
      <div className="px-4 text-center sm:text-xl text-gray-200 font-semibold flex flex-col items-center gap-2">
        <p>Welcome, John Doe</p>
        <p>Select a chat to start messaging</p>
        <TiMessages className="text-3xl md:text-6xl text-center" />
      </div>
    </div>
  );
};

// import React from 'react'
// import Messages from './Messages.jsx'
// import MessageInput from './MessageInput.jsx'

// import TiMessages from 'react-icons/ti'

// function MessageContainer() {
//     const noChatSelected = false;
//   return (
//     <div className='md:min-[450px] flex flex-col'>
//         {noChatSelected ? <NoChatSelected/> :(
//             <>
//             {/* Header */}
//             <div className='bg-slate-500 px-4 py-2 mb-2'>
//                 <span className='text-gray-900 font-bold'>John doe</span>
//             </div>
//             <Messages/>
//             <MessageInput/>
//         </>
//         )}
//     </div>
//   )
// }

// export default MessageContainer


// const NoChatSelected = () => {
//     return(
//         <div className='flex justify-center items-center h-full w-full'>
//             <div className='px-4 text-center sm:text-xl text-gray-200 font-semibold flex flex-col items-center gap-2'>
//                 <p>Welcome John Doe</p>
//                 <p>Select a chat to start messasing</p>
//                 <TiMessages className='text-3xl md:text-6xl text-center'/>
//             </div>
//         </div>
//     )
// }