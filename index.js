function calculateNetSalary() {
    let basicSalary = parseFloat(document.getElementsById('basic salary').value);
    let benefits = parseFloat(document.getElementById('benefits').value);

    let payee = calculatePayee(basicSalary);
    let nhifDeductions = calculateNHIF(basicSalary);
    let nssfDeductions = calculateNSSF(basicSalary);

    let grossSalary =basicSalary + benefits;
    let netSalary = grossSalary - payee - nhifDeductions - nssfDeductions;

    document.getElementById('net-salary-output').innerHTML = `
   <P>Gross Salary: ${grossSalary</P>
    <p>payee (Tax): ${payee}</p>
    <p>NHIF Deductions: ${nhifDeductions}</p>
    <p>NSSF Deductions: ${nssfDeductions}</p>
    <P>Net Salary: ${netSalary}</P>
    `;

    
}

functioncalculatePayee(salary) {

    let employeeContribution = salary *0.02;
    let employerContribution = salary *0.04;
    let totalContribution = employmentContribution + employerContribution;
    return totalContribution;
}

function getNHIF(salary){

    let employeeContribution = salary * 0.05;
    let employerContribution = salary * 0.07;
    let totalContribution = employeeContribution + employerContribution;
    return totalContribution;
}

function getNSSF(salary){


    let employeeContribution = salary * 0.06;
    let employerContribution = salary * 0.06;
    let totalContribution employeeContribution + employerContribution;
    return totalContribution;git add 
}
