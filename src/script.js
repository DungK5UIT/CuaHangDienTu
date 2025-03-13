let index = 0;
const slides = document.querySelector('.slides');
const images = document.querySelectorAll('.slides img');
const imagesPerSlide = 2; // Hiển thị 2 ảnh mỗi lần
const totalImages = images.length;
const totalSlides = totalImages / imagesPerSlide;

// Clone ảnh đầu và cuối để tạo hiệu ứng trượt mượt
for (let i = 0; i < imagesPerSlide; i++) {
    let firstClone = images[i].cloneNode(true);
    let lastClone = images[totalImages - 1 - i].cloneNode(true);
    slides.appendChild(firstClone);
    slides.insertBefore(lastClone, slides.firstChild);
}

const allImages = document.querySelectorAll('.slides img'); // Lấy lại danh sách ảnh sau khi clone

index = 1; // Bắt đầu từ ảnh đầu tiên sau clone
slides.style.transform = `translateX(${-index * 100}%)`;

function updateSlide() {
    slides.style.transition = "transform 0.5s ease-in-out";
    slides.style.transform = `translateX(${-index * 100}%)`;
}

function nextSlide() {
    if (index >= totalSlides) {
        index++;
        updateSlide();
        setTimeout(() => {
            slides.style.transition = "none";
            index = 1;
            slides.style.transform = `translateX(${-index * 100}%)`;
        }, 500);
    } else {
        index++;
        updateSlide();
    }
}

function prevSlide() {
    if (index <= 0) {
        index--;
        updateSlide();
        setTimeout(() => {
            slides.style.transition = "none";
            index = totalSlides - 1;
            slides.style.transform = `translateX(${-index * 100}%)`;
        }, 500);
    } else {
        index--;
        updateSlide();
    }
}
// Tự động chuyển ảnh mỗi 3 giây (chuyển 2 ảnh cùng lúc)
let autoSlide = setInterval(nextSlide, 3000);


const header = document.querySelector(".header-top");
const headerOffset = header.offsetTop; // Lấy vị trí ban đầu của header

window.addEventListener("scroll", function () {
    if (window.scrollY > headerOffset) {
        header.classList.add("header-fixed");
    } else {
        header.classList.remove("header-fixed");
    }
});
