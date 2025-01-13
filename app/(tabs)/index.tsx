import { useEffect, useState } from "react";
import { Pressable, Text, View } from "react-native";
import { displayRecord, getDBInstance, insertRecord } from "@/lib/db";
import { SQLiteDatabase } from "expo-sqlite";

export default function Home() {
  const [db, setDb] = useState<SQLiteDatabase | null>(null);

  useEffect(() => {
    async function connectDB() {
      const database = await getDBInstance();
      console.log("Database connected:", database !== null);
      if (database !== null) {
        console.log("db ready");
        setDb(database); // Update state with the database instance
      } else {
        console.log(db);
      }
    }
    connectDB();
  }, []);

  const insertData = () => {
    if (db !== null) {
      insertRecord(db);
    } else {
      console.log("DB instance is null");
    }
  };

  const printData = () => {
    if (db !== null) {
      displayRecord(db);
    } else {
      console.log("DB instance is null");
    }
  };

  return (
    <View>
      <Pressable onPress={insertData}>
        <Text>Insert</Text>
      </Pressable>
      <Pressable onPress={printData}>
        <Text>Show</Text>
      </Pressable>
    </View>
  );
}
