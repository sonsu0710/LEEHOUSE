## 정리

### useEffect hook 사용법
1. 
```typescript
useEffect(()=>{
    console.log('blablabla');
}, [])
```
useEffect 훅 내부의 함수를 한번만 실행한다. 

여기서 []를 deps라고 하는데, deps 자리를 비워두면 useState와 동일하게 동작한다. 
즉, dom이 변화할 때마다 무조건 useEffect를 실행시킨다. 

deps의 배열에 특정 state를 넣어두면, 해당 state가 변화할 때마다 함수를 실행시킨다. 