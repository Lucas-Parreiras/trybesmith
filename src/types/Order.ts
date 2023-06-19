export type Order = {
  id: number;
  userId: number;
};

export type OrderInList = Order & {
  productIds: {
    id: number;
  }[];
};

export type OrderWithDirectIds = Order & {
  productIds: number[];
};

export type NewOrderBody = {
  userId: number,
  productIds: number[]
};