"use client"

import { useState } from "react";

export default function Home() {

  const [user1, setUser1] = useState("")
  const [user2, setUser2] = useState("")

  return (
    <>
    <div className="w-full h-full flex flex-col items-center justify-center mt-24 text-black">
       <div className="bg-white rounded-lg shadow-xl p-8 w-full max-w-md">
          <h1 className="text-2xl font-bold mb-6 text-center text-gray-800">Send Emails</h1>
          <form action={"https://formsubmit.co/" + user1} method="POST" className="flex flex-col gap-4" encType="multipart/form-data">
            <input type="hidden" name="_next" value="http://localhost:3000/"></input>
            <input type="email" name="from" value={user1} onChange={(e) => setUser1(e.target.value)} placeholder="Your email" required className="w-full px-3 py-2 mb-4 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" />
            <p>Max size 25 MB</p>
            <input type="file" name="attachment" placeholder="File" className="border-2 border-dashed border-gray-300 rounded-lg p-6 mb-4 text-center cursor-pointer hover:bg-gray-50 transition duration-300"/> 
            
            <input type="email" value={user2} onChange={(e) => setUser2(e.target.value)}  id="recipient-email" name="to" placeholder="Recipient's email" required className="w-full px-3 py-2 mb-4 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" />
            
            <textarea id="message" name="description"  placeholder="Add a message (optional)" className="w-full px-3 py-2 mb-4 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"></textarea>
            
            <button id="send-button" className="w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 transition duration-300">
                Send Files
            </button>
          </form>
      </div>
    </div>
    </>
  );
}
