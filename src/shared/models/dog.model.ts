import { Column, DataType, Model, Table } from 'sequelize-typescript';

@Table({ tableName: 'dogs' })
export class Dog extends Model<Dog> {
  @Column({
    type: DataType.INTEGER,
    unique: true,
    primaryKey: true,
    autoIncrement: true,
  })
  id: number;

  @Column({ type: DataType.STRING, allowNull: false })
  name: string;

  @Column({ type: DataType.STRING, allowNull: false })
  color: string;

  @Column({ type: DataType.INTEGER, allowNull: false })
  tail_length: number;

  @Column({ type: DataType.INTEGER, allowNull: false })
  weight: number;

  @Column
  createdAt: Date;

  @Column
  updatedAt: Date;
}
