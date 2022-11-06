import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'Estates' })
export class Estate {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  url: string;

  @Column()
  imageUrl: string;

  @Column()
  title: string;
}
