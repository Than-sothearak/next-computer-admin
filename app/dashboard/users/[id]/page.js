'use client'
import * as React from 'react'

import UserForm from "@/components/UserForm";

export default function SingleUserPage({ params }) {
   const { id } = React.use(params)
  return (
    <>
    <UserForm userId={id}/>
    </>
  );
}
