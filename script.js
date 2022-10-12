class Calculator{
    constructor(previousOperateElement,currentOperateElement) {
    this.previousOperateElement=previousOperateElement
    this.currentOperateElement=currentOperateElement
    this.clear()

}

clear(){
    this.currentOperate=''
    this.previousOperate=''
    this.operation=undefined
}
delete(){}
appendNumber(number){
    this.currentOperate=number
}
chooseOperation(operation){
   // this.currentOperate=operation

}
compute(){}

updateDisplay(){
    this.currentOperateElement.innerText=this.currentOperate // figure where currentOperate comes from

    //this.currentOperateElement.innerText=Text.currentOperate
}


}


const numberButtons=document.querySelectorAll('[number]')
const operationButton=document.querySelectorAll('[operation]')
const equalsButton=document.querySelector('[equals]')
const deleteButton=document.querySelector('[delete]')
const allClearButton=document.querySelector('[alllClear]')
const previousOperateElement=document.querySelector('[previous-operate]')
const currentOperateElement=document.querySelector('[current-operate]')

const calculator = new Calculator(previousOperateElement,currentOperateElement)

numberButtons.forEach(button => {
    button.addEventListener('click',() => {
        calculator.appendNumber(button.innerText)
      //  calculator.chooseOperation(button.innerText)
        calculator.updateDisplay()

    })
})
