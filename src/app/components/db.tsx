import Dexie, { Table } from "dexie";

// Define the TypeScript interface for your store items
export interface MyStoreItem {
  id?: number; // Optional because it will be auto-incremented
  value: string;
}

// Extend Dexie to type-check the database schema
class MyDatabase extends Dexie {
  myStore!: Table<MyStoreItem, number>; // Table of MyStoreItem, with number as the primary key

  constructor() {
    super("MyDatabase");
    this.version(1).stores({
      myStore: "++id,value" // Define the schema: auto-incrementing id and value
    });
  }
}

// Create an instance of the database
const db = new MyDatabase();
export default db;
