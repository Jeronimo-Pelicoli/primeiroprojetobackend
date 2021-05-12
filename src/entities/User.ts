import { Entity, PrimaryColumn, Column } from 'typeorm';

@Entity("users")
class User{

    @PrimaryColumn()
    id: number

    @Column()
    title: string

    @Column()
    description: string

}

export { User }