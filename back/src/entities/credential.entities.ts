// file credentials.entities.ts
import { Column, Entity, PrimaryGeneratedColumn } from "typeorm"

@Entity({
    name: "credentials"
})
export class Credential {
    @PrimaryGeneratedColumn()
    id: number

    @Column({ length:30 }) 
    username: string

    @Column({ length: 130 })
    password: string // Aquí almacenarás el hash SHA-3 de la contraseña

    @Column({ type: 'enum', enum: ['admin', 'user', 'guest'] })
    role: string;}