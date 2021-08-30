import { Column, CreateDateColumn, Entity, PrimaryColumn, UpdateDateColumn } from "typeorm"
import { v4 as uuid} from 'uuid';

@Entity("profile")
class Profile {

    @PrimaryColumn()
    readonly id: string;

    @Column()
    name: string;

    @Column()
    cep: string;

    @CreateDateColumn()
    Created_at: Date;

    @UpdateDateColumn()
    Updated_at: Date;

    constructor() {
        if(!this.id) {
            this.id = uuid();
        }
    }
}

export { Profile }