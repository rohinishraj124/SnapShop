import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';

const Orders = () => {
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const router = useRouter();

  useEffect(() => {
    const fetchOrders = async () => {
      const token = localStorage.getItem('token');
      if (!token) {
        return router.push('/');
      }

      try {
        const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/myorder`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ token }),
        });

        const data = await response.json();
        setOrders(data.orders || []);
      } catch (error) {
        setError('Error fetching orders');
        console.error('Error fetching orders:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchOrders();
  }, [router]);

  if (loading) return <div className="text-center py-8">{process.env.NEXT_PUBLIC_LOADING_TEXT || 'Loading...'}</div>;
  if (error) return <div className="text-center text-red-500 py-8">{error}</div>;

  const headers = [
    'Order ID',
    'Email',
    'Products',
    'Total Amount',
    'Status',
    'Order Date'
  ];

  const handleRowClick = (id) => {
    router.push(`order?id=${id}`);
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">{process.env.NEXT_PUBLIC_ORDERS_HEADER || 'Your Orders'}</h1>
      {orders.length === 0 ? (
        <p>{process.env.NEXT_PUBLIC_NO_ORDERS_TEXT || 'No orders found.'}</p>
      ) : (
        <div className="space-y-4">
          {orders.map((order) => (
            <div
              key={order._id}
              className="bg-white p-4 rounded-lg shadow-md border border-gray-200 hover:bg-gray-50 cursor-pointer"
              onClick={() => handleRowClick(order._id)} // Handle row click
            >
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="flex flex-col">
                  <span className="font-semibold text-gray-700">Order ID:</span>
                  <span>{order.orderId}</span>
                </div>
                <div className="flex flex-col">
                  <span className="font-semibold text-gray-700">Email:</span>
                  <span>{order.email}</span>
                </div>
                <div className="flex flex-col">
                  <span className="font-semibold text-gray-700">Products:</span>
                  {order.products.map((product, index) => (
                    <span key={index}>{product.name || 'Unnamed product'}</span>
                  ))}
                </div>
                <div className="flex flex-col">
                  <span className="font-semibold text-gray-700">Total Amount:</span>
                  <span>{typeof order.amount === 'number' ? order.amount.toFixed(2) : 'N/A'}</span>
                </div>
                <div className="flex flex-col">
                  <span className="font-semibold text-gray-700">Status:</span>
                  <span>{order.status}</span>
                </div>
                <div className="flex flex-col">
                  <span className="font-semibold text-gray-700">Order Date:</span>
                  <span>{new Date(order.createdAt).toLocaleString()}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Orders;
