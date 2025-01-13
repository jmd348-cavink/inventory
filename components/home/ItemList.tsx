import { stockItem } from "@/lib/db";
import { FontAwesome } from "@expo/vector-icons";
import { Pressable, Text, View } from "react-native";

export const ItemList = ({
  item,
  setIsEditModalOpen,
  setIsDeleteModalOpen,
  setModalData,
  showStatus,
  showDelete,
}: {
  item: stockItem;
  setIsEditModalOpen?: React.Dispatch<React.SetStateAction<boolean>>;
  setIsDeleteModalOpen?: React.Dispatch<React.SetStateAction<boolean>>;
  setModalData: React.Dispatch<React.SetStateAction<stockItem>>;
  showStatus?: boolean;
  showDelete?: boolean;
}) => {
  if (showStatus === undefined) {
    showStatus = false;
  }
  if (showDelete === undefined) {
    showDelete = false;
  }

  // Checking if stock has been updated in last 16 hrs
  const stockedRecently = showStatus
    ? Math.round(
        (new Date().getTime() - item.updatedAt.getTime()) / 1000 / 3600
      ) <= 16
      ? true
      : false
    : false;

  const viewWidth = showDelete ? "w-[70%]" : "w-[85%]";

  return (
    <View className="px-4 py-1">
      <View className="bg-slate-600 p-3 rounded-lg">
        <View className="d-flex flex-row">
          <View className={viewWidth}>
            <View className="d-flex flex-row items-center">
              <Text className="text-white text-xl font-semibold">
                {item.name}
              </Text>
              {showStatus &&
                (stockedRecently ? (
                  <FontAwesome
                    size={20}
                    name="check-circle"
                    color="#5cb85c"
                    className="ms-2"
                  />
                ) : (
                  <FontAwesome
                    size={20}
                    name="warning"
                    color="#eed202"
                    className="ms-2"
                  />
                ))}
            </View>
            <View className="d-flex flex-row items-center mt-3">
              <FontAwesome size={20} name="archive" color="white" />
              <Text className="text-white ms-2">{item.count}</Text>
            </View>
          </View>
          <Pressable
            className={`w-[15%] d-flex justify-center items-center`}
            onPress={() => {
              setModalData({
                name: item.name,
                count: item.count,
                id: item.id,
                createdAt: item.createdAt,
                isDeleted: item.isDeleted,
                updatedAt: item.updatedAt,
              });
              setIsEditModalOpen !== undefined && setIsEditModalOpen(true);
            }}
          >
            <View className="d-flex self-center">
              <FontAwesome size={30} name="edit" color="white" />
            </View>
          </Pressable>
          {showDelete && (
            <Pressable
              className={`w-[15%] d-flex justify-center items-center`}
              onPress={() => {
                setModalData({
                  name: item.name,
                  count: item.count,
                  id: item.id,
                  createdAt: item.createdAt,
                  isDeleted: item.isDeleted,
                  updatedAt: item.updatedAt,
                });
                setIsDeleteModalOpen !== undefined &&
                  setIsDeleteModalOpen(true);
              }}
            >
              <View className="d-flex self-center">
                <FontAwesome size={30} name="trash" color="red" />
              </View>
            </Pressable>
          )}
        </View>
      </View>
    </View>
  );
};
