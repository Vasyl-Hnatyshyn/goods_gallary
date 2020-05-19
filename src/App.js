import React from 'react';
import './App.css';



class App extends React.Component {
    constructor(){
       super();
       this.state = {
           goods:[{name:"petro"},
               {name:"mykola"},
               {name:"ivan"},
               {name:"oleh"},
               {name:"roman"},
               ],

       }

    }


    filter=(e)=> {
        let input = e.target;
        let filter = input.value.toLowerCase();
        let filterItems = document.querySelectorAll('.card');
        console.log(filterItems)

        filterItems.forEach(item => {

            if (item.innerHTML.toLowerCase().indexOf(filter) > -1) {
                item.style.display = '';
            } else {
                item.style.display = 'none';
            }
        })
    }



    render() {
        
         
    return ( 
        
        <div className = "App">     

            <header>
                <input type="text"  id="search" onKeyUp={this.filter}/>
            </header>
       <section className="gallery">
           {this.state.goods.map((good)=>{
                   return (
                       <div className="card">
                           {good.name}
                       </div>
                   )






           })

           }




       </section>

        
        </div>
        
    );
    }
}
export default App;
