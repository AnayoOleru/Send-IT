import { randomBytes } from 'crypto';
import orders from '../orders';

export const getOrders = (req, res) => res.json(orders);

export const getOrderById = (req, res) => res.json(req.order);

export const createOrder = (req, res) => {
  const orders = { ...orders };
  const orderId = randomBytes(4).toString('hex');

  orders[orderId] = { orderId, ...req.body };

  res.status(201).json({ ...orders[orderId], id: orderId });
};

export const updateOrder = (req, res) => {
  const orders = { ...orders };
  const { id, ...order } = req.order;

  orders[id] = { ...order, ...req.body };
  orders = orders;

  res.json(orders[id]);
};

export const deleteOrder = (req, res) => {
  const orders = { ...orders };

  delete orders[req.order.id];
  orders = orders;

  res.json(req.order);
};