var app = new Vue({
  el: "#app",
  data: {
    numberFlat: "",
    numberEntrance: "",
    login: "",
    password: "",
    account: [
      { login: "toma", password: "123" },
      { login: "petya", password: "777" },
      { login: "olya", password: "456" },
    ],
    stringAccount: {
      lastName: "",
      firstName: "",
      password: "",
      email: "",
    },
    year: "",
    age: "",
    msgAge: "",
    exp: "",
    premium: "",
    arrayTableMult: [],
    age: "",
    answer: "",
    randNumber: Math.floor(Math.random() * 10) + 1,
    numOfAttempts: 3,
    moreOrLess: "",
    attempts: "",
    string: "",
    mouseX: 0,
    mouseY: 0,
    marginTop: 0,
  },
  methods: {
    numberOfFlat: function () {
      if (this.numberFlat != 0 && this.numberFlat <= 20)
        this.numberEntrance = "перший під'їзд";
      else if (this.numberFlat >= 21 && this.numberFlat <= 48)
        this.numberEntrance = "другий під'їзд";
      else if (this.numberFlat >= 49 && this.numberFlat <= 90)
        this.numberEntrance = "третій під'їзд";
      else this.numberEntrance = "немає під'їзду";
    },
    authorization: function () {
      if (this.login == "toma" && this.password == "123") this.authOK(true);
      else if (this.login == "petya" && this.password == "777")
        this.authOK(true);
      else if (this.login == "olya" && this.password == "456")
        this.authOK(true);
      else this.authOK(false);
    },
    authOK: function (isOK) {
      if (isOK == true) alert("Авторизація успішна");
      else alert("Неправильний логін або пароль");
      this.login = "";
      this.password = "";
    },
    checkAge: function () {
      if (this.year < 1000)
        this.msgAge = "Треба ввести рік народження, а не вік";
      else {
        this.age = 2023 - this.year;
        if (this.age >= 16) this.msgAge = "Ласкаво просимо";
        else {
          this.msgAge = "Вхід забороненно";
        }
        this.age = "Вік - " + this.age;
      }
    },
    checkExp: function () {
      this.premium = "Надбавка = ";
      if (this.exp < 0) alert("Введено негативно число стажу");
      else if (this.exp >= 0 && this.exp < 3) this.premium += "0%";
      else if (this.exp < 10) this.premium += "10%";
      else if (this.exp < 20) this.premium += "20%";
      else this.premium += "25%";
    },
    multiplication: function () {
      for (var i = 0; i < 9; i++) this.arrayTableMult[i] = (i + 1) * 5;
    },
    personAge: function (age) {
      if (age > 16) this.answer = "Ласкаво просимо";
      else this.answer = "ви ще молоді";
    },
    guessNumber: function (number) {
      number *= 1;
      if (number === this.randNumber) alert("Успіх, число вгадане");
      else if (this.numOfAttempts === 0) alert("Не вдалось вгадати число");
      else if (number < 0 || number > 10)
        alert("Число повинно бути він 1 до 10");
      else if (number != this.randNumber && number < this.randNumber) {
        this.moreOrLess = "Число менше заданого";
        this.numOfAttempts--;
      } else if (number != this.randNumber && number > this.randNumber) {
        this.moreOrLess = "Число більше заданого";
        this.numOfAttempts--;
      }
    },
    checkPassword: function () {
      if (this.stringAccount.password.length < 5) {
        alert("Пароль повинен містити більше 5 символів");
      } else return true;
    },
    checkEmail: function () {
      if (this.stringAccount.email.includes(" ")) {
        this.stringAccount.email = this.stringAccount.email.replace(/ /g, "");
      } else if (!this.stringAccount.email.includes("@")) alert("Невистачає @");
      else return true;
    },
    checkForm: function () {
      if (this.checkEmail() && this.checkPassword()) alert(true);
    },
    mouseMove: function (event) {
      this.mouseX = event.clientX;
      this.mouseY = event.clientY;
    },
    marginDownBlock: function (elem) {
      var elem = document.getElementById("ex5-block");

      this.marginTop += 100;
      elem.style.marginTop = this.marginTop + "px";
    },

    mouseOverImage: function () {
      var elem = document.getElementById("imgs");
      elem.width = elem.width * 1.4;
      elem.height = elem.height * 1.4;
    },
    mouseOutImage: function (elem) {
      var elem = document.getElementById("imgs");
      elem.width = elem.width / 1.4;
      elem.height = elem.height / 1.4;
    },
  },
});

//el: "#app",
// data: {
//   message: "Hello World!",
//   items: [
//     {title: "Item 1"},
//     {title: "Item 2"},
//     {test: "Item 3"},

//   ],
//   product: {
//     brand: "Apple",
//     model: "XR",
//     price: 1000
//   }
// },
// methods:{
//   cleanMessage: function(){
//     this.message = "";
//   },
//   reverseMessage: function(){
//     this.message = this.message.split('').reverse().join('');
//   }
// }
