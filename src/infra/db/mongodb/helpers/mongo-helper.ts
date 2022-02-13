import { Collection, Db, MongoClient } from 'mongodb'

export const MongoHelper = {
  client: null as unknown as MongoClient,
  db: null as unknown as Db,

  async connect (url: string): Promise<void> {
    this.client = await MongoClient.connect(url)
    // this.db = this.client.db()
  },

  async disconnect (): Promise<void> {
    await this.client.close()
  },

  getCollection (name: string): Collection {
    return this.client.db().collection(name)
  }
}

// export class MongoHelper {
//   private client: MongoClient | undefined

//   constructor () {
//     this.client = undefined
//   }

//   async connect (url: string): Promise<void> {
//     this.client = await MongoClient.connect(url)
//   }

//   async disconnect (): Promise<void> {
//     await this.client.close()
//   }

//   getCollection (name: string): Collection {
//     if (this.client) {
//       return this.client.db().collection(name)
//     }
//   }
// }
