document.querySelector(".register-btn").addEventListener("click", () => {
  const name = document.querySelector(".name").value;
  const choices = document.querySelectorAll('input[name="choice"]:checked');
  const count = choices.length;

  if (name === "") {
    alert("이름을 입력해주세요!");
    return;
  }

  alert(`${name}님, 저와 ${count}개의 취향이 같으시네요!`);
});

document.querySelector(".cancel-btn").addEventListener("click", () => {
  const nameField = document.querySelector("#name");
  nameField.value = "";

  const checkboxes = document.querySelectorAll('input[name="choice"]');
  checkboxes.forEach((checkbox) => {
    checkbox.checked = false;
  });
});
