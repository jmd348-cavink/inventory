import { openDatabaseAsync, SQLiteDatabase } from "expo-sqlite";

let dbInstance: SQLiteDatabase | null = null;

export const getDBInstance = async () => {
  if (dbInstance !== null) {
    console.log("db instance cache hit");
    return dbInstance;
  }

  console.log("db instance cache miss");

  dbInstance = await openDatabaseAsync("inventory");

  if (!dbInstance) {
    console.log("Failed to open database");
  }

  return dbInstance;
};

export const createTables = async (db: SQLiteDatabase) => {
  // const deleteProductTable = `DROP TABLE IF EXISTS products;`;
  // const deleteSalesTable = `DROP TABLE IF EXISTS sales;`;
  const productsTableQuery = `
    CREATE TABLE IF NOT EXISTS products (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        name TEXT NOT NULL,
        price INTEGER NOT NULL,
        count INTEGER NOT NULL,
        updatedAt DATETIME NOT NULL
    );
      `;
  const salesTableQuery = `
   CREATE TABLE IF NOT EXISTS sales (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        product_id INTEGER NOT NULL,
        price INTEGER NOT NULL,
        count INTEGER NOT NULL,
        soldAt DATETIME NOT NULL,
        FOREIGN KEY (product_id) REFERENCES products(id)
    );
  `;
  try {
    // await db.execAsync(deleteSalesTable);
    // await db.execAsync(deleteProductTable);
    await db.execAsync(productsTableQuery);
    await db.execAsync(salesTableQuery);
    console.log("TABLE CREATION DONE....");
  } catch (error) {
    console.error(error);
    throw Error(`Failed to create tables`);
  }
};

export const insertRecord = async (db: SQLiteDatabase) => {
  const insertQuery = `
    INSERT INTO products (name, price, count, updatedAt) values (?, ?, ?, ?)
      `;

  try {
    await db.runAsync(
      insertQuery,
      "testItem",
      10,
      20,
      new Date().toISOString()
    );
    console.log("data inserted");
  } catch (error) {
    console.error(error);
    throw Error(`Failed to insert records`);
  }
};

export const displayRecord = async (db: SQLiteDatabase) => {
  const displayQuery = `
    SELECT * FROM products;`;

  try {
    const records = await db.getAllAsync(displayQuery);
    console.log(records);
  } catch (error) {
    console.error(error);
    throw Error(`Failed to insert records`);
  }
};

export type stockItem = {
  id: number;
  name: string;
  price: number;
  updatedAt: Date;
  count: number;
};

export type salesItem = {
  id: number;
  name: string;
  price: number;
  soldAt: Date;
  count: number;
};

// export let stockData: stockItem[] = [
//   {
//     id: 1,
//     name: "shoe",
//     createdAt: new Date(2024, 0, 9),
//     updatedAt: new Date(2024, 0, 9),
//     isDeleted: false,
//     count: 10,
//   },
//   {
//     id: 2,
//     name: "pant",
//     createdAt: new Date(2024, 0, 9),
//     updatedAt: new Date(2024, 0, 9),
//     isDeleted: false,
//     count: 10,
//   },
//   {
//     id: 3,
//     name: "shirt",
//     createdAt: new Date(2024, 0, 9),
//     updatedAt: new Date(2024, 0, 9),
//     isDeleted: false,
//     count: 10,
//   },
//   {
//     id: 4,
//     name: "hat",
//     createdAt: new Date(2024, 0, 9),
//     updatedAt: new Date(2024, 0, 9),
//     isDeleted: false,
//     count: 10,
//   },
//   {
//     id: 5,
//     name: "belt",
//     createdAt: new Date(2024, 0, 9),
//     updatedAt: new Date(2024, 0, 9),
//     isDeleted: false,
//     count: 10,
//   },
//   {
//     id: 6,
//     name: "tie",
//     createdAt: new Date(2024, 0, 9),
//     updatedAt: new Date(2024, 0, 9),
//     isDeleted: false,
//     count: 10,
//   },
//   {
//     id: 7,
//     name: "gun",
//     createdAt: new Date(2024, 0, 9),
//     updatedAt: new Date(2024, 0, 9),
//     isDeleted: false,
//     count: 10,
//   },
//   {
//     id: 8,
//     name: "bottle",
//     createdAt: new Date(2024, 0, 9),
//     updatedAt: new Date(2024, 0, 9),
//     isDeleted: false,
//     count: 10,
//   },
//   {
//     id: 9,
//     name: "TV",
//     createdAt: new Date(2024, 0, 9),
//     updatedAt: new Date(2024, 0, 9),
//     isDeleted: false,
//     count: 10,
//   },
//   {
//     id: 10,
//     name: "Pachai Arisi Oru Kilo",
//     createdAt: new Date(2024, 0, 9),
//     updatedAt: new Date(2024, 0, 9),
//     isDeleted: false,
//     count: 10,
//   },
//   {
//     id: 11,
//     name: "Socks",
//     createdAt: new Date(2024, 0, 9),
//     updatedAt: new Date(2024, 0, 9),
//     isDeleted: false,
//     count: 10,
//   },
//   {
//     id: 12,
//     name: "Lace",
//     createdAt: new Date(2024, 0, 9),
//     updatedAt: new Date(2024, 0, 9),
//     isDeleted: false,
//     count: 10,
//   },
// ];

// export let idCounter = { val: stockData.length + 1 };
