document.addEventListener('DOMContentLoaded', () => {
    const header = document.querySelector('header');
    const scrollToTopButton = document.querySelector('.scroll-to-top');
    const mobileMenuButton = document.querySelector('.mobile-menu-button');
    const navLinks = document.querySelector('.nav-links');
    const faqQuestions = document.querySelectorAll('.faq-question');


    window.addEventListener('scroll', () => {
        if (window.scrollY > 100) {
            header.style.transform = 'translateY(-100%)';
        } else {
            header.style.transform = 'translateY(0)';
        }


        if (window.scrollY > 300) {
            scrollToTopButton.style.opacity = '1';
        } else {
            scrollToTopButton.style.opacity = '0';
        }
    });


    scrollToTopButton.addEventListener('click', (e) => {
        e.preventDefault();
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });


    // Smooth scroll for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });


    // Mobile menu toggle
    mobileMenuButton.addEventListener('click', () => {
        navLinks.classList.toggle('show');
    });


    // Close mobile menu when a link is clicked
    navLinks.addEventListener('click', (e) => {
        if (e.target.tagName === 'A') {
            navLinks.classList.remove('show');
        }
    });


    // Preloader //
    const preloader = document.querySelector('#preloader');
        if (preloader) {
            window.addEventListener('load', () => {
                preloader.remove();
            });
    }


    // FAQ functionality
    faqQuestions.forEach(question => {
        question.addEventListener('click', () => {
            const answer = question.nextElementSibling;
            const isActive = question.classList.contains('active');


            // Close all other questions
            faqQuestions.forEach(q => {
                q.classList.remove('active');
                q.nextElementSibling.classList.remove('active');
            });


            // Toggle the clicked question
            if (!isActive) {
                question.classList.add('active');
                answer.classList.add('active');
            }
        });
    });


    // Reviews carousel functionality
    const reviewItems = document.querySelectorAll('.review-item');
    const prevReviewButton = document.querySelector('.prev-review');
    const nextReviewButton = document.querySelector('.next-review');
    let currentReviewIndex = 0;


    function showReview(index) {
        reviewItems.forEach((item, i) => {
            item.classList.toggle('active', i === index);
        });
    }


    function nextReview() {
        currentReviewIndex = (currentReviewIndex + 1) % reviewItems.length;
        showReview(currentReviewIndex);
    }


    function prevReview() {
        currentReviewIndex = (currentReviewIndex - 1 + reviewItems.length) % reviewItems.length;
        showReview(currentReviewIndex);
    }


    if (prevReviewButton && nextReviewButton) {
        prevReviewButton.addEventListener('click', prevReview);
        nextReviewButton.addEventListener('click', nextReview);
    }


    // Initialize the first review
    showReview(currentReviewIndex);


    // Tab functionality
    const tabButtons = document.querySelectorAll('.tab-button');
    const tabPanes = document.querySelectorAll('.tab-pane');


    tabButtons.forEach(button => {
        button.addEventListener('click', () => {
            const tabId = button.getAttribute('data-tab');
            
            tabButtons.forEach(btn => btn.classList.remove('active'));
            tabPanes.forEach(pane => pane.classList.remove('active'));


            button.classList.add('active');
            document.getElementById(tabId).classList.add('active');
        });
    });


    // Scroll animation
    const scrollAnimateElements = document.querySelectorAll('.scroll-animate');


    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('show');
            }
        });
    }, {
        threshold: 0.1
    });


    scrollAnimateElements.forEach(element => {
        observer.observe(element);
    });

});



