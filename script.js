// Function to create the repeating watermark background
function createWatermarkLayer() {
    const layer = document.getElementById('watermark-layer');
    const text = "Digital Dukaan  ";
    let content = "";
    
    // Fill the screen with enough text units to cover the rotation
    for (let i = 0; i < 200; i++) {
        content += `<div class="watermark-unit">${text}</div>`;
    }
    layer.innerHTML = content;
}

function generateSite() {
    const name = document.getElementById('shopName').value;
    const owner = document.getElementById('ownerName').value;
    const address = document.getElementById('address').value;
    const items = document.getElementById('itemsList').value;

    if (!name || !items) {
        alert("Please enter a shop name and at least one item!");
        return;
    }

    // Initialize the watermark
    createWatermarkLayer();

    // Switch Views
    document.getElementById('builder-view').style.display = 'none';
    document.getElementById('shop-view').style.display = 'block';

    // Set Header Data
    document.getElementById('out-name').innerText = name;
    document.getElementById('out-owner').innerText = "Proprietor: " + owner;
    document.getElementById('out-address').innerText = "📍 " + address;

    // Create Item Cards
    const grid = document.getElementById('out-grid');
    grid.innerHTML = "";
    const itemsArray = items.split(',');

    itemsArray.forEach(item => {
        if(item.trim()) {
            const card = document.createElement('div');
            card.className = "product-card";
            card.innerHTML = `
                <div style="font-size: 2.5rem; margin-bottom:15px;">🛍️</div>
                <h3>${item.trim()}</h3>
                <p style="color: #64748b; margin-top:10px;">Premium Quality</p>
                <button style="margin-top:20px; width:100%; padding:10px; border-radius:8px; border:1px solid #333; background:none; color:white;">View Item</button>
            `;
            grid.appendChild(card);
        }
    });

    window.scrollTo(0, 0);
}