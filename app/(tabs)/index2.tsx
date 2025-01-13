// import { getStocks } from "@/actions/stockItems";
// import { ItemList } from "@/components/home/ItemList";
// import { ItemModal } from "@/components/home/ItemModal";
// import { stockItem } from "@/lib/db";
// import { useFocusEffect } from "expo-router";
// import React, { useState } from "react";
// import { FlatList, Text, TextInput, ToastAndroid, View } from "react-native";

import React from "react";

export default function HomePage() {
  //   const [searchInput, setSearchInput] = useState("");
  //   const [stockData, setStockData] = useState<stockItem[]>([]);
  //   const [modalData, setModalData] = useState<stockItem>({
  //     name: "",
  //     count: 0,
  //     id: 0,
  //     createdAt: new Date(),
  //     isDeleted: false,
  //     updatedAt: new Date(),
  //   });
  //   const [isModalOpen, setIsModalOpen] = useState(false);

  //   const getStockData = () => {
  //     const res = getStocks();
  //     if (res.status === 200) {
  //       setStockData([...res.data]);
  //     } else {
  //       ToastAndroid.show(
  //         "Error fetching stocks data: " + res.error,
  //         ToastAndroid.SHORT
  //       );
  //     }
  //   };

  //   // Refetches data for every time the page gains focus
  //   useFocusEffect(
  //     React.useCallback(() => {
  //       getStockData();
  //     }, [])
  //   );

  return (
    <>
      {/* //       <ItemModal
//         isOpen={isModalOpen}
//         stock={modalData}
//         setIsModalOpen={setIsModalOpen}
//       />
//       <View>
//         <View className="p-4">
//           <Text className="text-center text-lg font-bold">
//             Welcome, Ready to Stock Today?
//           </Text>
//         </View>
//         <View className="px-4 mb-4">
//           <TextInput
//             className="border-slate-500 border-2 p-2 flex-grow"
//             value={searchInput}
//             placeholder="search"
//             onChangeText={setSearchInput}
//           ></TextInput>
//         </View>
//       </View>
//       <FlatList
//         data={stockData}
//         keyExtractor={(stock) => stock.id.toString()}
//         renderItem={(stock) => (
//           <ItemList
//             item={stock.item}
//             setIsEditModalOpen={setIsModalOpen}
//             setModalData={setModalData}
//             showStatus
//           />
//         )}
//       ></FlatList> */}
    </>
  );
}
