import delay from './delay';
import _ from 'underscore';

export function Authorize(username, password) {
  return new Promise((resolve, reject)=>{
    setTimeout(()=>{
      let meta ={
        username,
        password
      };

      if(JSON.stringify(meta) === JSON.stringify({
          username:'a@a.com',
          password:'qwerty'
        })){

        delete meta['password'];
        resolve(_.extend(meta,{profile:{
          name: 'Kevin Alviola'
        }}));
      }else{
        reject('login-invalid');
      }
    }, delay)
  });
}
