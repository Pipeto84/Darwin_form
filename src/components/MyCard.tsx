import { Card, CardProps } from "antd";
import { define, string } from "@react-form-builder/core";

type MyCardProps = CardProps;

const MyCard = (props: MyCardProps) => {
  const { title, ...otherProps } = props;
  return <Card {...otherProps} title="Harvesting Proces" />;
};

export const myCard = define(MyCard, "MyCard")
  .name("Title")
  .props({
    title: string.valued.default("Harvesting Proces"),
  });
