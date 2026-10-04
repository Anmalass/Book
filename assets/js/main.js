// ZeroCores Documentation Main JS

document.addEventListener('DOMContentLoaded', () => {
    const menuToggle = document.getElementById('menuToggle');
    const sidebar = document.getElementById('sidebar');
    const overlay = document.getElementById('overlay');

    function toggleSidebar() {
        sidebar.classList.toggle('active');
        overlay.classList.toggle('active');
    }

    if (menuToggle) menuToggle.addEventListener('click', toggleSidebar);
    if (overlay) overlay.addEventListener('click', toggleSidebar);

    const searchInput = document.getElementById('searchInput');
    if (searchInput) {
        searchInput.addEventListener('keyup', function(e) {
            const term = e.target.value.toLowerCase();
            const sections = document.querySelectorAll('.doc-section');
            
            sections.forEach(section => {
                const text = section.innerText.toLowerCase();
                section.style.display = text.includes(term) ? 'block' : 'none';
            });
        });
    }

    document.querySelectorAll('.nav-links a').forEach(link => {
        link.addEventListener('click', () => {
            if (window.innerWidth < 992) toggleSidebar();
        });
    });
});

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
