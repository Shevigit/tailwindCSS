// src/pages/Home.tsx
import { Button } from "../components/ui/button";
import { Input } from "../components/ui/input";
import { Card, CardSimple } from "../components/ui/card";
import { Heading1,Paragraph } from "../components/ui/typography";
import { DashboardSummary } from "./DashboardSummary";

import { useState } from "react";
import GridA from "./GridA";
import {  CircleGauge, Heading, Mic, Star } from "lucide-react";
import { GridContainer } from "../components/ui/GridContainer";
import { CloudUpload } from 'lucide-react';
import { SummaryBox } from "../components/ui/SummaryBox";
import { Grid } from "../components/ui/grid";
const Home=() =>{

  return (
    <div className="min-h-screen flex items-center justify-center p-6 bg-[--color-background]">
     <GridContainer maxWidth="lg" mt="mt-8" mb="mb-16"> 
      <GridContainer maxWidth="lg" mt="mt-4" mb="mb-8" gridClasses="grid-cols-2 justify-items-center items-center">
      <CardSimple className="w-full max-w-md space-y-4">
    כאן יש כרטיס פשוט אפשר לשחק עם הגודל
       </CardSimple>
           <Heading1>ברוכות הבאות!</Heading1>
          <Paragraph>שמנה לה לעבוד בצורה מסודרת ויעילה-
            כמה שיותר גנריות
          </Paragraph>
           <Input placeholder="example@email.com" />
           </GridContainer>
    <Grid cols={2}>

  <Card
    title="מדריך כתיבת קורות חיים"
    category="קורות חיים"
    description="טיפים מקצועיים לכתיבת קו״ח שיתנו לך יתרון בגיוס."
  />
  <Card
    title="איך להתלבש לראיון עבודה"
    category="הופעה חיצונית"
    description="מדריך קצר לבחירת לבוש מתאים לפי סוג ריאיון ותפקיד."
  />
</Grid>
<Grid cols={3}>
   <SummaryBox
        title="ציון ממוצע"
        value="4.1 / 5.0"
        description={<div className="text-yellow-400 text-lg">★★★★☆</div>}
        icon={<Star />}
        iconColor="accent"
      />
              <SummaryBox
          title="התקדמות כללית"
          value="7 / 14"
          description={
            <div className="w-full h-2 bg-muted rounded">
              <div className="h-full bg-primary-dark rounded" style={{ width: "50%" }} />
            </div>
          }
          icon={<CircleGauge />}
          iconColor="secondary"
        />
         <SummaryBox
          title="סה״כ הקלטות"
          value="17"
          description="תרגולים שבוצעו"
          icon={<Mic />}
          iconColor="primary-dark"
        />
        </Grid>
        <Button>בהצלחה!</Button>
      </GridContainer>
    </div>
       
  );
}
export default Home
