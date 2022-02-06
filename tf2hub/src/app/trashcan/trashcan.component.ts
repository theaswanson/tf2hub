import { Component, OnInit } from '@angular/core';
import { TrashcanService } from '../trashcan.service';

@Component({
  selector: 'app-trashcan',
  templateUrl: './trashcan.component.html',
  styleUrls: ['./trashcan.component.scss']
})
export class TrashcanComponent implements OnInit {

  bindsText: string;
  bindKey: string;

  constructor(private trashcanService: TrashcanService) { }

  ngOnInit(): void {
  }

  buildConfig() {
    if (!this.bindsText) {
      alert('Enter at least one bind before generating.');
      return;
    }

    if (!this.bindKey) {
      alert('Enter a bind key before generating.');
      return;
    }

    let configFileText = this.trashcanService.build(this.bindsText.split('\n'), this.bindKey);
    this.downloadBlob(new Blob([configFileText], { type: 'text/plain' }), 'trashcan.cfg');
  }
  

  private downloadBlob(blob: Blob, fileName: string): void {
    const a = document.createElement('a');
    a.setAttribute('style', 'display:none;');
    document.body.appendChild(a);
    a.download = fileName;
    a.href = URL.createObjectURL(blob);
    a.target = '_blank';
    a.click();
    document.body.removeChild(a);
  }

}
