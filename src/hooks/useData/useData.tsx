'use client';

import { useEffect, useState } from "react";
import { MOCK_DATA } from "./mockData";

import { MockDataI } from './types';

export default function useData() {
  const [isLoading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<null | string | unknown>(null);
  const [data, setData] = useState<MockDataI | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        await new Promise(resolve => setTimeout(resolve, 1000));
        setData(MOCK_DATA);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return {
    isLoading,
    error,
    data,
  };
}