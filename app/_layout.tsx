import { Stack } from "expo-router/stack";
import "../global.css";
import { useCallback, useEffect } from "react";
import { getDBInstance, createTables } from "@/lib/db";
export default function Layout() {
  const loadData = useCallback(async () => {
    try {
      const db = await getDBInstance();
      await createTables(db);
    } catch (error) {
      console.error(error);
    }
  }, []);

  useEffect(() => {
    loadData();
  }, [loadData]);

  return (
    <Stack>
      <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
      {/* <Stack.Screen name="index" options={{ headerShown: false }} /> */}
    </Stack>
  );
}
