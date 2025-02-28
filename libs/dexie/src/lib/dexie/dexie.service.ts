import { Injectable } from '@angular/core';
import Dexie, { Table } from 'dexie';
import { from, Observable, switchMap } from 'rxjs';

const DB_NAME = 'sample-dexie';

interface User {
  id: string;
  name: string;
}

@Injectable({
  providedIn: 'root'
})
export class DexieService extends Dexie {
  users!: Table<User, string>;

  constructor() {
    super(DB_NAME);

    this.version(0).stores({
      users: 'id'
    });
  }

  clearAll(): Observable<void> {
    return from([this.users]).pipe(switchMap((table) => from(table.clear())));
  }
}
