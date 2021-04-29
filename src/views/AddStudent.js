import React from 'react';
import PropTypes from 'prop-types';
import StudentForm from '../components/StudentCard';

export default function AddStudent({ setStudents }) {
  return (
    <>
      <StudentForm
      formTitle='Add Student'
      setStudents={setStudents}
      />
    </>
  );
}

AddStudent.propTypes = {
  setStudents: PropTypes.func.isRequired
};
