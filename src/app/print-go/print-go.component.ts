import { Component, OnInit } from '@angular/core';
import { QzTrayService } from '../qz-tray.service';

@Component({
  selector: 'app-print-go',
  templateUrl: './print-go.component.html',
  styleUrls: ['./print-go.component.css']
})
export class PrintGoComponent implements OnInit {

  printers: string[] = [];
  data = [{
    type: 'image',
    data: 'assets/photo-1532408162575-488b78a766cf.jpeg'
  }];

  constructor(private qzService: QzTrayService) { }

  ngOnInit() { }

  onGetPrintes() {
    this.qzService.getPrinters()
      .subscribe((printers: string[]) => {
        this.printers = [];
        printers.forEach(printer => this.printers.push(printer));
      });
  }

  onPrint(printer: string) {
    this.qzService.printData(printer, this.data)
      .subscribe(data => console.log(data));
  }
}
