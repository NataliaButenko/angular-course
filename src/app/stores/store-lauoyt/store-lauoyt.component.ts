import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MatTabsModule } from '@angular/material/tabs';
import { RouterLink, RouterOutlet } from '@angular/router';

interface ILink {
  path: string;
  label: string;
}

@Component({
  selector: 'store-lauoyt',
  standalone: true,
  imports: [RouterOutlet, MatTabsModule, RouterLink, CommonModule],
  templateUrl: './store-lauoyt.component.html',
  styleUrl: './store-lauoyt.component.scss',
})
export class StoreLauoytComponent {
  public links: ILink[] = [
    { path: 'store-a', label: 'Store A' },
    { path: 'store-b', label: 'Store B' },
    { path: 'store-c', label: 'Store C' },
  ];

  public activePath = this.links[0].path;

  public onActivate(path: string) {
    this.activePath = path;
  }
}
