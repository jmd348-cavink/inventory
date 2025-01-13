import { deleteStocks, updateStocks } from "@/actions/stockItems";
import { stockItem } from "@/lib/db";
import { FontAwesome } from "@expo/vector-icons";
import { SQLiteDatabase } from "expo-sqlite";
import { useState } from "react";
import {
  Modal,
  Pressable,
  Text,
  TextInput,
  ToastAndroid,
  View,
} from "react-native";

export const ItemDeleteModal = ({
  isOpen,
  stock,
  setIsModalOpen,
  db,
}: {
  isOpen: boolean;
  stock: stockItem;
  setIsModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
  db: SQLiteDatabase | null;
}) => {
  const deleteStockHandler = () => {
    deleteStocks(db, stock.id).then((res) => {
      if (res.status === 200) {
        ToastAndroid.show("Stock Deleted Successfully", ToastAndroid.SHORT);
      } else {
        ToastAndroid.show(
          "Stock Delete Failed: " + res.error,
          ToastAndroid.SHORT
        );
      }
    });
  };

  return (
    <Modal
      animationType="fade"
      transparent={true}
      visible={isOpen}
      onRequestClose={() => {
        setIsModalOpen(!isOpen);
      }}
    >
      <View className="flex-1 bg-white justify-center px-10">
        <View className="bg-slate-500 p-4 rounded-md">
          <View className="flex-1 bg-white justify-center px-10"></View>
          <Text className="text-white">
            Are you sure want to delete this Item?
          </Text>
          <Text className="text-white text-xl text-center my-2">
            {stock.name}
          </Text>
          <View className="d-flex flex-row">
            <View className="w-[50%] p-2">
              <Pressable
                onPress={() => {
                  deleteStockHandler();
                  setIsModalOpen(false);
                }}
              >
                <View className="bg-red-500 rounded-md">
                  <Text className="text-center text-white my-2">DELETE</Text>
                </View>
              </Pressable>
            </View>
            <View className="w-[50%] p-2">
              <Pressable
                onPress={() => {
                  setIsModalOpen(false);
                }}
              >
                <View className="bg-white rounded-md">
                  <Text className="text-center text-teal-800 my-2">CLOSE</Text>
                </View>
              </Pressable>
            </View>
          </View>
        </View>
      </View>
    </Modal>
  );
};
