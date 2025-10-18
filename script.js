// Data Science 2025 - Professional Analytics Dashboard
// Created by Senior Data Scientist with 15+ years experience

class ProfessionalDashboard {
    constructor() {
        this.data = null;
        this.charts = {};
        this.filteredData = null;
        this.searchTerm = '';
        this.sortBy = 'completion_rate';
        this.init();
    }

    async init() {
        this.showLoading();
        try {
            await this.loadData();
            this.processData();
            this.updateMetrics();
            this.createCharts();
            this.populateStudentsTable();
            this.generateInsights();
            this.setupEventListeners();
            this.updateLastUpdated();
            this.hideLoading();
        } catch (error) {
            console.error('Dashboard initialization failed:', error);
            this.showError('Failed to load dashboard data. Please check your data files.');
            this.hideLoading();
        }
    }

    showLoading() {
        const overlay = document.getElementById('loadingOverlay');
        if (overlay) overlay.style.display = 'flex';
    }

    hideLoading() {
        const overlay = document.getElementById('loadingOverlay');
        if (overlay) overlay.style.display = 'none';
    }

    async loadData() {
        try {
            // Try to load from completion_analysis.json first
            const response = await fetch('completion_analysis.json');
            if (!response.ok) {
                throw new Error('JSON file not found');
            }
            this.data = await response.json();
        } catch (error) {
            console.warn('JSON file not available, trying CSV fallback');
            await this.loadCSVData();
        }
    }

    async loadCSVData() {
        try {
            const response = await fetch('completion_analysis.csv');
            if (!response.ok) {
                throw new Error('CSV file not found');
            }

            const csvText = await response.text();
            this.data = this.parseCSV(csvText);
        } catch (error) {
            console.error('Failed to load data:', error);
            this.data = this.getFallbackData();
        }
    }

    parseCSV(csvText) {
        const lines = csvText.trim().split('\n');
        if (lines.length < 2) return {};

        const headers = lines[0].split(',').map(h => h.replace(/"/g, ''));
        const data = {};

        for (let i = 1; i < lines.length; i++) {
            const values = lines[i].split(',').map(v => v.replace(/"/g, ''));
            const student = values[0];

            data[student] = {
                student: student,
                completed: parseInt(values[1]) || 0,
                remaining: parseInt(values[2]) || 0,
                completion_rate: parseFloat(values[3]) || 0,
                total_files: parseInt(values[4]) || 0,
                status: values[5] || 'Unknown',
                assignment_numbers: values[6] ? values[6].split(',').map(n => parseInt(n.trim())) : []
            };
        }

        return data;
    }

    getFallbackData() {
        // Updated fallback data with 15 students (removed JuniorCarti, 2025-09-11)
        return {
            "wilberforce": {"student": "wilberforce", "completed": 17, "remaining": 5, "completion_rate": 77.3, "total_files": 22, "status": "Incomplete", "assignment_numbers": [1,2,4,5,6,7,9,10,11,12,13,15,17,18,19,21,22]},
            "Ridge_Junior": {"student": "Ridge_Junior", "completed": 16, "remaining": 6, "completion_rate": 72.7, "total_files": 30, "status": "Incomplete", "assignment_numbers": [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,21,22]},
            "Kigen": {"student": "Kigen", "completed": 14, "remaining": 8, "completion_rate": 63.6, "total_files": 19, "status": "Incomplete", "assignment_numbers": [1,2,3,4,7,9,10,11,12,13,15,17,19,21]},
            "Teddy": {"student": "Teddy", "completed": 14, "remaining": 8, "completion_rate": 63.6, "total_files": 20, "status": "Incomplete", "assignment_numbers": [1,2,4,8,10,11,12,13,14,15,16,17,18,21]},
            "bismark": {"student": "bismark", "completed": 14, "remaining": 8, "completion_rate": 63.6, "total_files": 24, "status": "Incomplete", "assignment_numbers": [1,2,4,5,6,8,9,13,14,15,17,18,19,22]},
            "Denzel": {"student": "Denzel", "completed": 13, "remaining": 9, "completion_rate": 59.1, "total_files": 16, "status": "Incomplete", "assignment_numbers": [1,2,6,7,8,10,11,12,13,15,16,17,18]},
            "Lamech": {"student": "Lamech", "completed": 13, "remaining": 9, "completion_rate": 59.1, "total_files": 18, "status": "Incomplete", "assignment_numbers": [1,2,6,7,8,10,11,12,13,14,15,16,20]},
            "Nehemiah": {"student": "Nehemiah", "completed": 13, "remaining": 9, "completion_rate": 59.1, "total_files": 24, "status": "Incomplete", "assignment_numbers": [1,5,6,7,8,11,15,16,17,18,19,20,21]},
            "Garvey": {"student": "Garvey", "completed": 11, "remaining": 11, "completion_rate": 50.0, "total_files": 27, "status": "Incomplete", "assignment_numbers": [1,2,3,4,6,8,10,17,18,21,22]},
            "Vincent": {"student": "Vincent", "completed": 11, "remaining": 11, "completion_rate": 50.0, "total_files": 17, "status": "Incomplete", "assignment_numbers": [1,5,7,8,10,11,12,13,14,15,16]},
            "Elsa": {"student": "Elsa", "completed": 10, "remaining": 12, "completion_rate": 45.5, "total_files": 41, "status": "Incomplete", "assignment_numbers": [1,7,10,12,13,15,17,18,21]},
            "Felix": {"student": "Felix", "completed": 8, "remaining": 14, "completion_rate": 36.4, "total_files": 15, "status": "Incomplete", "assignment_numbers": [1,2,6,7,11,14,17,21]},
            "john_onyancha": {"student": "john_onyancha", "completed": 4, "remaining": 18, "completion_rate": 18.2, "total_files": 12, "status": "Incomplete", "assignment_numbers": [1,4,18,22]},
            "Nahor": {"student": "Nahor", "completed": 3, "remaining": 19, "completion_rate": 13.6, "total_files": 16, "status": "Incomplete", "assignment_numbers": [1,4,14]},
            "Frank": {"student": "Frank", "completed": 0, "remaining": 22, "completion_rate": 0.0, "total_files": 0, "status": "Incomplete", "assignment_numbers": []}
        };
    }

    processData() {
        if (!this.data) return;

        // Convert to array for easier processing
        this.studentsArray = Object.values(this.data);
        this.filteredData = [...this.studentsArray];

        // Calculate additional metrics
        this.calculateAdditionalMetrics();
    }

    calculateAdditionalMetrics() {
        // Calculate assignment completion patterns
        this.assignmentStats = {};
        for (let i = 1; i <= 22; i++) {
            this.assignmentStats[i] = 0;
        }

        this.studentsArray.forEach(student => {
            if (student.assignment_numbers) {
                student.assignment_numbers.forEach(num => {
                    if (num >= 1 && num <= 22) {
                        this.assignmentStats[num]++;
                    }
                });
            }
        });

        // Calculate performance categories
        this.performanceCategories = {
            excellent: this.studentsArray.filter(s => s.completion_rate >= 80).length,
            good: this.studentsArray.filter(s => s.completion_rate >= 60 && s.completion_rate < 80).length,
            average: this.studentsArray.filter(s => s.completion_rate >= 40 && s.completion_rate < 60).length,
            needs_help: this.studentsArray.filter(s => s.completion_rate < 40).length
        };
    }

    updateMetrics() {
        if (!this.studentsArray) return;

        const totalStudents = this.studentsArray.length;
        const avgCompletion = this.studentsArray.reduce((sum, s) => sum + s.completion_rate, 0) / totalStudents;
        const highestScore = Math.max(...this.studentsArray.map(s => s.completion_rate));
        const topPerformer = this.studentsArray.find(s => s.completion_rate === highestScore);

        // Update metric cards with smooth animations
        this.animateValue('totalStudents', totalStudents);
        this.animateValue('avgCompletion', avgCompletion.toFixed(1));
        this.animateValue('highestScore', highestScore.toFixed(1));

        // Update top performer name
        const topPerformerElement = document.getElementById('topPerformerName');
        if (topPerformerElement) {
            topPerformerElement.textContent = topPerformer ? topPerformer.student : 'N/A';
        }

        // Update assignment count
        const totalAssignments = 22;
        document.getElementById('totalAssignments').textContent = totalAssignments;
    }

    animateValue(elementId, targetValue) {
        const element = document.getElementById(elementId);
        if (!element) return;

        const startValue = parseFloat(element.textContent) || 0;
        const difference = parseFloat(targetValue) - startValue;
        const duration = 1000; // 1 second
        const steps = 60;
        const stepValue = difference / steps;
        let currentStep = 0;

        const timer = setInterval(() => {
            currentStep++;
            const currentValue = startValue + (stepValue * currentStep);

            if (elementId.includes('Completion') || elementId.includes('Score')) {
                element.textContent = currentValue.toFixed(1) + (elementId.includes('Completion') ? '%' : '%');
            } else {
                element.textContent = Math.round(currentValue);
            }

            if (currentStep >= steps) {
                clearInterval(timer);
                if (elementId.includes('Completion') || elementId.includes('Score')) {
                    element.textContent = targetValue + (elementId.includes('Completion') ? '%' : '%');
                } else {
                    element.textContent = targetValue;
                }
            }
        }, duration / steps);
    }

    createCharts() {
        this.createCompletionChart();
        this.createAssignmentChart();
        this.createPerformanceChart();
        this.createWeeklyChart();
    }

    createCompletionChart() {
        const ctx = document.getElementById('completionChart').getContext('2d');

        const ranges = {
            '0-25%': this.studentsArray.filter(s => s.completion_rate < 25).length,
            '25-50%': this.studentsArray.filter(s => s.completion_rate >= 25 && s.completion_rate < 50).length,
            '50-75%': this.studentsArray.filter(s => s.completion_rate >= 50 && s.completion_rate < 75).length,
            '75-100%': this.studentsArray.filter(s => s.completion_rate >= 75).length
        };

        this.charts.completion = new Chart(ctx, {
            type: 'doughnut',
            data: {
                labels: Object.keys(ranges),
                datasets: [{
                    data: Object.values(ranges),
                    backgroundColor: [
                        '#ef4444', '#f59e0b', '#3b82f6', '#10b981'
                    ],
                    borderWidth: 3,
                    borderColor: '#ffffff',
                    hoverBorderWidth: 4
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                plugins: {
                    legend: {
                        position: 'bottom',
                        labels: {
                            padding: 20,
                            usePointStyle: true
                        }
                    },
                    tooltip: {
                        callbacks: {
                            label: function(context) {
                                const total = context.dataset.data.reduce((a, b) => a + b, 0);
                                const percentage = ((context.parsed / total) * 100).toFixed(1);
                                return `${context.label}: ${context.parsed} students (${percentage}%)`;
                            }
                        }
                    }
                },
                animation: {
                    animateScale: true,
                    animateRotate: true
                }
            }
        });
    }

    createAssignmentChart() {
        const ctx = document.getElementById('assignmentChart').getContext('2d');

        const labels = Object.keys(this.assignmentStats);
        const data = Object.values(this.assignmentStats);

        this.charts.assignment = new Chart(ctx, {
            type: 'bar',
            data: {
                labels: labels,
                datasets: [{
                    label: 'Students Completed',
                    data: data,
                    backgroundColor: 'rgba(59, 130, 246, 0.8)',
                    borderColor: 'rgba(59, 130, 246, 1)',
                    borderWidth: 2,
                    borderRadius: 4,
                    borderSkipped: false,
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                scales: {
                    y: {
                        beginAtZero: true,
                        ticks: {
                            stepSize: 1,
                            precision: 0
                        },
                        grid: {
                            color: 'rgba(0, 0, 0, 0.1)'
                        }
                    },
                    x: {
                        grid: {
                            display: false
                        }
                    }
                },
                plugins: {
                    legend: {
                        display: false
                    },
                    tooltip: {
                        callbacks: {
                            label: function(context) {
                                return `Assignment ${context.label}: ${context.parsed.y} students`;
                            }
                        }
                    }
                },
                animation: {
                    duration: 2000,
                    easing: 'easeInOutQuart'
                }
            }
        });
    }

    createPerformanceChart() {
        const ctx = document.getElementById('performanceChart').getContext('2d');

        // Get top 8 performers for radar chart
        const topPerformers = this.studentsArray
            .sort((a, b) => b.completion_rate - a.completion_rate)
            .slice(0, 8);

        this.charts.performance = new Chart(ctx, {
            type: 'radar',
            data: {
                labels: topPerformers.map(s => s.student.substring(0, 8)), // Truncate long names
                datasets: [{
                    label: 'Completion Rate (%)',
                    data: topPerformers.map(s => s.completion_rate),
                    backgroundColor: 'rgba(16, 185, 129, 0.2)',
                    borderColor: 'rgba(16, 185, 129, 1)',
                    borderWidth: 2,
                    pointBackgroundColor: 'rgba(16, 185, 129, 1)',
                    pointBorderColor: '#ffffff',
                    pointHoverBackgroundColor: '#ffffff',
                    pointHoverBorderColor: 'rgba(16, 185, 129, 1)'
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                scales: {
                    r: {
                        beginAtZero: true,
                        max: 100,
                        ticks: {
                            stepSize: 20
                        }
                    }
                },
                plugins: {
                    tooltip: {
                        callbacks: {
                            label: function(context) {
                                return `${context.label}: ${context.parsed.r.toFixed(1)}%`;
                            }
                        }
                    }
                }
            }
        });
    }

    createWeeklyChart() {
        const ctx = document.getElementById('weeklyChart').getContext('2d');

        // Simulate weekly progress data (in real app, this would come from historical data)
        const weeks = ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6'];
        const avgProgress = [15, 32, 45, 58, 72, 85]; // Mock data

        this.charts.weekly = new Chart(ctx, {
            type: 'line',
            data: {
                labels: weeks,
                datasets: [{
                    label: 'Average Class Progress (%)',
                    data: avgProgress,
                    backgroundColor: 'rgba(139, 92, 246, 0.1)',
                    borderColor: 'rgba(139, 92, 246, 1)',
                    borderWidth: 3,
                    fill: true,
                    tension: 0.4,
                    pointBackgroundColor: 'rgba(139, 92, 246, 1)',
                    pointBorderColor: '#ffffff',
                    pointHoverBackgroundColor: '#ffffff',
                    pointHoverBorderColor: 'rgba(139, 92, 246, 1)',
                    pointRadius: 6,
                    pointHoverRadius: 8
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                scales: {
                    y: {
                        beginAtZero: true,
                        max: 100,
                        ticks: {
                            callback: function(value) {
                                return value + '%';
                            }
                        }
                    }
                },
                plugins: {
                    tooltip: {
                        callbacks: {
                            label: function(context) {
                                return `Week ${context.dataIndex + 1}: ${context.parsed.y}%`;
                            }
                        }
                    }
                },
                animation: {
                    duration: 2000,
                    easing: 'easeInOutQuart'
                }
            }
        });
    }

    populateStudentsTable() {
        const tbody = document.getElementById('studentsTableBody');
        tbody.innerHTML = '';

        // Sort and filter data
        let displayData = [...this.filteredData];

        // Apply search filter
        if (this.searchTerm) {
            displayData = displayData.filter(student =>
                student.student.toLowerCase().includes(this.searchTerm.toLowerCase())
            );
        }

        // Apply sorting
        displayData.sort((a, b) => {
            switch (this.sortBy) {
                case 'name':
                    return a.student.localeCompare(b.student);
                case 'completed':
                    return b.completed - a.completed;
                case 'completion_rate':
                default:
                    return b.completion_rate - a.completion_rate;
            }
        });

        displayData.forEach((student, index) => {
            const row = document.createElement('tr');

            // Determine progress bar color
            let progressClass = 'low';
            if (student.completion_rate >= 75) progressClass = 'high';
            else if (student.completion_rate >= 50) progressClass = 'medium';

            // Determine status
            let statusClass = 'status-incomplete';
            let statusText = 'In Progress';
            if (student.completed >= 22) {
                statusClass = 'status-complete';
                statusText = 'Complete';
            } else if (student.completion_rate < 25) {
                statusClass = 'status-at-risk';
                statusText = 'Needs Help';
            }

            row.innerHTML = `
                <td>${index + 1}</td>
                <td>${student.student}</td>
                <td>${student.completed}/22</td>
                <td>${student.remaining}</td>
                <td>
                    <div class="progress-container">
                        <div class="progress-fill ${progressClass}" style="width: ${student.completion_rate}%"></div>
                    </div>
                    ${student.completion_rate.toFixed(1)}%
                </td>
                <td class="${statusClass}">${statusText}</td>
            `;

            tbody.appendChild(row);
        });
    }

    generateInsights() {
        this.generateFocusAreas();
        this.generateSuccessPatterns();
        this.generateChallenges();
        this.generateRecommendations();
    }

    generateFocusAreas() {
        const focusStudents = this.studentsArray
            .filter(s => s.completion_rate < 40)
            .sort((a, b) => a.completion_rate - b.completion_rate)
            .slice(0, 5);

        const focusDiv = document.getElementById('focusStudents');
        if (focusStudents.length > 0) {
            focusDiv.innerHTML = focusStudents
                .map(s => `<div class="insight-item">
                    <span class="name">${s.student}</span>
                    <span class="value">${s.completion_rate.toFixed(1)}%</span>
                </div>`)
                .join('');
        } else {
            focusDiv.innerHTML = '<p>All students performing well! 🎉</p>';
        }
    }

    generateSuccessPatterns() {
        const highPerformers = this.studentsArray.filter(s => s.completion_rate >= 60);
        const avgHighPerformer = highPerformers.length > 0
            ? (highPerformers.reduce((sum, s) => sum + s.completion_rate, 0) / highPerformers.length).toFixed(1)
            : 0;

        const patternsDiv = document.getElementById('successPatterns');
        patternsDiv.innerHTML = `
            <p><strong>${highPerformers.length} students</strong> achieving 60%+ completion</p>
            <p>High performers average <strong>${avgHighPerformer}%</strong> completion rate</p>
            <p>Most students successfully complete <strong>Assignment 1</strong></p>
        `;
    }

    generateChallenges() {
        const challengingAssignments = Object.entries(this.assignmentStats)
            .filter(([, count]) => count <= 3)
            .sort(([,a], [,b]) => a - b)
            .slice(0, 3);

        const challengesDiv = document.getElementById('challenges');
        challengesDiv.innerHTML = `
            <p>Assignments ${challengingAssignments.map(([num]) => num).join(', ')} completed by fewest students</p>
            <p><strong>${this.performanceCategories.needs_help} students</strong> need additional support</p>
            <p>Focus on early intervention for struggling students</p>
        `;
    }

    generateRecommendations() {
        const recommendations = [
            "Provide additional support for students below 40% completion",
            "Consider peer mentoring program for struggling students",
            "Review challenging assignments for clarity improvements",
            "Implement weekly check-ins for at-risk students",
            "Celebrate milestones for students reaching 50%+ completion"
        ];

        const recommendationsDiv = document.getElementById('recommendations');
        recommendationsDiv.innerHTML = recommendations
            .map(rec => `<div class="insight-item">${rec}</div>`)
            .join('');
    }

    setupEventListeners() {
        // Chart type toggles
        document.querySelectorAll('.chart-toggle').forEach(button => {
            button.addEventListener('click', (e) => {
                const chartType = e.target.dataset.chart;
                const chartContainer = e.target.closest('.chart-card');
                const chartId = chartContainer.querySelector('canvas').id;

                // Update active state
                chartContainer.querySelectorAll('.chart-toggle').forEach(btn => {
                    btn.classList.remove('active');
                });
                e.target.classList.add('active');

                // Switch chart type
                this.switchChartType(chartId, chartType);
            });
        });

        // Search functionality
        const searchInput = document.getElementById('studentSearch');
        if (searchInput) {
            searchInput.addEventListener('input', (e) => {
                this.searchTerm = e.target.value;
                this.populateStudentsTable();
            });
        }

        // Sort functionality
        const sortSelect = document.getElementById('sortBy');
        if (sortSelect) {
            sortSelect.addEventListener('change', (e) => {
                this.sortBy = e.target.value;
                this.populateStudentsTable();
            });
        }
    }

    switchChartType(chartId, newType) {
        const chart = this.charts[chartId.replace('Chart', '').toLowerCase()];
        if (!chart) return;

        // Destroy current chart
        chart.destroy();

        // Create new chart with same data but different type
        const ctx = document.getElementById(chartId).getContext('2d');

        // This would need to be implemented for each chart type
        // For now, just recreate the original chart
        this.createCharts();
    }

    updateLastUpdated() {
        const now = new Date();
        const formatted = now.toLocaleString();
        const lastUpdateElement = document.getElementById('lastUpdate');
        if (lastUpdateElement) {
            lastUpdateElement.innerHTML =
                `<i class="fas fa-clock"></i> Last updated: ${formatted}`;
        }
    }

    showError(message) {
        const container = document.querySelector('.dashboard-container');
        const errorDiv = document.createElement('div');
        errorDiv.style.cssText = `
            background: #fee2e2;
            color: #dc2626;
            padding: 20px;
            border-radius: 12px;
            margin: 20px 0;
            border: 1px solid #fecaca;
            text-align: center;
        `;
        errorDiv.innerHTML = `
            <i class="fas fa-exclamation-triangle" style="font-size: 2rem; margin-bottom: 10px;"></i>
            <h3 style="margin-bottom: 10px;">Dashboard Error</h3>
            <p>${message}</p>
            <p style="margin-top: 10px; font-size: 0.9rem;">
                Please ensure completion_analysis.json or completion_analysis.csv exists in the dashboard directory.
            </p>
        `;
        container.insertBefore(errorDiv, container.firstChild);
    }

    refresh() {
        this.showLoading();
        setTimeout(() => {
            this.init();
        }, 500);
    }

    exportData() {
        if (!this.data) {
            alert('No data available to export');
            return;
        }

        // Create CSV content
        const csvContent = this.convertToCSV(this.studentsArray);

        // Download file
        const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
        const link = document.createElement('a');
        const url = URL.createObjectURL(blob);
        link.setAttribute('href', url);
        link.setAttribute('download', `student_completion_${new Date().toISOString().split('T')[0]}.csv`);
        link.style.visibility = 'hidden';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    }

    convertToCSV(data) {
        if (!data || data.length === 0) return '';

        const headers = ['Student', 'Completed', 'Remaining', 'Completion_Rate', 'Total_Files', 'Status'];
        const csvRows = [headers.join(',')];

        data.forEach(student => {
            const row = [
                student.student,
                student.completed,
                student.remaining,
                student.completion_rate.toFixed(1),
                student.total_files,
                student.status
            ];
            csvRows.push(row.join(','));
        });

        return csvRows.join('\n');
    }
}

// Global functions for HTML onclick handlers
function refreshDashboard() {
    if (window.dashboard) {
        window.dashboard.refresh();
    }
}

function exportData() {
    if (window.dashboard) {
        window.dashboard.exportData();
    }
}

function showAbout() {
    alert('Data Science 2025 - Student Analytics Dashboard\n\nCreated by Senior Data Scientist\n15+ years of experience in data visualization and analytics\n\nFeatures:\n• Real-time student progress tracking\n• Interactive charts and visualizations\n• Performance insights and recommendations\n• Mobile-responsive design\n• Export capabilities');
}

// Initialize dashboard when page loads
document.addEventListener('DOMContentLoaded', () => {
    window.dashboard = new ProfessionalDashboard();

    // Auto-refresh every 5 minutes
    setInterval(() => {
        if (window.dashboard) {
            window.dashboard.refresh();
        }
    }, 5 * 60 * 1000);
});
