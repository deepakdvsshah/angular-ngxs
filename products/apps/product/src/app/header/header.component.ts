import { Component, OnInit, Input } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'products-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  @Input() activeUrl: string;
  menuItems: Array<string>;
  uuid: string;
  constructor(private router: Router, private route: ActivatedRoute) {
    this.activeUrl = 'home';
    this.menuItems = ['home', 'add Product']
  }

  ngOnInit(): void {
  }
  navigateUrl(url) {
    this.activeUrl = url;
    url = url === 'home' ? url :  'addProduct/add'
    this.router.navigate([url]);
  }
}
