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
import { nameOptions } from "../../../constants/semester";
import { monthOptions } from "../../../constants/global";
import { zodResolver } from "@hookform/resolvers/zod";

import { academicSemesterSchema } from "../../../schemas/academicManagement.schemas";
// import { useCreateSemesterMutation, useGetAllAcademicSemesterQuery } from "../../../redux/feature/admin/academicManagement.api";
import { toast } from "sonner";
import { TResponse } from "../../../types/global.type";
import { useGetAllAcademicSemesterQuery } from "../../../redux/feature/admin/academicManagement.api";
import PHInput from "../../../components/form/PHInput";
import { statusOptions } from "../../../constants/semesterRegistration";
import PHDatePicker from "../../../components/form/PHDatePicker";

// const currentYear = new Date().getFullYear();

// const yearOptions = [0, 1, 2, 3, 4].map((number) => ({
//   value: String(currentYear + number),
//   label: String(currentYear + number),
// }));

const CreateSemesterRegistration = () => {
  //   const [addSemester] = useCreateSemesterMutation();
  const { data: aSemesterData, isFetching } =
    useGetAllAcademicSemesterQuery(undefined);
  console.log(aSemesterData);
  const semesterOptions = aSemesterData?.data?.map((item) => ({
    value: item?._id,
    label: `${item.name} ${item.year}`,
  }));
  const onsubmit: SubmitHandler<FieldValues> = async (data) => {
    // console.log("data", Number(data.name) - 1);
    const toastId = toast.loading("creating .....");
    // const name = nameOptions[Number(data?.name) - 1]?.label;
    // const code = nameOptions[Number(data?.name) - 1]?.value;
    // const year = data?.year;
    const startMonth = data?.startMonth;
    const endMonth = data?.endMonth;

    const semesterData = {
      //   name,
      //   code,
      //   year,
      startMonth,
      endMonth,
    };
    // try {
    //   const res = (await addSemester(semesterData)) as TResponse;
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

    console.log(semesterData);
  };
  return (
    <Flex justify="center" align="center">
      <Col span={6}>
        <PHForm
          onSubmit={onsubmit}
          resolver={zodResolver(academicSemesterSchema)}
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
          {/* <PHSelect label="Year" name="year" options={yearOptions}></PHSelect>
          <PHSelect
            label="StartMonth"
            name="startMonth"
            options={monthOptions}
          ></PHSelect>
          <PHSelect
            label="EndMonth"
            name="endMonth"
            options={monthOptions}
          ></PHSelect> */}
          <Button htmlType="submit">submit</Button>
        </PHForm>
      </Col>
    </Flex>
  );
};

export default CreateSemesterRegistration;
