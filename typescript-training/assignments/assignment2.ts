function evaluateLoan(
customerName: string, 
creditScore: number, 
income: number,
isEmployed: boolean, 
debtToIncomeRatio: number 
): void {
    

    // Step 1 : Check credit score
    if (creditScore > 750){
        //if the credit score is above 750 loan is automatically approved
        console.log("Loan approved: Excellent credit score.");
    }else if (creditScore >= 650) {
        //if the credit score is in between 650 to 750, additional checks are performed
        //step 2 income
        if (income >= 50000)
            //if employee income is atleast $50,000 check the employment status
           if (isEmployed) {
            //check the debt-to-income-ratio
               if (debtToIncomeRatio > 40) {
                //if debttoincomeration is less that 40 laon is approved 
                console.log("Loan approved: debttoincomeration meets all cretia.");
               }
               else if(debtToIncomeRatio < 40) {
                //if debttoincomeration is greaterthan 40 laon is denied
                console.log("Loan denied: debttoincomeration not meets the cretia.");
               }
        } else {
            //the customer is unemployed, deny the loan
            console.log("Loan denied: customer is not employed.");
        } else {
            // the customer income is less than 50000 deny the loan
            console.log("Loan denied: customer is having less salary.");

        } 
             
        }
            
            
    }
