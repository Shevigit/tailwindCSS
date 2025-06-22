// src/pages/Home.tsx
import { Button } from "../components/ui/button";
import { Input } from "../components/ui/input";
import { CardSimple } from "../components/ui/card";
import { H1, Paragraph } from "../components/ui/typography";
import { DashboardSummary } from "./DashboardSummary";

import { useState } from "react";
import GridA from "./GridA";

const Home=() =>{

  return (
    <div className="min-h-screen flex items-center justify-center p-6 bg-[--color-background]">
      <CardSimple className="w-full max-w-md space-y-4">
        {/* <H1>ברוך הבא</H1>
        <Paragraph>נא להזין את כתובת האימייל שלך כדי להתחיל</Paragraph>
        <Input placeholder="example@email.com" />
        <div className="flex justify-between">
          <Button>כניסה</Button>
          <Button variant="outline">הרשמה</Button>
          <Button variant="danger">מחיקה</Button>

        </div> */}
      </CardSimple>
           <DashboardSummary></DashboardSummary>

    </div>
       
  );
}
export default Home
