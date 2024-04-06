"use client";

import { useEffect, useState } from "react";

import { formatter } from "@/libs/utils";

interface CurrencyProps {
  value?: string | number;
}

const Currency: React.FC<CurrencyProps> = ({ value }) => {
  const [isMounted, setisMounted] = useState(false);

  useEffect(() => {
    setisMounted(true);
  }, []);

  if (!isMounted) {
    return null;
  }

  return <p className="font-semibold">{formatter.format(Number(value))}</p>;
};

export default Currency;
