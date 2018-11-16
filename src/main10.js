// @flow
import fetch from 'node-fetch';
type Action =
  | {
      type: 'WAIT';
      ms: number;
    }
  | {
      type: 'FETCH';
      url: string;
    };
type RepoData = {
  name: string;
};
function* getUserRepos(userID: string) {
  yield {type: 'WAIT', ms: 200};
  let repos = yield {
    type: 'FETCH',
    url: `https://api.github.com/users/${userID}/repos?client_id=db2e2673579a1046cc4f&client_secret=ab57b7ea9538f5950dfb067e3670bfb934b6e88c`,
  };
  yield {type: 'WAIT', ms: 300};
  if (repos) {
    return repos.map((repo) => repo.name);
  }
}

function run(genInstance, input = null) {
  return new Promise((resolve) => {
    let genData = genInstance.next(input);
    if (!genData.done) {
      let action: Action = genData.value;
      switch (action.type) {
        case 'WAIT':
          setTimeout(() => {
            resolve(run(genInstance));
          }, action.ms);
          break;
        case 'FETCH':
          console.log('start fetching');
          fetch(action.url)
            .then((response) => response.json())
            .then((data: Array<RepoData>) => {
              console.log('finish fetching');
              resolve(run(genInstance, data));
            });
          break;
      }
    } else {
      resolve(genData.value);
    }
  });
}

let promise = run(getUserRepos('sstur'));
let promise2 = run(getUserRepos('ikusa'));
promise.then((result) => {
  console.log(result);
});
console.log('testing123');
promise2.then((result) => {
  console.log(result);
});
