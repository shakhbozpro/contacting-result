const elForm = document.querySelector(".js-form");
const userName = elForm.querySelector(".js-name-input");
const userRelativity = elForm.querySelector(".js-relativity-input");
const userPhoneNumber = elForm.querySelector(".js-phone-input");
const submitBtn = elForm.querySelector(".js-submit-btn");
const datalistWrapper = document.querySelector(".js-datalist-wrapper");
const datalist = document.querySelector(".js-datalist");
const arr = [];


elForm.addEventListener("submit", function (evt) {
   evt.preventDefault();

   const obj = {
      name: userName.value,
      relativity: userRelativity.value,
      userPhoneNumber: userPhoneNumber.value,
   }

   arr.push(obj);
   // elForm.reset();
   datalist.textContent = "";

   for (let collected of arr) {
      const newItem = document.createElement("li");
      newItem.classList.add("list-group-item");

      const nameTitle = document.createElement("h4");
      nameTitle.textContent = collected.name;
      nameTitle.classList.add("mb-3");

      const relativityText = document.createElement("p");
      relativityText.textContent = collected.relativity;
      relativityText.classList.add("mb-3");

      const phoneNumber = document.createElement("a");
      phoneNumber.setAttribute("href", `tel:${datalist.userPhoneNumber}`);
      phoneNumber.textContent = collected.userPhoneNumber;
      phoneNumber.classList.add("d-block", "mb-3")

      newItem.appendChild(nameTitle);
      newItem.appendChild(relativityText);
      newItem.appendChild(phoneNumber);
      datalist.appendChild(newItem)
   }
})
