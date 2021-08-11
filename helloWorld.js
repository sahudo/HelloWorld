import { LightningElement } from 'lwc';

export default class HelloWorld extends LightningElement {
    
    fullname='Dolly Sahu'

    title ="Salesforce developer"
    changeHandler(event){
        this.title = event.target.value

    }

}