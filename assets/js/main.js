// Efectos simples para la página

document.addEventListener('DOMContentLoaded', function() {
    console.log('Server boot completed. Welcome to nisamov@server');
    
    // Actualizar hora en el header
    function updateServerTime() {
        const now = new Date();
        const timeString = now.toLocaleTimeString('es-ES', {
            hour12: false,
            hour: '2-digit',
            minute: '2-digit',
            second: '2-digit'
        });
        
        const timeElement = document.querySelector('.server-time');
        if (timeElement) {
            timeElement.textContent = `TIME: ${timeString}`;
        }
    }
    
    // Añadir tiempo al header si existe
    const serverStats = document.querySelector('.server-stats');
    if (serverStats) {
        const timeElement = document.createElement('span');
        timeElement.className = 'stat server-time';
        serverStats.appendChild(timeElement);
        updateServerTime();
        setInterval(updateServerTime, 1000);
    }
    
    // Efecto de escritura para el primer prompt
    const firstCommand = document.querySelector('.command');
    if (firstCommand) {
        setTimeout(() => {
            firstCommand.style.animation = 'none';
            setTimeout(() => {
                firstCommand.style.animation = 'blink 1s infinite';
            }, 50);
        }, 100);
    }
    
    // Efecto hover para proyectos
    const projects = document.querySelectorAll('.project');
    projects.forEach(project => {
        project.addEventListener('mouseenter', function() {
            this.style.transform = 'translateX(5px)';
            this.style.transition = 'transform 0.2s ease, border-left-color 0.2s ease';
        });
        
        project.addEventListener('mouseleave', function() {
            this.style.transform = 'translateX(0)';
        });
    });
    
    // Efecto hover para conexiones
    const connections = document.querySelectorAll('.connection');
    connections.forEach(conn => {
        conn.addEventListener('mouseenter', function() {
            this.style.borderColor = '#444';
            this.style.transition = 'border-color 0.2s ease';
        });
        
        conn.addEventListener('mouseleave', function() {
            this.style.borderColor = '#222';
        });
    });
    
    // Actualizar stats del servidor aleatoriamente (simulación)
    function updateServerStats() {
        const stats = document.querySelectorAll('.stat:not(.server-time)');
        stats.forEach(stat => {
            if (stat.textContent.includes('CPU:')) {
                const cpu = Math.floor(Math.random() * 30) + 5;
                stat.textContent = `CPU: ${cpu}%`;
            } else if (stat.textContent.includes('RAM:')) {
                const ram = Math.floor(Math.random() * 40) + 20;
                stat.textContent = `RAM: ${ram}%`;
            } else if (stat.textContent.includes('UPTIME:')) {
                // Mantener el uptime fijo
                return;
            }
        });
    }
    
    // Actualizar cada 10 segundos
    setInterval(updateServerStats, 10000);
    
    // Añadir efecto de carga al scroll
    const terminalSections = document.querySelectorAll('.terminal-section');
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);
    
    terminalSections.forEach(section => {
        section.style.opacity = '0';
        section.style.transform = 'translateY(20px)';
        section.style.transition = 'opacity 0.3s ease, transform 0.3s ease';
        observer.observe(section);
    });
    
    // Añadir efecto de terminal al hacer clic en enlaces
    const links = document.querySelectorAll('a[href^="http"]');
    links.forEach(link => {
        link.addEventListener('click', function(e) {
            console.log(`Opening external link: ${this.href}`);
            // Permitir que el navegador maneje el enlace normalmente
        });
    });
    
    // Mostrar mensaje de bienvenida en consola
    console.log(`
    ███╗   ██╗██╗███████╗ █████╗ ███╗   ███╗ ██████╗ ██╗   ██╗
    ████╗  ██║██║██╔════╝██╔══██╗████╗ ████║██╔═══██╗██║   ██║
    ██╔██╗ ██║██║███████╗███████║██╔████╔██║██║   ██║██║   ██║
    ██║╚██╗██║██║╚════██║██╔══██║██║╚██╔╝██║██║   ██║██║   ██║
    ██║ ╚████║██║███████║██║  ██║██║ ╚═╝ ██║╚██████╔╝╚██████╔╝
    ╚═╝  ╚═══╝╚═╝╚══════╝╚═╝  ╚═╝╚═╝     ╚═╝ ╚═════╝  ╚═════╝
    
    Server: nisamov@server
    Status: ONLINE
    Uptime: 15 days, 7 hours, 23 minutes
    
    Type 'help' for available commands (just kidding, this is a static page)
    `);
});