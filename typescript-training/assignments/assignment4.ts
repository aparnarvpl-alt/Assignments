//creating the transcations array
const transcations: number[] =[50000, -2000, 3000, -15000, -200, -300, 4000, -3000];

//variable to store the amount credit and debit transcations
let totalCredits: number =0;
let totalDebits: number =0;
let totalCreditAmount: number =0;
let totalDebitAmount: number =0;
let suspicioustransaction: number=0;

for (const amount of transcations) {
    if (amount > 0) {
        totalCredits++;
        totalCreditAmount += amount;
        if (amount > 10000) {
            console.log(`Suspicious credit transcation with Amount: ${amount}`);
            suspicioustransaction++;
        }


    }else {
        totalDebits++;
        totalDebitAmount -= totalDebitAmount;
        if (amount < -10000) {
            console.log(`suspicious debit transaction with amount: ${amount}`);
            suspicioustransaction++;

        }

    }
}
//final balance 
const finalBalance: number = totalCreditAmount - totalDebitAmount;
console.log("-------- Transcation Summary ----");
console.log("Total number of credit transcations:", totalCredits);
console.log("Total number of debit transcations:", totalDebits);
console.log("Total amount credited:", totalCreditAmount);
console.log("Total amount debited:", totalDebitAmount);
console.log("Final remaining amount in the account:", finalBalance);
console.log("Total number of suspicious transcations:", suspicioustransaction);
