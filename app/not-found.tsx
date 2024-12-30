"use client";

import React from "react";
import { Card, CardTitle } from "@/components/ui/card";

import Image from "next/image";

import logo from "@/public/images/logo.svg";
import Link from "next/link";
import { Button } from "@/components/ui/button";

const NotFoundPage = () => {
  return (
    <div className="h-screen w-full flex-center">
      <Card className="flex flex-col items-center gap-4 p-8">
        <CardTitle className="flex-center">
          <Image src={logo} width={50} height={50} alt="Prostore logo" />
          <span className="font-bold text-2xl ml-3">Prostore</span>
        </CardTitle>
        <span className="text-red-600 text-sm">The page you request was not found</span>
        <Link href="/">
          <Button
            className="border-2 border-gray-100 rounded-xl"
            variant="ghost"
          >
            Back to Home
          </Button>
        </Link>
       
      </Card>
    </div>
  );
};

export default NotFoundPage;
