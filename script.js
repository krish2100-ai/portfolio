const projects = [
  {
    title: 'Conversion rate systems',
    tag: 'CVR',
    summary:
      'Designed scalable modeling and experimentation frameworks for global digital growth and KPI-safe deployment.',
  },
  {
    title: 'Privacy-aware ML',
    tag: 'Data',
    summary:
      'Mitigated CVR signal drop by building resilient pipelines under browser privacy constraints and data masking.',
  },
  {
    title: 'Offline-to-online evaluation',
    tag: 'Evaluation',
    summary:
      'Created calibration and monitoring metrics that connect research improvements to macro business outcomes.',
  },
  {
    title: 'Global model transfer',
    tag: 'Scaling',
    summary:
      'Built cross-market feature and training strategies to improve generalization while reducing engineering overhead.',
  },
];

const projectList = document.getElementById('project-list');
if (projectList) {
  projectList.innerHTML = projects
    .map(
      (project) => `
        <article class="project-card">
          <div class="project-tag">${project.tag}</div>
          <h3>${project.title}</h3>
          <p>${project.summary}</p>
        </article>
      `,
    )
    .join('');
}

const yearEl = document.getElementById('year');
if (yearEl) {
  yearEl.textContent = new Date().getFullYear();
}

const carousel = document.querySelector('[data-carousel]');
if (carousel) {
  const slides = [...carousel.querySelectorAll('.slide')];
  const dots = [...carousel.querySelectorAll('.dot')];
  let activeIndex = 0;

  const showSlide = (index) => {
    activeIndex = (index + slides.length) % slides.length;
    slides.forEach((slide, i) => slide.classList.toggle('active', i === activeIndex));
    dots.forEach((dot, i) => dot.classList.toggle('active', i === activeIndex));
  };

  dots.forEach((dot, index) => {
    dot.addEventListener('click', () => {
      showSlide(index);
      clearInterval(carouselInterval);
      carouselInterval = setInterval(() => showSlide(activeIndex + 1), 4000);
    });
  });

  let carouselInterval = setInterval(() => showSlide(activeIndex + 1), 4000);
}


