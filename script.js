'use strict';

// Add this class so reveal animations only hide items when JavaScript is available.
document.documentElement.classList.add('js');

const robotProfiles = {
  davinci: {
    title: 'da Vinci Surgical System',
    description: 'تطوّر Intuitive أنظمة da Vinci لمساعدة الجرّاح في إجراء عمليات طفيفة التوغل. يوجّه الجرّاح أدوات النظام من وحدة تحكم، وتتباين المزايا والاستخدامات حسب الطراز والإجراء والتصاريح التنظيمية. راجعي دائمًا المعلومات الرسمية الخاصة بالطراز المقصود.',
    source: 'https://www.intuitive.com/en-us/products-and-services/da-vinci'
  },
  mako: {
    title: 'Mako SmartRobotics',
    description: 'تقدّم Stryker نظام Mako لمساندة الجرّاح في تطبيقات محددة بجراحة العظام، ومنها بعض إجراءات استبدال المفاصل. تتضمن المنظومة في التطبيقات المعروضة تخطيطًا قائمًا على التصوير المقطعي وتقنيات مساعدة للتحكم؛ ولا يعني ذلك أنه مناسب لكل مريض أو لكل عملية.',
    source: 'https://www.stryker.com/in/en/joint-replacement/systems/Mako_SmartRobotics_Overview.html'
  },
  rosa: {
    title: 'ROSA Robotics',
    description: 'تضم محفظة ROSA من Zimmer Biomet أنظمة مخصصة لتطبيقات جراحية متعددة. وتذكر الشركة تطبيقات محددة في الركبة والورك والكتف والدماغ، مع اختلاف الوظائف والاستطبابات باختلاف النظام والإجراء والترخيص.',
    source: 'https://www.zimmerbiomet.com/en/products-and-solutions/specialties/robotics.html'
  },
  hugo: {
    title: 'Hugo Robotic-Assisted Surgery (RAS)',
    description: 'نظام معياري من Medtronic يهدف إلى مساعدة الأطباء المدرّبين في التحكم بالأدوات أثناء إجراءات محددة. تذكر وثائق الشركة الأمريكية استخدامه في إجراءات جراحية بولية طفيفة التوغل للبالغين؛ وقد تختلف الموافقات والاستخدامات المعتمدة من بلد إلى آخر.',
    source: 'https://www.medtronic.com/en-us/healthcare-professionals/specialties/surgical-robotics/hugo-robotic-assisted-surgery.html'
  }
};

// Mobile navigation opens/closes from a real button interaction.
const menuToggle = document.querySelector('#menu-toggle');
const primaryNav = document.querySelector('#primary-nav');

if (menuToggle && primaryNav) {
  menuToggle.addEventListener('click', () => {
    const isOpen = primaryNav.classList.toggle('is-open');
    menuToggle.setAttribute('aria-expanded', String(isOpen));
    menuToggle.setAttribute('aria-label', isOpen ? 'إغلاق القائمة' : 'فتح القائمة');
  });

  primaryNav.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', () => {
      primaryNav.classList.remove('is-open');
      menuToggle.setAttribute('aria-expanded', 'false');
      menuToggle.setAttribute('aria-label', 'فتح القائمة');
    });
  });
}

// Replace missing local photos with the matching visual placeholder.
document.querySelectorAll('img[data-fallback]').forEach((img) => {
  const showPlaceholder = () => {
    img.hidden = true;
    const placeholder = img.parentElement?.querySelector('.image-placeholder');
    if (placeholder) placeholder.classList.add('is-visible');
  };

  img.addEventListener('error', showPlaceholder, { once: true });
  if (img.complete && img.naturalWidth === 0) showPlaceholder();
});

// Progressive reveal. If IntersectionObserver isn't available, all content stays visible.
const revealItems = document.querySelectorAll('.reveal');
if ('IntersectionObserver' in window && !window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
  const revealObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12, rootMargin: '0px 0px -25px 0px' });
  revealItems.forEach((item) => revealObserver.observe(item));
} else {
  revealItems.forEach((item) => item.classList.add('is-visible'));
}

// Highlight the current section in the navigation as the reader scrolls.
const navLinks = [...document.querySelectorAll('.primary-nav a[href^="#"]')];
const observedSections = navLinks
  .map((link) => document.querySelector(link.getAttribute('href')))
  .filter(Boolean);
if ('IntersectionObserver' in window) {
  const sectionObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        navLinks.forEach((link) => {
          const active = link.getAttribute('href') === `#${entry.target.id}`;
          link.classList.toggle('active', active);
          if (active) link.setAttribute('aria-current', 'location');
          else link.removeAttribute('aria-current');
        });
      }
    });
  }, { rootMargin: '-25% 0px -65% 0px', threshold: 0 });
  observedSections.forEach((section) => sectionObserver.observe(section));
}

// System details dialog.
const robotDialog = document.querySelector('#robot-dialog');
const dialogTitle = document.querySelector('#dialog-title');
const dialogDescription = document.querySelector('#dialog-description');
const dialogSource = document.querySelector('#dialog-source');
const dialogClose = document.querySelector('#dialog-close');

function closeRobotDialog() {
  if (robotDialog?.open) robotDialog.close();
  document.body.classList.remove('dialog-open');
}

document.querySelectorAll('[data-robot]').forEach((button) => {
  button.addEventListener('click', () => {
    const profile = robotProfiles[button.dataset.robot];
    if (!profile || !robotDialog || !dialogTitle || !dialogDescription || !dialogSource) return;
    dialogTitle.textContent = profile.title;
    dialogDescription.textContent = profile.description;
    dialogSource.href = profile.source;
    if (typeof robotDialog.showModal === 'function') {
      robotDialog.showModal();
      document.body.classList.add('dialog-open');
    } else {
      window.open(profile.source, '_blank', 'noopener,noreferrer');
    }
  });
});

dialogClose?.addEventListener('click', closeRobotDialog);
robotDialog?.addEventListener('close', () => document.body.classList.remove('dialog-open'));
robotDialog?.addEventListener('click', (event) => {
  // A click on the dialog's empty area closes it; clicks on its content don't.
  if (event.target === robotDialog) closeRobotDialog();
});
document.addEventListener('keydown', (event) => {
  if (event.key === 'Escape') closeRobotDialog();
});

// Project team credits are static HTML so every visitor sees the same student names.

// Keep the displayed year current without an external dependency.
const currentYear = document.querySelector('#current-year');
if (currentYear) currentYear.textContent = String(new Date().getFullYear());

loadCredits();
