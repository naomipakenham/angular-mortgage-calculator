import { Component } from '@angular/core';
import { days, MortgageLoan, MonthlyRepayment, InterestRate } from './CONST';
import { angular } from 'angular';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent{
  sliders = [MortgageLoan, MonthlyRepayment, InterestRate];
  title = 'my-app';
  sliderValues = this.sliders.map(slider=>{return slider.min});
  isPanelOpen: boolean = true;
  appClass: string = 'App';

  graphData = {graphArray:[[0.08333333333333333, 198700, 0],[0.16666666666666666, 197400, 0],[0.25, 197068.8602739726, 968.8602739726024]
,[0.3333333333333333, 195768.8602739726, 968.8602739726024]], result:[]};
  constructor() {
    this.updateGraph();
   }
   recieveSliderEvent = (index, newSliderValue)=> {
       console.log(newSliderValue);
       this.sliderValues[index] = newSliderValue;
       this.updateGraph();
     }

  recieveIconEvent = () => {
      this.isPanelOpen = !this.isPanelOpen;
      this.appClass = this.isPanelOpen ? 'App' : 'App PanelClosed';
  }

  updateGraph(){
    const {compoundInterest, moneyLeft, months, graphArray} = this.calculateMortgage();
    let result = [];
    if(moneyLeft === 0){
     result[0] = 'Your mortage will be paid in';
     result[1] = Math.floor(months/12) + ' years ' + months%12 + ' months ' ;
     result[2] = 'acruing';
     result[3] = 'compound interest of €' + this.twoDPs(compoundInterest);
    } else {
     result[0] = 'Bad news, with the options you chose you ';
     result[1] = 'cannot pay off your mortgage in 35 years';
     result[2] = '(generally the maximum time for banks). You will still have ';
     result[3] = '€' + this.twoDPs(moneyLeft) + ' left to pay off';
    }
    this.graphData = {graphArray, result};
  }

  getInterestThisMonth(moneyLeft, month, interestRate){
 var interestThisMonth = 0;
 for(var i = 0; i < days[month%12]; i++){
  interestThisMonth += (moneyLeft * interestRate/100)/365;
 }
 return interestThisMonth;
}

makeMonthlyPayment(moneyLeft, monthlyRepayment){
 if(moneyLeft > monthlyRepayment){
  return moneyLeft - monthlyRepayment;
 } else {
  return 0;
 }
}

eachMonth(moneyLeft, compoundInterest, months, quaterlyInterest, interestRate, monthlyRepayment, graphArray){
 months++;
 var interestThisMonth = this.getInterestThisMonth(moneyLeft, months, interestRate);
 quaterlyInterest += interestThisMonth;
 moneyLeft = this.makeMonthlyPayment(moneyLeft, monthlyRepayment);

 var isQuaterOfYear = months%3 === 0;
 var isFinalMonth = !(moneyLeft > 0 && months < 420);

 if(isQuaterOfYear || isFinalMonth){
  if(moneyLeft > 0){
    moneyLeft+= quaterlyInterest;
  }
  compoundInterest += quaterlyInterest;
  quaterlyInterest = 0;
 }

 graphArray.push([months/12, moneyLeft, compoundInterest]);

 if(!isFinalMonth){
   return this.eachMonth(moneyLeft, compoundInterest, months, quaterlyInterest, interestRate, monthlyRepayment, graphArray);
 } else {
   return {moneyLeft, compoundInterest, months, graphArray};
 }
}

twoDPs(num){
 return num.toFixed(2);
}

  calculateMortgage(){
    const mortgageLoan = this.sliderValues[0];
    const monthlyRepayment = this.sliderValues[1];
    const interestRate = this.sliderValues[2];

 console.log('borrowed money: €' + mortgageLoan);
 console.log('Interest rate: ' + interestRate + '%');
 console.log('monthly payment: €' + monthlyRepayment);

 var mortgage = this.eachMonth(mortgageLoan, 0, 0, 0, interestRate, monthlyRepayment, []);
 const { months, moneyLeft, compoundInterest, graphArray } = mortgage;
 if(moneyLeft === 0){
  console.log('time: ' +  Math.floor(months/12) + ' years ' + months%12 + ' months')
  console.log('compound interest: €' + this.twoDPs(compoundInterest));
 } else {
  console.log('Warning: With the options you chose you cannot pay off your mortgage in 35 years. You will still have €' + this.twoDPs(moneyLeft) + ' left to pay off.')
 }
 return mortgage;
  }
}
