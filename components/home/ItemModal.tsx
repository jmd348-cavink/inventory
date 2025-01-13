import { updateStocks } from "@/actions/stockItems";
import { stockItem } from "@/lib/db";
import { FontAwesome } from "@expo/vector-icons";
import { useState } from "react";
import {
  Modal,
  Pressable,
  Text,
  TextInput,
  ToastAndroid,
  View,
} from "react-native";

export const ItemModal = ({
  isOpen,
  stock,
  setIsModalOpen,
}: {
  isOpen: boolean;
  stock: stockItem;
  setIsModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  const [text, setText] = useState("");

  const updateStockHandler = (type: string) => {
    if (text.length === 0) {
      ToastAndroid.show("Enter any number", ToastAndroid.SHORT);
      return;
    }
    const updateStock = type === "inc" ? parseInt(text) : parseInt(text) * -1;
    const res = updateStocks(stock.id, updateStock);
    if (res.status === 200) {
      ToastAndroid.show("Stock Updated Successfully", ToastAndroid.SHORT);
      setText("");
      setIsModalOpen(false);
    } else {
      ToastAndroid.show(
        "Stock Update Failed: " + res.error,
        ToastAndroid.SHORT
      );
    }
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
          <View className="d-flex flex-row justify-between">
            <View>
              <Text className="text-white text-xl">{stock.name}</Text>
            </View>
            <View>
              <Text className="text-white text-xl">{stock.count}</Text>
            </View>
          </View>
          <View className="d-flex flex-column mt-2">
            <View className="">
              <TextInput
                autoFocus={true}
                className={`bg-white rounded-sm h-12 text-center ${
                  text.length > 0 ? "text-lg font-semibold" : "text-slate-400"
                }`}
                keyboardType="numeric"
                value={text}
                onChangeText={(ch) => {
                  setText(ch.replace(/[^0-9]+/g, ""));
                }}
                placeholder="STOCK SOLD/BOUGHT"
              ></TextInput>
            </View>
            <View className="d-flex flex-row justify-stretch">
              <Pressable
                className="w-[50%]"
                onPress={() => {
                  updateStockHandler("inc");
                }}
              >
                <View className="bg-slate-400 p-3">
                  <FontAwesome
                    size={30}
                    name="plus-circle"
                    color="bg-slate-600"
                    className="text-center"
                  />
                </View>
              </Pressable>
              <Pressable
                className="w-[50%]"
                onPress={() => {
                  updateStockHandler("dec");
                }}
              >
                <View className="bg-red-500 p-3">
                  <FontAwesome
                    size={30}
                    name="minus-circle"
                    color="bg-slate-600"
                    className="text-center"
                  />
                </View>
              </Pressable>
            </View>
          </View>
          <Pressable
            className="mt-4"
            onPress={() => {
              setText("");
              setIsModalOpen(!isOpen);
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
