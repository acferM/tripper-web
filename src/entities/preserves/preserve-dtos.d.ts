type CreatePassageDTO = {
  preserve_id: string;
  value: number;
};

type UpdatePreserveValueDTO = {
  preserve_id: string;
  value: number;
  operation: 'increment' | 'decrement';
};
