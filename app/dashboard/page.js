'use client'
// pages/dashboard/messages.js
import React, { useEffect, useState } from 'react';
import DashboardLayout from '../components/dashboardlayout/dashboardlayout';

const MessagesPage = () => {
  const [messages, setMessages] = useState([]);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchMessages = async () => {
      try {
        const response = await fetch('/apis/getmessages'); // Ensure this endpoint is working
        const data = await response.json();
        if (data.success) {
          setMessages(data.user);
        } else {
          setError(data.error || 'Failed to fetch messages');
        }
      } catch (err) {
        setError('An error occurred while fetching messages.');
      }
    };

    fetchMessages();
  }, []);

  const removemessage = async (id, i) => {
    try {
      const response = await fetch('/apis/removemessages', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ id }), // Wrap id in an object
        credentials: 'include', // Include credentials in the request
      });

      if (!response.ok) {
        const errorData = await response.json();
        console.error('Error removing message:', errorData);
        return;
      }

      const data = await response.json();
      console.log('Message removed successfully:', data);
      const updatedMessages = messages.filter((message) => message._id !== id);
      setMessages(updatedMessages);

    } catch (error) {
      console.error('Error removing message:', error);
    }
  };

  return (
    <DashboardLayout>
      <div className="p-4">
        <h2 className="text-2xl font-bold mb-6">Messages</h2>
        {error && <p className="text-red-500">{error}</p>}
        <div className="overflow-x-auto">
          <table className="w-full table-auto bg-gray-800 rounded-lg overflow-hidden">
            <thead>
              <tr className="bg-gray-700">
                <th className="px-4 py-2 text-left">Name</th>
                <th className="px-4 py-2 text-left">Email</th>
                <th className="px-4 py-2 text-left">Number</th>
                <th className="px-4 py-2 text-left">Message</th>
                <th className="px-4 py-2 text-left">Date</th>
                <th className="px-4 py-2 text-left">Actions</th>
              </tr>
            </thead>
            <tbody>
              {messages.map((msg, i) => (
                <tr key={msg._id} className="border-b border-gray-700">
                  <td className="px-4 py-2">
                    <div className="flex items-center justify-between sm:block">
                      <div className="text-sm sm:text-base">{msg.name}</div>
                      <button
                        onClick={() => removemessage(msg._id, i)}
                        className="flex items-center justify-center w-5 h-5 text-red-600 bg-red-100 rounded-full shadow hover:bg-red-200 hover:shadow-md transition duration-300"
                        aria-label="Remove"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-6 w-6"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          strokeWidth={2}
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M6 18L18 6M6 6l12 12"
                          />
                        </svg>
                      </button>
                    </div>
                  </td>
                  <td className="px-4 py-2">{msg.email}</td>
                  <td className="px-4 py-2">{msg.Number}</td>
                  <td className="px-4 py-2">{msg.message}</td>
                  <td className="px-4 py-2">{new Date(msg.createdAt).toLocaleDateString()}</td>
                  <td className="px-4 py-2">
                    <button
                      onClick={() => removemessage(msg._id, i)}
                      className="text-red-600 hover:text-red-800"
                    >
                      Remove
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default MessagesPage;
