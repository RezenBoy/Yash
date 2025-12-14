
// Product Data from KE Wholesale Price List
const products = [
    // Collars & Leashes
    { name: "Nylon Dog Collar (Small)", category: "collar", icon: "🐕", sizes: "S", colors: "Multiple", price: "₹25", moq: "50 pcs" },
    { name: "Nylon Dog Collar (Medium)", category: "collar", icon: "🐕", sizes: "M", colors: "Multiple", price: "₹35", moq: "50 pcs" },
    { name: "Nylon Dog Collar (Large)", category: "collar", icon: "🐕", sizes: "L", colors: "Multiple", price: "₹45", moq: "50 pcs" },
    { name: "Leather Dog Collar (Small)", category: "collar", icon: "🐕‍🦺", sizes: "S", colors: "Brown, Black", price: "₹80", moq: "25 pcs" },
    { name: "Leather Dog Collar (Medium)", category: "collar", icon: "🐕‍🦺", sizes: "M", colors: "Brown, Black", price: "₹100", moq: "25 pcs" },
    { name: "Leather Dog Collar (Large)", category: "collar", icon: "🐕‍🦺", sizes: "L", colors: "Brown, Black", price: "₹120", moq: "25 pcs" },
    { name: "Dog Leash (4 feet)", category: "collar", icon: "🦮", sizes: "4 ft", colors: "Multiple", price: "₹40", moq: "50 pcs" },
    { name: "Dog Leash (6 feet)", category: "collar", icon: "🦮", sizes: "6 ft", colors: "Multiple", price: "₹55", moq: "50 pcs" },
    { name: "Retractable Dog Leash", category: "collar", icon: "🦮", sizes: "5m", colors: "Multiple", price: "₹150", moq: "20 pcs" },
    { name: "Cat Collar with Bell", category: "collar", icon: "🐈", sizes: "Universal", colors: "Assorted", price: "₹20", moq: "100 pcs" },

    // Beds
    { name: "Small Dog Bed", category: "bed", icon: "🛏️", sizes: "18x24 inch", colors: "Brown, Grey", price: "₹250", moq: "10 pcs" },
    { name: "Medium Dog Bed", category: "bed", icon: "🛏️", sizes: "24x30 inch", colors: "Brown, Grey", price: "₹350", moq: "10 pcs" },
    { name: "Large Dog Bed", category: "bed", icon: "🛏️", sizes: "30x36 inch", colors: "Brown, Grey", price: "₹500", moq: "10 pcs" },
    { name: "Cat Bed Round", category: "bed", icon: "😺", sizes: "16 inch dia", colors: "Pink, Blue", price: "₹200", moq: "15 pcs" },

    // Bowls & Feeders
    { name: "Stainless Steel Dog Bowl (Small)", category: "bowl", icon: "🍽️", sizes: "300ml", colors: "Steel", price: "₹60", moq: "30 pcs" },
    { name: "Stainless Steel Dog Bowl (Medium)", category: "bowl", icon: "🍽️", sizes: "500ml", colors: "Steel", price: "₹80", moq: "30 pcs" },
    { name: "Stainless Steel Dog Bowl (Large)", category: "bowl", icon: "🍽️", sizes: "800ml", colors: "Steel", price: "₹120", moq: "30 pcs" },
    { name: "Plastic Dog Bowl", category: "bowl", icon: "🥣", sizes: "500ml", colors: "Multiple", price: "₹35", moq: "50 pcs" },
    { name: "Elevated Dog Feeder", category: "bowl", icon: "🍽️", sizes: "Double Bowl", colors: "Black", price: "₹350", moq: "10 pcs" },
    { name: "Cat Food Bowl", category: "bowl", icon: "🐈", sizes: "200ml", colors: "Pink, Blue", price: "₹40", moq: "50 pcs" },

    // Toys
    { name: "Rubber Dog Chew Toy", category: "toy", icon: "🦴", sizes: "Medium", colors: "Assorted", price: "₹45", moq: "50 pcs" },
    { name: "Tennis Ball for Dogs (Pack of 3)", category: "toy", icon: "🎾", sizes: "Standard", colors: "Yellow", price: "₹60", moq: "30 pcs" },
    { name: "Rope Tug Toy", category: "toy", icon: "🪢", sizes: "12 inch", colors: "Multi", price: "₹50", moq: "40 pcs" },
    { name: "Squeaky Plush Toy", category: "toy", icon: "🧸", sizes: "8-10 inch", colors: "Assorted", price: "₹70", moq: "30 pcs" },
    { name: "Interactive Puzzle Toy", category: "toy", icon: "🧩", sizes: "Medium", colors: "Multiple", price: "₹180", moq: "15 pcs" },
    { name: "Cat Feather Wand", category: "toy", icon: "🪶", sizes: "18 inch", colors: "Assorted", price: "₹35", moq: "50 pcs" },
    { name: "Cat Ball Set (Pack of 6)", category: "toy", icon: "⚽", sizes: "Small", colors: "Colorful", price: "₹40", moq: "40 pcs" },
    { name: "Catnip Toy", category: "toy", icon: "🌿", sizes: "Small", colors: "Various", price: "₹30", moq: "60 pcs" },

    // Other Accessories
    { name: "Dog Harness (Small)", category: "other", icon: "🦺", sizes: "S", colors: "Multiple", price: "₹120", moq: "25 pcs" },
    { name: "Dog Harness (Medium)", category: "other", icon: "🦺", sizes: "M", colors: "Multiple", price: "₹150", moq: "25 pcs" },
    { name: "Dog Harness (Large)", category: "other", icon: "🦺", sizes: "L", colors: "Multiple", price: "₹200", moq: "20 pcs" },
    { name: "Pet Grooming Brush", category: "other", icon: "🪮", sizes: "Standard", colors: "Blue, Pink", price: "₹65", moq: "30 pcs" },
    { name: "Nail Clipper for Pets", category: "other", icon: "✂️", sizes: "Medium", colors: "Steel", price: "₹90", moq: "25 pcs" },
    { name: "Pet Waste Bags (Roll of 20)", category: "other", icon: "🗑️", sizes: "Standard", colors: "Black", price: "₹25", moq: "100 rolls" },
    { name: "Pet Travel Water Bottle", category: "other", icon: "💧", sizes: "500ml", colors: "Blue, Pink", price: "₹120", moq: "20 pcs" },
    { name: "Dog Muzzle", category: "other", icon: "🐕", sizes: "Adjustable", colors: "Black", price: "₹85", moq: "30 pcs" },
    { name: "Pet ID Tag", category: "other", icon: "🏷️", sizes: "Small", colors: "Various", price: "₹15", moq: "200 pcs" },
    { name: "Cat Scratching Post", category: "other", icon: "🪵", sizes: "18 inch", colors: "Brown", price: "₹280", moq: "10 pcs" },
];

// Render Products
function renderProducts(filter = 'all') {
    const grid = document.getElementById('productsGrid');
    grid.innerHTML = '';

    products.forEach(product => {
        if (filter === 'all' || product.category === filter) {
            const card = document.createElement('div');
            card.className = 'product-card';
            card.setAttribute('data-category', product.category);

            card.innerHTML = `
                <div class="product-header">
                    <div class="product-image">${product.icon}</div>
                    <span class="wholesale-badge">Wholesale</span>
                </div>
                <h3>${product.name}</h3>
                <div class="product-details">
                    <div class="detail-row">
                        <span class="detail-label">Size:</span>
                        <span class="detail-value">${product.sizes}</span>
                    </div>
                    <div class="detail-row">
                        <span class="detail-label">Colors:</span>
                        <span class="detail-value">${product.colors}</span>
                    </div>
                    <div class="detail-row">
                        <span class="detail-label">MOQ:</span>
                        <span class="detail-value">${product.moq}</span>
                    </div>
                    <div class="detail-row">
                        <span class="detail-label">Price:</span>
                        <span class="detail-value price">${product.price}<span id="piece">/unit</span></span>
                    </div>
                </div>
            `;

            grid.appendChild(card);
        }
    });
}

// Initialize products on page load
renderProducts();

// Smooth scrolling
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            const headerOffset = 80;
            const elementPosition = target.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
            window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
            document.querySelector('.nav-links').classList.remove('active');
        }
    });
});

function scrollToSection(sectionId) {
    const target = document.getElementById(sectionId);
    if (target) {
        const headerOffset = 80;
        const elementPosition = target.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
        window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
    }
}

// Mobile menu toggle
const menuToggle = document.querySelector('.menu-toggle');
if (menuToggle) {
    menuToggle.addEventListener('click', () => {
        document.querySelector('.nav-links').classList.toggle('active');
    });
}


// Product filtering
document.querySelectorAll('.filter-btn').forEach(button => {
    button.addEventListener('click', () => {
        document.querySelectorAll('.filter-btn').forEach(btn => btn.classList.remove('active'));
        button.classList.add('active');
        const filter = button.getAttribute('data-category');
        renderProducts(filter);
    });
});
// Contact form submission
document.getElementById('contactForm').addEventListener('submit', function (e) {
    e.preventDefault();
    const formMessage = document.getElementById('formMessage');
    formMessage.className = 'form-message';
    formMessage.style.display = 'none';

    // Simulate form submission
    setTimeout(() => {
        formMessage.textContent = 'Thank you for contacting us! We will get back to you shortly.';
        formMessage.classList.add('success');
        formMessage.style.display = 'block';
        this.reset();
    }, 1000);
});
// Set current year in footer
document.getElementById('year').textContent = new Date().getFullYear();