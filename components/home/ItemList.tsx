import { FontAwesome } from "@expo/vector-icons";
import { Pressable, Text, View } from "react-native";
import { ItemListUI } from "@/app/(tabs)";

export const ItemList = ({
  name,
  count,
  id,
  setIsModalOpen,
  setModalData,
}: {
  name: string;
  count: number;
  id: number;
  setIsModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
  setModalData: React.Dispatch<React.SetStateAction<ItemListUI>>;
}) => {
  return (
    <View className="px-4 py-1">
      <View className="bg-slate-600 p-3 rounded-lg">
        <View className="d-flex flex-row">
          <View className="w-[80%]">
            <Text className="text-white text-xl font-semibold">{name}</Text>
            <View className="d-flex flex-row items-center mt-3">
              <FontAwesome size={20} name="archive" color="white" />
              <Text className="text-white ms-2">{count}</Text>
            </View>
          </View>
          <Pressable
            onPress={() => {
              setModalData({ name, count, id });
              setIsModalOpen(true);
            }}
            className="w-[20%] d-flex justify-center items-center bg-white rounded-md"
          >
            <View className="d-flex self-center">
              <FontAwesome size={30} name="edit" color="bg-slate-600" />
            </View>
          </Pressable>
        </View>
      </View>
    </View>
  );
};
