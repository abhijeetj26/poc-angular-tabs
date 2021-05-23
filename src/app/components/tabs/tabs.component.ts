
import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.component.html',
  styleUrls: ['./tabs.component.scss']
})
export class TabsComponent implements OnInit {

  getTabData: any = localStorage.getItem("tabData");
  tabTitle: string = '';
  id: any = '';
  tabs = [
    { label: 'First Tab', path: '/tabs/' },
    { label: 'Second Tab', path: '/tabs/' },
    { label: 'Third Tab', path: '/tabs/' }
  ];

  constructor(private activatedRoute: ActivatedRoute) { }

  addTab() {

    let data: any = localStorage.getItem("tabData");
    this.getTabData = JSON.parse(data);

    if (this.tabTitle != '') {
      this.getTabData.push({ label: this.tabTitle, path: '/tabs/' });
    } else {
      this.getTabData.push({ label: 'New', path: '/tabs/' });
    }

    this.tabTitle = '';
    localStorage.setItem("tabData", JSON.stringify(this.getTabData));
  }

  removeTab(index: number) {
    let data: any = localStorage.getItem("tabData");
    this.getTabData = JSON.parse(data);

    this.getTabData.splice(index, 1);
    localStorage.setItem("tabData", JSON.stringify(this.getTabData));
  }


  ngOnInit(): void {
    if (this.getTabData == null) {
      localStorage.setItem("tabData", JSON.stringify(this.tabs));
    } else {
      let data: any = localStorage.getItem("tabData");
      this.getTabData = JSON.parse(data);
    }
    this.id = this.activatedRoute.snapshot.paramMap.get('id');
  }
}
