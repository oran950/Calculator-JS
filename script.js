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
delete(){
    this.currentOperate=this.currentOperate.toString().slice(0,-1)
}
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
compute(){
    let computation
    const previous = parseFloat(this.previousOperate)
    const current = parseFloat(this.currentOperate)
    if(isNaN(previous) || isNaN(current)) return
    switch(this.opertion){
        case '+':
            computation=previous+current
            break
        case '-':
            computation=previous-current
            break
        case '*':
            computation=previous*current
            break
        case '/':
            computation=previous/current
            break
        default: 
            return
                

    }
    this.currentOperate=computation
    this.opertion=undefined
    this.previousOperate=''
}
getDisplaynumber(number){//add a comma to number
    const floatNumber=parseFloat(number)
    if(isNaN(floatNumber)) return ''
    return floatNumber.toLocaleString('en')
}

updateDisplay(){
    this.currentOperateElement.innerText=this.getDisplaynumber(this.currentOperate) // figure where currentOperate comes from
    if(this.opertion !=null ) {
        this.previousOperateElement.innerText=`${this.getDisplaynumber(this.previousOperate)} ${this.opertion}`
    }
    else{
        this.previousOperateElement.innerText=''
    }
}


}


const numberButtons=document.querySelectorAll('[number]')
const operationButton=document.querySelectorAll('[opertion]')
const equalsButton=document.querySelector('[equals]')
const deleteButton=document.querySelector('[delete]')
const allClearButton=document.querySelector('[allClear]')
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

equalsButton.addEventListener('click',button => {
        calculator.compute()
        calculator.updateDisplay()

    })

allClearButton.addEventListener('click',button => {
        calculator.clear()
        calculator.updateDisplay()

    })
deleteButton.addEventListener('click',button => {
        calculator.delete()
        calculator.updateDisplay()

    })

