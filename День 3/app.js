var arrayStudents = [
  {
    id: 1,
    pib: "Клещов Артем Володимирович",
    group: 1,
    yearOfBirth: 2004,
    isPassed: true,
    class: "black",
  },
  {
    id: 2,
    pib: "Тимофеєва Анастасія Денисівна",
    group: 1,
    yearOfBirth: 2004,
    isPassed: true,
    class: "black",
  },
  {
    id: 3,
    pib: "Сімічов Олексій Вікторович",
    group: 2,
    yearOfBirth: 2003,
    isPassed: false,
    class: "black",
  },
  {
    id: 4,
    pib: "Терещенко Валерій Володимирович",
    group: 3,
    yearOfBirth: 2005,
    isPassed: false,
    class: "black",
  },
  {
    id: 5,
    pib: "Іванюк Іван Михайлович",
    group: 2,
    yearOfBirth: 2003,
    isPassed: false,
    class: "black",
  },
];
var app = new Vue({
  el: "#app",
  data: {
    students: arrayStudents,
    search: "",
    test: "",
  },
  methods: {
    deleteStudent: function (student) {
      this.students = this.students.filter(function (item) {
        return student != item.id;
      });
    },
    searchStudents: function (elem) {
      if (this.search != "") {
        this.students.filter((item) => {
          if (item.pib.includes(this.search) == true) item.class = "red";
        });
      } else
        this.students.forEach((element) => {
          element.class = "black";
        });
    },
  },
});
