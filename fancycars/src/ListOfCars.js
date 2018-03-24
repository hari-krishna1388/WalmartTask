import React,{Component} from 'react'

class ListOfCars extends Component{
    constructor(props){
       super(props);
       this.state={
           listofcars:[],
           selectvalue:'name'
       }
       this.handleChange=this.handleChange.bind(this);
    }

    handleChange(e){
      if(e.target.value==='name'){
        let allCars = this.state.listofcars.slice();
        allCars.sort((a,b) => a.name.toUpperCase().localeCompare(b.name.toUpperCase()));
        this.setState({listofcars : allCars});
        //return this.state.listofcars.sort((a,b)=>a.name.toUpperCase().localeCompare(b.name.toUpperCase()));
      }
      else if(e.target.value==="availability"){
          let availabilityCars = this.state.listofcars.slice();
          availabilityCars.sort((a,b) => a.available > b.available);
          this.setState({listofcars : availabilityCars});
      }
    }

    componentDidMount(){
        let ROOT_URL = "https://api.jsonbin.io/b/5ab5affa2efae41465ebb65f";
        fetch(ROOT_URL)
          .then(data => data.json())
          .then(data => data.sort((a,b) => a.name > b.name))
          .then(data => this.setState({listofcars : data}));
    }

    render(){
        const listItems = this.state.listofcars.map((car) => <div className="row items-display" key={car.id}>
             <div className="col-md-5 col-sm-12 pr-0 pl-0">
                <a href=""> <img className="img-responsive"  src={car.img}  title={car.name} alt={car.name}/> </a>
             </div>
               <div className="col-md-7 col-sm-12 pr-0 pl-0 zw-sr-padding deviceCenter">
               <h3>{car.name}</h3>
               <h4>{car.make}</h4>
               <h2>{car.model}</h2>
                {car.available==="In Dealership"?<button className="btn btn-primary">submit</button>:""}
             </div>
             <hr/>
             <div className="clearfix"></div>
          </div>
      );

      return(
          <div className="container">
            <div className="choose-option">
              Select list:<select
                value={this.state.selectValue}
                onChange={this.handleChange} >
                <option value="name">name</option>
                <option value="availability">availability</option>
              </select>
            </div>
            <div className="clearfix"></div>
            <ul>{listItems}</ul>
        </div>
      )
    }
}

export default ListOfCars;
