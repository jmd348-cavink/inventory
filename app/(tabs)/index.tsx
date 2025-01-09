import { getStocks } from "@/actions/stockItems";
import { ItemList } from "@/components/home/ItemList";
import { ItemModal } from "@/components/home/ItemModal";
import React, { useState } from "react";
import { FlatList, Text, TextInput, View } from "react-native";

export type ItemListUI = {
  name: string;
  count: number;
  id: number;
};

export default function HomePage() {
  const [searchInput, setSearchInput] = useState("");
  const [modalData, setModalData] = useState<ItemListUI>({
    name: "",
    count: 0,
    id: 0,
  });
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <ItemModal
        isOpen={isModalOpen}
        stock={modalData}
        setIsModalOpen={setIsModalOpen}
      />
      <View>
        <View className="p-4">
          <Text className="text-center text-lg font-bold">
            Welcome, Ready to Stock Today?
          </Text>
        </View>
        <View className="px-8">
          <TextInput
            className="border-2 mb-2 rounded-md p-2"
            value={searchInput}
            placeholder="search"
            onChangeText={setSearchInput}
          ></TextInput>
        </View>
      </View>
      <FlatList
        data={getStocks(searchInput).data}
        renderItem={(stock) => (
          <ItemList
            id={stock.item.id}
            name={stock.item.name}
            key={stock.index}
            count={stock.item.count}
            setIsModalOpen={setIsModalOpen}
            setModalData={setModalData}
          />
        )}
      ></FlatList>
    </>
  );
}
