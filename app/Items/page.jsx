import React from "react";
import ItemsPage from '@/Components/AllItemsPage'
import { Suspense } from 'react'

export const metadata = {
  title: 'Gupta Crockery - Search Items',
};

const page = () => {
  return (<Suspense><ItemsPage /></Suspense>);
};

export default page;
