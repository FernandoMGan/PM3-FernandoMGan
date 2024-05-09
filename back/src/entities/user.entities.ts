// file user.entities.ts
import { Column, Entity, PrimaryGeneratedColumn } from "typeorm"

@Entity({
    name: "users"
})
export class User {
    @PrimaryGeneratedColumn()
    id: number

    @Column({length:100}) 
    name: string

    @Column()
    email: string

    @Column()
    birthdate: string

    @Column({ length: 12 })
    nDni: string

    @Column({ type: "integer" })
    credentialsId: number
}