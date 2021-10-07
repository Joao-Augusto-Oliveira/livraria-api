import { Column, Model, Table, DataType } from 'sequelize-typescript';

@Table
export class Livro extends Model<Livro> {
  // acessamos o id via Model

  @Column({
    type: DataType.STRING(60),
    allowNull: false,
  })
  codigo: string;

  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  nome: string;

  @Column({
    type: DataType.DECIMAL(10, 2),
    allowNull: false,
  })
  preco: number;
}
