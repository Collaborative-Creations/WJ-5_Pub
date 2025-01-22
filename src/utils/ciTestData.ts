export function getWj5CIUserData(shardNumber: number) {
  const credentialSets = {
    examiner: [
      { userName: '01PwAut25Ex_01', passWord: 'Test@100', examinerID: '01PwAut25Ex_01' },
      { userName: '02PwAut25Ex_01', passWord: 'Test@100', examinerID: '02PwAut25Ex_01' },
      { userName: '03PwAut25Ex_01', passWord: 'Test@100', examinerID: '03PwAut25Ex_01' },
      { userName: '04PwAut25Ex_01', passWord: 'Test@100', examinerID: '04PwAut25Ex_01' },
      { userName: '05PwAut25Ex_01', passWord: 'Test@100', examinerID: '05PwAut25Ex_01' },
      { userName: '06PwAut25Ex_01', passWord: 'Test@100', examinerID: '06PwAut25Ex_01' },
      { userName: '07PwAut25Ex_01', passWord: 'Test@100', examinerID: '07PwAut25Ex_01' },
      { userName: '08PwAut25Ex_01', passWord: 'Test@100', examinerID: '08PwAut25Ex_01' },
      { userName: '09PwAut25Ex_01', passWord: 'Test@100', examinerID: '09PwAut25Ex_01' },
      { userName: '10PwAut25Ex_01', passWord: 'Test@100', examinerID: '10PwAut25Ex_01' }
    ],
    accountHolder: [
      { userName: '01PwAut25AH', passWord: 'Test@100' },
      { userName: '02PwAut25AH', passWord: 'Test@100' },
      { userName: '03PwAut25AH', passWord: 'Test@100' },
      { userName: '04PwAut25AH', passWord: 'Test@100' },
      { userName: '05PwAut25AH', passWord: 'Test@100' },
      { userName: '06PwAut25AH', passWord: 'Test@100' },
      { userName: '07PwAut25AH', passWord: 'Test@100' },
      { userName: '08PwAut25AH', passWord: 'Test@100' },
      { userName: '09PwAut25AH', passWord: 'Test@100' },
      { userName: '10PwAut25AH', passWord: 'Test@100' }
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