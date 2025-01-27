import { FieldValues, SubmitHandler } from "react-hook-form";
import PHForm from "../../../components/form/PHForm";

import { Button, Col, Flex } from "antd";
import PHSelect from "../../../components/form/PHSelect";

import { zodResolver } from "@hookform/resolvers/zod";

import { academicSemesterSchema } from "../../../schemas/academicManagement.schemas";

import PHInput from "../../../components/form/PHInput";

const CreateCourse = () => {
  // const [addSemester] = useCreateSemesterMutation();
  const onSubmit: SubmitHandler<FieldValues> = async (data) => {
    console.log(data);
    // console.log("data", Number(data.name) - 1);
    // const toastId = toast.loading("creating .....");
    // const name = nameOptions[Number(data?.name) - 1]?.label;
    // const code = nameOptions[Number(data?.name) - 1]?.value;
    // const year = data?.year;
    // const startMonth = data?.startMonth;
    // const endMonth = data?.endMonth;

    // const semesterData = {
    //   name,
    //   code,
    //   year,
    //   startMonth,
    //   endMonth,
    // };
    // try {
    //   const res = (await addSemester(semesterData)) as TResponse<any>;
    //   console.log(res);
    //   if (res?.error) {
    //     toast.error(res.error.data.message, { id: toastId });
    //   } else {
    //     toast.success("semester create successfully", { id: toastId });
    //   }
    //   console.log(res);
    // } catch (error) {
    //   toast.error("something went wrong", { id: toastId });
    // }

    // console.log(semesterData);
  };
  return (
    <Flex justify="center" align="center">
      <Col span={6}>
        <PHForm
          onSubmit={onSubmit}
          resolver={zodResolver(academicSemesterSchema)}
        >
          {/* <PHSelect label="Name" name="name" options={nameOptions}></PHSelect>
          <PHSelect label="Year" name="year" options={yearOptions}></PHSelect>
          <PHSelect
            label="StartMonth"
            name="startMonth"
            options={monthOptions}
          ></PHSelect> */}
          <PHInput type="text" name="title" label="Title" />
          <PHInput type="text" name="prefix" label="Prefix" />
          <PHInput type="text" name="code" label="Code" />
          <PHSelect
            mode="multiple"
            label="PreRequisiteCourses"
            name="preRequisiteCourses"
            options={[
              { value: "test", label: "test" },
              { value: "test2", label: "test2" },
            ]}
          ></PHSelect>
          <Button htmlType="submit">submit</Button>
        </PHForm>
      </Col>
    </Flex>
  );
};

export default CreateCourse;
