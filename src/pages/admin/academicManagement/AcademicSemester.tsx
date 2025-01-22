// import { useGetAllSemesterQuery } from "../../../redux/feature/academicSemester/academicSemesterApi";

import { useGetAllSemesterQuery } from "../../../redux/feature/admin/academicManagement.api";

const AcademicSemester = () => {
  const { data } = useGetAllSemesterQuery(undefined);
  console.log(data);
  return (
    <div>
      <h1>academic semester page</h1>
    </div>
  );
};

export default AcademicSemester;
