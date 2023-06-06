import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  name = '';
  visible: boolean = true;
  isEdit: boolean = false;
  isAnchor: boolean = false;

  onNameChange(val) {
    this.name = val;
  }

  toggle() {
    console.log('Clear Called');
    this.visible = !this.visible;
    this.isAnchor = !this.isAnchor;
  }

  getHyperLinkText(url) {
    console.log('Received URL :', url);
    let res = url.substring(url.lastIndexOf('/') + 1);
    console.log(res);
    return res;
  }

  onRightClick(e) {
    console.log('Right Clicked');
    this.isAnchor = !this.isAnchor;
    this.isEdit = true;
  }

  editLinkCell(data: any) {
    this.visible = true;
    this.isEdit = false;
    var cellId = data;
    console.log(cellId);
    setTimeout(() => {
      document.getElementById(cellId).focus();
      document
        .getElementById(cellId)
        .addEventListener('paste', ($event: any) => {
          $event.preventDefault();
          const text = $event.clipboardData.getData('text/plain');
          window.document.execCommand('insertText', false, text);
        });
    }, 10);
  }
}
