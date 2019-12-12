//js
let people = [{
    facility: 'john',
    date: '40',
    active: 'yes'
  },
  {
    facility: 'james',
    date: '20',
    active: 'yes'
  }
];

/*let arr = [
    [{ facility: 'john' }, { facility: 'james' }],
    [{ date: '40'}, { date: '45' }]];
  */

/*for(let i = 0; i < Object.keys(options).length; i++){
	//console.log(options[i]);
}*/

//var filtered = _.intersectionBy(people, arr[0] , 'facility');
//console.log(filtered);

/*for(let o in options){
let param = null;
if(o === 1){
	param = 'name'
}
else {
param = 'age';
}

	//console.log(o.toString());
	//console.log(Object.values(options[o]));

	var filtered = _.intersectionBy(people, Object.values(options[o]), param);
	console.log(filtered);

}*/



$('#btnInfo').on('click', (e) => {



  _.forEach(Object.Keys(options), (o) => {

    //var filtered = _.intersectionBy(people, o, 'user');

    //console.log(o);

  });


  /*let filtered = _.filter(people, {
    name: ['john', 'James']
  });
  console.log(filtered);*/

});

//console.log(Object.keys(options));


// complex filter given a condition array
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

var conditionArr = [
  [{
    facility: "Paris"
  }, 
  {
    facility: "Germany"
  }],
  [{
    id: 3
  },
  {
  	id: 2
  }]
];

// Creation of object
let xoptions = [];
let obj = {};
// make if that evaluates select text and iterate/fill object based //on that name. at the ent push xoptions to main options array(will be a property).
obj.facility = 'Bosnia';
xoptions.push(obj);
//console.log(xoptions)
//let option = conditionArr[0];
//console.log(Object.keys(option[0]))


//var result = _.intersectionBy(users, conditionArr[0], 'user');
//console.log(result);

let result = [];
for (let i = 0; i < 2; i++) {
  /*if (i === 0) {
    param = 'user';
  } else if (i === 1) {
    param = 'age';
  }*/
  
  let option = conditionArr[i];
 // console.log(option)
  /*_.forEach(Object.keys(option[i]), (o) => {
  
  console.log(o)
  
  });*/
  
  //console.log(option[i])
	//console.log(Object.keys(option[i]))
  //console.log(Object.keys(option[i]))

  let x = _.intersectionBy(notes, option, Object.keys(option[i]).toString());
  result.push(x);

}

console.log(result);
