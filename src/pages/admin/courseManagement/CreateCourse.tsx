import { FieldValues, SubmitHandler } from "react-hook-form";
import PHForm from "../../../components/form/PHForm";

import { Button, Col, Flex } from "antd";
import PHSelect from "../../../components/form/PHSelect";

import PHInput from "../../../components/form/PHInput";
import {
  useCreateCourseMutation,
  useGetAllCourseQuery,
} from "../../../redux/feature/admin/courseManagement.api";

import { TResponse } from "../../../types";
import { toast } from "sonner";

const CreateCourse = () => {
  const { data: courseData } = useGetAllCourseQuery(undefined);

  const [addCourse] = useCreateCourseMutation();

  const courseOptions = courseData?.data?.map((item) => ({
    value: item._id,
    label: item.title,
  }));

  const onsubmit: SubmitHandler<FieldValues> = async (data) => {
    const toastId = toast.loading("creating course");
    console.log(data);

    const courseData = {
      ...data,
      code: Number(data?.code),
      credits: Number(data?.credits),
      isDeleted: false,
      preRequisiteCourses: data?.preRequisiteCourses
        ? data?.preRequisiteCourses.map((item: string) => ({
            course: item,
            isDeleted: false,
          }))
        : [],
    };
    console.log("course-data", courseData);

    try {
      const res = (await addCourse(courseData)) as TResponse<any>;
      console.log("res", res);
      if (res?.error) {
        toast.error(res.error.data.message, { id: toastId });
      } else {
        toast.success("semester create successfully", { id: toastId });
      }
    } catch (error) {
      toast.error("something went wrong", { id: toastId });
    }

    // console.log(semesterData);
  };
  return (
    <Flex justify="center" align="center">
      <Col span={6}>
        <PHForm onSubmit={onsubmit}>
          <PHInput type="text" name="title" label="Title" />
          <PHInput type="text" name="prefix" label="Prefix" />
          <PHInput type="text" name="code" label="Code" />
          <PHInput type="text" name="credits" label="credits" />
          <PHSelect
            mode="multiple"
            label="PreRequisiteCourses"
            name="preRequisiteCourses"
            options={courseOptions}
          ></PHSelect>
          <Button htmlType="submit">submit</Button>
        </PHForm>
      </Col>
    </Flex>
  );
};

export default CreateCourse;
