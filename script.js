class Calculator{
    constructor(previousOperateElement,currentOperateElement) {
    this.previousOperateElement=previousOperateElement
    this.currentOperateElement=currentOperateElement
    this.clear()

}

clear(){
    this.currentOperate=''
    this.previousOperate=''
    this.opertion=undefined
}
delete(){}
appendNumber(number){
    if(number==="." && this.currentOperate.includes('.')) // to make sure we add one periot only
        return
    this.currentOperate=this.currentOperate.toString() + number.toString()
}
chooseOperation(opertion){
    if(this.currentOperate ==='')
        return
    if(this.previousOperate !== ''){
        this.compute()
    }
   this.opertion=opertion
   this.previousOperate=this.currentOperate
   this.currentOperate= ''
 
}
compute(){}

updateDisplay(){
    this.currentOperateElement.innerText=this.currentOperate // figure where currentOperate comes from
    this.previousOperateElement.innerText=this.previousOperate
}


}


const numberButtons=document.querySelectorAll('[number]')
const operationButton=document.querySelectorAll('[opertion]')
const equalsButton=document.querySelector('[equals]')
const deleteButton=document.querySelector('[delete]')
const allClearButton=document.querySelector('[alllClear]')
const previousOperateElement=document.querySelector('[previous-operate]')
const currentOperateElement=document.querySelector('[current-operate]')

const calculator = new Calculator(previousOperateElement,currentOperateElement)

numberButtons.forEach(button => {
    button.addEventListener('click',() => {
        calculator.appendNumber(button.innerText)
        calculator.updateDisplay()

    })
})

operationButton.forEach(button => {
    button.addEventListener('click',() => {
        calculator.chooseOperation(button.innerText)
        calculator.updateDisplay()

    })
})
