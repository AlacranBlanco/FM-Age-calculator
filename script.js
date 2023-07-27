const inputDay = document.getElementById("inputDay");
const textDay = document.getElementById("textDay");
const errorDay = document.getElementById("errorDay");

const inputMonth = document.getElementById("inputMonth");
const textMonth = document.getElementById("textMonth");
const errorMonth = document.getElementById("errorMonth");

const inputYear = document.getElementById("inputYear");
const textYear = document.getElementById("textYear");
const errorYear = document.getElementById("errorYear");

const form = document.getElementById("form");

const aDaysH3 = document.getElementById("aDays");
const aMonthsH3 = document.getElementById("aMonths");
const aYearsH3 = document.getElementById("aYears");
let isValid = true;

const clearResult = () => {
  aDaysH3.innerHTML = "- -";
  aMonthsH3.innerHTML = "- -";
  aYearsH3.innerHTML = "- -";
};

form.addEventListener("submit", (e) => {
  e.preventDefault();

  if (inputDay.value === "") {
    inputDay.classList.add("border-red-500");
    textDay.classList.add("text-red-500/80");
    errorDay.classList.remove("hidden");
    errorDay.innerHTML = "This field is required";
    clearResult();
    isValid = false;
  }
  if (inputMonth.value === "") {
    inputMonth.classList.add("border-red-500");
    textMonth.classList.add("text-red-500/80");
    errorMonth.classList.remove("hidden");
    errorMonth.innerHTML = "This field is required";
    clearResult();
    isValid = false;
  }
  if (inputYear.value === "") {
    inputYear.classList.add("border-red-500");
    textYear.classList.add("text-red-500/80");
    errorYear.classList.remove("hidden");
    errorYear.innerHTML = "This field is required";
    clearResult();
    isValid = false;
  }

  if (isValid) {
    const currentDate = new Date();

    let birthDate = new Date(
      inputYear.value,
      Number(inputMonth.value),
      Number(inputDay.value)
    );

    if (currentDate.getDate() < birthDate.getDate()) {
      aDaysH3.innerHTML = currentDate.getDate() + 31 - birthDate.getDate();
    } else {
      aDaysH3.innerHTML = currentDate.getDate() - birthDate.getDate();
    }

    if (currentDate.getMonth() < birthDate.getMonth()) {
      aMonthsH3.innerHTML = currentDate.getMonth() + 13 - birthDate.getMonth();
      aYearsH3.innerHTML =
        currentDate.getFullYear() - 1 - birthDate.getFullYear();
    } else {
      aYearsH3.innerHTML = currentDate.getFullYear() - birthDate.getFullYear();
      aMonthsH3.innerHTML = currentDate.getMonth() + 1 - birthDate.getMonth();
    }
  }
});

inputDay.addEventListener("change", (e) => {
  if (e.target.value > 0 && e.target.value <= 31) {
    inputDay.classList.remove("border-red-500");
    textDay.classList.remove("text-red-500/80");
    errorDay.classList.add("hidden");
    errorDay.innerHTML = "";
    isValid = true;
  } else {
    inputDay.classList.add("border-red-500");
    textDay.classList.add("text-red-500/80");
    errorDay.classList.remove("hidden");
    errorDay.innerHTML = "Must be a valid day";
    clearResult();
    isValid = false;
  }
});

inputMonth.addEventListener("change", (e) => {
  if (e.target.value > 0 && e.target.value <= 12) {
    inputMonth.classList.remove("border-red-500");
    textMonth.classList.remove("text-red-500/80");
    errorMonth.classList.add("hidden");
    errorMonth.innerHTML = "";
    isValid = true;
  } else {
    inputMonth.classList.add("border-red-500");
    textMonth.classList.add("text-red-500/80");
    errorMonth.classList.remove("hidden");
    errorMonth.innerHTML = "Must be a valid month";
    clearResult();
    isValid = false;
  }
});

inputYear.addEventListener("change", (e) => {
  if (e.target.value > 1900 && e.target.value <= new Date().getFullYear()) {
    inputYear.classList.remove("border-red-500");
    textYear.classList.remove("text-red-500/80");
    errorYear.classList.add("hidden");
    errorYear.innerHTML = "";
    isValid = true;
  } else {
    inputYear.classList.add("border-red-500");
    textYear.classList.add("text-red-500/80");
    errorYear.classList.remove("hidden");
    if (e.target.value < 1900) {
      errorYear.innerHTML = "Must be greather than 1900";
    } else {
      errorYear.innerHTML = "Must be in the past";
    }
    clearResult();
    isValid = false;
  }
});
