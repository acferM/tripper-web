type UpdateSafeValueDTO = {
  safe_id: string;
  operation: 'increment' | 'decrement';
  value: number;
};
