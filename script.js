var info_btn = document.getElementById("info-btn");
var edu_btn = document.getElementById("edu-btn");
var exper_btn = document.getElementById("exper-btn");
var skill_btn = document.getElementById("skill-btn");
var info_Section = document.querySelector(".info");
var education_Section = document.querySelector(".education");
var experience_Section = document.querySelector(".experience");
var skills_Section = document.querySelector(".skills");
info_btn.addEventListener("click", function () {
    info_btn.classList.add("active-btn");
    edu_btn.classList.remove("active-btn");
    exper_btn.classList.remove("active-btn");
    skill_btn.classList.remove("active-btn");

    info_Section.classList.add("active-section");
    education_Section.classList.remove("active-section");
    experience_Section.classList.remove("active-section");
    skills_Section.classList.remove("active-section");

    document.body.style.background = "#262840";
});


edu_btn.addEventListener("click", function () {
    info_btn.classList.remove("active-btn");
    edu_btn.classList.add("active-btn");
    exper_btn.classList.remove("active-btn");
    skill_btn.classList.remove("active-btn");

    info_Section.classList.remove("active-section");
    education_Section.classList.add("active-section");
    experience_Section.classList.remove("active-section");
    skills_Section.classList.remove("active-section");
    
    document.body.style.background = "rgb(0, 0, 33)";
});


exper_btn.addEventListener("click", function () {
    info_btn.classList.remove("active-btn");
    edu_btn.classList.remove("active-btn");
    exper_btn.classList.add("active-btn");
    skill_btn.classList.remove("active-btn");
    
    info_Section.classList.remove("active-section");
    education_Section.classList.remove("active-section");
    experience_Section.classList.add("active-section");
    skills_Section.classList.remove("active-section");
    
    document.body.style.background = "#262840";
});


skill_btn.addEventListener("click", function () {
    info_btn.classList.remove("active-btn");
    edu_btn.classList.remove("active-btn");
    exper_btn.classList.remove("active-btn");
    skill_btn.classList.add("active-btn");
    
    info_Section.classList.remove("active-section");
    education_Section.classList.remove("active-section");
    experience_Section.classList.remove("active-section");
    skills_Section.classList.add("active-section");
    
    document.body.style.background = "rgb(0, 0, 33)";
});
