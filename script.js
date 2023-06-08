const {createApp} = Vue

createApp ({
    data () {
        return{
            toDoList: [{
                text: "Capire qualcosa della programmazione",
                done: false
            },
    
                {text: "Studiare la teoria",
                done: false
            },
    
                {text: "Applicare la teoria alla pratica",
                done: true
            },
    
                {text: "Non funziona nulla",
                done: true
            },
    
                {text: "Piangere sul divano del napoli",
                done: false
            }],
            newToDo  : "",
        }
    },
}).mount ("#app")




