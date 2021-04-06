import { EntityManager, EntityRepository, MikroORM } from "@mikro-orm/core"
import { User } from "./entities"

export class DI {
  orm: MikroORM
  em: EntityManager
  userRepository: EntityRepository<User>

  private static instance: DI | null = null
  private constructor(orm: MikroORM) {
    this.orm = orm
    this.em = orm.em
    this.userRepository = this.em.getRepository(User)
  }

  static async getInstance(): Promise<DI> {
    if (this.instance !== null) return this.instance

    console.log("Initializing Mikro-ORM...")
    const orm = await MikroORM.init()
    this.instance = new DI(orm);
    return this.instance
  }
}
