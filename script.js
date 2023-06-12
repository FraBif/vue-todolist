const {createApp} = Vue;

createApp({
    data(){
        return{
            toDoList: [
                {
                    text : "Capire qualcosa di programmazione",
                    done : true,
                },
                {
                    text : "Provare a studiare la teoria",
                    done : false,
                },
                {
                    text : "Applicare la teoria alla pratica",
                    done : false,
                },
                {
                    text : "Non funziona nulla",
                    done : true,
                },
                {
                    text : "Piangere sul divano del Napoli",
                    done : false,
                },
            ],
            newListElement : "",
        }
    },
    methods:{
        removeElement(elementIndex){
            this.toDoList.splice(elementIndex, 1);
        },

        addNewListElement(){
            if (this.newListElement !== ""){
                this.toDoList.push({text:this.newListElement, done:false});
                this.newListElement= "";
            }
        },

        textLiner(element){
            element.done = !element.done;
        },
    },



}).mount("#app");