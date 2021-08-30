import { Column, Entity, JoinColumn, OneToOne, PrimaryColumn } from "typeorm";
import { Profile } from "./Profile";
import { v4 as uuid } from "uuid";

@Entity("user")
class User {

    @PrimaryColumn()
    readonly id: string;

    @Column()
    email: string;

    @Column()
    password: string;

    @Column()
    profile_id: string;

    @JoinColumn({name: "profile_id"})
    @OneToOne(() => Profile)
    profile: Profile;

    constructor() {
        if(!this.id) {
            this.id = uuid();
        }
    }
}

export { User }