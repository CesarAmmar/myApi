function getAllStudents() {
  fetch('http://localhost:1234/getAllStudents')
    .then((response) => response.json())
    .then((json) => {
      let myUl = document.getElementById('students');
      json.forEach((student) => {
        let myLi = document.createElement('li');
        myLi.innerText = student.name;
        myUl.appendChild(myLi);
      });
    });
}
