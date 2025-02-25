export function getWj5CIUserData(shardNumber: number) {
  const credentialSets = {
    examiner: [
      { userName: 'S01PwAut25Ex_01', passWord: 'STest@100', examinerID: 'S01PwAut25Ex_01' },
      { userName: 'S02PwAut25Ex_01', passWord: 'STest@100', examinerID: 'S02PwAut25Ex_01' },
      { userName: 'S03PwAut25Ex_01', passWord: 'STest@100', examinerID: 'S03PwAut25Ex_01' },
      { userName: 'S04PwAut25Ex_01', passWord: 'STest@100', examinerID: 'S04PwAut25Ex_01' },
      { userName: 'S05PwAut25Ex_01', passWord: 'STest@100', examinerID: 'S05PwAut25Ex_01' },
      { userName: 'S06PwAut25Ex_01', passWord: 'STest@100', examinerID: 'S06PwAut25Ex_01' },
      { userName: 'S07PwAut25Ex_01', passWord: 'STest@100', examinerID: 'S07PwAut25Ex_01' },
      { userName: 'S08PwAut25Ex_01', passWord: 'STest@100', examinerID: 'S08PwAut25Ex_01' },
      { userName: 'S09PwAut25Ex_02', passWord: 'STest@100', examinerID: 'S09PwAut25Ex_02' },
      { userName: 'S10PwAut25Ex_01', passWord: 'STest@100', examinerID: 'S10PwAut25Ex_01' },
      // { userName: 'S11PwAut25Ex_01', passWord: 'STest@100', examinerID: 'S11PwAut25Ex_01' },
      { userName: '06PwAut25Ex_01', passWord: 'Test@100', examinerID: '06PwAut25Ex_01', accountType: 'examiner' },
      { userName: '07PwAut25Ex_01', passWord: 'Test@100', examinerID: '07PwAut25Ex_01', accountType: 'examiner' },
      { userName: '08PwAut25Ex_01', passWord: 'Test@100', examinerID: '08PwAut25Ex_01', accountType: 'examiner' },
      { userName: '09PwAut25Ex_01', passWord: 'Test@100', examinerID: '09PwAut25Ex_01', accountType: 'examiner' },
      { userName: '10PwAut25Ex_01', passWord: 'Test@100', examinerID: '10PwAut25Ex_01', accountType: 'examiner' }
    ],
    accountHolder: [
      { userName: 'S01PwAut25AH', passWord: 'STest@100' }, // ca
      { userName: 'S02PwAut25AH', passWord: 'STest@100' }, // ca
      { userName: 'S03PwAut25AH', passWord: 'STest@100' },
      { userName: 'S04PwAut25AH', passWord: 'STest@100' },
      { userName: 'S05PwAut25AH', passWord: 'STest@100' },
      { userName: 'S06PwAut25AH', passWord: 'STest@100' },
      { userName: 'S07PwAut25AH', passWord: 'STest@100' },
      { userName: 'S08PwAut25AH', passWord: 'STest@100' },
      { userName: 'S09PwAut25AH', passWord: 'STest@100' },
      { userName: 'S10PwAut25AH', passWord: 'STest@100' },
      // { userName: 'S11PwAut25AH', passWord: 'STest@100' }, // stage orgs
      { userName: '06PwAut25AH', passWord: 'Test@100', accountType: 'accountHolder' },
      { userName: '07PwAut25AH', passWord: 'Test@100', accountType: 'accountHolder' },
      { userName: '08PwAut25AH', passWord: 'Test@100', accountType: 'accountHolder' },
      { userName: '09PwAut25AH', passWord: 'Test@100', accountType: 'accountHolder' },
      { userName: '10PwAut25AH', passWord: 'Test@100', accountType: 'accountHolder' }
    ]
  };  

  // Use modulo to cycle through credentials if more shards than credential sets
  const index = (shardNumber - 1) % credentialSets.examiner.length;
  
  return {
    examiner: [credentialSets.examiner[index]],
    accountHolder: [credentialSets.accountHolder[index]],
    admin: [{ userName: "riversiderealadmin", passWord: "admin123!" }]
  };
}