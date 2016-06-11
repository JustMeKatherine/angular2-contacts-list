import {Component, Input, OnChanges, SimpleChange, OnInit} from '@angular/core';
import {GravatarService} from "../gravatar.service";

@Component({
  moduleId: module.id,
  selector: 'typeofweb-gravatar',
  templateUrl: 'gravatar.component.html',
  styleUrls: ['gravatar.component.css'],
  providers: [GravatarService]
})
export class GravatarComponent implements OnChanges, OnInit {
  @Input() size:number;
  @Input() email:string;
  gravatarUrl:string;

  constructor(private gravatarService: GravatarService) {}

  private updateGravatarUrl() {
    this.gravatarUrl = this.gravatarService.getGravatarUrl(this.email, this.size);
  }

  ngOnInit() {
    this.updateGravatarUrl();
  }

  ngOnChanges(changes:{[key: string]: SimpleChange}) {
    const emailChange = changes['email'];
    if (emailChange) {
      this.updateGravatarUrl();
    }
  }
}
