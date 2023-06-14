import { DataTypes, Model, ModelDefined, Optional } from 'sequelize';
import db from './index';
import { Order, OrderInList } from '../../types/Order';

type OrderInputtableTypes = Optional<Order, 'id'>;
type OrderSequelizeModelCreator = ModelDefined<Order, OrderInputtableTypes>;
export type OrderSequelizeModel = Model<Order, OrderInputtableTypes>;
export type OrderInListInputtableTypes = Optional<OrderInList, 'id'>;
export type OrderInListSequelizeModel = Model<OrderInList, OrderInListInputtableTypes>;

const OrderModel: OrderSequelizeModelCreator = db.define('Order', {
  id: {
    type: DataTypes.INTEGER.UNSIGNED,
    primaryKey: true,
    autoIncrement: true,
  },
  userId: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
}, {
  tableName: 'orders',
  timestamps: false,
  underscored: true,
});

export default OrderModel;
