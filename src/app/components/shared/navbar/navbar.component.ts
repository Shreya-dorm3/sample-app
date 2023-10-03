import { Component, OnInit, ViewChild } from '@angular/core';
import { MatAccordion } from '@angular/material/expansion';
import { BreakpointObserver, BreakpointState } from '@angular/cdk/layout';

export interface MenuData {
  name: string;
  action: string;
  icon: string;
}

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.less']
})
export class NavbarComponent implements OnInit {

  @ViewChild(MatAccordion) accordion: MatAccordion = new MatAccordion;
  isExpanded: boolean = false;
  menuList: MenuData[] = [{ name: 'Home', action: '/', icon: 'home' }, { name: 'Monitor', action: '/qw', icon: 'computer' }, { name: 'Threats', action: '/qwt', icon: 'bug_report' }, { name: 'Behavior Anomalies', action: '/qwt', icon: 'moving' }, { name: 'Soar', action: '/qwt', icon: 'psychology' }, { name: 'Services', action: '/build', icon: 'build' }, { name: 'Reports', action: '/build', icon: 'summarize' }, { name: 'Administration', action: '/build', icon: 'admin_panel_settings' } ];
  userName: string = '';
  showMenu: boolean = false;

  constructor(private breakpointObserver: BreakpointObserver) {
    this.breakpointObserver.observe([
      "(max-width: 575px)"
    ]).subscribe((result: BreakpointState) => {
      if (result.matches) {
        this.showMenu = true;
      } else {
        this.showMenu = false;
        this.isExpanded = false;
      }
    });
  }

  ngOnInit(): void {
  }

}
