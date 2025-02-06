"use client";

import { useEffect, useState } from "react";
import { DollarSign, HandMetal } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import GreetingForm from "./greeting-form";

export const GreetingButton = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <Dialog open={isModalOpen} onOpenChange={setIsModalOpen}>
      <DialogTrigger asChild>
        <div className="text-lg flex justify-start items-center hover:cursor-pointer">
          <div className="mr-8 p-4 bg-yellow-300 rounded-full">
            <HandMetal className="h-6 w-6" />
          </div>
          <div className="tracking-tight font-semibold text-xl ">
            I just want to say HI
          </div>
        </div>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[560px] max-h-[90vh] flex flex-col bg-slate-100">
        <DialogHeader>
          <DialogTitle>Just want to chat</DialogTitle>
          <DialogDescription>
            Please fill out the form below and I&apos;ll get back to you as soon
            as possible.
          </DialogDescription>
        </DialogHeader>
        <div className="flex-grow overflow-y-auto px-2">
          <GreetingForm onSubmitSuccess={() => setIsModalOpen(false)} />
        </div>
      </DialogContent>
    </Dialog>
  );
};
