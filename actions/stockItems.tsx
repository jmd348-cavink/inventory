import { stockItem } from "@/lib/db";
import { SQLiteDatabase } from "expo-sqlite";

export type Response = {
  data: stockItem[];
  status: number;
  error: string | null;
};

export const getStocks = async (
  db: SQLiteDatabase | null,
  name?: string
): Promise<Response> => {
  let stockItems: stockItem[] = [];
  try {
    if (!db) {
      throw new Error("DB instance is NULL");
    }
    let results: any[];
    if (!name || name.length === 0) {
      results = await db.getAllAsync("SELECT * FROM products;");
    } else {
      results = await db.getAllAsync(
        "SELECT * FROM products WHERE name LIKE '%?%';",
        [name]
      );
    }
    for (const result of results) {
      console.log(result);
    }
    return { data: stockItems, error: "", status: 200 };
  } catch (error: any) {
    console.error(error);
    return { data: stockItems, error, status: 500 };
  }
};

// export const getStocks = (name?: string): Response => {
//   if (!name || name.length === 0) {
//     return { data: stockData, status: 200, error: null };
//   } else {
//     return {
//       data: stockData.filter((stock) =>
//         stock.name.toLowerCase().includes(name.toLowerCase())
//       ),
//       status: 200,
//       error: null,
//     };
//   }
// };

export const addStocks = async (
  db: SQLiteDatabase | null,
  name: string,
  price: number,
  count: number
): Promise<Response> => {
  let stockItems: stockItem[] = [];
  try {
    if (!db) {
      throw new Error("DB instance is NULL");
    }
    // let results = await db.executeSql(
    //   "INSERT INTO produts (name, price, count, updatedAt) values (?, ?, ?, ?);",
    //   [name, price, count, new Date()]
    // );
    // results?.forEach((result) => {
    //   for (let index = 0; index < result.rows.length; index++) {
    //     stockItems.push({
    //       id: result.rows.item(index).id,
    //       name: result.rows.item(index).name,
    //       count: result.rows.item(index).count,
    //       price: result.rows.item(index).price,
    //       updatedAt: result.rows.item(index).updatedAt,
    //     });
    //   }
    // });

    return { data: stockItems, error: "", status: 200 };
  } catch (error: any) {
    console.error(error);
    return { data: stockItems, error, status: 500 };
  }
};

// export const addStocks = (name: string, count: number): Response => {
//   const isExisting = getStocks(name).data;
//   if (isExisting.length > 0) {
//     return {
//       data: [],
//       status: 409,
//       error: "stock already exists",
//     };
//   } else {
//     const newStock = {
//       id: idCounter.val,
//       name,
//       count,
//       isDeleted: false,
//       updatedAt: new Date(),
//       createdAt: new Date(),
//     };
//     idCounter.val += 1;
//     stockData.push(newStock);
//     return {
//       data: [newStock],
//       status: 201,
//       error: null,
//     };
//   }
// };

export const deleteStocks = async (
  db: SQLiteDatabase | null,
  id: number
): Promise<Response> => {
  let stockItems: stockItem[] = [];
  try {
    if (!db) {
      throw new Error("DB instance is NULL");
    }
    // let results = await db.executeSql("DELETE FROM produts  WHERE id = ?;", [
    //   id,
    // ]);
    // results?.forEach((result) => {
    //   for (let index = 0; index < result.rows.length; index++) {
    //     stockItems.push({
    //       id: result.rows.item(index).id,
    //       name: result.rows.item(index).name,
    //       count: result.rows.item(index).count,
    //       price: result.rows.item(index).price,
    //       updatedAt: result.rows.item(index).updatedAt,
    //     });
    //   }
    // });

    return { data: stockItems, error: "", status: 200 };
  } catch (error: any) {
    console.error(error);
    return { data: stockItems, error, status: 500 };
  }
};

// export const deleteStocks = (id: number): Response => {
//   const isExisting = stockData.findIndex((stock) => stock.id === id);
//   if (isExisting === -1) {
//     return {
//       data: [],
//       status: 404,
//       error: "stock not found",
//     };
//   } else {
//     const deletedStock = stockData.splice(isExisting, 1);
//     return {
//       data: deletedStock,
//       status: 200,
//       error: null,
//     };
//   }
// };

export const updateStocks = async (
  db: SQLiteDatabase | null,
  id: number,
  inc_or_dec: number
): Promise<Response> => {
  let stockItems: stockItem[] = [];
  try {
    if (!db) {
      throw new Error("DB instance is NULL");
    }
    // let product = await db.executeSql("SELECT * FROM produts WHERE id = ?;", [
    //   id,
    // ]);

    // if(product.)

    // let results = await db.executeSql(
    //   "DELETE FROM produts  WHERE id = ?;",
    //   [id]
    // );
    // results?.forEach((result) => {
    //   for (let index = 0; index < result.rows.length; index++) {
    //     stockItems.push({
    //       id: result.rows.item(index).id,
    //       name: result.rows.item(index).name,
    //       count: result.rows.item(index).count,
    //       price: result.rows.item(index).price,
    //       updatedAt: result.rows.item(index).updatedAt,
    //     });
    //   }
    // });

    return { data: stockItems, error: "", status: 200 };
  } catch (error: any) {
    console.error(error);
    return { data: stockItems, error, status: 500 };
  }
};

// export const updateStocks = (id: number, inc_or_dec: number): Response => {
//   const isExisting = stockData.findIndex((stock) => stock.id === id);
//   if (isExisting === -1) {
//     return {
//       data: [],
//       status: 404,
//       error: "stock not found",
//     };
//   } else {
//     stockData[isExisting] = {
//       ...stockData[isExisting],
//       count: stockData[isExisting].count + inc_or_dec,
//       updatedAt: new Date(),
//     };
//     return {
//       data: [stockData[isExisting]],
//       status: 200,
//       error: null,
//     };
//   }
// };

export const editStocks = async (
  db: SQLiteDatabase | null,
  id: number,
  name: string,
  count: number,
  price: number
): Promise<Response> => {
  let stockItems: stockItem[] = [];
  try {
    if (!db) {
      throw new Error("DB instance is NULL");
    }
    // let product = await db.executeSql("SELECT * FROM produts WHERE id = ?;", [
    //   id,
    // ]);

    // if(product.)

    // let results = await db.executeSql(
    //   "DELETE FROM produts  WHERE id = ?;",
    //   [id]
    // );
    // results?.forEach((result) => {
    //   for (let index = 0; index < result.rows.length; index++) {
    //     stockItems.push({
    //       id: result.rows.item(index).id,
    //       name: result.rows.item(index).name,
    //       count: result.rows.item(index).count,
    //       price: result.rows.item(index).price,
    //       updatedAt: result.rows.item(index).updatedAt,
    //     });
    //   }
    // });

    return { data: stockItems, error: "", status: 200 };
  } catch (error: any) {
    console.error(error);
    return { data: stockItems, error, status: 500 };
  }
};

// export const editStocks = (
//   id: number,
//   name?: string,
//   count?: number
// ): Response => {
//   const isExisting = stockData.findIndex((stock) => stock.id === id);
//   if (isExisting === -1) {
//     return {
//       data: [],
//       status: 404,
//       error: "stock not found",
//     };
//   } else {
//     stockData[isExisting] = {
//       ...stockData[isExisting],
//       name: name || stockData[isExisting].name,
//       count: count || stockData[isExisting].count,
//     };
//     return {
//       data: [stockData[isExisting]],
//       status: 200,
//       error: null,
//     };
//   }
// };
