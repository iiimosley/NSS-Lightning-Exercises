const workers = [
            { name: 'Bob', department: 'sales', title: 'sales manager'},
            { name: 'Tina', department: 'finance', title: 'director of finance'},
            { name: 'Randy', department: 'IT', title: 'hardware guy'},
            { name: 'Glenda', department: 'C-suite', title: 'CEO'}
        ];

for (i=0; i<=workers.length; i++) {
    console.log("Name:", workers[i].name + ",", "Job Title:", workers[i].title);
}