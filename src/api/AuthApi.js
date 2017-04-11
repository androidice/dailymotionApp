import delay from './delay';

export function Authorize(username, password) {
  return new Promise((resolve, reject)=>{
    setTimeout(()=>{
      debugger;
      let meta ={
        username,
        password
      };

      if(JSON.stringify(meta) === JSON.stringify({
          username:'a@a.com',
          password:'qwerty'
        })){
        resolve(meta);
      }else{
        reject('login-invalid');
      }
    }, delay)
  });
}
