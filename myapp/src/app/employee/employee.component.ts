import { NONE_TYPE } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {

  empId: string = "";
  empName: string = "";
  empSal: string = "";
  empDep: string = "";

  uEmpId: string = "";
  uEmpName: string = "";
  uEmpSal: string = "";
  uEmpDep: string = "";

  display: string = 'none';
  emp=[
    {
      "empId":"1001",
      "empName":"Rahul",
      "empSal":"9000",
      "empDep":"Java"
    },
    {
      "empId":"1002",
      "empName":"Sachin",
      "empSal":"19000",
      "empDep":"OraApps"
    },
    {
      "empId":"1003",
      "empName":"Vikas",
      "empSal":"29000",
      "empDep":"BI"
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }

  addEmp(): void
  {
      this.emp.push({"empId":this.empId,"empName":this.empName,"empSal":this.empSal,"empDep":this.empDep});
  }

  updateEmp():void
  {
    for(var i=0;i<this.emp.length;i++)
    {
      if(this.emp[i].empId==this.uEmpId)
      {
        this.emp[i].empName=this.uEmpName;
        // alert(this.emp[i].empName);
        this.emp[i].empSal=this.uEmpSal;
        this.emp[i].empDep=this.uEmpDep;
        break;
      }
    }
    this.display='none';
  }
  
  onRemove(i:number){
    this.emp.splice(i,1);
  
  }
  onUpdate(i:number)
  {
    this.uEmpId = this.emp[i].empId;
    this.uEmpName = this.emp[i].empName;
    this.uEmpSal = this.emp[i].empSal;
    this.uEmpDep = this.emp[i].empDep;
    // alert(this.uEmpId);
   this.display='block';
    
  }
}
