import { Form } from "antd";
import { ReactNode } from "react";
import {
  FieldValues,
  FormProvider,
  SubmitHandler,
  useForm,
} from "react-hook-form";
type TUserConfig = {
  defaultValues?: Record<string, unknown>;

  resolver?: any;
};
type TFromProps = {
  onSubmit: SubmitHandler<FieldValues>;
  children: ReactNode;
} & TUserConfig;

const PHForm = ({
  onSubmit,
  children,
  defaultValues,
  resolver,
}: TFromProps) => {
  const userConfig: TUserConfig = {};

  if (defaultValues) {
    userConfig["defaultValues"] = defaultValues;
  }
  if (resolver) {
    userConfig["resolver"] = resolver;
  }
  const method = useForm(userConfig);
  return (
    <FormProvider {...method}>
      <Form layout="vertical" onFinish={method.handleSubmit(onSubmit)}>
        {children}
      </Form>
    </FormProvider>
  );
};

export default PHForm;
