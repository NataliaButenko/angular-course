import { Component } from '@angular/core';

@Component({
  selector: 'app-less-3',
  standalone: true,
  imports: [],
  templateUrl: './less-3.component.html',
  styleUrl: './less-3.component.scss',
})
export class Less3Component {
  public title: string = 'Test';

  public onChengeTitle(): void {
    this.title = 'New title';
  }
}
