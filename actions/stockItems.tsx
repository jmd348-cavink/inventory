import { stockData, stockItem, idCounter } from "@/lib/db";

export type Response = {
  data: stockItem[];
  status: number;
  error: string | null;
};

export const getStocks = (name?: string): Response => {
  if (!name || name.length === 0) {
    return { data: stockData, status: 200, error: null };
  } else {
    return {
      data: stockData.filter((stock) =>
        stock.name.toLowerCase().includes(name.toLowerCase())
      ),
      status: 200,
      error: null,
    };
  }
};

export const addStocks = (name: string, count: number): Response => {
  const isExisting = getStocks(name).data;
  if (isExisting.length > 0) {
    return {
      data: [],
      status: 409,
      error: "stock already exists",
    };
  } else {
    const newStock = {
      id: idCounter.val,
      name,
      count,
      isDeleted: false,
      createdAt: new Date(),
    };
    idCounter.val += 1;
    stockData.push(newStock);
    return {
      data: [newStock],
      status: 201,
      error: null,
    };
  }
};

export const deleteStocks = (id: number): Response => {
  const isExisting = stockData.findIndex((stock) => stock.id === id);
  if (isExisting === -1) {
    return {
      data: [],
      status: 404,
      error: "stock not found",
    };
  } else {
    const deletedStock = stockData.splice(isExisting, 1);
    return {
      data: deletedStock,
      status: 200,
      error: null,
    };
  }
};

export const updateStocks = (id: number, inc_or_dec: number): Response => {
  const isExisting = stockData.findIndex((stock) => stock.id === id);
  if (isExisting === -1) {
    return {
      data: [],
      status: 404,
      error: "stock not found",
    };
  } else {
    stockData[isExisting] = {
      ...stockData[isExisting],
      count: stockData[isExisting].count + inc_or_dec,
    };
    return {
      data: [stockData[isExisting]],
      status: 200,
      error: null,
    };
  }
};

export const editStocks = (
  id: number,
  name?: string,
  count?: number
): Response => {
  const isExisting = stockData.findIndex((stock) => stock.id === id);
  if (isExisting === -1) {
    return {
      data: [],
      status: 404,
      error: "stock not found",
    };
  } else {
    stockData[isExisting] = {
      ...stockData[isExisting],
      name: name || stockData[isExisting].name,
      count: count || stockData[isExisting].count,
    };
    return {
      data: [stockData[isExisting]],
      status: 200,
      error: null,
    };
  }
};
