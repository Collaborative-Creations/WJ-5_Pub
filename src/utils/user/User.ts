import { UserAccountType } from "./UserAccountType";

export class User {
  public userName: string;
  public passWord: string;
  public accountType: UserAccountType;
  public examinerID: string;
  public authenticationFilePath: string;
}