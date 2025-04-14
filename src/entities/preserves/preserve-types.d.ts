type Preserve = {
  id: string;
  value: number;

  // transactions PreserveTransaction[]
  passages?: PreservePassage[];
  lottery?: Lottery;

  created_at: Date;
  updated_at: Date;
};

type PreservePassage = {
  id: string;
  value: number;
  created_at: Date;
  updated_at: Date;
};
