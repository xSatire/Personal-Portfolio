"use client";

import { useEffect, useState } from "react";
import { UserRoundCheck, Wallet } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import ContactForm from "./contact-form";

export const BookButton = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <Dialog open={isModalOpen} onOpenChange={setIsModalOpen}>
      <DialogTrigger asChild>
        <div className="text-lg flex justify-start items-center hover:cursor-pointer">
          <div className="mr-8 p-4 bg-red-300 rounded-full">
            <UserRoundCheck className="h-6 w-6" />
          </div>
          <div className="tracking-tight font-semibold text-xl ">
            I&apos;d like to have your service
          </div>
        </div>
      </DialogTrigger>
      <DialogContent className="max-w-[80vw] max-h-[90vh] flex flex-col bg-slate-100">
        <DialogHeader>
          <DialogTitle>Submit Your Booking</DialogTitle>
          <DialogDescription>
            Please fill out the form below and I&apos;ll get back to you as soon
            as possible.
          </DialogDescription>
        </DialogHeader>
        <div className="flex-grow overflow-y-auto px-2">
          <ContactForm onSubmitSuccess={() => setIsModalOpen(false)} />
        </div>
      </DialogContent>
    </Dialog>
  );
};
