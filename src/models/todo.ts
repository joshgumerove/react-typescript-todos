// export interface Item {
//   id: string;
//   description: string;
// }

class Item {
  id: string;
  description: string;

  constructor(description: string) {
    this.description = description;
    this.id = (Math.random() * 100000).toString();
  }
}

export default Item;
