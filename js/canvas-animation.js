// js/canvas-animation.js
document.addEventListener('DOMContentLoaded', function() {
    const canvas = document.getElementById('cells-canvas');
    const ctx = canvas.getContext('2d');
    
    function resizeCanvas() {
        canvas.width = canvas.offsetWidth;
        canvas.height = canvas.offsetHeight;
    }
    
    window.addEventListener('resize', resizeCanvas);
    resizeCanvas();
    
    const cells = [];
    const cellCount = Math.floor(canvas.width * canvas.height / 8000);
    
    const colors = [
        'rgba(200, 230, 255, 0.7)',
        'rgba(180, 210, 255, 0.7)',
        'rgba(220, 200, 255, 0.7)',
        'rgba(200, 220, 255, 0.7)'
    ];
    
    for (let i = 0; i < cellCount; i++) {
        cells.push({
            x: Math.random() * canvas.width,
            y: Math.random() * canvas.height,
            radius: 10 + Math.random() * 30,
            color: colors[Math.floor(Math.random() * colors.length)],
            speedX: (Math.random() - 0.6) * 0.6,
            speedY: (Math.random() - 0.6) * 0.6,
            angle: 0,
            rotationSpeed: (Math.random() - 0.5) * 0.02
        });
    }
    
    function drawCell(cell) {
        ctx.save();
        ctx.translate(cell.x, cell.y);
        ctx.rotate(cell.angle);
        
        ctx.beginPath();
        ctx.ellipse(0, 0, cell.radius, cell.radius * 0.8, 0, 0, Math.PI * 2);
        ctx.fillStyle = cell.color;
        ctx.fill();
        
        ctx.beginPath();
        ctx.arc(0, 0, cell.radius * 0.3, 0, Math.PI * 2);
        ctx.fillStyle = 'rgba(255, 255, 255, 0.8)';
        ctx.fill();
        
        ctx.beginPath();
        ctx.arc(cell.radius * 0.4, cell.radius * 0.3, cell.radius * 0.15, 0, Math.PI * 2);
        ctx.arc(-cell.radius * 0.3, -cell.radius * 0.2, cell.radius * 0.1, 0, Math.PI * 2);
        ctx.fillStyle = 'rgba(255, 255, 255, 0.6)';
        ctx.fill();
        
        ctx.restore();
    }
    
    function updateCells() {
        cells.forEach(cell => {
            cell.x += cell.speedX;
            cell.y += cell.speedY;
            cell.angle += cell.rotationSpeed;
            
            if (cell.x < 0 || cell.x > canvas.width) cell.speedX *= -1;
            if (cell.y < 0 || cell.y > canvas.height) cell.speedY *= -1;
        });
    }
    
    function animate() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        
        ctx.strokeStyle = 'rgba(200, 220, 255, 0.6)';
        ctx.lineWidth = 3;
        
        for (let i = 0; i < cells.length; i++) {
            for (let j = i + 1; j < cells.length; j++) {
                const dx = cells[i].x - cells[j].x;
                const dy = cells[i].y - cells[j].y;
                const distance = Math.sqrt(dx * dx + dy * dy);
                
                if (distance < 150) {
                    ctx.beginPath();
                    ctx.moveTo(cells[i].x, cells[i].y);
                    ctx.lineTo(cells[j].x, cells[j].y);
                    ctx.stroke();
                }
            }
        }
        
        cells.forEach(drawCell);
        updateCells();
        
        requestAnimationFrame(animate);
    }
    
    animate();
});