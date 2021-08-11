import { Modal } from "antd";
import React from 'react';
import {
  Form,
  Input,
  Upload,
  Select,
  Cascader,
  DatePicker,
  InputNumber,
  TreeSelect,
  Switch,
} from "antd";

import { InboxOutlined } from "@ant-design/icons";
const normFile = (e) => {
  console.log("Upload event:", e);

  if (Array.isArray(e)) {
    return e;
  }

  return e && e.fileList;
};

const UseModal = ({ setVisible, visible }) => {
  return (
    <Modal
      title="Add new product item to list."
      centered
      visible={visible}
      onOk={() => setVisible(false)}
      onCancel={() => setVisible(false)}
      width={1000}
    >
      <Form
        labelCol={{ span: 4 }}
        wrapperCol={{ span: 14 }}
        layout="horizontal"
        initialValues={{ size: "small" }}
        size="small"
      >
        <Form.Item label="Product name">
          <Input />
        </Form.Item>
        <Form.Item label="Product type">
          <Select>
            <Select.Option value="hotDishes">Hot Dish</Select.Option>
            <Select.Option value="coldDishes">Cold Dishes</Select.Option>
            <Select.Option value="Dessert">Dessert</Select.Option>
            <Select.Option value="Soup">Soup</Select.Option>
            <Select.Option value="Grill">Grill</Select.Option>
            <Select.Option value="Appetizer">Appetizer</Select.Option>
          </Select>
        </Form.Item>
        <Form.Item label="TreeSelect">
          <TreeSelect
            treeData={[
              {
                title: "Light",
                value: "light",
                children: [{ title: "Bamboo", value: "bamboo" }],
              },
            ]}
          />
        </Form.Item>
        <Form.Item label="Cascader">
          <Cascader
            options={[
              {
                value: "zhejiang",
                label: "Zhejiang",
                children: [
                  {
                    value: "hangzhou",
                    label: "Hangzhou",
                  },
                ],
              },
            ]}
          />
        </Form.Item>
        <Form.Item label="Product valid date">
          <DatePicker />
        </Form.Item>
        <Form.Item label="Product price">
          <InputNumber />
        </Form.Item>
        <Form.Item label="Available for sale">
          <Switch />
        </Form.Item>
        <Form.Item label="Upload product images">
          <Form.Item
            name="dragger"
            valuePropName="fileList"
            getValueFromEvent={normFile}
            noStyle
          >
            <Upload.Dragger name="files" action="/upload.do">
              <p className="ant-upload-drag-icon">
                <InboxOutlined />
              </p>
              <p className="ant-upload-text">
                Click or drag file to this area to upload
              </p>
              <p className="ant-upload-hint">
                Support for a single or bulk upload.
              </p>
            </Upload.Dragger>
          </Form.Item>
        </Form.Item>
      </Form>
    </Modal>
  );
}

export default UseModal
