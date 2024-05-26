function toggleSidebar() {
    const sidebar = document.getElementsByClassName('dashboard-aside')?.[0];
    const windowWidth = window.innerWidth;

    if (windowWidth < 768) {
        sidebar.style.visibility = sidebar.style.visibility === 'hidden' ? 'visible' : 'hidden';
        sidebar.style.transform = sidebar.style.transform === 'translateX(-100%)' ? 'translateX(0)' : 'translateX(-100%)';
    }
}

function handleSidebar() {
    const sidebar = document.getElementsByClassName('dashboard-aside')?.[0];
    const windowWidth = window.innerWidth;

    if (windowWidth > 768) {
        sidebar.style.visibility = 'visible';
        sidebar.style.transform = 'translateX(0)';
    } else {
        sidebar.style.visibility = 'hidden';
        sidebar.style.transform = 'translateX(-100%)';
    }
}

window.addEventListener('resize', handleSidebar);