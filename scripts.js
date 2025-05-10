// 이메일 보내기
document
  .getElementById("contact-button")
  .addEventListener("click", function () {
    const email = "jjoaa7@gmail.com";
    const subject = encodeURIComponent("Contact");
    const body = encodeURIComponent("Hello, JooHee! I'm contacting you because ...");
    window.open(
      `https://mail.google.com/mail/?view=cm&fs=1&to=${email}&su=${subject}&body=${body}`,
      "_blank"
    );
  });

// 탭 전환 기능
document.querySelectorAll(".tab").forEach((tab) => {
  tab.addEventListener("click", () => {
    document
      .querySelectorAll(".tab")
      .forEach((t) => t.classList.remove("active"));
    tab.classList.add("active");
    alert(`${tab.textContent.trim()} 탭을 클릭하셨네요! 추가 개발 예정입니다!`);
  });
});

// 이미지 전환 로직
let currentImageIndex = 0;
const totalImages = 10;

// 모든 이미지 요소 가져오기
const imageElements = [];
for (let i = 0; i < totalImages; i++) {
  imageElements.push(document.getElementById(`image${i}`));
}

// 스크롤 이벤트 리스너
window.addEventListener("scroll", () => {
  const sections = document.querySelectorAll(".section");

  // 현재 스크롤 위치 확인
  const scrollY = window.scrollY;

  // 각 섹션의 위치를 확인
  sections.forEach((section, index) => {
    const rect = section.getBoundingClientRect();

    // 섹션이 화면 중앙에 가까울 때 이미지 변경
    if (
      rect.top < window.innerHeight / 2 &&
      rect.bottom > window.innerHeight / 2
    ) {
      if (index < totalImages && index !== currentImageIndex) {
        // 현재 이미지 퇴장 애니메이션
        imageElements[currentImageIndex].classList.remove("active");
        imageElements[currentImageIndex].classList.add("exit");

        setTimeout(() => {
          // 이전 이미지 클래스 초기화
          imageElements[currentImageIndex].classList.remove("exit");
          imageElements[currentImageIndex].classList.add("enter");

          // 새 이미지 인덱스 설정
          currentImageIndex = index;

          // 새 이미지 등장 애니메이션
          imageElements[currentImageIndex].classList.remove("enter");
          imageElements[currentImageIndex].classList.add("active");
        }, 300); // 300ms 후 새 이미지 등장
      }
    }
  });
});

// 초기 세팅: 첫 번째 이미지를 제외한 모든 이미지에 enter 클래스 추가
for (let i = 1; i < totalImages; i++) {
  imageElements[i].classList.add("enter");
}
