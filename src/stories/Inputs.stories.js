import { Input } from "components";
export default {
  title: "e_commerce/Input",
  component: Input,
};

export const SampleInput = (args) => <Input {...args} />;
SampleInput.args = {
  type: "text",
  shape: "CustomBorderBL10",
  variant: "GradientGray900Gray90000",
  size: "sm",
  wrapClassName: "w-[300px]",
  className: "w-full",
  placeholder: "placeholder",
};
