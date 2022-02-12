import { Db, MongoClient } from 'mongodb'

export const MongoHelper = {
  client: null as MongoClient | null,
  db: null as Db | null,

  async connect (url: string): Promise<void> {
    this.client = await MongoClient.connect(url)
    this.db = this.client.db()
  },

  async disconnect (): Promise<void> {
    await this.client?.close()
  }
}
