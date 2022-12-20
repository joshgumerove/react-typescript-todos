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

// note how this is not a tsx file
// note - could have created a class and than used it as a type (Todo[])
