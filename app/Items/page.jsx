import React from "react";
import ItemsPage from '@/Components/AllItemsPage'
import { Metadata } from 'next';
export const metadata = {
  title: 'Gupta Crockery - Search Items',
};
const page = () => {
  return <ItemsPage />;
};

export default page;
