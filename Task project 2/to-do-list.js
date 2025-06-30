function addTask(){
      const input = document.getElementById("add");
      const taskText = input.value.trim();
      if (taskText === ""){
        return;
      };
      const li = document.createElement("li");
      li.textContent = taskText;

      const delBtn = document.createElement("button");
      delBtn.textContent = "Delete";
      delBtn.onclick = () => li.remove();

      li.appendChild(delBtn);
      document.getElementById("taskList").appendChild(li);

      input.value = "";
}

