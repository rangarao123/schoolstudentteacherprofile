import { Component, OnInit } from '@angular/core';
declare var $:any;

export interface RouteInfo {
    path: string;
    title: string;
    icon: string;
    class: string;
}

export const ROUTES: RouteInfo[] = [
    { path: 'parentdash', title: 'Dashboard',  icon: 'ti-panel', class: '' },
    { path: 'user', title: 'User Profile',  icon:'ti-user', class: '' },
    { path: 'attendanceforadmin', title: 'Attendance',  icon:'ti-view-list-alt', class: '' },
    { path: 'assignment', title: 'Assignments',  icon:'ti-text', class: '' },
    { path: 'feedetails', title: 'Accounts',  icon:'ti-pencil-alt2', class: '' },

];
@Component({
  templateUrl: './p-shared.component.html',
  moduleId: module.id,
  selector: 'Psidebar-cmp',
})
export class PSharedComponent implements OnInit {

  public menuItems: any[];
    ngOnInit() {
        this.menuItems = ROUTES.filter(menuItem => menuItem);
    }
    isNotMobileMenu(){
        if($(window).width() > 991){
            return false;
        }
        return true;
    }
  }
