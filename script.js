// document.addEventListener('DOMContentLoaded', () => {
            // ------------------------------------
            // Navbar Toggle Functionality
            // ------------------------------------
            const navToggle = document.querySelector('.nav-toggle');
            const navLinks = document.querySelector('.nav-links');

            navToggle.addEventListener('click', () => {
                navLinks.classList.toggle('open');
                const icon = navToggle.querySelector('i');
                icon.classList.toggle('fa-bars');
                icon.classList.toggle('fa-times');
            });

            // Close the mobile menu when a link is clicked
            navLinks.querySelectorAll('a').forEach(link => {
                link.addEventListener('click', () => {
                    if (window.innerWidth <= 1024) {
                        navLinks.classList.remove('open');
                        const icon = navToggle.querySelector('i');
                        icon.classList.remove('fa-times');
                        icon.classList.add('fa-bars');
                    }
                });
            });


            // ------------------------------------
            // 1. Animated Text Effect (Hero Section)
            // ------------------------------------
            const animatedTextElement = document.getElementById('animated-text');
            const fullText = "NURSING COURSE";
            const delay = 100; 
            let charIndex = 0;

            function typeText() {
                if (charIndex < fullText.length) {
                    animatedTextElement.textContent += fullText.charAt(charIndex);
                    charIndex++;
                    setTimeout(typeText, delay);
                }
            }

            animatedTextElement.textContent = "";
            typeText();


            // ------------------------------------
            // 2. Program Tabs Switching (Section 3)
            // ------------------------------------
            const tabButtons = document.querySelectorAll('.tab-button');
            const tabContents = document.querySelectorAll('.tab-content');

            tabButtons.forEach(button => {
                button.addEventListener('click', () => {
                    const programName = button.getAttribute('data-program');

                    // Deactivate all buttons and content
                    tabButtons.forEach(btn => btn.classList.remove('active'));
                    tabContents.forEach(content => content.classList.remove('active'));

                    // Activate the clicked button and corresponding content
                    button.classList.add('active');
                    document.getElementById(programName).classList.add('active');
                    
                    // Close all accordions when switching tabs
                    document.getElementById(programName).querySelectorAll('.accordion-body').forEach(body => {
                        body.classList.remove('open');
                        body.style.maxHeight = 0;
                        body.style.padding = '0 15px';
                    });
                });
            });

            // ------------------------------------
            // 3. Accordion Functionality (Section 3)
            // ------------------------------------
            const accordionHeaders = document.querySelectorAll('.accordion-header');

            accordionHeaders.forEach(header => {
                header.addEventListener('click', () => {
                    const body = header.nextElementSibling;
                    
                    // Close all other open accordion bodies in the *current* tab
                    const currentTab = header.closest('.tab-content');
                    currentTab.querySelectorAll('.accordion-body.open').forEach(openBody => {
                        if (openBody !== body) {
                            openBody.classList.remove('open');
                            openBody.style.maxHeight = 0;
                            openBody.style.padding = '0 15px';
                            // also remove active class from corresponding header
                            const openHeader = openBody.previousElementSibling;
                            if (openHeader && openHeader.classList) openHeader.classList.remove('active');
                        }
                    });

                    // Toggle the clicked accordion body
                    if (body.classList.contains('open')) {
                        body.classList.remove('open');
                        body.style.maxHeight = 0;
                        body.style.padding = '0 15px';
                        // update header caret state
                        header.classList.remove('active');
                    } else {
                        body.classList.add('open');
                        body.style.maxHeight = body.scrollHeight + 30 + "px";
                        body.style.padding = '15px';
                        // update header caret state
                        header.classList.add('active');
                    }
                });
            });

            // ------------------------------------
            // 4. Form Submission Handler (Optional)
            // ------------------------------------
            const form = document.getElementById('enquiry-form');
            form.addEventListener('submit', (e) => {
                e.preventDefault();
                
                alert("Thank you for your enquiry! We received your details and will contact you shortly.");
                
                form.reset(); 
            });
           
        // });