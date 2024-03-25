function calculateNetSalary() {
    let basicSalary = parseFloat(document.getElementsById('basic salary').value);
    let benefits = parseFloat(document.getElementById('benefits').value);

    let payee = calculatePayee(basicSalary);
    let nhifDeductions = calculateNHIF(basicSalary);
    let nssfDeductions = calculateNSSF(basicSalary);

    let grossSalary =basicSalary + benefits;
    let netSalary = grossSalary - payee - nhifDeductions - nssfDeductions;

    document.getElementById('net-salary-output').innerHTML = 
    <p>Gross Salary:$(grossSalary)</p>
    <p>Payee (Tax): ${payee}</p>
    <p>NHIF Deductions: ${nhifDeductions}</p>
    <P>NSSF Deductions: ${nssfDeductions</P>
    <p>Net Salary: ${netSalary</p>
    ;
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