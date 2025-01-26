// const CreateSemesterRegistration = () => {
//   return (
//     <div>
//       <h1>create semester registrations</h1>
//     </div>
//   );
// };

// export default CreateSemesterRegistration;
import { FieldValues, SubmitHandler } from "react-hook-form";
import PHForm from "../../../components/form/PHForm";

import { Button, Col, Flex } from "antd";
import PHSelect from "../../../components/form/PHSelect";
// import { nameOptions } from "../../../constants/semester";
// import { monthOptions } from "../../../constants/global";
// import { zodResolver } from "@hookform/resolvers/zod";

// import { academicSemesterSchema } from "../../../schemas/academicManagement.schemas";
// import { useCreateSemesterMutation, useGetAllAcademicSemesterQuery } from "../../../redux/feature/admin/academicManagement.api";
import { toast } from "sonner";
// import { TResponse } from "../../../types/global.type";
import { useGetAllAcademicSemesterQuery } from "../../../redux/feature/admin/academicManagement.api";
import PHInput from "../../../components/form/PHInput";
import { statusOptions } from "../../../constants/semesterRegistration";
import PHDatePicker from "../../../components/form/PHDatePicker";
import { useCreateSemesterRegistrationMutation } from "../../../redux/feature/admin/courseManagement.api";
import { TResponse } from "../../../types";

const CreateSemesterRegistration = () => {
  const [addSemesterRegistration] = useCreateSemesterRegistrationMutation();
  const { data: aSemesterData, isFetching } =
    useGetAllAcademicSemesterQuery(undefined);

  const semesterOptions = aSemesterData?.data?.map((item) => ({
    value: item?._id,
    label: `${item.name} ${item.year}`,
  }));

  const onSubmit: SubmitHandler<FieldValues> = async (data) => {
    const toastId = toast.loading("creating .....");
    // console.log(data);

    const semesterRegistrationData = {
      ...data,
      maxCredit: Number(data?.maxCredit),
      minCredit: Number(data?.minCredit),
    };

    try {
      const res = (await addSemesterRegistration(
        semesterRegistrationData
      )) as TResponse<any>;
      // console.log(res);
      if (res?.error) {
        toast.error(res.error.data.message, { id: toastId });
      } else {
        toast.success("semester create successfully", { id: toastId });
      }
      console.log(res);
    } catch (error) {
      toast.error("something went wrong", { id: toastId });
    }
  };
  return (
    <Flex justify="center" align="center">
      <Col span={6}>
        <PHForm
          onSubmit={onSubmit}
          // resolver={zodResolver(academicSemesterSchema)}
        >
          <PHSelect
            label="Academic Semester"
            name="academicSemester"
            options={semesterOptions}
          />
          <PHSelect label="Status" name="status" options={statusOptions} />
          <PHDatePicker name="startDate" label="Start Date" />
          <PHDatePicker name="endDate" label="End Date" />
          <PHInput type="text" name="minCredit" label="Min credit" />
          <PHInput type="text" name="maxCredit" label="Max Credit" />

          <Button htmlType="submit">submit</Button>
        </PHForm>
      </Col>
    </Flex>
  );
};

export default CreateSemesterRegistration;
