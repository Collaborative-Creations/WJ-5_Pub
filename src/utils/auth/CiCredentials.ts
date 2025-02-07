import { User } from "../user/User";
import { Users } from "../user/Users";

export function getWj5CIUserData() : Users {
    const credentialSets = {
      examiner: [
      { userName: '01PwAut25Ex_01', passWord: 'Test@100', examinerID: '01PwAut25Ex_01', accountType: 'examiner' },
      { userName: '02PwAut25Ex_01', passWord: 'Test@100', examinerID: '02PwAut25Ex_01', accountType: 'examiner' },
      { userName: '03PwAut25Ex_01', passWord: 'Test@100', examinerID: '03PwAut25Ex_01', accountType: 'examiner' },
      { userName: '04PwAut25Ex_01', passWord: 'Test@100', examinerID: '04PwAut25Ex_01', accountType: 'examiner' },
      { userName: '05PwAut25Ex_01', passWord: 'Test@100', examinerID: '05PwAut25Ex_01', accountType: 'examiner' },
      { userName: '06PwAut25Ex_01', passWord: 'Test@100', examinerID: '06PwAut25Ex_01', accountType: 'examiner' },
      { userName: '07PwAut25Ex_01', passWord: 'Test@100', examinerID: '07PwAut25Ex_01', accountType: 'examiner' },
      { userName: '08PwAut25Ex_01', passWord: 'Test@100', examinerID: '08PwAut25Ex_01', accountType: 'examiner' },
      { userName: '09PwAut25Ex_01', passWord: 'Test@100', examinerID: '09PwAut25Ex_01', accountType: 'examiner' },
      { userName: '10PwAut25Ex_01', passWord: 'Test@100', examinerID: '10PwAut25Ex_01', accountType: 'examiner' },
      
      ] as User[],
      accountHolder: [
      { userName: '01PwAut25AH', passWord: 'Test@100', accountType: 'accountHolder' },
      { userName: '02PwAut25AH', passWord: 'Test@100', accountType: 'accountHolder' },
      { userName: '03PwAut25AH', passWord: 'Test@100', accountType: 'accountHolder' },
      { userName: '04PwAut25AH', passWord: 'Test@100', accountType: 'accountHolder' },
      { userName: '05PwAut25AH', passWord: 'Test@100', accountType: 'accountHolder' },
      { userName: '06PwAut25AH', passWord: 'Test@100', accountType: 'accountHolder' },
      { userName: '07PwAut25AH', passWord: 'Test@100', accountType: 'accountHolder' },
      { userName: '08PwAut25AH', passWord: 'Test@100', accountType: 'accountHolder' },
      { userName: '09PwAut25AH', passWord: 'Test@100', accountType: 'accountHolder' },
      { userName: '10PwAut25AH', passWord: 'Test@100', accountType: 'accountHolder' }
      ] as User[]
    };

    return {
      examiners: credentialSets.examiner,
      accountHolders: credentialSets.accountHolder,
      admins: []
    };
}