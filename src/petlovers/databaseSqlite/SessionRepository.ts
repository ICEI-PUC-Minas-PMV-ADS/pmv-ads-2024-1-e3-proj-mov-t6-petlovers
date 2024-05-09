import { executeTransaction } from "./AppSqlite";


export type Session = { 
  accessToken: string;
}

export default class SessionRepository {
  constructor() {
    this.up();
  }

  public async up() {
    await executeTransaction(
      "CREATE TABLE IF NOT EXISTS sessions (accessToken TEXT);"
    );    
  }

  public async down() {
    await executeTransaction("DROP TABLE sessions;");
  }

  public async createSession(session: Session) {
    const result = await executeTransaction(
      "INSERT INTO session (accessToken) values (?);",    
      [session.accessToken]
    );
    
    return result;
  }  

  public async deleteSession(): Promise<void> {
    await executeTransaction(
      "DELETE FROM sessions",
    );
  }


}