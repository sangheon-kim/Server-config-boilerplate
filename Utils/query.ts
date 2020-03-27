class Query {
  public column: any;
  public table: any;
  public condition: any;
  constructor(column?: any, table?: any, condition?: any) {
    this.column = column;
    this.table = table;
    this.condition = !!condition ? condition : {};
  }

  Select() {
    let sql = "SELECT ";
    if (this.column) {
      this.column.map((item: string, index: number) => {
        if (index !== this.column.length - 1) {
          sql = sql + `${item}, `;
        } else {
          sql = sql + `${item} `;
        }
      });

      sql = sql + `FROM ${this.table} `;

      if (Object.entries(this.condition).length > 0) {
        Object.entries(this.condition).map((item, index) => {
          if (index === 0) {
            item.map((item, index) => {
              if (index % 2 === 0) {
                sql = sql + `WHERE ${item}=`;
              } else {
                sql = sql + `"${item}"`;
              }
            });
          } else {
            item.map((item, index) => {
              if (index % 2 === 0) {
                sql = sql + ` AND ${item}=`;
              } else {
                sql = sql + `"${item}"`;
              }
            });
          }
        });
      }
      return sql;
    } else {
      sql = sql + `* FROM ${this.table} `;

      if (Object.entries(this.condition).length > 0) {
        Object.entries(this.condition).map((item, index) => {
          item.map((item, index) => {
            if (index % 2 === 0) {
              sql = sql + `WHERE ${item}=`;
            } else {
              sql = sql + `"${item}"`;
            }
          });
        });
      }

      return sql;
    }
  }
}

export default Query;
