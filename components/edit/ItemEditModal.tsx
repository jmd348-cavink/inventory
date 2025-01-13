import { editStocks } from "@/actions/stockItems";
import { stockItem } from "@/lib/db";
import { SQLiteDatabase } from "expo-sqlite";
import { useEffect, useState } from "react";
import {
  Modal,
  Pressable,
  Text,
  TextInput,
  ToastAndroid,
  View,
} from "react-native";

export const ItemEditModal = ({
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
  const [name, setName] = useState(stock.name);
  const [count, setCount] = useState(stock.count.toString());

  useEffect(() => {
    setName(stock.name);
    setCount(stock.count.toString());
  }, [stock]);

  const editStockHandler = () => {
    if (name.length === 0 || count.length === 0) {
      ToastAndroid.show("Kindly Fill the fields", ToastAndroid.SHORT);
      return;
    }
    editStocks(db, stock.id, name, parseInt(count), 69).then((res) => {
      if (res.status === 200) {
        ToastAndroid.show("Stock Edited Successfully", ToastAndroid.SHORT);
        setIsModalOpen(false);
      } else {
        ToastAndroid.show(
          "Stock Edit Failed: " + res.error,
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
          <View className="d-flex flex-row items-center">
            <Text className="me-4 text-white">Name</Text>
            <TextInput
              className="bg-white flex-grow rounded-sm px-2"
              autoFocus={true}
              value={name}
              onChangeText={setName}
            ></TextInput>
          </View>
          <View className="d-flex flex-row mt-2 items-center">
            <Text className="me-4 text-white">Count</Text>
            <TextInput
              className="bg-white flex-grow rounded-sm px-2"
              value={count}
              onChangeText={(ch) => {
                setCount(ch.replace(/[^0-9]+/g, ""));
              }}
            ></TextInput>
          </View>
          <Pressable
            className="mt-4"
            onPress={() => {
              editStockHandler();
              setIsModalOpen(false);
            }}
          >
            <View className="bg-green-500 rounded-md">
              <Text className="text-center text-white my-2">EDIT</Text>
            </View>
          </Pressable>
          <Pressable
            className="mt-4"
            onPress={() => {
              setIsModalOpen(false);
            }}
          >
            <View className="bg-red-500 rounded-md">
              <Text className="text-center text-white my-2">CLOSE</Text>
            </View>
          </Pressable>
        </View>
      </View>
    </Modal>
  );
};
