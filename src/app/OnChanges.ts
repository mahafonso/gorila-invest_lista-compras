import { SimpleChanges } from '@angular/core';

interface OnChanges {
  ngOnChanges(changes: SimpleChanges): void;
}
