// file appoiments.entities.ts
import { Column, Entity, PrimaryGeneratedColumn } from "typeorm"

@Entity({
    name: "appoiments"
})
export class Appoiment {
    @PrimaryGeneratedColumn()
    id: number

    @Column()
    date: string

    @Column()
    time: string

    @Column() 
    userid: string

    @Column({ type: 'enum', enum: ['active', 'cancelled'] })
    status: string;
}