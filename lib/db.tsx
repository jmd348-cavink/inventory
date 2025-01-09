export type stockItem = {
  id: number;
  name: string;
  createdAt: Date;
  isDeleted: boolean;
  count: number;
};

export let idCounter = { val: 5 };

export let stockData: stockItem[] = [
  {
    id: 1,
    name: "shoe",
    createdAt: new Date(),
    isDeleted: false,
    count: 10,
  },
  {
    id: 2,
    name: "pant",
    createdAt: new Date(),
    isDeleted: false,
    count: 10,
  },
  {
    id: 3,
    name: "shirt",
    createdAt: new Date(),
    isDeleted: false,
    count: 10,
  },
  {
    id: 4,
    name: "hat",
    createdAt: new Date(),
    isDeleted: false,
    count: 10,
  },
  {
    id: 5,
    name: "belt",
    createdAt: new Date(),
    isDeleted: false,
    count: 10,
  },
  {
    id: 6,
    name: "tie",
    createdAt: new Date(),
    isDeleted: false,
    count: 10,
  },
  {
    id: 7,
    name: "gun",
    createdAt: new Date(),
    isDeleted: false,
    count: 10,
  },
  {
    id: 8,
    name: "bottle",
    createdAt: new Date(),
    isDeleted: false,
    count: 10,
  },
  {
    id: 9,
    name: "TV",
    createdAt: new Date(),
    isDeleted: false,
    count: 10,
  },
  {
    id: 10,
    name: "Pachai Arisi Oru Kilo",
    createdAt: new Date(),
    isDeleted: false,
    count: 10,
  },
  {
    id: 11,
    name: "Socks",
    createdAt: new Date(),
    isDeleted: false,
    count: 10,
  },
  {
    id: 12,
    name: "Lace",
    createdAt: new Date(),
    isDeleted: false,
    count: 10,
  },
];
