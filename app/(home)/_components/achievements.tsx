import React from "react";
import CompanyCard from "./misc/achievementCard";

const Achievements = () => {
  return (
    <div className="min-h-screen bg-main-300 w-full grid grid-cols-2 sticky top-0 gap-x-1 gap-y-1">
      <CompanyCard
        hoverTitle="SBS Hackathon"
        companyName="SBS"
        hoverText="Fully automated lighting solution using NextJS & AuthV5. Achieved 1st Place"
      />
      <CompanyCard
        hoverTitle="Hack4Good"
        companyName="Hack4Good"
        hoverText="Robust management system using NextJS, Prisma & Postgres"
      />
      <CompanyCard
        hoverTitle="WhiteHat"
        companyName="WhiteHat"
        hoverText="Finalist for WhiteHat CTF. Bypassed web securities through CVE Exploits."
      />
      <CompanyCard
        hoverTitle="Musixtica"
        companyName="Musixtica"
        hoverText="Online marketplace for music artists, built with NextJS, Stripe, AuthV5 etc"
      />
      <CompanyCard
        hoverTitle="InstaBot"
        companyName="InstaBot"
        hoverText="Scraping & Auto video editing bot using FFMPeg & PyTorch & Gentle"
      />
      <CompanyCard
        hoverTitle="SpotiStats"
        companyName="SpotiStats"
        hoverText="Spotify Statistic and Bot Detector. Built with NextJs, Express, Postgres etc"
      />
      <CompanyCard
        hoverTitle="Robotic Process Automation"
        companyName="Singapore Police Force"
        hoverText="Developed scripts to fully automated repetitive daily processes."
      />
      <CompanyCard
        hoverTitle="So Much More..."
        companyName="So Much More..."
        hoverText="For more details, please take a look at my resume"
      />
    </div>
  );
};

export default Achievements;
