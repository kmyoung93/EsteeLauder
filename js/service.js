// 서비스 정보 객체
const serviceInfo = {
    '딥 리페어 나이트 페이셜': {
        time: 15,
        image: './resource/service/service1.jpg'
    },
    '인스턴트 메이크업 트랜스포메이션': {
        time: 20,
        image: './resource/service/service2.jpg'
    },
    '럭셔리 넥 & 숄더 마사지': {
        time: 20,
        image: './resource/service/service3.jpg'
    },
    '아이 스컬프팅 리추얼': {
        time: 20,
        image: './resource/service/service4.jpg'
    },
    '럭셔리 핸드 마사지': {
        time: 20,
        image: './resource/service/service5.jpg'
    }
};

// 선택된 정보 저장
let selectedInfo = {
    branch: '',
    service: '',
    date: '',
    time: '',
    dayOfWeek: ''
};

// 현재 년월 변수
let currentYear = new Date().getFullYear();
let currentMonth = new Date().getMonth() + 1;

// 캘린더 생성 함수
function generateCalendar(year, month) {
    const calendarDate = document.querySelector('.calendar-date');
    const yearMonth = document.querySelector('.year-month');
    
    // 년월 표시 업데이트
    yearMonth.textContent = `${year}.${String(month).padStart(2, '0')}`;
    
    // 초기화
    calendarDate.innerHTML = '';
    
    // 요일 헤더
    const weekDays = ['일', '월', '화', '수', '목', '금', '토'];
    weekDays.forEach(day => {
        const dayEl = document.createElement('div');
        dayEl.className = 'day-header';
        dayEl.textContent = day;
        calendarDate.appendChild(dayEl);
    });
    
    // 해당 월의 첫날과 마지막날
    const firstDay = new Date(year, month - 1, 1).getDay();
    const lastDate = new Date(year, month, 0).getDate();
    
    // 오늘 날짜
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    
    // 빈 칸 채우기 (이전 달)
    const prevMonthLastDate = new Date(year, month - 1, 0).getDate();
    for(let i = firstDay - 1; i >= 0; i--) {
        const emptyEl = document.createElement('div');
        emptyEl.className = 'date-cell prev-month';
        emptyEl.textContent = prevMonthLastDate - i;
        calendarDate.appendChild(emptyEl);
    }
    
    // 현재 달 날짜 채우기
    for(let date = 1; date <= lastDate; date++) {
        const dateEl = document.createElement('div');
        dateEl.className = 'date-cell';
        dateEl.textContent = date;
        
        // 과거 날짜 또는 예약 불가 날짜 처리
        const currentDate = new Date(year, month - 1, date);
        currentDate.setHours(0, 0, 0, 0);
        
        if (currentDate < today) {
            dateEl.classList.add('disabled');
        } else {
            dateEl.classList.add('available');
            
            // 클릭 이벤트
            dateEl.addEventListener('click', function() {
                // 이전 선택 제거
                document.querySelectorAll('.date-cell').forEach(el => {
                    el.classList.remove('selected');
                });
                // 현재 선택
                this.classList.add('selected');
                
                // 요일 계산
                const dayOfWeek = ['일', '월', '화', '수', '목', '금', '토'][currentDate.getDay()];
                
                // 날짜 선택 콜백
                onDateSelect(year, month, date, dayOfWeek);
            });
        }
        
        calendarDate.appendChild(dateEl);
    }
    
    // 다음 달 날짜로 빈 칸 채우기
    const totalCells = calendarDate.children.length - 7; // 헤더 제외
    const remainingCells = 42 - totalCells - 7; // 6주 * 7일 = 42칸
    
    for(let i = 1; i <= remainingCells; i++) {
        const nextEl = document.createElement('div');
        nextEl.className = 'date-cell next-month';
        nextEl.textContent = String(i).padStart(2, '0'); // 두 자리로 표시
        calendarDate.appendChild(nextEl);
    }
}

// 날짜 선택 콜백 함수
function onDateSelect(year, month, date, dayOfWeek) {
    selectedInfo.date = `${year}.${String(month).padStart(2, '0')}.${String(date).padStart(2, '0')}`;
    selectedInfo.dayOfWeek = dayOfWeek;
    console.log('선택된 날짜:', selectedInfo.date, '요일:', dayOfWeek);
}

// 총 이용시간 업데이트
function updateTotalTime() {
    const useElement = document.querySelector('.use');
    if (selectedInfo.service && serviceInfo[selectedInfo.service]) {
        useElement.textContent = String(serviceInfo[selectedInfo.service].time).padStart(2, '0');
    } else {
        useElement.textContent = '00';
    }
}

function showModal() {
  const modal = document.querySelector('.modal-overlay');
  const modalContent = document.querySelector('.modal-content');
  const modalServiceName = document.querySelector('.modal-service-name');
  const modalBranch = document.querySelector('.modal-branch');
  const modalDate = document.querySelector('.modal-date');
  const modalTime = document.querySelector('.modal-time');
  const modalCloseBtn = document.querySelector(".modal-close");

    modalCloseBtn.style.background = 'none';
  modalCloseBtn.style.backgroundImage = 'none';
  // 선택된 서비스가 존재하고 이미지 경로가 있으면 적용
  if (selectedInfo.service && serviceInfo[selectedInfo.service]) {
    const bgUrl = serviceInfo[selectedInfo.service].image;

    // 이미지 경로 확인용 콘솔 출력
    console.log("배경 이미지 경로:", bgUrl);

    // 이미지 미리 로드 후 적용 (경로 깨짐 방지)
    const img = new Image();
    img.src = bgUrl;
    img.onload = () => {
      modalContent.style.backgroundImage = `url('${bgUrl}')`;
      modalContent.style.backgroundSize = 'cover';
      modalContent.style.backgroundPosition = 'center';
      modalContent.style.backgroundRepeat = 'no-repeat';
    };
  } else {
    console.warn("서비스 이미지 정보를 찾을 수 없습니다:", selectedInfo.service);
  }

  // 텍스트 내용 갱신
  modalServiceName.textContent = selectedInfo.service || '';
  modalBranch.textContent = selectedInfo.branch || '';
  modalDate.textContent = selectedInfo.date || '';
  modalTime.textContent = selectedInfo.time || '';

  // 모달 표시
  modal.classList.add('active');
  document.body.style.overflow = 'hidden';

}

// DOM 로드 후 실행
document.addEventListener('DOMContentLoaded', function() {
    // 초기 캘린더 생성
    generateCalendar(currentYear, currentMonth);
    
    // 이전 달 버튼
    document.querySelector('.month-pre').addEventListener('click', function() {
        currentMonth--;
        if (currentMonth < 1) {
            currentMonth = 12;
            currentYear--;
        }
        generateCalendar(currentYear, currentMonth);
    });
    
    // 다음 달 버튼
    document.querySelector('.month-next').addEventListener('click', function() {
        currentMonth++;
        if (currentMonth > 12) {
            currentMonth = 1;
            currentYear++;
        }
        generateCalendar(currentYear, currentMonth);
    });
    
    // 지점 선택
    document.getElementById('select-branch').addEventListener('change', function() {
        selectedInfo.branch = this.value;
        updateTotalTime();
    });
    
    // 서비스 선택
    document.getElementById('select-serice').addEventListener('change', function() {
        selectedInfo.service = this.value;
        updateTotalTime();
    });
    
    // 시간 선택
    document.querySelectorAll('.reservation-time p').forEach(timeEl => {
        timeEl.addEventListener('click', function() {
            // 이전 선택 제거
            document.querySelectorAll('.reservation-time p').forEach(el => {
                el.classList.remove('time-selected');
            });
            // 현재 선택
            this.classList.add('time-selected');
            selectedInfo.time = this.textContent.trim();
        });
    });
    
    // 예약하기 버튼 클릭
    document.querySelector('.btn-1').addEventListener('click', function() {
        // 유효성 검사
        if (!selectedInfo.branch) {
            alert('지점을 선택해주세요.');
            return;
        }
        if (!selectedInfo.service) {
            alert('서비스를 선택해주세요.');
            return;
        }
        if (!selectedInfo.date) {
            alert('날짜를 선택해주세요.');
            return;
        }
        if (!selectedInfo.time) {
            alert('시간을 선택해주세요.');
            return;
        }
        
        // 폼 데이터 확인
        const name = document.getElementById('reservation-name').value;
        if (!name) {
            alert('이름을 입력해주세요.');
            return;
        }
        
        // 모달 표시
        showModal();
    });
    
    // 모달 닫기 버튼
    document.querySelector('.modal-close').addEventListener('click', function() {
        const modal = document.querySelector('.modal-overlay');
        modal.classList.remove('active');
        document.body.style.overflow = ''; // 스크롤 복원
    });
    
    // 모달 배경 클릭 시 닫기
    document.querySelector('.modal-overlay').addEventListener('click', function(e) {
        if (e.target === this) {
            this.classList.remove('active');
            document.body.style.overflow = '';
        }
    });
});