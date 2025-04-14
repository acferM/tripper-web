type CreatePassageDTO = {
  preserve_id: string;
  value: number;
};

type UpdateValueDTO = {
  preserve_id: string;
  value: number;
  operation: 'increment' | 'decrement';
};
