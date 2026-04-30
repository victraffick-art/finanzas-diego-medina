export type Transaction = {
  id: string;
  description: string;
  amount: number;
  type: 'ingreso' | 'egreso';
  category: string;
  date: string;
  user_id?: string;
  created_at?: string;
};
