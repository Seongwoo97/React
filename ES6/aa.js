function show(){
    // alert('show');
    // 모듈 js 쪽에서는 html 의 dom 을 직접 출력하는 기능 불가
    // document.write('showww...');

    // DOM 객체를 생성해서 출력해야 함'
    const div = document.createElement('div');
    div.textContent= 'show!!!';
    document.body.appendChild(div);
}

// 다른 JS에서 show 함수를 import 하여 사용하게 하려면.. export 해야 함.
export default show; // 이 문서 안에서 적어도 1개는 export default 여야 함. (export 하려면)

// 또 다른 함수 정의
function output(){
    const div = document.createElement('div');
    div.textContent= 'output~!~!~!';
    document.body.appendChild(div);
}

// 다른 js에서 import 하려면.. 여기서 export 해야만 함.
// export output; // default 는 .js 모듈 안에 단 1개만 가능.. default 가 아닌 것은 만들면서 export

// 변수도 export 가능
export let name = 'sam';
export const age = 20;

