import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';

const Orders = () => {
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [user, setUser] = useState(null); // State for storing user data
  const router = useRouter();

  // Fetch orders for the logged-in user
  useEffect(() => {
    const fetchOrders = async () => {
      try {
        setLoading(true);
        
        // Retrieve user token or user ID from localStorage
        const userToken = localStorage.getItem('token'); // Assume 'token' is the user token
        if (!userToken) {
          // If no token, redirect to login page
          router.push('/login');
          return;
        }

        setUser(userToken);

        // Simulate fetching orders data (replace with an API call if needed)
        const storedOrders = localStorage.getItem('orders');
        
        // If there's no orders in localStorage, simulate some dummy orders
        if (storedOrders) {
          const allOrders = JSON.parse(storedOrders);
          // Filter orders for the logged-in user (replace with actual user-specific logic)
          const userOrders = allOrders.filter(order => order.userToken === userToken);
          setOrders(userOrders);
        } else {
          const dummyOrders = [
            {
              id: 1,
              userToken: 'user1', // This should match the logged-in user's token
              customerName: 'John Doe',
              items: ['Product A', 'Product B'],
              totalAmount: 50.00,
              status: 'Delivered',
              date: '2024-12-01',
            },
            {
              id: 2,
              userToken: 'user2', // Different user token
              customerName: 'Jane Smith',
              items: ['Product C', 'Product D'],
              totalAmount: 80.00,
              status: 'Pending',
              date: '2024-12-10',
            },
          ];
          localStorage.setItem('orders', JSON.stringify(dummyOrders));
          // Filter orders for the logged-in user
          const userOrders = dummyOrders.filter(order => order.userToken === userToken);
          setOrders(userOrders);
        }
      } catch (err) {
        setError('Failed to load orders');
      } finally {
        setLoading(false);
      }
    };

    fetchOrders();
  }, [router]);

  if (loading) return <div className="text-center py-8">Loading...</div>;
  if (error) return <div className="text-center text-red-500 py-8">{error}</div>;

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Your Orders</h1>
      {orders.length === 0 ? (
        <p>No orders found.</p>
      ) : (
        <table className="min-w-full bg-white border border-gray-200 shadow-md rounded-lg">
          <thead className="bg-gray-100">
            <tr>
              <th className="px-6 py-3 text-left text-sm font-semibold text-gray-700">Order ID</th>
              <th className="px-6 py-3 text-left text-sm font-semibold text-gray-700">Customer Name</th>
              <th className="px-6 py-3 text-left text-sm font-semibold text-gray-700">Items</th>
              <th className="px-6 py-3 text-left text-sm font-semibold text-gray-700">Total Amount</th>
              <th className="px-6 py-3 text-left text-sm font-semibold text-gray-700">Status</th>
              <th className="px-6 py-3 text-left text-sm font-semibold text-gray-700">Order Date</th>
            </tr>
          </thead>
          <tbody>
            {orders.map((order) => (
              <tr key={order.id} className="border-t border-gray-200 hover:bg-gray-50">
                <td className="px-6 py-4 text-sm font-medium text-gray-700">{order.id}</td>
                <td className="px-6 py-4 text-sm font-medium text-gray-700">{order.customerName}</td>
                <td className="px-6 py-4 text-sm text-gray-600">{order.items.join(', ')}</td>
                <td className="px-6 py-4 text-sm text-gray-700">${order.totalAmount.toFixed(2)}</td>
                <td className="px-6 py-4 text-sm text-gray-700">{order.status}</td>
                <td className="px-6 py-4 text-sm text-gray-700">{order.date}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default Orders;
