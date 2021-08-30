import { Column, CreateDateColumn, Entity, JoinColumn, ManyToOne, OneToOne, PrimaryColumn, UpdateDateColumn } from "typeorm"
import { Product } from "./Product";
import { Profile } from "./Profile";
import { v4 as uuid } from "uuid";

@Entity("cart")
class Cart {

    @PrimaryColumn()
    readonly id: string;

    @Column()
    profile_id: string;

    @JoinColumn({name: "profile_id"})
    @OneToOne(() => Profile)
    profile: Profile;

    @Column()
    product_id: string;

    @JoinColumn({name: "product_id"})
    @ManyToOne(() => Product)
    product: Product;

    @CreateDateColumn()
    created_at: Date;

    @UpdateDateColumn()
    updated_at: Date;

    constructor() {
        if(!this.id) {
            this.id = uuid();
        }
    }
}

export { Cart }