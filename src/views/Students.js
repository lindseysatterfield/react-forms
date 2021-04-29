import React from 'react';
import PropTypes from 'prop-types';
import firebase from 'firebase';
import firebaseConfig from '../helpers/apiKeys';
import '../App/App.scss';
// import StudentForm from '../StudentForm';
// import { getStudents } from '../helpers/data/studentData';
import StudentCard from '../components/StudentCard';

firebase.initializeApp(firebaseConfig);

function Students({ students, setStudents }) {
  // const [students, setStudents] = useState([]);

  // useEffect(() => {
  //   getStudents().then((response) => setStudents(response));
  // }, []);

  console.warn(students);

  return (
    <div className='App'>
      {/* <StudentForm
      formTitle='Form Name'
      setStudents={setStudents}
      /> */}
        {students.map((studentInfo) => (
          <StudentCard
            key={studentInfo.firebaseKey}
            firebaseKey={studentInfo.firebaseKey}
            name={studentInfo.name}
            teacher={studentInfo.teacher}
            grade={Number(studentInfo.grade)}
            setStudents={setStudents}
          />
        ))}
    </div>
  );
}

Students.propTypes = {
  students: PropTypes.array.isRequired,
  setStudents: PropTypes.func.isRequired
};

export default Students;
