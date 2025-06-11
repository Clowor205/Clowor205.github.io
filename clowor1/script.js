/* ===== Nih fungsi buat aktifin waktu ===== */
function getCurrentTime() {
  const now = new Date();
  const hours = now.getHours().toString().padStart(2, '0');
  const minutes = now.getMinutes().toString().padStart(2, '0');
  return `${hours}:${minutes}`;
}

/* ===== fungsi nambahin daftar tugas ===== */
function addTask() {
  const taskInput = document.getElementById('taskInput');
  const todoList = document.getElementById('todoList');
  const taskText = taskInput.value.trim();

  if (taskText === '') {
    alert('Mohon masukkan tugas!');
    return;
  }

  const li = document.createElement('li');

  const spanText = document.createElement('span');
  spanText.className = 'task-text';
  spanText.textContent = taskText;

  const spanTime = document.createElement('span');
  spanTime.className = 'task-time';
  spanTime.textContent = getCurrentTime();

  li.appendChild(spanText);
  li.appendChild(spanTime);

  // tombol kalo tugas udah di klik
  li.addEventListener('click', () => {
    li.classList.toggle('completed');
  });

  // Tombol hapus tugas
  const deleteBtn = document.createElement('button');
  deleteBtn.innerHTML = '&times;';
  deleteBtn.className = 'delete-btn';
  deleteBtn.addEventListener('click', (e) => {
    e.stopPropagation();
    todoList.removeChild(li);
  });

  li.appendChild(deleteBtn);
  todoList.appendChild(li);

  taskInput.value = '';
  taskInput.focus();
}

/* ===== tombol menampilkan tugas ===== */
document.getElementById('addBtn').addEventListener('click', addTask);
document.getElementById('taskInput').addEventListener('keypress', (e) => {
  if (e.key === 'Enter') {
    addTask();
  }
});
