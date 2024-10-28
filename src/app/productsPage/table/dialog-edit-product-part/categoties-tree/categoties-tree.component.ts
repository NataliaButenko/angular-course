import { NestedTreeControl } from '@angular/cdk/tree';
import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';
import { MatTreeNestedDataSource, MatTreeModule } from '@angular/material/tree';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';

interface CategoryNode {
  name: string;
  children?: CategoryNode[];
}

@Component({
  selector: 'categoties-tree',
  standalone: true,
  imports: [MatTreeModule, MatButtonModule, MatIconModule],
  templateUrl: './categoties-tree.component.html',
  styleUrl: './categoties-tree.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CategotiesTreeComponent implements OnInit {
  treeControl = new NestedTreeControl<CategoryNode>((node) => node.children);
  dataSource = new MatTreeNestedDataSource<CategoryNode>();

  @Input() categories: string = '';

  constructor() {
    this.dataSource.data = [];
  }

  ngOnInit(): void {
    let tmpCatArray: string[] = this.categories.split(' > ');
    let newDate: CategoryNode[] = [this.initTree(tmpCatArray)];
    this.dataSource.data = newDate;
  }

  initTree(arr: string[]): CategoryNode {
    const [first, ...rest] = arr;
    const node: CategoryNode = { name: first };
    if (rest.length) {
      node.children = [this.initTree(rest)];
    }
    return node;
  }

  hasChild = (_: number, node: CategoryNode) => !!node.children && node.children.length > 0;
}
