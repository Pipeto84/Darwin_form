import { Typography } from "antd";
import { define } from "@react-form-builder/core";

const { Title } = Typography;

const MyHeader = () => {
  return (
    <Title
      level={3}
      style={{
        backgroundColor: "rgba(255, 144, 18, 1)",
        color: "rgba(254, 254, 254, 1)",
        borderRadius: '8px 8px 0 0',
        padding: '20px',
      }}
    >
      Harvesting Process
    </Title>
  );
};

export const myHeader = define(MyHeader, "MyHeader").name("Header");
