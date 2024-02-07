"use client";

import React from 'react';
import { useClerk } from "@clerk/clerk-react";
import { useRouter } from 'next/navigation';
import { Button } from './shadcn/ui/button';

const LogoutButton = () => {
  const { signOut } = useClerk();
  const router = useRouter();

  const handleLogout = () => {
    return signOut(() => router.push("/"));
  };

  return <Button onClick={handleLogout}>Log out</Button>;
};

export default LogoutButton;