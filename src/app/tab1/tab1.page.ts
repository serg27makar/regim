import { Component, OnInit, Inject } from '@angular/core';
import { SQLitePorter } from '@ionic-native/sqlite-porter/ngx';


@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page implements OnInit{

  constructor(
    private sqlitePorter: SQLitePorter,
  ) {}

  ngOnInit() {

  let db = window.openDatabase('Test', '1.0', 'TestDB', 1 * 1024);
// or we can use SQLite plugin
// we will assume that we injected SQLite into this component as sqlite
  this.sqlite.create({
    name: 'data.db',
    location: 'default'
  })
    .then((db: any) => {
      let dbInstance = db._objectInstance;
      // we can pass db._objectInstance as the database option in all SQLitePorter methods
    });


  let sql = 'CREATE TABLE Artist ([Id] PRIMARY KEY, [Title]);' +
    'INSERT INTO Artist(Id,Title) VALUES ("1","Fred");';

  this.sqlitePorter.importSqlToDb(db, sql)
    .then(() => console.log('Imported'))
    .catch(e => console.error(e));
  }
}
