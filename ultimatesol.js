 var notes = [{
	facility: "Paris",
  text: "Josephine",
  id: 1,
  docClass: "Document Type"
}, {
  facility: "London",
  text: "Matt",
  id: 2,
  docClass: "Records"
}, {
  facility: "Germany",
  text: "Karl",
  id: 3,
  docClass: "Document Type"
}];

//************************************
//*** filter notes then group them to be displayed ***
//other solution
let conditions = [
  {
    facility: ['London','Paris']
  }
 	,
  {
    docClass: ['Records']
  }
 ];

let filteredNotes = [];
let noteFiltered;
for(let i = 0; i < conditions.length; i++){
		//let x;
  _.forEach(conditions[i], (o) => {
  		let option = Object.keys(conditions[i]);
  	_.forEach(o, (c) => {
      let obj = {};
      obj[option] = c;
      noteFiltered = _.filter(notes, obj);
      let isNoteFiltered = _.isMatch(filteredNotes, noteFiltered);
      if(!isNoteFiltered){
      	filteredNotes.push(noteFiltered[0]);
      }
      //console.log(y);
      
    });
    
  });
  
}
console.log(filteredNotes);

//grouping
var sn = _.groupBy(filteredNotes, 'facility')
console.log(sn)

//************************************

//Compose object
enum filterOptions {
	facility,
  docClass,
  date,
  keyword
}

/*class myOptions{
	facility: string['d'];
  docClass: string[];
  date: string[];
  keyword: string[];
  
  constructor(facility: string[], docClass: string[], date: string[], keyword: string[]){
  	this.facility = facility;
   	this.docClass = docClass;
    this.date = date;
    this.keyword = keyword;
  }
}*/

/*let mainOptions = [
	{ facility: ['52']},
  { docClass: []},
  { date: []},
  { keyword: []}
];

//console.log(mainOptions[0].facility.push('d'))

$('input[type="checkbox"]').on('change', () => {
	let index = $('#mySelect')[0].selectedIndex;
  let option = filterOptions[index];
  let param = {};
  
  
	_.forEach($('.check-options input:checked'), (c) => {
  
    let value = $(c).parent().text();
    //param[option] = value;
    
    
    let currentOption = mainOptions[index][option];
    if (!_.includes(currentOption, value)){
    	currentOption.push(value);
      mainOptions[index][option] = currentOption;
    }
    //mainOptions.push(param);
    
    
    
    
    
    /*let x = _.find(mainOptions, (o) => {
    
    	return Object.keys(o) === option;
    
    });
    console.log(filterOptions.length)*/
    //console.log(mainOptions[index]);
    
    //this one if i am not allowed to create the structure of above
    //if(mainOptions.length === (Object.keys(filterOptions).length/2)){
      
    /*}
    else {
    	mainOptions.push(param);
    }*/
		 
    
  /*});
  console.log(mainOptions);
});*/

//console.log(mainOptions);



