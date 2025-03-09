let i=0;
let self;
function person(name, age) {
    if(i==0){
        this.name = name;
        this.age=age;
        self=this;
        i++;
    }else{
        self.name=name;
        self.age=age;
        return self;
    }
}
export default person;