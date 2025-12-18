const contactBtn = document.querySelector(".Contact-Sales button");
  const modal = document.getElementById("contactModal");
  const closeBtn = document.getElementById("closeContact");

  contactBtn.addEventListener("click", () => {
    modal.classList.add("active");
  });

  closeBtn.addEventListener("click", () => {
    modal.classList.remove("active");
  });

  modal.addEventListener("click", (e) => {
    if (e.target === modal) {
      modal.classList.remove("active");
    }
  });