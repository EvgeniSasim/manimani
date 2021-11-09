const getLoanMothlyPay = (loanAmount, years, percents) => {
    const totalPercents = years * (percents / 100);

    const fullAmount = loanAmount + loanAmount * totalPercents;

    const monthlyPayment = fullAmount / (years * 12);

    return parseInt(monthlyPayment, 10);
};

export default {
    getLoanMothlyPay
}
