// interface  Test{
//   age: number
// }
// function hello(age: number=18):void{
//   console.log(age)
// }
// 类继承
// hello()
// let a:Test={age:22}
// console.log(a)
// class Mytest{
//   private name:string='11';
//   age:number=18;

//   protected height:number=180;
//   // constructor () {
//   //   this.age=18;
//   // }
// }
// class sontest extends Mytest{
//   sayhello=()=>{
//   this.height=1800;
//   console.log(this.height)
// }
// constructor () {
//   super()
// }
// }
// let codetest=new Mytest()
// let atest=new sontest()
// // console.log(codetest)
// console.log(atest.sayhello())

//泛型
interface Ichild{
  name:string,
  age:number
}
interface Imother{
  height:number,
  gender:string,
  salary:number
}
function  sayhello<T>(t:T){
  console.log(t)
}

sayhello<Ichild>({name:'ss',age:18})

sayhello<Imother>({height:175,gender:'females',salary:180000})
