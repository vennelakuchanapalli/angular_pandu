import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'pipe',
  standalone: true,
  pure:false
})
export class PipePipe implements PipeTransform {
 
  value:any = []

  transform(value:any, argument:any , keyname:string) {
 if(argument === ""){
  
  return value
  
 }else{
  // to filter item in one component below  line we mention like[[[ item . name ]]],and  in transform we use only one argument...
  // inorder to use search  functionality in two diff components we use two arguments and in filter method we pass keyname 
return value.filter((item:any)=>item[keyname].toLowerCase().indexOf(argument.toLowerCase())>-1)
 }
  }

}
