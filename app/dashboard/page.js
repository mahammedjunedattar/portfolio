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
        console.log(data)
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

  return (
    <DashboardLayout>
      <div>
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
              </tr>
            </thead>
            <tbody>
              {messages.map((msg) => (
                <tr key={msg._id} className="border-b border-gray-700">
                  <td className="px-4 py-2">{msg.name}</td>
                  <td className="px-4 py-2">{msg.email}</td>
                  <td className="px-4 py-2">{msg.Number}</td>
                  <td className="px-4 py-2">{msg.message}</td>
                  <td className="px-4 py-2">{new Date(msg.createdAt).toLocaleDateString()}</td>
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
