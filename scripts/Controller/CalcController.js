class CalcController{
    
    constructor(){   
        // Number display _variableName => Protected
        this._locale = "pt-BR";
        this._displayCalcEl = document.querySelector("#display");
        this._timeEl = document.querySelector("#hour");
        this._dateEl = document.querySelector("#date");
        this._currentDate; 
        this.initialize();
    }   

    initialize(){
   
        this.setDataDisplayTime();
        let interval = setInterval(()=>{
            this.setDataDisplayTime();
        }, 1000);

    }

    setDataDisplayTime(){
        this.displayDate = this.currentDate.toLocaleDateString(this._locale, {
            day: "2-digit",
            month: "short",
            year: "numeric"
        });
        this.displayTime = this.currentDate.toLocaleTimeString(this._locale);
    }

    set displayCalc(value){this._displayCalcEl.innerHTML = value;}
    get displayCalc(){return this._displayCalcEl.innerHTML;}

    set currentDate(Value){this._currentDate = value;}
    get currentDate(){return new Date();}

    set displayTime(value){this._timeEl.innerHTML = value;}
    get displayTime(){return this._timeEl.innerHTML;}

    set displayDate(value){this._dateEl.innerHTML = value;}
    get displayDate(){return this._dateEl.innerHTML;}
    

    


}