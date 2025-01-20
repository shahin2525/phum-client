import { ReactNode } from "react";
import {
  FieldValues,
  FormProvider,
  SubmitHandler,
  useForm,
} from "react-hook-form";
type TUserConfig = {
  defaultValues?: Record<string, unknown>;
};
type TFromProps = {
  onSubmit: SubmitHandler<FieldValues>;
  children: ReactNode;
} & TUserConfig;

const PHForm = ({ onSubmit, children, defaultValues }: TFromProps) => {
  const userConfig: TUserConfig = {};

  if (defaultValues) {
    userConfig["defaultValues"] = defaultValues;
  }
  const method = useForm(userConfig);
  return (
    <FormProvider {...method}>
      <form onSubmit={method.handleSubmit(onSubmit)}>{children}</form>
    </FormProvider>
  );
};

export default PHForm;
