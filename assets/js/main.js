// ZeroCores Multi-Tab Handler

function switchTab(tabId) {
    // Hide all contents
    const contents = document.querySelectorAll('.tab-content');
    contents.forEach(content => content.classList.remove('active'));

    // Deactivate all tab buttons
    const buttons = document.querySelectorAll('.tab-btn');
    buttons.forEach(btn => btn.classList.remove('active'));

    // Show target tab
    const targetContent = document.getElementById('tab-' + tabId);
    if (targetContent) targetContent.classList.add('active');

    // Activate button
    event.currentTarget.classList.add('active');
}

function copyCode(button) {
    const container = button.closest('.code-container');
    const codeText = container.querySelector('pre').innerText;
    
    navigator.clipboard.writeText(codeText).then(() => {
        const originalText = button.innerText;
        button.innerText = 'Copied!';
        button.style.backgroundColor = 'var(--tip-color)';
        button.style.color = '#000';
        
        setTimeout(() => {
            button.innerText = originalText;
            button.style.backgroundColor = 'var(--bg-card)';
            button.style.color = 'var(--text-main)';
        }, 2000);
    });
}

function filterPlugins() {
    const term = document.getElementById('pluginSearch').value.toLowerCase();
    const cards = document.querySelectorAll('.plugin-item-card');
    
    cards.forEach(card => {
        const text = card.innerText.toLowerCase();
        card.style.display = text.includes(term) ? 'block' : 'none';
    });
}
