import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-first',
  templateUrl: './first.component.html',
  styleUrls: ['./first.component.css']
})
export class FirstComponent implements OnInit {

  constructor() { }
  clickMessage = '';
  domArrayRef = [];
  onClickMe() {
    this.clickMessage = 'You are my hero!';
  }
  addRandomNode(){
    this.clickMessage = 'Button added';
  }
  removeRandomNode(){
    this.clickMessage = 'Button removed';
  }
  ngOnInit(): void {
  }

  addHelloWorld(){
    let tableRef = document.querySelector('table');
      let newRow = tableRef.insertRow(-1);
      let newCell = newRow.insertCell(0);
      let newText = document.createElement("LABEL");
      let linebreak = document.createElement("br");
      newText.innerHTML = "Randm Text Label";
      let newButton = document.createElement("BUTTON"); 
      newButton.innerHTML = "Generate Random Text";         
      newButton.addEventListener("click", function() {
        console.log("adding random text");
        let sampleTest = Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15);
        console.log(sampleTest);
        newText.innerHTML = Math.random().toString(36).substring(2, 15);
      });          
      newCell.appendChild(newText);
      newCell.appendChild(linebreak);
      newCell.appendChild(newButton);

      this.domArrayRef.push(newText);
      this.domArrayRef.push(linebreak);
      this.domArrayRef.push(newButton);
  }
  removeHelloWorld(){
    let tableRef = document.querySelector('table');
    // Delete second row
    tableRef.deleteRow(-1);
  }

}
