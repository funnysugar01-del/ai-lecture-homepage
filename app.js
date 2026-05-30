if (window.GA_MEASUREMENT_ID) {
  const gaScript = document.createElement("script");
  gaScript.async = true;
  gaScript.src = `https://www.googletagmanager.com/gtag/js?id=${window.GA_MEASUREMENT_ID}`;
  document.head.appendChild(gaScript);
  window.dataLayer = window.dataLayer || [];
  window.gtag = function gtag() {
    window.dataLayer.push(arguments);
  };
  window.gtag("js", new Date());
  window.gtag("config", window.GA_MEASUREMENT_ID);
}

const methods = [
  {
    title: "개발자 출신의 실무형 설명",
    body: "자동화와 데이터 흐름을 비전공자도 이해할 수 있게 설명합니다.",
  },
  {
    title: "내 업무 예제로 실습",
    body: "반복되는 업무를 예제로 가져와 함께 정리하고 만들어봅니다.",
  },
  {
    title: "바이브 코딩으로 직접 구현",
    body: "자연어로 지시하고 수정하며 간단한 업무 도구를 만들어봅니다.",
  },
  {
    title: "결과물이 남는 수업",
    body: "강의 후 다시 열어보고 응용할 수 있는 실습물을 남깁니다.",
  },
];

const programs = [
  {
    tag: "업무개선 워크숍",
    title: "AI 혁신과제 구현 실습",
    body: "업무 개선 아이디어를 작은 프로토타입으로 만들어봅니다.",
  },
  {
    tag: "바이브 코딩",
    title: "자연어 기반 웹·앱 제작",
    body: "AI에게 기능을 지시하며 입력폼, 목록, 대시보드를 만들어봅니다.",
  },
  {
    tag: "ChatGPT 강사",
    title: "ChatGPT 실무 활용",
    body: "보고서, 행정 문서, 아이디어 정리에 바로 쓰는 프롬프트를 익힙니다.",
  },
  {
    tag: "생성형 AI 강의",
    title: "생성형 AI와 스마트워크",
    body: "검색, 요약, 기획, 문서화 업무를 빠르게 처리하는 방법을 다룹니다.",
  },
  {
    tag: "데이터분석 강의",
    title: "데이터 정리·분석",
    body: "엑셀 정리, 월별 분류, 대시보드 만들기를 실습합니다.",
  },
  {
    tag: "업무자동화 강의",
    title: "Google Apps Script 자동화",
    body: "자동 답장, 데이터 수집, 시트 저장 등 반복 업무를 줄입니다.",
  },
  {
    tag: "Python 데이터분석",
    title: "Python 기반 분석 입문",
    body: "데이터 불러오기, 정리, 시각화의 기본 흐름을 익힙니다.",
  },
  {
    tag: "AI 활용 교육",
    title: "홍보 콘텐츠와 교육 콘텐츠 제작",
    body: "홍보문, 카드뉴스, 교육 안내문 제작에 AI를 활용합니다.",
  },
];

const curriculums = [
  {
    label: "3일·21H",
    title: "AI 혁신과제 구현 워크숍",
    target: "기업 팀리더·실무자",
    body: "업무 개선 과제를 작게 만들어보고 발표까지 진행합니다.",
    outputs: ["과제 정의서", "시제품 설계서", "작동 프로토타입", "개선 로드맵"],
  },
  {
    label: "2일 워크샵",
    title: "AI 활용 역량강화 워크샵",
    target: "직무별 실무자",
    body: "직무별 AI 활용 사례를 익히고 실습 결과물로 연결합니다.",
    outputs: ["업무 적용 아이디어", "프롬프트 템플릿", "자동화 예제", "현업 적용 체크리스트"],
  },
  {
    label: "자동화",
    title: "업무자동화 제작 실습",
    target: "공공기관·기업·도서관",
    body: "데이터 수집, 자동 답장, 대시보드 자동화를 직접 만들어봅니다.",
    outputs: ["자동 수집 시트", "자동 답장 흐름", "업무 대시보드", "테스트 체크리스트"],
  },
];

const cases = [
  {
    org: "고양소방서",
    title: "ChatGPT를 활용한 소방 행정 업무",
    body: "재직자를 대상으로 행정 문서와 반복 업무에 ChatGPT를 적용하는 실습형 교육을 진행했습니다.",
  },
  {
    org: "에이텍 with 상공회의소",
    title: "AI 혁신과제 구현 워크숍",
    body: "현업 개선 과제를 직접 선정하고 바이브 코딩으로 업무용 시제품을 구현·발표하는 산출물 중심 워크숍을 진행했습니다.",
  },
  {
    org: "희림건축",
    title: "AI 활용 역량강화 2일 워크샵",
    body: "직무별 업무 맥락에 맞춰 생성형 AI 활용과 자동화 아이디어를 실습하는 2일 워크샵 과정으로 구성했습니다.",
  },
  {
    org: "도봉문화정보도서관",
    title: "AI 활용 도서관 홍보 콘텐츠 제작",
    body: "사서 대상 도서관 AI 교육으로 홍보 콘텐츠 기획과 제작 실습을 연결했습니다.",
  },
  {
    org: "전북특별자치도교육청교육연수원",
    title: "AI로 여는 스마트한 도서관",
    body: "사서 교육 과정에서 도서관 업무와 이용자 서비스에 맞춘 AI 활용 교육을 진행했습니다.",
  },
  {
    org: "서울기술교육센터",
    title: "생성형 AI를 활용한 스마트워크",
    body: "업무 생산성을 높이는 생성형 AI 활용법을 실무자 눈높이에 맞춰 실습했습니다.",
  },
  {
    org: "중소벤처기업부",
    title: "심층 리서치를 활용한 데이터 분석",
    body: "성인 재직자를 대상으로 리서치와 데이터 분석을 연결한 실무형 교육을 진행했습니다.",
  },
  {
    org: "성북길빛도서관",
    title: "모바일 생성형 AI 활용 교육",
    body: "모바일 환경에서도 쉽게 따라오는 생성형 AI 활용 교육을 구성했습니다.",
  },
  {
    org: "급식관리지원센터",
    title: "AI 기반 급식관리 지원 실무 역량 강화",
    body: "현장 데이터를 정리하고 업무 지원에 AI를 활용하는 실습 중심 교육을 진행했습니다.",
  },
];

const outcomes = [
  {
    title: "아이디어를 작동 결과물로 전환",
    body: "업무 개선 아이디어를 요구사항, 화면, 데이터 흐름, 테스트 가능한 프로토타입으로 구체화합니다.",
  },
  {
    title: "비개발자도 구현 감각 확보",
    body: "바이브 코딩 방식으로 AI에게 만들고 싶은 기능을 지시하고, 오류를 수정하며 결과물을 완성합니다.",
  },
  {
    title: "업무 문서 작성 속도 향상",
    body: "보고서, 공문, 홍보문, 안내문 초안을 더 빠르게 만들고 검토할 수 있습니다.",
  },
  {
    title: "반복 업무 자동화 감각",
    body: "메일 답장, 자료 수집, 시트 정리처럼 반복되는 업무를 자동화 관점으로 바라봅니다.",
  },
  {
    title: "데이터 기반 의사결정",
    body: "엑셀과 대시보드, Python 데이터분석을 통해 현황을 읽고 설명하는 힘을 기릅니다.",
  },
  {
    title: "데모와 개선 로드맵 완성",
    body: "Before/After, 기대효과, 한계, 다음 단계까지 정리해 내부 공유 가능한 데모 자료를 남깁니다.",
  },
];

const proofs = [
  {
    title: "개발자 출신 AI 강사",
    body: "프롬프트 사용법을 넘어 데이터 흐름, 자동화 구조, 구현 가능성을 함께 설명할 수 있습니다.",
  },
  {
    title: "공공기관·도서관 맞춤 경험",
    body: "공공기관 AI 강의와 도서관 AI 교육 사례가 있어 담당자의 목적과 제약을 이해합니다.",
  },
  {
    title: "현장형 커리큘럼",
    body: "자동화, 데이터 정리, 콘텐츠 제작, 업무앱 구현처럼 현장에서 바로 써볼 수 있는 실습으로 구성합니다.",
  },
  {
    title: "친절한 강의 톤",
    body: "처음 AI를 접하는 성인 학습자도 부담 없이 따라오도록 용어를 풀어 설명합니다.",
  },
];

const testimonials = [
  {
    quote: "실제 업무에 활용할 수 있는 유용한 팁과 활용방법을 많이 알려주셔서 유익했고, 과정을 함께 실습해볼 수 있어서 체득이 된 것 같다.",
    source: "오산도서관 사서교육 후기",
  },
  {
    quote: "도서관 운영에 유용한 정보가 많아서 유익했습니다.",
    source: "오산도서관 사서교육 후기",
  },
  {
    quote: "강사님께서 쉽게 내용을 설명해 주셔서 좀 더 수업에 집중할 수 있어서 좋았습니다.",
    source: "오산도서관 사서교육 후기",
  },
  {
    quote: "챗GPT 강의가 매우 유익합니다. 쓸모를 잘 알려주시네요.",
    source: "오산도서관 사서교육 후기",
  },
  {
    quote: "평소 챗을 활용하긴 했는데, 훨씬 더 구체적이고 다양하게 활용할 수 있음을 알게 되었어요.",
    source: "오산도서관 사서교육 후기",
  },
  {
    quote: "도서관에 맞춰 수업을 준비해주셨던 점이 정말 좋았습니다.",
    source: "오산도서관 사서교육 후기",
  },
];

function trackEvent(name, params = {}) {
  if (typeof window.gtag === "function") {
    window.gtag("event", name, params);
  }
}

function renderCards(containerId, items, template) {
  const container = document.getElementById(containerId);
  container.innerHTML = items.map(template).join("");
}

renderCards(
  "methods",
  methods,
  (item) => `
    <article class="method-item">
      <strong>${item.title}</strong>
      <span>${item.body}</span>
    </article>
  `
);

renderCards(
  "programCards",
  programs,
  (item) => `
    <article class="program-card">
      <span class="tag">${item.tag}</span>
      <h3>${item.title}</h3>
      <p>${item.body}</p>
    </article>
  `
);

renderCards(
  "curriculumCards",
  curriculums,
  (item) => `
    <article class="curriculum-card">
      <span class="tag">${item.label}</span>
      <h3>${item.title}</h3>
      <p>${item.body}</p>
      <strong>${item.target}</strong>
      <ul>
        ${item.outputs.map((output) => `<li>${output}</li>`).join("")}
      </ul>
    </article>
  `
);

renderCards(
  "caseCards",
  cases,
  (item) => `
    <article class="case-card">
      <span class="tag">${item.org}</span>
      <h3>${item.title}</h3>
      <p>${item.body}</p>
    </article>
  `
);

renderCards(
  "outcomeCards",
  outcomes,
  (item) => `
    <article class="outcome-card">
      <h3>${item.title}</h3>
      <p>${item.body}</p>
    </article>
  `
);

renderCards(
  "proofCards",
  proofs,
  (item) => `
    <article class="proof-item">
      <strong>${item.title}</strong>
      <span>${item.body}</span>
    </article>
  `
);

renderCards(
  "testimonialCards",
  testimonials,
  (item) => `
    <article class="testimonial-card">
      <p>"${item.quote}"</p>
    </article>
  `
);

document.querySelectorAll("[data-track]").forEach((element) => {
  element.addEventListener("click", () => {
    trackEvent("cta_click", {
      cta_id: element.dataset.track,
      cta_text: element.textContent.trim(),
    });
  });
});

document.querySelectorAll("[data-contact-phone]").forEach((element) => {
  const phone = window.CONTACT_PHONE;
  if (phone && phone !== "010-0000-0000") {
    const telHref = `tel:${phone.replaceAll("-", "")}`;
    const canCallDirectly =
      /Android|iPhone|iPad|iPod|Mobile/i.test(navigator.userAgent) ||
      (navigator.maxTouchPoints > 0 && window.matchMedia("(max-width: 820px)").matches);

    element.href = canCallDirectly ? telHref : "#phone-contact";
    element.addEventListener("click", (event) => {
      if (canCallDirectly) return;
      event.preventDefault();
      openPhoneModal(phone);
    });
  }
});

const openPhoneModal = (phone) => {
  let modal = document.querySelector("[data-phone-modal]");

  if (!modal) {
    modal = document.createElement("div");
    modal.className = "phone-modal";
    modal.dataset.phoneModal = "";
    modal.innerHTML = `
      <div class="phone-modal__panel" role="dialog" aria-modal="true" aria-labelledby="phoneModalTitle">
        <button class="phone-modal__close" type="button" aria-label="닫기">×</button>
        <p class="eyebrow">Phone Contact</p>
        <h2 id="phoneModalTitle">전화 문의</h2>
        <p>PC에서는 아래 번호로 연락해 주세요. 모바일에서는 전화 버튼을 누르면 바로 연결됩니다.</p>
        <strong class="phone-modal__number"></strong>
        <div class="phone-modal__actions">
          <button class="button primary" type="button" data-copy-phone>번호 복사</button>
          <a class="button secondary light" href="#contact">문의 폼 작성</a>
        </div>
        <p class="phone-modal__note" aria-live="polite"></p>
      </div>
    `;
    document.body.appendChild(modal);

    modal.addEventListener("click", (event) => {
      if (event.target === modal || event.target.closest(".phone-modal__close")) {
        modal.classList.remove("is-open");
      }
    });

    modal.querySelector("[data-copy-phone]").addEventListener("click", async () => {
      const note = modal.querySelector(".phone-modal__note");
      try {
        await navigator.clipboard.writeText(phone);
        note.textContent = "전화번호를 복사했습니다.";
      } catch (error) {
        note.textContent = "전화번호를 선택해 복사해 주세요.";
      }
    });
  }

  modal.querySelector(".phone-modal__number").textContent = phone;
  modal.classList.add("is-open");
};

document.querySelectorAll("[data-kakao-link]").forEach((element) => {
  if (window.KAKAO_COUNSEL_URL && !window.KAKAO_COUNSEL_URL.includes("YOUR_KAKAO_LINK")) {
    element.href = window.KAKAO_COUNSEL_URL;
  }
});

document.getElementById("inquiryForm").addEventListener("submit", async (event) => {
  event.preventDefault();
  const form = new FormData(event.currentTarget);
  const organization = form.get("organization");
  const contact = form.get("contact");
  const topic = form.get("topic");
  const message = form.get("message");
  const summary = `[강의 문의]\n기관명: ${organization}\n담당자 연락처: ${contact}\n관심 강의: ${topic}\n문의 내용: ${message}`;
  const note = document.getElementById("formNote");

  try {
    await navigator.clipboard.writeText(summary);
    note.textContent = "문의 요약이 복사되었습니다. 메일이나 메신저에 바로 붙여넣어 보낼 수 있습니다.";
  } catch (error) {
    note.textContent = "문의 요약이 준비되었습니다. 내용을 선택해 복사해 주세요.";
  }

  trackEvent("generate_lead", {
    inquiry_topic: topic,
    organization,
  });

  const mailto = `mailto:funnysugar01@naver.com?subject=${encodeURIComponent(
    `${organization} ${topic} 문의`
  )}&body=${encodeURIComponent(summary)}`;
  window.location.href = mailto;
});
