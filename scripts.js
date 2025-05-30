// 이메일 보내기
document.addEventListener("DOMContentLoaded", function () {
  document
    .getElementById("contact-button")
    ?.addEventListener("click", function () {
      const email = "jjoaa7@gmail.com";
      const subject = encodeURIComponent("Contact");
      const body = encodeURIComponent(
        "Hello, JooHee! I'm contacting you because ..."
      );
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
      alert(
        `${tab.textContent.trim()} 탭을 클릭하셨네요! 추가 개발 예정입니다!`
      );
    });
  });

  // 이미지 전환 로직
  let currentImageIndex = 0;

  // 모든 이미지 요소 자동 수집
  const imageElements = Array.from(document.querySelectorAll(".slide-image"));
  const totalImages = imageElements.length;

  // 초기 세팅: 첫 번째 이미지를 제외한 나머지에 enter 클래스 추가
  for (let i = 1; i < totalImages; i++) {
    imageElements[i].classList.add("enter");
  }

  // 이미지 클릭 시 새 창으로 보기
  document.querySelectorAll("img").forEach((img) => {
    img.style.cursor = "pointer"; // 클릭 가능하게 표시
    img.addEventListener("click", () => {
      window.open(img.src, "_blank");
      console.log("click?");
    });
  });

  // 스크롤 이벤트 리스너
  window.addEventListener("scroll", () => {
    const sections = document.querySelectorAll(".section");
    const scrollY = window.scrollY;

    sections.forEach((section, index) => {
      const rect = section.getBoundingClientRect();

      if (
        rect.top < window.innerHeight / 2 &&
        rect.bottom > window.innerHeight / 2
      ) {
        if (index < totalImages && index !== currentImageIndex) {
          // 현재 이미지 퇴장 애니메이션
          imageElements[currentImageIndex].classList.remove("active");
          imageElements[currentImageIndex].classList.add("exit");

          setTimeout(() => {
            // 이전 이미지 초기화
            imageElements[currentImageIndex].classList.remove("exit");
            imageElements[currentImageIndex].classList.add("enter");

            // 새 이미지 설정
            currentImageIndex = index;
            imageElements[currentImageIndex].classList.remove("enter");
            imageElements[currentImageIndex].classList.add("active");
          }, 300); // 300ms 후 실행
        }
      }
    });
  });
});
