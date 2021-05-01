import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getSingleStudent } from '../helpers/data/studentData';

export default function SingleStudent() {
  const [student, setStudent] = useState({});
  const { firebaseKey } = useParams();

  useEffect(() => {
    getSingleStudent(firebaseKey).then((response) => setStudent(response));
  }, []);

  return (
    <div>
      <h2>Name: {student.name}</h2>
      <h2>Grade: {student.grade}</h2>
      <h2>Teacher: {student.teacher}</h2>
    </div>
  );
}
