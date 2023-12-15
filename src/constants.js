const MENU_CATEGORIES = [일식, 한식, 중식, 아시안, 양식];

const MENU = {

    일식: ['규동', '우동', '미소시루', '스시', '가츠동', '오니기리', '하이라이스', '라멘', '오코노미야끼'],

    한식: ['김밥', '김치찌개', '쌈밥', '된장찌개', '비빔밥', '칼국수', '불고기', '떡볶이', '제육볶음'],

    중식: ['깐풍기', '볶음면', '동파육', '짜장면', '짬뽕', '마파두부', '탕수육', '토마토 달걀볶음', '고추잡채'],

    아시안: ['팟타이', '카오 팟', '나시고렝', '파인애플 볶음밥', '쌀국수', '똠얌꿍', '반미', '월남쌈', '분짜'],

    양식: ['라자냐', '그라탱', '뇨끼', '끼슈', '프렌치 토스트', '바게트', '스파게티', '피자', '파니니'],
}

const OUTPUT_MESSAGE = {
    
    PROGRAM_START: `점심 메뉴 추천을 시작합니다.`,
    
    PRINT_RESULT: `메뉴 추천 결과입니다.`,

    PROGRAM_END: `추천을 완료했습니다.`
}

const ERROR_MESSAGE = {

    COACH_NAME_COUNT_NOT_IN_RANGE: `[ERROR] 코치는 2명 이상, 5명 이하로 입력해 주세요.`,

    COACH_NAME_LENGTH_NOT_IN_RANGE: `[ERROR] 코치 이름은 2글자에서 4글자 사이로 입력해 주세요.`,

    MENU_COACH_CANT_EAT_COUNT_NOT_IN_RANGE: `[ERROR] 코치가 먹지 못하는 음식의 수는 2개 이하로 입력해 주세요.`
}

export {
    MENU_CATEGORIES,
    MENU,
    OUTPUT_MESSAGE,
    ERROR_MESSAGE
}