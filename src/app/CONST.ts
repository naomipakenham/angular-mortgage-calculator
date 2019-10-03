export const MortgageLoan = {
  id: 'mortgageLoan',
  title: 'Mortgage Loan: €value',
  max: "1000000",
  min: "200000",
  step: "500",
  initialValue: "200000"
};

export const MonthlyRepayment = {
    id: 'monthlyRepayment',
    title: 'Monthly Repayment: €value',
    max: "5000",
    min: "1000",
    step: "100",
    initialValue: "1000"
};

export const InterestRate = {
    id: 'interestRate',
    title: 'Interest Rate: value%',
    max: "5",
    min: "2",
    step: "0.01",
    initialValue: "2"
};

export const days = [ 31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31 ];
