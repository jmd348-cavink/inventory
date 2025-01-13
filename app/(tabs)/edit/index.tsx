import { getStocks } from "@/actions/stockItems";
import { ItemAddModal } from "@/components/edit/ItemAddModal";
import { ItemDeleteModal } from "@/components/edit/ItemDeleteModal";
import { ItemEditModal } from "@/components/edit/ItemEditModal";
import { ItemList } from "@/components/home/ItemList";
import { createTables, getDBInstance, stockItem } from "@/lib/db";
import { FontAwesome } from "@expo/vector-icons";
import { SQLiteDatabase } from "expo-sqlite";
import React, { useCallback, useEffect, useState } from "react";
import { FlatList, Pressable, Text, TextInput, View } from "react-native";

export default function SettingsPage() {
  const [searchInput, setSearchInput] = useState("");
  const [modalData, setModalData] = useState<stockItem>({
    name: "",
    count: 0,
    id: 0,
    price: 0,
    updatedAt: new Date(),
  });
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);
  const [stocks, setStocks] = useState<stockItem[]>([]);

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

  useEffect(() => {
    getStocks(db, searchInput).then((res) => {
      setStocks(res.data);
    });
  }, [db]);

  return (
    <>
      <ItemAddModal
        isOpen={isAddModalOpen}
        setIsModalOpen={setIsAddModalOpen}
        db={db}
      />
      <ItemDeleteModal
        isOpen={isDeleteModalOpen}
        stock={modalData}
        setIsModalOpen={setIsDeleteModalOpen}
        db={db}
      />
      <ItemEditModal
        isOpen={isEditModalOpen}
        stock={modalData}
        setIsModalOpen={setIsEditModalOpen}
        db={db}
      />
      <View>
        <View className="p-4">
          <Text className="text-center text-lg font-bold">
            Edit Your Stocks Here
          </Text>
        </View>
        <View className="px-4 d-flex flex-row mb-4">
          <TextInput
            className="border-slate-500 border-2 p-2 flex-shrink"
            value={searchInput}
            placeholder="search"
            onChangeText={setSearchInput}
          ></TextInput>
          <Pressable
            className="d-flex flex-row p-2 items-center bg-slate-500"
            onPress={() => {
              setIsAddModalOpen(true);
            }}
          >
            <FontAwesome
              name="plus-square-o"
              size={15}
              className="me-2"
              color="white"
            />
            <Text className="text-white">Add Item</Text>
          </Pressable>
        </View>
      </View>
      <FlatList
        data={stocks}
        renderItem={(stock) => (
          <ItemList
            item={stock.item}
            key={stock.index}
            setIsEditModalOpen={setIsEditModalOpen}
            setIsDeleteModalOpen={setIsDeleteModalOpen}
            setModalData={setModalData}
            showDelete
          />
        )}
      ></FlatList>
    </>
  );
}
