export interface Cat {
  id: number;
  name: string;
  breed: string;
  age: number;
  isGoodKitty: boolean; //If this ever turns false, you fail my class :)
  picture? : string[];
}
