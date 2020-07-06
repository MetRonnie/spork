const args = process.argv.slice(2);

const body = `
:warning: **Merging this pull request will create a GitHub release**

(Actually it won't for this test)

Here is a supplied variable: ${args[0]}
`;

console.log(JSON.stringify({"body": body}))
