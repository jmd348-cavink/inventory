import { ItemListUI } from "@/app/(tabs)";
import { useState } from "react";
import { Modal, View, Text, TextInput, Button, Pressable } from "react-native";

export const ItemModal = ({
  isOpen,
  stock,
  setIsModalOpen,
}: {
  isOpen: boolean;
  stock: ItemListUI;
  setIsModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
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
          <View className="d-flex flex-row mt-2">
            <View className="w-[60%]">
              <TextInput className="bg-white rounded-sm"></TextInput>
            </View>
            <View className="w-[20%]">
              <Pressable>
                <View className="bg-slate-400 p-3">
                  <Text className="text-center">Inc</Text>
                </View>
              </Pressable>
            </View>
            <View className="w-[20%]">
              <Pressable>
                <View className="bg-red-400 p-3">
                  <Text className="text-center">Dec</Text>
                </View>
              </Pressable>
            </View>
          </View>
          <Pressable
            className="mt-2"
            onPress={() => {
              setIsModalOpen(!isOpen);
            }}
          >
            <View className="bg-red-500 rounded-md">
              <Text className="text-center text-white my-2">Close</Text>
            </View>
          </Pressable>
        </View>
      </View>
    </Modal>
  );
};
