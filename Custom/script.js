// Sample product data for fashion store
const products = [
    {
        id: 1,
        name: "Baggy Cargo Pants",
        price: 59.99,
        category: "Pants",
        image: "images/1.jpg",
        description: "Comfortable baggy cargo pants with multiple pockets. Perfect for streetwear style.",
        rating: 4.5
    },
    {
        id: 2,
        name: "Oversized Hoodie",
        price: 49.50,
        category: "Hoodies",
        image: "images/2.jpg",
        description: "Cozy oversized hoodie with front pocket and ribbed cuffs. Available in multiple colors.",
        rating: 4.8
    },
    {
        id: 3,
        name: "Graphic T-Shirt",
        price: 29.99,
        category: "T-Shirts",
        image: "images/3.jpg",
        description: "100% cotton graphic t-shirt with unique print. Regular fit for everyday comfort.",
        rating: 4.3
    },
    {
        id: 4,
        name: "Denim Jacket",
        price: 79.99,
        category: "Jackets",
        image: "images/4.jpg",
        description: "Classic denim jacket with vintage wash. Perfect for layering in any season.",
        rating: 4.7
    },
    {
        id: 5,
        name: "Baggy Shorts",
        price: 39.99,
        category: "Shorts",
        image: "images/5.jpg",
        description: "Comfortable baggy shorts with drawstring waist. Ideal for summer days.",
        rating: 4.2
    },
    {
        id: 6,
        name: "Jogger Pants",
        price: 45.25,
        category: "Pants",
        image: "images/6.jpg",
        description: "Comfortable jogger pants with elastic cuffs and drawstring waist. Perfect for casual wear.",
        rating: 4.6
    },
    {
        id: 7,
        name: "Zip-Up Hoodie",
        price: 54.99,
        category: "Hoodies",
        image: "images/7.jpg",
        description: "Classic zip-up hoodie with front pockets. Made from soft, breathable fabric.",
        rating: 4.4
    },
    {
        id: 8,
        name: "Polo Shirt",
        price: 35.50,
        category: "T-Shirts",
        image: "images/8.jpg",
        description: "Classic polo shirt with embroidered logo. Perfect for casual and smart-casual occasions.",
        rating: 4.1
    },
    {
        id: 9,
        name: "Bomber Jacket",
        price: 89.99,
        category: "Jackets",
        image: "images/9.jpg",
        description: "Stylish bomber jacket with ribbed cuffs and hem. Lightweight yet warm.",
        rating: 4.9
    },
    {
        id: 10,
        name: "Cargo Shorts",
        price: 42.99,
        category: "Shorts",
        image: "images/10.jpg",
        description: "Utility cargo shorts with multiple pockets. Durable and functional for everyday wear.",
        rating: 4.0
    },
    {
        id: 11,
        name: "Wide Leg Jeans",
        price: 65.00,
        category: "Pants",
        image: "images/11.jpg",
        description: "Vintage-style wide leg jeans with high waist. Made from premium denim.",
        rating: 4.7
    },
    {
        id: 12,
        name: "Pullover Hoodie",
        price: 47.75,
        category: "Hoodies",
        image: "images/12.jpg",
        description: "Classic pullover hoodie with kangaroo pocket. Soft and comfortable for all-day wear.",
        rating: 4.5
    },
    {
        id: 13,
        name: "Long Sleeve Tee",
        price: 32.99,
        category: "T-Shirts",
        image: "images/13.jpg",
        description: "Basic long sleeve t-shirt made from stretch cotton. Perfect for layering.",
        rating: 4.2
    },
    {
        id: 14,
        name: "Windbreaker Jacket",
        price: 75.50,
        category: "Jackets",
        image: "images/14.jpg",
        description: "Lightweight windbreaker jacket with water-resistant finish. Perfect for transitional weather.",
        rating: 4.6
    },
    {
        id: 15,
        name: "Athletic Shorts",
        price: 35.00,
        category: "Shorts",
        image: "images/15.jpg",
        description: "Performance athletic shorts with moisture-wicking fabric. Ideal for sports and active wear.",
        rating: 4.3
    },
    {
        id: 16,
        name: "Corduroy Pants",
        price: 55.50,
        category: "Pants",
        image: "images/16.jpg",
        description: "Vintage-style corduroy pants with relaxed fit. Perfect for autumn and winter.",
        rating: 4.4
    },
    {
        id: 17,
        name: "Sweatshirt",
        price: 42.75,
        category: "Hoodies",
        image: "images/17.jpg",
        description: "Classic crewneck sweatshirt with ribbed cuffs and hem. Made from soft French terry.",
        rating: 4.8
    },
    {
        id: 18,
        name: "Tank Top",
        price: 24.99,
        category: "T-Shirts",
        image: "images/18.jpg",
        description: "Basic tank top made from breathable cotton. Perfect for layering or warm weather.",
        rating: 4.0
    }
];

// DOM Elements
const productsContainer = document.getElementById('products-container');
const cartCount = document.getElementById('cart-count');
const cartIcon = document.getElementById('cart-icon');
const cartDropdown = document.getElementById('cart-dropdown');
const cartItems = document.getElementById('cart-items');
const cartTotalPrice = document.getElementById('cart-total-price');
const buyBtn = document.getElementById('buy-btn');
const discountCodeInput = document.getElementById('discount-code-input');
const themeToggle = document.getElementById('theme-toggle');
const productModal = document.getElementById('product-modal');
const closeModal = document.getElementById('close-modal');
const modalProductName = document.getElementById('modal-product-name');
const modalProductImg = document.getElementById('modal-product-img');
const modalProductPrice = document.getElementById('modal-product-price');
const modalProductDesc = document.getElementById('modal-product-desc');
const modalRating = document.getElementById('modal-rating');
const addToCartModal = document.getElementById('add-to-cart-modal');
const offersContainer = document.getElementById('offers-container');
const offersPrevBtn = document.getElementById('offers-prev');
const offersNextBtn = document.getElementById('offers-next');
const searchInput = document.getElementById('search-input');
const searchBtn = document.getElementById('search-btn');
const categoryBtns = document.querySelectorAll('.category-btn');
const wishlistIcon = document.getElementById('wishlist-icon');
const wishlistDropdown = document.getElementById('wishlist-dropdown');
const wishlistItems = document.getElementById('wishlist-items');
const wishlistCount = document.getElementById('wishlist-count');
const wishlistTotalItems = document.getElementById('wishlist-total-items');
const sizeSelector = document.getElementById('size-selector');
const sizeChartBtn = document.getElementById('size-chart-btn');

// Cart and wishlist arrays
let cart = [];
let wishlist = [];
let currentProduct = null;
let filteredProducts = [...products];
let currentCategory = 'all';
let currentSearchTerm = '';
let selectedSize = 'M';

// Initialize the page
function init() {
    renderProducts();
    attachEventListeners();
    updateWishlist();
}

// Render products to the page
function renderProducts() {
    productsContainer.innerHTML = '';
    
    if (filteredProducts.length === 0) {
        productsContainer.innerHTML = `
            <div class="no-products">
                <h3>No products found</h3>
                <p>Try adjusting your search or filter criteria</p>
            </div>
        `;
        return;
    }
    
    filteredProducts.forEach(product => {
        const isInWishlist = wishlist.some(item => item.id === product.id);
        
        const productElement = document.createElement('div');
        productElement.classList.add('product');
        productElement.dataset.id = product.id;
        
        // Generate star rating HTML
        let starsHtml = '';
        const fullStars = Math.floor(product.rating);
        const hasHalfStar = product.rating % 1 !== 0;
        
        for (let i = 0; i < 5; i++) {
            if (i < fullStars) {
                starsHtml += '<i class="fas fa-star"></i>';
            } else if (i === fullStars && hasHalfStar) {
                starsHtml += '<i class="fas fa-star-half-alt"></i>';
            } else {
                starsHtml += '<i class="far fa-star"></i>';
            }
        }
        
        productElement.innerHTML = `
            <button class="wishlist-btn ${isInWishlist ? 'active' : ''}" data-id="${product.id}">
                <i class="fas fa-heart"></i>
            </button>
            <img src="${product.image}" alt="${product.name}" class="product-img">
            <div class="product-info">
                <h3 class="product-name">${product.name}</h3>
                <div class="product-rating">
                    ${starsHtml} <span>(${product.rating})</span>
                </div>
                <p class="product-price">$${product.price.toFixed(2)}</p>
                <span class="product-category">${product.category}</span>
            </div>
        `;
        
        productsContainer.appendChild(productElement);
    });
}

// Filter products by category
function filterProductsByCategory(category) {
    currentCategory = category;
    applyFilters();
}

// Filter products by search term
function filterProductsBySearch(searchTerm) {
    currentSearchTerm = searchTerm.toLowerCase();
    applyFilters();
}

// Apply both category and search filters
function applyFilters() {
    filteredProducts = products.filter(product => {
        const matchesCategory = currentCategory === 'all' || product.category === currentCategory;
        const matchesSearch = currentSearchTerm === '' || 
            product.name.toLowerCase().includes(currentSearchTerm) ||
            product.description.toLowerCase().includes(currentSearchTerm) ||
            product.category.toLowerCase().includes(currentSearchTerm);
        
        return matchesCategory && matchesSearch;
    });
    
    renderProducts();
}

// Attach event listeners
function attachEventListeners() {
    // Product click event
    productsContainer.addEventListener('click', (e) => {
        const productElement = e.target.closest('.product');
        const wishlistBtn = e.target.closest('.wishlist-btn');
        
        if (wishlistBtn) {
            e.stopPropagation();
            const productId = parseInt(wishlistBtn.dataset.id);
            toggleWishlist(productId);
            return;
        }
        
        if (productElement) {
            const productId = parseInt(productElement.dataset.id);
            currentProduct = products.find(p => p.id === productId);
            openProductModal(currentProduct);
        }
    });
    
    // Cart icon click event
    cartIcon.addEventListener('click', (e) => {
        e.stopPropagation();
        cartDropdown.classList.toggle('active');
        wishlistDropdown.classList.remove('active');
    });
    
    // Wishlist icon click event
    wishlistIcon.addEventListener('click', (e) => {
        e.stopPropagation();
        wishlistDropdown.classList.toggle('active');
        cartDropdown.classList.remove('active');
    });
    
    // Close modal event
    closeModal.addEventListener('click', closeProductModal);
    
    // Add to cart event
    addToCartModal.addEventListener('click', addToCart);
    
    // Buy button event
    buyBtn.addEventListener('click', purchaseItems);
    
    // Theme toggle event
    themeToggle.addEventListener('click', toggleTheme);
    
    // Close dropdowns when clicking outside
    document.addEventListener('click', (e) => {
        if (!cartIcon.contains(e.target) && !cartDropdown.contains(e.target)) {
            cartDropdown.classList.remove('active');
        }
        if (!wishlistIcon.contains(e.target) && !wishlistDropdown.contains(e.target)) {
            wishlistDropdown.classList.remove('active');
        }
    });
    
    // Apply discount code on Enter key
    discountCodeInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            applyDiscountCode();
        }
    });
    
    // Offers navigation
    offersPrevBtn.addEventListener('click', () => {
        offersContainer.scrollBy({ left: -320, behavior: 'smooth' });
    });
    
    offersNextBtn.addEventListener('click', () => {
        offersContainer.scrollBy({ left: 320, behavior: 'smooth' });
    });
    
    // Category filter buttons
    categoryBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            categoryBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            filterProductsByCategory(btn.dataset.category);
        });
    });
    
    // Search functionality
    searchBtn.addEventListener('click', () => {
        filterProductsBySearch(searchInput.value);
    });
    
    searchInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            filterProductsBySearch(searchInput.value);
        }
    });
    
    searchInput.addEventListener('input', () => {
        if (searchInput.value === '') {
            filterProductsBySearch('');
        }
    });
    
    // Size selection
    if (sizeSelector) {
        sizeSelector.addEventListener('click', (e) => {
            if (e.target.classList.contains('size-btn')) {
                sizeSelector.querySelectorAll('.size-btn').forEach(btn => {
                    btn.classList.remove('active');
                });
                e.target.classList.add('active');
                selectedSize = e.target.dataset.size;
            }
        });
    }
    
    // Size chart button
    if (sizeChartBtn) {
        sizeChartBtn.addEventListener('click', () => {
            alert('Size Guide:\n\nS: Chest 34-36", Waist 28-30"\nM: Chest 38-40", Waist 32-34"\nL: Chest 42-44", Waist 36-38"\nXL: Chest 46-48", Waist 40-42"');
        });
    }
}

// Open product modal
function openProductModal(product) {
    modalProductName.textContent = product.name;
    modalProductImg.src = product.image;
    modalProductPrice.textContent = `$${product.price.toFixed(2)}`;
    modalProductDesc.textContent = product.description;
    
    // Generate star rating
    let starsHtml = '';
    const fullStars = Math.floor(product.rating);
    const hasHalfStar = product.rating % 1 !== 0;
    
    for (let i = 0; i < 5; i++) {
        if (i < fullStars) {
            starsHtml += '<i class="fas fa-star"></i>';
        } else if (i === fullStars && hasHalfStar) {
            starsHtml += '<i class="fas fa-star-half-alt"></i>';
        } else {
            starsHtml += '<i class="far fa-star"></i>';
        }
    }
    
    modalRating.innerHTML = starsHtml + ` <span>${product.rating}/5</span>`;
    
    // Reset size selection
    if (sizeSelector) {
        sizeSelector.querySelectorAll('.size-btn').forEach(btn => {
            btn.classList.remove('active');
            if (btn.dataset.size === 'M') {
                btn.classList.add('active');
            }
        });
        selectedSize = 'M';
    }
    
    productModal.classList.add('active');
}

// Close product modal
function closeProductModal() {
    productModal.classList.remove('active');
}

// Toggle wishlist
function toggleWishlist(productId) {
    const product = products.find(p => p.id === productId);
    const index = wishlist.findIndex(item => item.id === productId);
    
    if (index === -1) {
        // Add to wishlist
        wishlist.push(product);
        showNotification(`${product.name} added to wishlist!`);
    } else {
        // Remove from wishlist
        wishlist.splice(index, 1);
        showNotification(`${product.name} removed from wishlist.`);
    }
    
    updateWishlist();
    renderProducts(); // Update heart icons
}

// Update wishlist UI
function updateWishlist() {
    wishlistCount.textContent = wishlist.length;
    wishlistTotalItems.textContent = wishlist.length;
    
    // Clear wishlist items
    wishlistItems.innerHTML = '';
    
    // Add items to wishlist dropdown
    wishlist.forEach((item, index) => {
        const wishlistItem = document.createElement('div');
        wishlistItem.classList.add('wishlist-item');
        wishlistItem.innerHTML = `
            <img src="${item.image}" alt="${item.name}">
            <div class="wishlist-item-info">
                <div class="wishlist-item-name">${item.name}</div>
                <div class="wishlist-item-price">$${item.price.toFixed(2)}</div>
            </div>
            <button class="remove-item" data-index="${index}">&times;</button>
        `;
        
        wishlistItems.appendChild(wishlistItem);
    });
    
    // Add event listeners to remove buttons
    document.querySelectorAll('.wishlist-item .remove-item').forEach(button => {
        button.addEventListener('click', (e) => {
            const index = parseInt(button.dataset.index);
            const removedItem = wishlist[index];
            wishlist.splice(index, 1);
            updateWishlist();
            renderProducts(); // Update heart icons
            showNotification(`${removedItem.name} removed from wishlist.`);
            e.stopPropagation();
        });
    });
}

// Add to cart function
function addToCart() {
    if (currentProduct) {
        // Add size information to product
        const productWithSize = {...currentProduct, size: selectedSize};
        cart.push(productWithSize);
        updateCart();
        closeProductModal();
        
        // Show notification
        showNotification(`${currentProduct.name} (Size: ${selectedSize}) added to cart!`);
    }
}

// Show notification
function showNotification(message) {
    const notification = document.createElement('div');
    notification.textContent = message;
    notification.style.position = 'fixed';
    notification.style.bottom = '20px';
    notification.style.right = '20px';
    notification.style.backgroundColor = 'var(--primary-color)';
    notification.style.color = 'white';
    notification.style.padding = '12px 24px';
    notification.style.borderRadius = '6px';
    notification.style.zIndex = '1000';
    notification.style.boxShadow = '0 4px 12px rgba(0, 0, 0, 0.2)';
    notification.style.fontWeight = '600';
    
    document.body.appendChild(notification);
    
    // Remove notification after 3 seconds
    setTimeout(() => {
        notification.style.opacity = '0';
        notification.style.transition = 'opacity 0.5s';
        setTimeout(() => {
            document.body.removeChild(notification);
        }, 500);
    }, 3000);
}

// Apply discount code
function applyDiscountCode() {
    const code = discountCodeInput.value.trim();
    if (code === 'BAGGY20') {
        // Apply 20% discount
        const total = calculateTotal();
        const discount = total * 0.2;
        const discountedTotal = total - discount;
        
        cartTotalPrice.textContent = `$${discountedTotal.toFixed(2)} (20% off applied)`;
        showNotification('Discount code applied! 20% off your order.');
    } else if (code) {
        showNotification('Invalid discount code. Please try again.');
    }
}

// Calculate cart total
function calculateTotal() {
    return cart.reduce((total, item) => total + item.price, 0);
}

// Update cart UI
function updateCart() {
    cartCount.textContent = cart.length;
    
    // Clear cart items
    cartItems.innerHTML = '';
    
    // Add items to cart
    let total = 0;
    cart.forEach((item, index) => {
        total += item.price;
        
        const cartItem = document.createElement('div');
        cartItem.classList.add('cart-item');
        cartItem.innerHTML = `
            <img src="${item.image}" alt="${item.name}">
            <div class="cart-item-info">
                <div class="cart-item-name">${item.name} (Size: ${item.size})</div>
                <div class="cart-item-price">$${item.price.toFixed(2)}</div>
            </div>
            <button class="remove-item" data-index="${index}">&times;</button>
        `;
        
        cartItems.appendChild(cartItem);
    });
    
    // Add event listeners to remove buttons
    document.querySelectorAll('.remove-item').forEach(button => {
        button.addEventListener('click', (e) => {
            const index = parseInt(button.dataset.index);
            const removedItem = cart[index];
            cart.splice(index, 1);
            updateCart();
            showNotification(`${removedItem.name} removed from cart.`);
            e.stopPropagation();
        });
    });
    
    // Update total price
    cartTotalPrice.textContent = `$${total.toFixed(2)}`;
    
    // Reset discount code
    discountCodeInput.value = '';
}

// Purchase items function
function purchaseItems() {
    if (cart.length === 0) {
        alert('Your cart is empty!');
        return;
    }
    
    alert('Thank you for your purchase! Your order has been placed.');
    cart = [];
    updateCart();
    cartDropdown.classList.remove('active');
}

// Toggle theme function
function toggleTheme() {
    document.body.classList.toggle('dark-theme');
    
    if (document.body.classList.contains('dark-theme')) {
        themeToggle.innerHTML = '<i class="fas fa-sun"></i>';
        localStorage.setItem('theme', 'dark');
    } else {
        themeToggle.innerHTML = '<i class="fas fa-moon"></i>';
        localStorage.setItem('theme', 'light');
    }
}

// Check for saved theme preference
const savedTheme = localStorage.getItem('theme');
if (savedTheme === 'dark') {
    document.body.classList.add('dark-theme');
    themeToggle.innerHTML = '<i class="fas fa-sun"></i>';
}

// Initialize the app
init();