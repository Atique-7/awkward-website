"use client";

import LandingPage from "@/components/LandingPage";
import TabSelector from "@/components/TabSelector";
import ScrollLinked from "@/components/TEST";
import {
  motion,
  useSpring,
  useScroll,
  useMotionValueEvent,
} from "motion/react";
import { useEffect, useRef, useState } from "react";
import Home from "./sections/Home";

export default function Page() {
  const carouselRef = useRef(null);
  const { scrollX } = useScroll({
    container: carouselRef,
  });

  return (
    <div>
      <LandingPage />
    </div>
  );
}
