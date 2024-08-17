document.addEventListener('DOMContentLoaded', function() {
    
    const isLoggedIn = sessionStorage.getItem('isLoggedIn');

    if (!isLoggedIn) {
        window.location.href = 'login.html';
    }

    
    function logout() {
        sessionStorage.removeItem('isLoggedIn');
        window.location.href = 'login.html';
    }

    
    document.querySelector('.logout-button').addEventListener('click', logout);

    const learningData = {
        labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4'],
        datasets: [{
            label: 'Learning Progress',
            data: [20, 50, 80, 100], 
            backgroundColor: 'rgba(75, 192, 192, 0.2)',
            borderColor: 'rgba(75, 192, 192, 1)',
            borderWidth: 1
        }]
    };

    
    const config = {
        type: 'line',
        data: learningData,
        options: {
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        }
    };

    const learningProgressChart = new Chart(
        document.getElementById('learningProgressChart'),
        config
    );

    const timeManagementData = {
        labels: ['Study', 'Exercise', 'Sleep', 'Leisure', 'Other'],
        datasets: [{
            data: [30, 10, 35, 15, 10], 
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)'
            ],
            borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)'
            ],
            borderWidth: 1
        }]
    };

    const timeManagementConfig = {
        type: 'pie',
        data: timeManagementData,
    };

    
    const timeManagementChart = new Chart(
        document.getElementById('timeManagementChart'),
        timeManagementConfig
    );

    

    const tasks = document.querySelectorAll('.task');
    const dropzone = document.querySelector('.dropzone');

    tasks.forEach(task => {
        task.addEventListener('dragstart', function() {
            task.classList.add('dragging');
        });

        task.addEventListener('dragend', function() {
            task.classList.remove('dragging');
        });
    });

    dropzone.addEventListener('dragover', function(e) {
        e.preventDefault();
        const draggingTask = document.querySelector('.dragging');
        dropzone.appendChild(draggingTask);
    });
});
