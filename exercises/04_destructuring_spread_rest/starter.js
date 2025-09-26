// Students edit this file ONLY
export function runStarter() {
  // Base data (don't mutate directly)
  const user = {
    name: "Bob",
    age: 25,
    address: { city: "Almaty", zip: "050000" },
    role: "user",
  };
  const nums = [1, 2, 3];

  // 1) Destructuring (object + array)
  // const { name, age, address: { city } } = user;
  // const [first, , third] = nums;
  const name = undefined; // TODO
  const age = undefined; // TODO
  const city = undefined; // TODO
  const first = undefined; // TODO
  const third = undefined; // TODO

  // 2) Immutable updates
  // const updatedUser = { ...user, role: "admin", address: { ...user.address, city: "Astana" } };
  // const moreNums = [...nums, 4];
  // const withoutFirst = nums.slice(1);
  const updatedUser = undefined; // TODO
  const moreNums = undefined; // TODO
  const withoutFirst = undefined; // TODO

  // 3) Rest parameters
  // function sum(...args) { return args.reduce((a,b)=>a+b,0); }
  function sum() {
    // TODO
    return undefined;
  }
  const sumResult = sum(1, 2, 3, 4); // expect 10

  // Optional logs to observe values in console
  console.log(name, age, city, first, third);
  console.log(updatedUser, nums, moreNums, withoutFirst);
  console.log(sumResult);

  return {
    // originals
    user,
    nums,

    // destructured
    name,
    age,
    city,
    first,
    third,

    // immutability results
    updatedUser,
    moreNums,
    withoutFirst,

    // rest
    sumResult,
  };
}
