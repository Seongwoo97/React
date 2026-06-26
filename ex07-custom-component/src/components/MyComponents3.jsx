import { Component } from "react";

class MyComponent3 extends Component{
    render(){
        return(
            <div style={{border:'1px solid black', margin: '4px', padding: '.5rem', borderRadius: '15px',}}>
                <h4>This is MyComponent3</h4>
                {/* 속성으로 전달받은 값들은 Component 클래스 안에 props 라는 이름의 아주 특별한 멤버변수에 전달됨 */}
                <p>Hello {this.props.name}</p>
                {/* 혹시 이름을 전달받지 않으면 안내문구 보여주기 */}
                {/* JSX 언어의 태그 안에서 JS를 사용하려면 {}를 사용해야 함 */}
                {/* 단, 그 {}안에는 오직 '값', '연산자', '변수', '함수 호출'만 가능함  */}
                {/* {if(this.props.name == undefined){}} */}
                {/* 조건에 따라 다른 UI를 구성하려면? 삼항연산자! ([조건] ? [참일 때 값] : [거짓일 때 값]) */}
                { this.props.name==undefined?<em>이름이 없어요</em>:<em>이름이 있어요</em> }

                
                <p style={{color:this.props.color}}>age : {this.props.age}</p>

            </div>

        )
        
    }

}

export default MyComponent3