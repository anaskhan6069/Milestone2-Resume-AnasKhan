var info_btn =  document.getElementById("info-btn") as HTMLButtonElement;
var edu_btn =  document.getElementById("edu-btn") as HTMLButtonElement;
var exper_btn =  document.getElementById("exper-btn") as HTMLButtonElement;
var skill_btn =  document.getElementById("skill-btn") as HTMLButtonElement;
var info_Section = document.querySelector(".info") as HTMLDivElement
var info_Section = document.querySelector(".info") as HTMLDivElement
var info_Section = document.querySelector(".info") as HTMLDivElement
var info_Section = document.querySelector(".info") as HTMLDivElement


info_btn.addEventListener("click", () => {
    info_btn.classList.add("active-btn");
    edu_btn.classList.remove("active-btn");
    exper_btn.classList.remove("active-btn");
    skill_btn.classList.remove("active-btn");
})


edu_btn.addEventListener("click", () => {
    info_btn.classList.remove("active-btn");
    edu_btn.classList.add("active-btn");
    exper_btn.classList.remove("active-btn");
    skill_btn.classList.remove("active-btn");
})


exper_btn.addEventListener("click", () => {
    info_btn.classList.remove("active-btn");
    edu_btn.classList.remove("active-btn");
    exper_btn.classList.add("active-btn");
    skill_btn.classList.remove("active-btn");
})


skill_btn.addEventListener("click", () => {
    info_btn.classList.remove("active-btn");
    edu_btn.classList.remove("active-btn");
    exper_btn.classList.remove("active-btn");
    skill_btn.classList.add("active-btn");
})

