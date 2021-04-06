import { Cascade, Collection, Entity, OneToMany, Property, ManyToOne, Unique } from '@mikro-orm/core'

import { BaseEntity } from './BaseEntity'

@Entity()
export class User extends BaseEntity {
  @Property()
  username: string

  constructor(username: string) {
    super()
    this.username = username
  }
}
