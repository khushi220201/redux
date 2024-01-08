// src/components/ListProduct.tsx
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Table, Spin, Alert, Space } from "antd";
import { deleteProductAction } from "../redux/action/deleteProductAction";
import { getProductListAction } from "../redux/action/getProductAction";
const ListProduct: React.FC = () => {
  const { products, loading, error } = useSelector(
    (state: any) => state.products
  );
  console.log("products: ", products);

  const dispatch: any = useDispatch();

  useEffect(() => {
    dispatch(getProductListAction());
  },[])
  const handleDelete = (productId: string) => {
    // Dispatch delete action by ID
    dispatch(deleteProductAction(productId));
  };
  const columns = [
    {
      title: "ID",
      dataIndex: "id",
      key: "id",
      width: 200,
    },
    {
      title: "Title",
      dataIndex: "title",
      key: "title",
      width: 500,
    },
    {
      title: "Action",
      key: "action",
      render: (_: any, record: any) => (
        <Space size="middle">
          <a onClick={() => handleDelete(record.id)}>Delete</a>
        </Space>
      ),
    },
  ];
  return (
    <div>
      <h2>Product List</h2>
      {loading && <Spin tip="Loading..." />}
      {error && <Alert message={`Error: ${error}`} type="error" />}
      {products && (
        <Table
          dataSource={products}
          columns={columns}
          rowKey="id"
          loading={loading}
        />
      )}
    </div>
  );
};

export default ListProduct;
