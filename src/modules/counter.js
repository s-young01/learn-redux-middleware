// 1. 액션 타입 선언하기
const INCREASE = 'INCREASE';
const DECREASE = 'DECREASE';

// 2. 액션 생성 함수 : 액션을 반환하기 위해
export const increase = () => ({type: INCREASE});
export const decrease = () => ({type: DECREASE});

// 초기 상태 값 설정
const initialState = 0;

// 3. 리듀서 함수
export default function counter(state=initialState, action) {
    switch(action.type) {
        case INCREASE:
            return state + 1;
        case DECREASE:
            return state - 1;
        default:
            return state;
    }
}