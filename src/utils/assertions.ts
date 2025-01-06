import { expect } from "../base/basePageFixtures";

let slNo = 1;

export const softAssertPrint = function (
  firstVal: string | number,
  secondVal: string | number,
  param: string,
) {
  expect
    .soft(
      secondVal,
      `${slNo} ${param} ->  value from the RunTime VS downloaded file is =  ${firstVal!} <> ${secondVal}`,
    )
    .toEqual(firstVal);
  console.log(
    `${slNo} ${param} ->  value from the RunTime VS downloaded file is =  ${firstVal!} <> ${secondVal}`,
  );
  slNo++;
};

export const softAssertArray = function (
  firstVal: string[] | number[],
  secondVal: string[] | number[],
  param: string,
) {
  const firstArray = firstVal.map((item) => item.trim()).sort();
  const secondArray = secondVal.map((item) => item.trim()).sort();

  expect
    .soft(
      firstArray,
      `${slNo} : ${param} ->  value from the RunTime VS downloaded file is =  ${firstVal!} <> ${secondVal}`,
    )
    .toEqual(secondArray);
  console.log(
    `${slNo} ${param} ->  value from the RunTime VS downloaded file is =  ${firstVal!} <> ${secondVal}`,
  );
  slNo++;
};
