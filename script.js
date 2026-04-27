const form = document.getElementById('jobForm');
const list = document.getElementById('jobList');
let jobs = JSON.parse(localStorage.getItem('jobs')) || [];

function render() {
    list.innerHTML = '';
    jobs.forEach((job, index) => {
        list.innerHTML += `<tr>
            <td>${job.company}</td>
            <td>${job.role}</td>
            <td>${job.status}</td>
            <td><button class="btn-delete" onclick="remove(${index})">Delete</button></td>
        </tr>`;
    });
}

form.onsubmit = (e) => {
    e.preventDefault();
    const newJob = {
        company: document.getElementById('company').value,
        role: document.getElementById('role').value,
        status: document.getElementById('status').value
    };
    jobs.push(newJob);
    localStorage.setItem('jobs', JSON.stringify(jobs));
    render();
    form.reset();
};

function remove(index) {
    jobs.splice(index, 1);
    localStorage.setItem('jobs', JSON.stringify(jobs));
    render();
}

render();
